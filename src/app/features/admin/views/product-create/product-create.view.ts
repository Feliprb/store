import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MessageService } from '../../commons/services/message.service';
import { ProductService } from '../../commons/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.view.html',
  styleUrls: ['./product-create.view.scss'],
  providers: [MessageService,MatSnackBar]

})
export class ProductCreateView implements OnInit {

  public preview!: string;
  public files: any = []
  public loading!: boolean; //para mejorar la experiencia del usuario
  
  public nameImg!:string;
  public urlImg!:string;

  url: string = 'product';
  id!: string;
 

  form = this.fb.group({
    sku: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    /* images: [this.urlImg, [Validators.required]], */
    images: ['', ],
    expiration: ['', [Validators.required]],
    quantity: ['', [Validators.required]],
    category: ['', [Validators.required]],
    status: ['',[Validators.required]],
  });

  constructor(public productService: ProductService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => { //obtiene los parametros de la ruta de alli extraemos el id
    console.log('idParam',this.id);
      this.id = params['id'];
      console.log('idParam2',this.id);

      if (this.id) {
        this.getData();
      }
    });
    
  }

  isFieldInvalid(field: string) {
    return (
      (this.form.get(field)?.invalid && (this.form.get(field)?.dirty || this.form.get(field)?.touched))
    );
  }

  onSubmit(): void {
    if (this.id) {
      this.updateData();
    } else {
      this.createData();
    }
  }

  getData(): void {
    this.productService.getData(`${this.url}/${this.id}`).subscribe(response => {

      this.form.patchValue({
        sku: response.sku,
        name: response.name,
        description: response.description,
        price: response.price,
        images: response.images[0],
        expiration: response.expiration,
        quantity: response.quantity,
        category: response.category,
        status: response.status,
      });

    });
  }

  createData(): void {
    //this.productService.postData(`${this.url}/add`, this.form.value).subscribe(response => {
    this.productService.postData(`${this.url}`, this.form.value).subscribe(response => {

      if (response.rst) {
        this.uploadFile();
        this.messageService.add(response.msg, 'info');
        this.form.reset();
        this.router.navigateByUrl('admin/products');
      } else {
        this.messageService.add(response.msg, 'danger');
      } 

    },
    error => {
      this.messageService.add(`Error: ${error.message}`, 'danger');
    }
    );
  }

  updateData(): void {
    //this.productService.putData(`${this.url}/edit/${this.id}`, this.form.value).subscribe(response => {

    this.productService.putData(`${this.url}/${this.id}`, this.form.value).subscribe(response => {

      if (response.rst) {
        this.updateFile();
        this.messageService.add(response.msg, 'info');
        this.form.reset();
        this.router.navigateByUrl('admin/products');
      } else {
        this.messageService.add(response.msg, 'danger');
      }

    });
  }









  captureFile(event:any): any {
    console.log('nameImg',this.nameImg);

    const captureFile = event.target.files[0]
    this.nameImg = captureFile.name;
    console.log('capt',captureFile);
    console.log('nameImg2',this.nameImg);
    this.extractBase64(captureFile).then((image: any) => {
      this.preview = image.base;
      console.log('imgData',image);

    })
    this.files.push(captureFile)
    // 
    // console.log(event.target.files);

  }

  extractBase64 = async ($event: any) => new Promise((resolve, reject):any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

  clearImage(): any {
    this.preview = '';
    this.files = [];  }

  uploadFile():any{
    try {
      this.loading = true;
      const dataForm = new FormData();
      this.files.forEach((file: string | Blob) => {
        //dataForm.append('files', file)// files es un key que el api nos pida, depende como este definida en el backend
        dataForm.append('image', file)
      })
      // formularioDeDatos.append('_id', 'MY_ID_123')// para agregar mas datos a la img
      this.productService.postData(`product/upload`, dataForm)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);
          //this.urlImg = res.url;
          /* this.form.patchValue({
            images: this.urlImg
          }); */
        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);

    }
  }

  updateFile():any{
    try {
      this.loading = true;
      const dataForm = new FormData();
      this.files.forEach((file: string | Blob) => {
        //dataForm.append('files', file)// files es un key que el api nos pida, depende como este definida en el backend
        dataForm.append('image', file)
      })
      // formularioDeDatos.append('_id', 'MY_ID_123')// para agregar mas datos a la img
      this.productService.putData(`product/upload`, dataForm)
        .subscribe(res => {
          this.loading = false;
          console.log('Respuesta del servidor', res);

        }, () => {
          this.loading = false;
          alert('Error');
        })
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);

    }
  }


}

import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.scss']
})
export class DetailImgComponent implements OnInit, OnChanges {

  @ViewChild('slider') sliderImg!: ElementRef;
  @Input() images!: string[]; //se hace el llamado con el EndPoint
  srcMain!: string;


  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['images'].currentValue){
      this.srcMain = this.getImages(this.images[0]);
    }else{
      this.srcMain = '';
    }
  }

  ngOnInit(): void {
  }

  //Este metodo funciona cuando se conecte directamente a la BD
  getImages(url : string): string{
    return `${environment.api}/${url}`;
  }

  toogleImg(url: string):void{//void devuelve vacío porque no hace nada, simplemete setear el src del html
    this.srcMain = this.getImages(url) ;
  }

  up(): void{
    this.sliderImg.nativeElement.scrollTop -=80; //scroll hacia bajo

  }

  down(): void{
    this.sliderImg.nativeElement.scrollTop +=80;//scroll hacia ariiba

  }

}

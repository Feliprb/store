import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInValidator } from 'src/app/shared/validators/sign-invalidator';
import { ISignInRequest } from '../../../interfaces/sign-in-request.interface';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit {

  group: FormGroup;
  @Output() formData: EventEmitter<ISignInRequest> = new EventEmitter<ISignInRequest>();

  get emailFormControl(): FormControl{ //propiedad dinámica
    console.log('email')
    return this.group.get('email') as FormControl;
  }

  get passwordFormControl(): FormControl{//propiedad dinámica
    return this.group.get('password') as FormControl;
  }

  constructor(private formBuilder: FormBuilder ) {
    let validatorCustom = new SignInValidator();
    
    //creacion de formulario de SignIn
    this.group = this.formBuilder.group({
      //controllers
      email:['',[Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',Validators.required, validatorCustom.formatPassword]
    })
  }

  ngOnInit(): void {
  }

  send(): void{
    if(this.group.valid){
      this.formData.emit(this.group.value);
    }
  }

}

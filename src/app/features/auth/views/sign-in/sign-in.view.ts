import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { SignInService } from '../../commons/services/sign-in.service';
import { ISignInRequest } from '../../interfaces/sign-in-request.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.scss']
})
export class SignInView implements OnInit {

  constructor(
    private signInService : SignInService, 
    private storageService: StorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signIn(data: ISignInRequest): void{
    this.signInService.signIn(data).subscribe(response => {
      if(response){
        this.storageService.setToken(response.token);
        this.router.navigateByUrl('admin/product-list');
      }
    });
  }

}

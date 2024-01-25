import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ERol } from 'src/app/shared/constants/rol.enum';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  badge: number = 0;
  //adminn='';
  //admin2 ='ADMIN';
  Admin= false;

  constructor(private router:Router, private cartService: CartService,
    private sessionService: SessionService) { }

  ngOnInit(): void {
    this.cartService.itemsInCart.subscribe(value =>{ //notificacion de incremento carro de compras (observable)
      this.badge = value;
    });
  }
  redirectTo(route: string): void {//el route toma el string about que se encuentra en el html entre ' ' EJ 'about ' ó el 'home'
    console.log('redirect');
    this.router.navigateByUrl('/portal/' + route);
  }

  goToCart():void{
    this.router.navigateByUrl('/payment/cart');
  }
  admin(){
    //this.adminn = 'ADMIN';
    
    /* if (this.sessionService.getRol() === ERol.ADMIN){
      this.Admin =true;
    }else{
      //redirecion para nuevo logueo 
      this.router.navigateByUrl('portal/home');
      this.Admin =false;
    } */


  }
}

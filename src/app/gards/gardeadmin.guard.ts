import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterLink, RouterModule, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShareServiceService } from '../servises/share-service.service';

@Injectable({
  providedIn: 'root'
})

export class GardeadminGuard implements CanActivate {

constructor(private share:ShareServiceService,private route:Router){

}

canActivate (route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

 return new Promise((resolve, Resolver) => {
if(this.share.admin==true){
 resolve (true)
}else {
 this.route.navigate(['/about'])
  resolve (false)

}     
   })
    }

    }
    

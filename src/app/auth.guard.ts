import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router , RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  isLogged: boolean = false;
  constructor(private _router: Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged ? true : this._router.navigate(['/login']);
  }
  
}

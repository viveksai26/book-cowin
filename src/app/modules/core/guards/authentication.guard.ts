import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppConstant } from '../../shared/constants/app-constant';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): any {
    if (localStorage.getItem(AppConstant.TOKEN)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}

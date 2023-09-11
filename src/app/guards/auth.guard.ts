import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const service = inject(AuthService)
  // inject is used to add a service into AuthService
  const router=inject(Router)
  if(service.isLoggedIN()){
    return true
  }else{
    alert('operation denied!!please login')
    router.navigateByUrl("")
    return false

  }
};

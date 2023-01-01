import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SearchpersonService } from './searchperson.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JudgeLoginGuard implements CanActivate {

  constructor(
    private searchpersonservice: SearchpersonService,
    private router : Router
    ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.searchpersonservice.getIsPerson()) {
        this.searchpersonservice.setIsPerson(false);
        console.log('ログインガード認証：成功');
        return true;
      }
      this.router.navigate(['../work/main']);
      console.log('ログインガード認証：不可');
      window.alert('ログイン不可です。');
      return false;
  }

}

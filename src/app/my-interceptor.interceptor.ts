import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  checkIfLogin(url:string) :boolean {
    return url.includes('login')
  }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("first interceptorr");
    let modifiedRequest = request.clone({headers:request.headers.append('auth' , 'x-acsses-token').append('userid' , '89')})

    return next.handle(modifiedRequest);
  }
}

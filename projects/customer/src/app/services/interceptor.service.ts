import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { environment } from '../../environments/environment';

@Injectable()

export class HttpinterceptorService implements HttpInterceptor {

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
     var reqcloned = req.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          'Accept': 'q=0.8;application/json;q=0.9'
        }
      });
    return next.handle(reqcloned).do(evt => {
      if (evt instanceof HttpResponse) {
        // console.log('---> response', evt);
      }
    }, err_evt => {
      debugger;
    });
  }
}

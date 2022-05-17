import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor,HttpRequest,HttpResponse,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private router:Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        tap(
          ()=>{
            //success data will be handled here
          }
        ),
        catchError((error:HttpErrorResponse): Observable<any> => {
          if(error.status==401){
            Swal.fire('oops','something went wrong','error')
            this.router.navigate(['/login']);
            localStorage.removeItem('token');
            localStorage.clear();
            return throwError(error)
          }
          else{
            Swal.fire('oops','something went wrong','error')
            this.router.navigate(['/login']);
            localStorage.removeItem('token');
            localStorage.clear();
            return throwError(error);
          }
        })
      )
  }
}

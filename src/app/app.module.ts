import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CakeHomeComponent } from './cake-home/cake-home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { InterceptorService } from './interceptor/interceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    CakeHomeComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    LoginComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports:[LoadingComponent],
  providers: [AuthGuardGuard,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

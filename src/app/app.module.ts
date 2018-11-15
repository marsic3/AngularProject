import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import {DataTableModule} from "angular2-datatable";
import {DataFilterPipe} from './components/book-list/data-filter.pipe';
import {routing} from './app.routing';

import { LoginService} from './services/login.service';
import { UserService} from './services/user.service';
import { PaymentService} from './services/payment.service';
import { ShippingService} from './services/shipping.service';
import { BookService} from './services/book.service';
import { CartService} from './services/cart.service';
import { OrderService} from './services/order.service';
import { CheckoutService} from './services/checkout.service';




import 'hammerjs';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderComponent } from './components/order/order.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    NavBarComponent,
    MyAccountComponent,
    MyProfileComponent,
    BookListComponent,
    DataFilterPipe,
    BookDetailComponent,
    ShoppingCartComponent,
    OrderComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    routing,
    MatTabsModule,
    MatProgressSpinnerModule,
    DataTableModule
  ],
  providers: [
  	LoginService,
    UserService,
    PaymentService,
    ShippingService,
    BookService,
    CartService,
    CheckoutService,
    OrderService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


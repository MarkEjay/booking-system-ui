import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { RegisterComponent } from './user/user-auth/register/register.component';
import { LoginComponent } from './user/user-auth/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MerchantLoginComponent } from './merchant/merchant-auth/merchant-login/merchant-login.component';
import { MerchantRegisterComponent } from './merchant/merchant-auth/merchant-register/merchant-register.component';


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserBookingsComponent } from './user/user-bookings/user-bookings.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { UserRequestComponent } from './user/user-request/user-request.component';
import { MerchantProfileComponent } from './merchant/merchant-profile/merchant-profile.component';
import { MerchantBookingsComponent } from './merchant/merchant-bookings/merchant-bookings.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserMerchantListComponent } from './user/user-merchant-list/user-merchant-list.component';
import {MatListModule} from '@angular/material/list';
import { MerchantServiceListComponent } from './merchant/merchant-service-list/merchant-service-list.component';
import { MerchantAddServiceComponent } from './merchant/merchant-add-service/merchant-add-service.component';
import { UserMerchantPageComponent } from './user/user-merchant-page/user-merchant-page.component';


import { ButtonModule } from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import { LandingPageComponent } from './pages/landing-page/landing-page/landing-page.component';
import { CardModule } from 'primeng/card';
import { DataViewModule,DataViewLayoutOptions } from 'primeng/dataview';
// import { DataViewLayoutOptions } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';


import { MerchantCalenderComponent } from './merchant/merchant-calender/merchant-calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { UserAccountSettingsComponent } from './user/user-profile/user-account-settings/user-account-settings.component';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatListModule,
    ButtonModule,
    StyleClassModule,
    CardModule,
    DataViewModule,
  //  DataViewLayoutOptions
  OrderListModule,
  FullCalendarModule,
  TableModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LoginComponent,
    MerchantLoginComponent,
    MerchantRegisterComponent,
    UserProfileComponent,
    UserBookingsComponent,
    UserRequestComponent,
    MerchantProfileComponent,
    MerchantBookingsComponent,
    UserHomeComponent,
    UserMerchantListComponent,
    MerchantServiceListComponent,
    MerchantAddServiceComponent,
    UserMerchantPageComponent,
    LandingPageComponent,
    MerchantCalenderComponent,
    UserAccountSettingsComponent,
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

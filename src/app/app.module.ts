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

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import {ListboxModule} from 'primeng/listbox';
import { ButtonModule } from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';
import { LandingPageComponent } from './pages/landing-page/landing-page/landing-page.component';
import { CardModule } from 'primeng/card';
import { DataViewModule,DataViewLayoutOptions } from 'primeng/dataview';
// import { DataViewLayoutOptions } from 'primeng/dataview';
import { OrderListModule } from 'primeng/orderlist';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
// import { TabsModule } from 'primeng/tabs';
import { TabViewModule } from 'primeng/tabview';



// PrimeNG
import { ChipModule } from 'primeng/chip';

import { MerchantCalenderComponent } from './merchant/merchant-calender/merchant-calender.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { UserAccountSettingsComponent } from './user/user-profile/user-account-settings/user-account-settings.component';
import { MerchantAccountSettingsComponent } from './merchant/merchant-profile/merchant-account-settings/merchant-account-settings.component';
// import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
// import { Options } from '@popperjs/core';

import { FileUploadModule } from 'primeng/fileupload';
// import { CloudinaryModule } from '@cloudinary/angular-5.x';
// import { Cloudinary } from 'cloudinary-core';
import {CloudinaryModule} from '@cloudinary/ng';
import { SchedulerComponent } from './user/scheduler/scheduler.component';
import { MerchantAvailabilityComponent } from './merchant/merchant-availability/merchant-availability.component';
// import { MerchantAvailabilityComponent } from './merchant/merchant-availability/merchant-availability.component';


import {MegaMenuModule} from 'primeng/megamenu';
import { MerchantEditServiceComponent } from './merchant/merchant-edit-service/merchant-edit-service.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserMerchantLookupComponent } from './user/user-merchant-lookup/user-merchant-lookup.component';
import { AboutComponent } from './pages/about/about.component';
import { PolicyComponent } from './pages/policy/policy.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermsComponent } from './pages/terms/terms.component';


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
  TableModule,
  CalendarModule,
  // NgbTimepickerModule
  FileUploadModule,
  CloudinaryModule,
  
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  ListboxModule,
  DropdownModule,
  MegaMenuModule,


  ButtonModule,
  CardModule,
  ChipModule,

  TabViewModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    // LoginComponent,
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
    MerchantAccountSettingsComponent,
    SchedulerComponent,
    MerchantAvailabilityComponent,
    MerchantEditServiceComponent,
    UserMerchantLookupComponent,
    AboutComponent,
    PolicyComponent,
    ContactUsComponent,
    TermsComponent
  ],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

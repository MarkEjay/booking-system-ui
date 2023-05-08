import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/user-auth/login/login.component';
import { RegisterComponent } from './user/user-auth/register/register.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserBookingsComponent } from './user/user-bookings/user-bookings.component';
import { UserAuthguardService } from './user/user-authguard.service';
import { MerchantLoginComponent } from './merchant/merchant-auth/merchant-login/merchant-login.component';
import { MerchantRegisterComponent } from './merchant/merchant-auth/merchant-register/merchant-register.component';
import { MerchantProfileComponent } from './merchant/merchant-profile/merchant-profile.component';
import { MerchantAuthguardService } from './merchant/merchant-authguard.service';
import { MerchantBookingsComponent } from './merchant/merchant-bookings/merchant-bookings.component';
import { UserMerchantListComponent } from './user/user-merchant-list/user-merchant-list.component';
import { MerchantServiceListComponent } from './merchant/merchant-service-list/merchant-service-list.component';
import { UserMerchantPageComponent } from './user/user-merchant-page/user-merchant-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page/landing-page.component';
import { MerchantCalenderComponent } from './merchant/merchant-calender/merchant-calender.component';
import { UserAccountSettingsComponent } from './user/user-profile/user-account-settings/user-account-settings.component';
const routes: Routes = [
  {path:'user/login', component: LoginComponent},
  {path:'user/register', component: RegisterComponent},
  {path:'user/profile', component:UserProfileComponent, canActivate:[UserAuthguardService]},
  {path:'user/profile/settings', component:UserAccountSettingsComponent, canActivate:[UserAuthguardService]},

  {path:'user/bookings', component:UserBookingsComponent, canActivate:[UserAuthguardService]},
  {path:'user/merchant-list', component:UserMerchantListComponent, canActivate:[UserAuthguardService]},

  //give each merchant its own page
  {path:'user/merchant-page/:id', component:UserMerchantPageComponent, canActivate:[UserAuthguardService]},
  {path:'merchant/login', component:MerchantLoginComponent},
  {path: 'merchant/register', component:MerchantRegisterComponent},
  {path: 'merchant/profile', component:MerchantProfileComponent, canActivate:[MerchantAuthguardService]},
  {path: 'merchant/bookings', component:MerchantBookingsComponent, canActivate:[MerchantAuthguardService]},
  {path: 'merchant/view-service', component:MerchantServiceListComponent, canActivate:[MerchantAuthguardService]},
  {path: 'merchant/view-calender', component:MerchantCalenderComponent, canActivate:[MerchantAuthguardService]},

  
 // {path: 'merchant/add-service'}

 {path:'', component:LandingPageComponent},

  { path: '', redirectTo: 'main', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

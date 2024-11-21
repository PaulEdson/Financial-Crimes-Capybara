import { Routes } from '@angular/router';
import { NavigatorComponent } from './navigator/navigator.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ReportDisplayComponent } from './report-display/report-display.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {path: "navigator", component: NavigatorComponent},
    {path: "login", component: LoginComponent},
    {path: "report-display", component: ReportDisplayComponent},
    {path: "report-form", component: ReportFormComponent},
    {path: "home", component: HomeComponent}
];

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { NavigatorComponent } from './navigator/navigator.component';


// const routes: Routes = [
//   {path: "login", component: LoginComponent},
//   {path: "navigator", component: NavigatorComponent}

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

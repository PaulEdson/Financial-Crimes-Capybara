import { Component, OnInit } from '@angular/core';
import { ApiService } from './apiService';
import { NgFor, NgIf } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavigatorComponent } from './navigator/navigator.component'; 
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ReportDisplayComponent } from './report-display/report-display.component';
import { ReportFormComponent } from './report-form/report-form.component';





@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [ 
      NavigatorComponent, RouterOutlet]
})
export class AppComponent implements OnInit {
    title = 'frontEnd';
    message: any;
    constructor(private apiService: ApiService) { };
    ngOnInit() {
        this.apiService.getMessage().subscribe(data => {
            this.message = data;
            console.log(this.message)
        });
    }
}


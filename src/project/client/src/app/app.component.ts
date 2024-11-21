import { Component, OnInit } from '@angular/core';
import { ApiService } from './apiService';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [NgFor, NgIf]
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
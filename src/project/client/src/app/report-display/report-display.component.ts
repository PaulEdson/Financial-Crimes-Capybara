import { Component } from '@angular/core';
import { ApiService } from '../apiService';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-report-display',
  imports: [NgIf],
  templateUrl: './report-display.component.html',
  styleUrl: './report-display.component.css'
})
export class ReportDisplayComponent {
  message :any
  constructor(private apiService: ApiService) { };
  ngOnInit() {
    this.apiService.getMessage().subscribe(data => {
        this.message = data;
        console.log(this.message)
    });
  } 
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent {
  constructor(private http: HttpClient) {}
  showSuccessMessage: boolean = false;
  onSubmit(form: any) {
    this.showSuccessMessage = true;
    this.http.post<any>('http://localhost:3000/api/register', form)
      .subscribe(
        (response) => {
          console.log('Appointment saved successfully:', response);
          
        },
        (error) => {
          console.error('Error saving appointment:', error);
        }
      );
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrl: './marriage.component.css'
})
export class MarriageComponent {
  constructor(private router: Router) {}

  navigateToAppointment() {
    this.router.navigate(['/appointment'], { queryParams: { eventType: 'Marriage' } });
  }
}

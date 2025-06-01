import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-booking-trip',
  imports: [TranslateModule],
  templateUrl: './booking-trip.component.html',
  styleUrl: './booking-trip.component.scss'
})
export class BookingTripComponent {
@Input() labelKey: string = 'btn-book'; 
}

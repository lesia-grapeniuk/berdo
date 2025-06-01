import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UiKitModule } from '@shared/UI-KIT/ui-kit.module';
import { ComfortIncludedComponent } from "./comfort-included/comfort-included.component";
import { BookingTripComponent } from "../buttons/booking-trip/booking-trip.component";

@Component({
  selector: 'app-pricing',
  imports: [UiKitModule, TranslateModule, ComfortIncludedComponent, BookingTripComponent],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  public extraServices = [
  { serviceKey: 'pricing.row-1-service-1', priceKey: 'pricing.row-1-price-1' },
  { serviceKey: 'pricing.row-1-service-2', priceKey: 'pricing.row-1-price-2' },
  { serviceKey: 'pricing.row-1-service-3', priceKey: 'pricing.row-1-price-3' },
  { serviceKey: 'pricing.row-1-service-4', priceKey: 'pricing.row-1-price-4' },
  { serviceKey: 'pricing.row-1-service-5', priceKey: 'pricing.row-1-price-5' },
  { serviceKey: 'pricing.row-1-service-6', priceKey: 'pricing.row-1-price-6' },
  { serviceKey: 'pricing.row-1-service-7', priceKey: 'pricing.row-1-price-7' },
];

}

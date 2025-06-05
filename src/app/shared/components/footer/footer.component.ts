import { DatePipe, JsonPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PolicePageComponent } from '../police-page/police-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, DatePipe, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public currentDate: Date = new Date();
}

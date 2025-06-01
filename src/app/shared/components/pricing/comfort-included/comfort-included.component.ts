import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-comfort-included',
  imports: [TranslateModule, CommonModule],
  templateUrl: './comfort-included.component.html',
  styleUrl: './comfort-included.component.scss'
})
export class ComfortIncludedComponent {
  comfortItems = [
  { icon: 'assets/icons/instructor.svg', label: 'comfort.label-instructor' },
  { icon: 'assets/icons/coffe.svg', label: 'comfort.label-coffee' },
  { icon: 'assets/icons/camera.svg', label: 'comfort.label-gopro' },
  { icon: 'assets/icons/shower.svg', label: 'comfort.label-shower' },
  { icon: 'assets/icons/parking-circle.svg', label: 'comfort.label-parking' },
  { icon: 'assets/icons/equipment.svg', label: 'comfort.label-equipment' }
];

}

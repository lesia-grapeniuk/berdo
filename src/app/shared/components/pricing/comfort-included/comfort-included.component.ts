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
  public comfortItems = [
  { icon: 'assets/icons/instructor.svg', label: 'comfort.label-instructor', class: 'icon-instructor', itemClass: 'item-instructor' },
  { icon: 'assets/icons/coffe.svg', label: 'comfort.label-coffee', class: 'icon-coffee', itemClass: 'item-coffee' },
  { icon: 'assets/icons/camera.svg', label: 'comfort.label-gopro', class: 'icon-camera', itemClass: 'item-camera' },
  { icon: 'assets/icons/shower.svg', label: 'comfort.label-shower', class: 'icon-shower', itemClass: 'item-shower' },
  { icon: 'assets/icons/parking-circle.svg', label: 'comfort.label-parking', class: 'icon-parking', itemClass: 'item-parking' },
  { icon: 'assets/icons/equipment.svg', label: 'comfort.label-equipment', class: 'icon-equipment', itemClass: 'item-equipment' }
];

}

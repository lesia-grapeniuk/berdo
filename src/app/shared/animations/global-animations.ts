import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeExpand = trigger('fadeExpand', [
  state('closed', style({
    opacity: 0,
    height: '0px',
    padding: '0px',
    overflow: 'hidden',
  })),
  state('open', style({
    opacity: 1,
    height: '*',
    padding: '*',
    overflow: 'hidden',
  })),
  transition('closed <=> open', animate('0.4s ease-in-out')),
]);

export const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: 0 })),
  ]),
]);

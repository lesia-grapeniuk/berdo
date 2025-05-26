import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { AccordionModule } from 'primeng/accordion';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { DialogModule } from 'primeng/dialog';
import { Menu } from 'primeng/menu';
import { Menubar } from 'primeng/menubar';
import { Checkbox } from 'primeng/checkbox';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { FormsModule } from '@angular/forms';
import { Tag } from 'primeng/tag';
import { Carousel } from 'primeng/carousel';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  imports: [
    Menubar,
    Menu,
    CommonModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    InputGroupAddonModule,
    InputGroupModule,
    AccordionModule,
    RippleModule,
    StyleClassModule,
    DialogModule,
    Checkbox,
    InputIcon,
    IconField,
    FormsModule,
    Carousel,
    Tag,
    AutoCompleteModule,
    OverlayPanelModule
  ],
  exports: [
    InputIcon,
    IconField,
    FormsModule,
    CommonModule,
    Menu,
    Menubar,
    InputTextModule,
    ButtonModule,
    MessageModule,
    InputGroupAddonModule,
    InputGroupModule,
    AccordionModule,
    DialogModule,
    Checkbox,
    Carousel,
    Tag,
    AutoCompleteModule,
    OverlayPanelModule
  ]
})
export class UiKitModule { }

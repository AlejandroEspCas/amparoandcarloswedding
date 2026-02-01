import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';

@Component({
    selector: 'app-section-6-gifts',
    templateUrl: 'section-6-gifts.component.html',
    styleUrl: 'section-6-gifts.component.css',
    standalone: true,
    imports: [
        CommonModule, 
        DynamicImageComponent,
        DynamicTextComponent
    ],
})
export class Section6GiftsComponent {}
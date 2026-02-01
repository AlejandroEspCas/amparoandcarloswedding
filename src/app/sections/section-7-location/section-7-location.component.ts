import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';

@Component({
    selector: 'app-section-7-location',
    templateUrl: 'section-7-location.component.html',
    styleUrl: 'section-7-location.component.css',
    standalone: true,
    imports: [
        CommonModule, 
        DynamicImageComponent,
        DynamicTextComponent
    ],
})
export class Section7LocationComponent {}
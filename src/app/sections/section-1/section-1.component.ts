import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';

@Component({
    selector: 'app-section-1',
        templateUrl: 'section-1.component.html',
        styleUrl: 'section-1.component.css',
    standalone: true,
    imports: [
        CommonModule, 
        DynamicTextComponent, 
        DynamicImageComponent
    ],
})
export class Section1Component {}
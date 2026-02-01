import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';

@Component({
    selector: 'app-section-3-gallery',
        templateUrl: 'section-3-gallery.component.html',
        styleUrls: ['section-3-gallery.component.css'],
    standalone: true,
    imports: [
        CommonModule, 
        DynamicImageComponent
    ],
})
export class Section3GalleryComponent {}
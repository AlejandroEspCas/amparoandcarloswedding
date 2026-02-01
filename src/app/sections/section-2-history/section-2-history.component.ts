import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';

@Component({
    selector: 'app-section-2-history',
        templateUrl: 'section-2-history.component.html',
        styleUrls: ['section-2-history.component.css'],
    standalone: true,
    imports: [
        CommonModule, 
        DynamicTextComponent, 
        DynamicImageComponent
    ],
})
export class Section2HistoryComponent {}
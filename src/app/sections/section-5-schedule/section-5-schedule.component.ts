import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';

@Component({
    selector: 'app-section-5-schedule',
    templateUrl: 'section-5-schedule.component.html',
    styleUrl: 'section-5-schedule.component.css',
    standalone: true,
    imports: [
        CommonModule, 
        DynamicImageComponent,
        DynamicTextComponent
    ],
})
export class Section5ScheduleComponent {}
import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}  
            </li>
        </ul>
    ` // can also interpulate methods
})
export class CoursesComponent {
    title = " List of courses";
    courses;
                // class dependency injection .. need to include into providers in app module
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    // getTitle() {
    //     return this.title;
    // }
}
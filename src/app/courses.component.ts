import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:25 }}
    ` // can also interpulate methods
})
export class CoursesComponent {
    text = `
        Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
    `
    
                // class dependency injection .. need to include into providers in app module
    // constructor(service: CoursesService) {
    //     this.courses = service.getCourses();
    // }
    // getTitle() {
    //     return this.title;
    // }
}

// <td [attr.colspan]="colSpan" ></td> --> attribute binding
// <button class="btn btn-primary" [class.active]="isActive">Save</button> --> class binding
// <button [style.backgroundColor="isActive ? 'blue' : 'white'"] --> style binding
// <button (click)="onSave($event)" >Save</button> --> event binding
// <input (keyup.enter)="onKeyUp()" /> --> event filtering
// <input #email (keyup.enter)="onKeyUp(email.value)" /> --> template variables
// <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> --> two way binding

// PIPES
// { { course.title | uppercase | lowercase } } <br/>
// { { course.students | number } } <br/>
// { { course.rating | number:'1.1-1' } } <br/>
// { { course.price | currency:'AUD': true:'3.2-2' } } <br/>
// { { course.releaseDate | date: 'shortDate' } }

//CUSTOM PIPES
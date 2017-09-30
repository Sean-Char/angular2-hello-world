import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input (keyup.enter)="onKeyUp()" />
    ` // can also interpulate methods
})
export class CoursesComponent {
    onKeyUp() {
        console.log("Enter was pressed");
    }
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
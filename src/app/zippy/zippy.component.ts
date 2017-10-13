import { Component, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
  @Input('title') title: string; // bind to zippy selector in app.component.html
  isExpanded: boolean; // class binding in zippy.component.html

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}


// <zippy title="Shipping Details" > --> apply to app.component.html
//   Shipping Details Content
// < /zippy>
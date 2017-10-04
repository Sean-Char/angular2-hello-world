import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();


  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean
}


// use in app.component.html to display
// <favorite[isFavorite]="post.isFavorite" (change)="onFavoriteChange()" > </favorite>
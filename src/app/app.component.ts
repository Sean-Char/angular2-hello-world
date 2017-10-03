import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true
  }

}

// post = {
//   title: "Title",
//   isFavorite: true
// }

// onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
//   console.log("Favorite Changed", eventArgs);
// }
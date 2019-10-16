import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

import { Dish } from '../../shared/dish';
import { DishProvider } from '../dish/dish';

@Injectable()
export class FavoriteProvider {  
  favorites: Array<any>;

  constructor(public http: Http,
    private dishservice: DishProvider,
    private storage: Storage) {
    console.log('Hello FavoriteProvider Provider');
    storage.get('favorites').then(favorites => {
      if(favorites) {
        console.log(favorites);
        this.favorites = favorites;
      }
      else this.favorites = [];
    });
  }

  addFavorite(id: number): boolean {
    if (!this.isFavorite(id))
    {
      this.favorites.push(id);
      this.storage.set('favorites', this.favorites);
    }
    console.log('favorites', this.favorites);
    return true;
  }

  isFavorite(id: number): boolean {
        return this.favorites.some(el => el === id);
  }

  getFavorites(): Observable<Dish[]> {
    return this.dishservice.getDishes()
      .map(dishes => dishes.filter(dish => this.favorites.some(el => el === dish.id)));
  }

  deleteFavorite(id: number): Observable<Dish[]> {
    let index = this.favorites.indexOf(id);
    if (index >= 0) {
      this.favorites.splice(index,1);
      return this.getFavorites();
    }
    else {
      console.log('Deleting non-existant favorite', id);
      return Observable.throw('Deleting non-existant favorite' + id);
    }
  }
}
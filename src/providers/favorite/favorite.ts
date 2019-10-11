import { Injectable } from '@angular/core';

@Injectable()
export class FavoriteProvider {
  favorites: Array<any>;

  constructor() {
    console.log('Hello FavoriteProvider Provider');
    this.favorites = [];
  }

  addFavorite(id: number): boolean {
    this.favorites.push(id);
    return true;
  }

  isFavorite(id: number): boolean {
    return this.favorites.some(el => el === id);
  }
}

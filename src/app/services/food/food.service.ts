import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllImages():string[]{
    return[
      '/assets/1.jpg',
      '/assets/2.jpg',
      '/assets/3.jpg',
      '/assets/4.jpg',
      '/assets/5.jpg',
      '/assets/6.png',
      '/assets/7.jpg',
      '/assets/8.jpg',
      '/assets/9.jpg',
      '/assets/10.jpg',
      '/assets/11.png',
      '/assets/12.jpg'
    ]
  }
}

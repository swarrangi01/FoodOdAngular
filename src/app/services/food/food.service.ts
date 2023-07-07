import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getAllImages(){
    return[
      {
        id:1,
        name:"Kerala Chicken",
        favourite:false,
        price:540,
        star:3.2,
        tags:['kerala','chicken'],
        imageUrl:'/assets/1.jpg',
        cookTime:"40-50 mins",
        origins:"India"

      },{
        id: 2,
        name: "Macarons",
        favourite: true,
        price: 350,
        star: 4.0,
        tags: ["macarons","dessert"],
        imageUrl: "/assets/2.jpg",
        cookTime: "10 mins",
        origins: "France"
      },
      {
        id: 12,
        name: "Sushi",
        favourite: false,
        price: 750,
        star: 2.5,
        tags: ["gluten-free", "seafood"],
        imageUrl: "/assets/12.jpg",
        cookTime: "50-60 mins",
        origins: "Japan"
      },
      {
        id: 3,
        name: " Pizza",
        favourite: true,
        price: 380,
        star: 4.5,
        tags: ["pizza", "snack"],
        imageUrl: "/assets/3.jpg",
        cookTime: "15-20 mins",
        origins: "United States"
      },
      {
        id: 4,
        name: "Pancake",
        favourite: true,
        price: 620,
        star: 3.8,
        tags: ["healthy", "pancake"],
        imageUrl: "/assets/4.jpg",
        cookTime: "30-40 mins",
        origins: "Greece"
      },
      {
        id: 5,
        name: "Cake",
        favourite: false,
        price: 620,
        star: 3.8,
        tags: ["dessert", "baking"],
        imageUrl: "/assets/5.jpg",
        cookTime: "45-55 mins",
        origins: "Europe"
      },
      {
        id: 6,
        name: "Macarons",
        favourite: true,
        price: 180,
        star: 4.3,
        tags: ["dessert", "pastry"],
        imageUrl: "/assets/6.png",
        cookTime: "1-2 hours",
        origins: "France"
      },
      {
        id: 7,
        name: "Bruschetta",
        favourite: false,
        price: 950,
        star: 3.7,
        tags: ["appetizer", "Italian"],
        imageUrl: "/assets/7.jpg",
        cookTime: "15-20 mins",
        origins: "Italy"
      },
      {
        id: 8,
        name: "Fruit Bowl",
        favourite: true,
        price: 420,
        star: 4.2,
        tags: ["healthy", "breakfast"],
        imageUrl: "/assets/8.jpg",
        cookTime: "10-15 mins",
        origins: "Unknown"
      },
      {
        id: 9,
        name: "Chicken Salad",
        favourite: false,
        price: 690,
        star: 3.6,
        tags: ["salad", "chicken"],
        imageUrl: "/assets/9.jpg",
        cookTime: "30-40 mins",
        origins: "Unknown"
      },
      {
        id: 10,
        name: "Pasta",
        favourite: true,
        price: 290,
        star: 4.0,
        tags: ["Italian", "dinner"],
        imageUrl: "/assets/10.jpg",
        cookTime: "20-25 mins",
        origins: "Italy"
      },
      {
        id: 11,
        name: "Chocolate Cookies",
        favourite: false,
        price: 820,
        star: 3.4,
        tags: ["dessert", "chocolate"],
        imageUrl: "/assets/11.png",
        cookTime: "12-15 mins",
        origins: "Unknown"
      }
 
    ];
  }
}

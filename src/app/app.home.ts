import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

@Component({
  template: `
  <tr *ngFor="let food of FOODITEMS">
  <br/>
   <a routerLink="/detail/{{food.id}} ">{{food.name}}</a>
   <br/>
   </tr>


`
})
export class PageHome {
  myFoodItems: FoodItem[];
  FOODITEMS: FoodItem[] = [
    { id: 0, name: "Cucumbers", mfg: "Hot House", pkg: "10 KG", qty: 6 },
    { id: 1, name: "Carrots", mfg: "Hot House", pkg: "8 KG", qty: 14 },
    { id: 2, name: "Cheese", mfg: "Hot House", pkg: "5 KG", qty: 20 },
    { id: 3, name: "French Fries", mfg: "McCain", pkg: "15 KG", qty: 8 }
  ];

  // The constructor sets up the class.
  constructor() {
     // Create
     if(sessionStorage.getItem("food") == null) {
       sessionStorage.setItem("food", JSON.stringify(this.FOODITEMS));
     }

     this.myFoodItems = JSON.parse(sessionStorage.getItem("food"));

     console.log(this.FOODITEMS[0].name);
   }
}

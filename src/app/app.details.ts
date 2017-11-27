import { Component , OnInit, Input} from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

// Define second directive.
@Component({
    // Selector uses lower case with hyphens.
    selector: 'details-directive',
    templateUrl:'./details.html',
})
export class PageDetails implements OnInit {
  food: {};

  constructor(
    private route: ActivatedRoute
  ){}
  ngOnInit() {
    //use the unary + operator to parseInt
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    let myFoodItems = JSON.parse(sessionStorage.getItem("food"));
    this.food = myFoodItems[id];
    console.log(myFoodItems[id]);
  }
}

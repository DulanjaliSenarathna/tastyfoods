import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cart.item.model';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id:number;
  food:Food;
  constructor(private activatedRoute: ActivatedRoute, private foodService:FoodService) {
    this.id =+ this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.food = this.foodService.getFood(this.id);
  }

  addItemToCart(){
    const cartitem: CartItem = {
      id: this.food.id,
      name:this.food.title,
      price: this.food.price,
      image: this.food.image,
      quantity:1,
    }
  }

}

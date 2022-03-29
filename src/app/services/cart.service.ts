import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CartItem } from "../models/cart.item.model";

@Injectable({

    providedIn: 'root'
})
 export class CartService{
    private item$ = new BehaviorSubject<CartItem[]>([]);

    getCart(){
        return this.item$.asObservable();
    }

    addToCart(newItem: CartItem){

    }
 }
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
    coffee: Array<Coffee> = [];

    constructor() { }
  
    getAllCoffee(): Observable<Array<Coffee>>{
      return of(this.coffee);
    }
  
    getCoffeeByPrice(maxPrice: number): Observable<Array<Coffee>> {
      return of(this.coffee.filter(c => c.price <= maxPrice));
    }

    findCoffeeByName(name: string): Observable<Array<Coffee>> {
      return of(this.coffee);
    }
}

import { TestBed } from '@angular/core/testing';

import { CoffeeService } from './coffee.service';

describe('CoffeeService', () => {
  let service: CoffeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('coffee methods', () => {
    beforeEach(() => {
      service.coffee = [
        {
          name: 'Espresso',
          price: 2.99
        },
        {
          name: 'Latte',
          price: 3.99
        },
        {
          name: 'Coffee',
          price: 1.99
        }
      ];
    });

    it('getAllCoffee should return all coffee', () => {
      service.getAllCoffee().subscribe(coffee => {
        expect(coffee.length).toEqual(3);
        expect(coffee[0].name).toEqual('Espresso');
      });
    });

    it('getCoffeeByPrice should only return coffee up to max price', () => {
      const maxPrice = 3;
      service.getCoffeeByPrice(maxPrice).subscribe(coffee => {
        expect(coffee.length).toBe(2);
        coffee.forEach(c => {
          expect(c.price).toBeLessThan(maxPrice);
        });
      });
    });

    describe('mock getAllCoffee', () => {
      it('should return mock coffee items', () => {
        const mockCoffee: any = [
          {
            name: 'Espresso',
            price: 2.99
          },
          {
            name: 'Latte',
            price: 3.99
          },
          {
            name: 'Coffee',
            price: 1.99
          }
        ];

        let response: any;
        spyOn(service, 'getAllCoffee').and.returnValue(of(mockCoffee));

        service.getAllCoffee().subscribe(res => {
          response = res;
        });

        expect(response).toEqual(mockCoffee);
      });
    });


  });



});
function of(_mockCoffee: any): import("rxjs").Observable<import("../models/coffee").Coffee[]> {
  throw new Error('Function not implemented.');
}


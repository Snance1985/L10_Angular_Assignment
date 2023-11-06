import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter', () => {
    component.increaseCounter();
    expect(component.counter.value).toBe(1);
  });

  it(`should increase in HTML on button click`, () => {
    const button = fixture.debugElement.query(By.css('.increment'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
  
    const counterElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    const value = counterElement.innerText;
    expect(value).toEqual(1);
  });

  it('should decrease counter', () => {
    component.decreaseCounter();
    expect(component.counter.value).toBe(-1);
  });
  
  it(`should decrease in HTML on button click`, () => {
    const button = fixture.debugElement.query(By.css('.decrement'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
  
    const counterElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    const value = counterElement.innerText;
    expect(value).toEqual('1');
  });
  

});

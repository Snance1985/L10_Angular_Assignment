import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter = {
    value: 0,
    title: "My Counter"
  }

  constructor() { }

  ngOnInit(): void {
  }

  increaseCounter(): number{
    return this.counter.value++;
  }
  decreaseCounter(): number{
    return this.counter.value--;
  }
}


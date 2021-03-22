import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-list',
  templateUrl: './performance-list.component.html',
  styleUrls: ['./performance-list.component.css']
})
export class PerformanceListComponent implements OnInit {

  constructor() { }

  inumber: number = 1;
  numbers: Array<any> | undefined;

  AddComponents(value: any) {
    this.numbers = Array.from(
      { length: value },
      () =>
        // eslint-disable-next-line unicorn/number-literal-case
        '#' + ((Math.random() * 0xffffff) << 0).toString(16)
    )
  }

  ngOnInit(): void { }

}

import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss'],
})
export class FourthComponent implements OnInit {
  firstString: string = 'first'
  secondString: string = 'second'
  elementList: Date[] = [
    new Date(1, 1, 2000),
    new Date(2, 3, 2004),
    new Date(10, 10, 1999),
    new Date(5, 5, 1955),
    new Date(1, 4, 1900),
    new Date(16, 5, 1950),
  ]
  constructor() {}

  ngOnInit(): void {}
}

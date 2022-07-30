import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.css'],
})
export class GrandParentComponent implements OnInit {
  title: string = '';

  constructor() {}

  ngOnInit() {
    this.title = 'Some';
  }
}

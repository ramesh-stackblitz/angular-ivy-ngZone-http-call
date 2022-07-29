import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-by',
  templateUrl: './track-by.component.html',
  styleUrls: ['./track-by.component.css'],
})
export class TrackByComponent implements OnInit {
  public users = [];

  constructor() {}

  ngOnInit(): void {
    this.users = [
      {
        name: 'Ramesh',
        id: 1,
      },
      { name: 'Saranya', id: 2 },
      { name: 'Sudhar', id: 3 },
      { name: 'Sudharshini', id: 4 },
      { name: 'Saran', id: 5 },
    ];
  }

  assignData() {
    this.users = [
      {
        name: 'Ramesh',
        id: 1,
      },
      { name: 'Saranya', id: 2 },
      { name: 'Sudhar', id: 3 },
      { name: 'Sudharshini', id: 4 },
      { name: 'Saran', id: 5 },
    ];
  }
}

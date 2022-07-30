import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  title = '';
  constructor() {}

  ngOnInit() {}

  child() {
    console.log('child');
    return 'child';
  }
}

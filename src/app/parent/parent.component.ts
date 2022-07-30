import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
  arr = [];
  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    // setInterval(() => {
    //   this.ref.detectChanges();
    //   this.arr = [Math.random()];
    // }, 1500);
  }

  parent() {
    this.ref.detach();
    console.log('parent');
    return 'parent';
  }
}

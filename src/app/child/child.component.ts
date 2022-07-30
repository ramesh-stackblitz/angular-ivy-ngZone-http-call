import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  number = 0;
  @Input() arr;
  constructor(private ref: ChangeDetectorRef) {
    this.ref.detach();
  }

  ngOnInit() {
    setInterval(() => {
      // this.ref.markForCheck();
      this.ref.detectChanges();
      this.number = Math.random();
    }, 5000);
  }

  child() {
    console.log('child');
    return 'child';
  }
}

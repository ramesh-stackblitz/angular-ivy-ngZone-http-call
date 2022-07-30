import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  number = 0;
  @Input() arr;
  counter = 0;
  constructor(private ref: ChangeDetectorRef, private zone: NgZone) {
    // this.ref.detach();
  }

  ngOnInit() {
    console.log('child Component loading...');
    this.zone.runOutsideAngular(() => {
      this.counter++;
      setInterval(() => {
        this.counter++;

        if (this.counter > 10) {
          this.zone.run(() => {
            this.number = Math.random();
          });
        } else {
          this.number = Math.random();
        }
        // console.log('test....');
        // let number = Math.random();
        // this.number = number;
      }, 1000);
    });
    // setInterval(() => {
    //this.ref.markForCheck();
    // this.ref.detectChanges();
    // this.number = Math.random();
    // }, 5000);
  }

  // child() {
  //   console.log('child');
  //   return 'child';
  // }
}

import {
  Component,
  VERSION,
  OnInit,
  ElementRef,
  ViewChild,
  NgZone,
} from '@angular/core';
import { ServiceAppService } from './service-app.service';
import { Subscriber } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { fromFetch } from 'rxjs/fetch';
import { tap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import {
  FormGroup,
  FormControlName,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  public responseValue: any;
  public arrayList = [7, 9, 5, 6, 4, 5];
  public responseApi: any = [];
  public users = [];

  @ViewChild('div', { static: true }) div: ElementRef;

  loginForm: FormGroup;

  constructor(
    private service: ServiceAppService,
    private fb: FormBuilder,
    private http: HttpClient,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.service.getData().subscribe((res) => {
      console.log('response..' + res);
      this.responseValue = res;
    });

    this.service.getJson().subscribe((res) => {});

    this.loadFun();
    // this.service.getJson().subscribe((data) => {
    //   console.log(data);
    // });
    this.loadingApiAjax();

    this.loadingFetch();

    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
    });

    var result3 = [];
    var results2 = this.arrayList.sort((a, b) => b - a);
    var result = new Set(results2);
    console.log(...result);

    // this.ngZone.runOutsideAngular(() => {
    //   this.changeColor();
    // });

    this.service.getJson().subscribe((res) => {
      var res = res;
      console.log('getResponse...', res);
    });
  }

  loadingFetch() {
    let results: any = [];
    // let data$ = fromFetch("https://jsonplaceholder.typicode.com/posts"),{
    //   selector: response => response.json()
    // });
    const data$ = fromFetch('https://jsonplaceholder.typicode.com/posts', {
      selector: (response) => response.json(),
    });

    data$.subscribe((x) => {
      console.log(x.json());
    });
    //var x = data.subscribe(x => x);

    //console.log("results", x.json());
  }

  loadingApiAjax() {
    const data$ = ajax('https://jsonplaceholder.typicode.com/posts').pipe(tap());
    data$.subscribe(x => {
      console.log("Ajax call", x.response);
    })
  }
  loadFun() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response) => {
        let resp = JSON.stringify(response);
        this.responseApi = JSON.parse(resp);
        console.log('loading data', this.responseApi);
      });
  }

  fun() {
    console.log();
  }

  // changeColor() {
  //   setInterval(() => {
  //     console.log('Color change detection1');
  //     this.div.nativeElement.style.background = this.setRandomColor();
  //   }, 50000);
  // }

  // setRandomColor() {
  //   return ['red', 'orange', 'yellow', 'green', 'blue', 'purple'][
  //     (Math.random() * 6) | 0
  //   ];
  // }
}

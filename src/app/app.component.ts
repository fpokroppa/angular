import {Component, OnInit} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cssUrl: string;
  title = 'app';

  constructor(public sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const n = randomIntegerInRange(1, 100) % 2;
    this.cssUrl = n % 2 === 0 ? '/assets/styles-one.css' : '/assets/styles-two.css';
  }

}

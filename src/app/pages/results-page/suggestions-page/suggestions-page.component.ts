import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss']
})
export class SuggestionsPageComponent implements OnInit {
  @Input() entityInstanceList: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

}

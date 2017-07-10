import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent implements OnInit {

  @Input() product: Object;
  constructor() { }

  ngOnInit() {
  }

}

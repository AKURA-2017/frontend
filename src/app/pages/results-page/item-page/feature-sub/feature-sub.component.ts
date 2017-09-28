import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-sub',
  templateUrl: './feature-sub.component.html',
  styleUrls: ['./feature-sub.component.scss']
})
export class FeatureSubComponent implements OnInit {

  @Input() type = "";
  @Input() arr = [];
  @Input() total = 0;

  hidden: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  changeStatus() {
    this.hidden = !this.hidden;
  }
}

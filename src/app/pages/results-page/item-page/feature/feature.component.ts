import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  hidden: Boolean = true;
  @Input() x = {}
  @Input() entity = "";
  constructor() { }

  ngOnInit() {
  }

  getCount(arr) {
    let count = 0;
    arr.filter((prod) => {
      return (prod.name !== this.entity);
    }).map((data) => {
      count += data.count;
    });
    return count;
  }

  changeStatus() {
    this.hidden = !this.hidden;
  }
}

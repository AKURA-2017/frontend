import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() score;
  @Input() defaultColor;
 

  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if(this.defaultColor){
      return this.defaultColor;
    }else if(this.score < 40){
      return "progress-bar-danger"
    }else if(this.score >= 40 && this.score < 70){
      return "progress-bar-info"
    }else{
      return "progress-bar-success"
    }
  }

}

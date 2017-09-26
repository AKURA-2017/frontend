import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestions-page',
  templateUrl: './suggestions-page.component.html',
  styleUrls: ['./suggestions-page.component.scss']
})
export class SuggestionsPageComponent implements OnInit {
  @Input() entityInstanceList: Array<any> = [];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(search){
    this.router.navigate(['/results'], { queryParams: { search:  search } });
  }

}

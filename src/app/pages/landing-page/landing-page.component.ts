import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  search: String = '';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchItem() {
    if (this.search !== '') {
      this.router.navigate(['/results'], { queryParams: { search: this.search } });
    }
  }

}

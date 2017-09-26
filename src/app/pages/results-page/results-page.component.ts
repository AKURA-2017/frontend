import { ProductService } from './../../shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-page',
  templateUrl: './results-page.component.html',
  styleUrls: ['./results-page.component.scss']
})
export class ResultsPageComponent implements OnInit {
  search: String = '';
  product: Object = {};
  entites: Object = {};
  entityInstanceList: Array<any> = [];
  type: String = '';

  loading: Boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    this.route
      .queryParams
      .subscribe(params => {
        this.search = params['search'] || '';
        this.searchItem();
      });
  }

  ngOnInit() {
  }

  searchItem() {

    if (this.search !== '') {
      this.type = '';
      this.loading = true;

      this.productService.search(this.search)
        .subscribe((data) => {
         
          this.loading = false;
          if (data.entityInstanceList) {

            this.entityInstanceList = data.entityInstanceList;
            this.type = 'SUG';
          } else {

            this.product = data;
            this.type = 'ITEM';
          }
        });
    }
  }

  searchItemNav() {
    if (this.search !== '') {
      this.router.navigate(['/results'], { queryParams: { search: this.search } });
    }
  }

  navigate() {
    // this.router.navigate(['/results'], { queryParams: { search: this.search } });
    this.router.navigate(['/'], {});
  }

}

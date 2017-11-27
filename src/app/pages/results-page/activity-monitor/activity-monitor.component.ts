import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../shared/services/product.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-activity-monitor',
  templateUrl: './activity-monitor.component.html',
  styleUrls: ['./activity-monitor.component.scss']
})
export class ActivityMonitorComponent implements OnInit {

  search: String = '';
  logs = [];
  classMap = {
    'j2owl': 'label-warning',
    'integration': 'label-info',
    'retrieval': 'label-default',
    'NLU Engine': 'label-success',
    '"NLU Engine"': 'label-success',
    'System': 'label-danger',
    'Data Extarction': 'label-info'
  };

  engines = ['j2owl', 'integration', 'retrieval', 'NLU Engine', 'System', 'Data Extarction'];
  socket = io('http://35.198.251.53:3000');
  constructor(private router: Router, private route: ActivatedRoute, private productService: ProductService) {
    this.route
      .queryParams
      .subscribe(params => {
        this.search = params['search'] || '';
      });

    this.socket.on('OVERALL', (obj) => {
      console.log('socket emitted');
      let tmp;
      // check title
      if (this.checkType(obj, '#TITLE-')) {
        tmp = this.checkType(obj, '#TITLE-');
      } else if (this.checkType(obj, '#SUB-')) {
        tmp = this.checkType(obj, '#SUB-');

      } else if (this.checkType(obj, '#CONT-')) {
        tmp = this.checkType(obj, '#CONT-');

      } else if (this.checkType(obj, '#JSON-')) {
        tmp = this.checkType(obj, '#JSON-');
      } else if (this.checkType(obj, '#PROCESS-')) {
        tmp = this.checkType(obj, '#PROCESS-');
      }
      this.logs.push(tmp);
      
    });
  }


  ngOnInit() {
  }

  searchItem() {
    if (this.search !== '') {
      this.router.navigate(['/results'], { queryParams: { search: this.search } });
    }
  }
  navigate() {
    // this.router.navigate(['/results'], { queryParams: { search: this.search } });
    this.router.navigate(['/'], {});
  }

  checkType(str, type) {
    const tmp = str.split(type);
    if (tmp.length > 1) {
      // console.log(tmp[1]);
      const engine = tmp[1].split('##$$$');
      if (type === '#JSON-') {
        engine[1] = JSON.stringify(this.getJSON(engine[1]), null, '\t');
        // console.log(engine[1]);
      }
      // console.log(engine[0]);

      return {
        result: this.engines.indexOf(engine[0]) > -1 ? engine[1] : engine[0],
        type: type,
        engine: this.engines.indexOf(engine[0]) > -1 ? engine[0] : engine[1]
      };
    } else {
      return false;
    }
  }


  getJSON(str) {
    let jsn = '';
    try {
      const tmp = JSON.parse(str);
      jsn = tmp;
    } catch (e) {
      console.log('came to catch');
      jsn = str;
    }
 
    return jsn;
  }

}

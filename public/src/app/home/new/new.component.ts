import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from "@angular/router";
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.author = {
      name: ""
    }
  }

  addAuthorThroughService () {
    let observable = this._httpService.addAuthor(this.author);
    observable.subscribe ( data => {
      if (data['message'] == "Error") {
        console.log(data);
        console.log(data['message']);
        console.log(data['error']);
        this.error = data;
      }
      else {
        console.log("Successfully added data to server!" + data);
        this._router.navigate(["/"]);
      };
    });
  }

  reRouteToHome() {
    this._router.navigate(["/"]);
  };

}
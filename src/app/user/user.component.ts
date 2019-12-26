import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
   
   user$: Object;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id)
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    )
  }


}

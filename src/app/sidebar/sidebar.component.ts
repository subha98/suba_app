import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   
  currentUrl: string;
  users$ : object;

  constructor(private data: DataService,private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
   }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}

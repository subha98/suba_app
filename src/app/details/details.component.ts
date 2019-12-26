import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  users$ : object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
    
  }
  
      
  

}

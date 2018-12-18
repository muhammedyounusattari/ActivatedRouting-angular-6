import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

   data =[
    {"id":1,"name":"One"},
    {"id":2,"name":"Two"},
    {"id":3,"name":"Three"},
    {"id":4,"name":"Four"}
  ];

  constructor(private router:Router) { }

  ngOnInit() {
  }
  selectedData(info){
    alert(info.id);
    this.router.navigate(["/first",info.id]);
  }
}

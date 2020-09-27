import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
name:any;
age:any;
Profession:any;
contact:any;
email:any;
  constructor() { }  
  // localStorage.clear();
  ngOnInit(): void {
    this.name=localStorage.getItem('name');
    this.age=localStorage.getItem('age');
    this.Profession=localStorage.getItem('Profession');
    this.contact=localStorage.getItem('contact');
    this.email=localStorage.getItem('email');
  }

}

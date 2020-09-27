import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data:any;
  formdata:any;
  form={
    name:'',
    age:'',
    Profession:'',
    contact:'',
    email:''
  }
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  submit(){
    localStorage.setItem('name',this.form.name);
    localStorage.setItem('age',this.form.age);
    localStorage.setItem('Profession',this.form.Profession);
    localStorage.setItem('contact',this.form.contact);
    localStorage.setItem('email',this.form.email);
    this.router.navigate(['/displaydata']);

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isimler :string[]=[];
  yerler:string[]=[];
  constructor() { }
    
  ngOnInit(): void {
    this.isimler=["Ali","mehmet","ferhat","berfin"];
  
}
}
  
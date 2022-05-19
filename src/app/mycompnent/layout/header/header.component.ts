import { Component, OnInit } from '@angular/core';
declare var hello:any;
declare var Parallax:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    hello();
  }
  ngAfterContentInit(){
    var scene=document.getElementById('text');
    var parallax=new Parallax(scene);
   relativeInput:true;
   hoverOnly:true;
   var scene1=document.getElementById('images');
   var parallax=new Parallax(scene1);




    }



  }




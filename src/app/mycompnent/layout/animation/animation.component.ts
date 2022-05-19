import { Component, OnInit } from '@angular/core';
declare var Parallax:any;


@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    var scene1=document.getElementById('scene');
    var parallax=new Parallax(scene1);

    relativeInput:true;
    hoverOnly:true;



  }

}

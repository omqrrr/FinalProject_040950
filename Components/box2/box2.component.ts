import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import * as M from 'materialize-css'
@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.css']
})
export class Box2Component implements OnInit, AfterViewInit {
  @Input() data:any;
  constructor(private router: Router){ }

  navigate(){
    this.router.navigate(['homepage/music'])
  }
  ngOnInit(): void {
  }
  
  ngAfterViewInit(){ }
}

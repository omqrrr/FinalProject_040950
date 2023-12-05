import { AfterViewInit, Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import * as M from 'materialize-css'
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, AfterViewInit {
  @Input() data:any;
  constructor(private router: Router){ }

  navigate(){
    this.router.navigate(['homepage/music'])
  }
  ngOnInit(): void {
  }
  
  ngAfterViewInit(){ }
}

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @Input() data:any;
  constructor(private router: Router){ }

  navigate(){
    this.router.navigate(['homepage/song'])
  }
  ngOnInit(): void {
  }
  
  ngAfterViewInit(){ }
}
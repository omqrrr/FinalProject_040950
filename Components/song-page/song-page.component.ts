import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.css']
})
export class SongPageComponent implements OnInit, AfterViewInit {
  @Input() data:any;
  constructor(private router: Router){ }

  navigate(){
    this.router.navigate(['homepage/song/info'])
  }
  ngOnInit(): void {
  }
  
  ngAfterViewInit(){ }
}
import { Component, OnInit } from '@angular/core';
import { TopalbumService } from 'src/app/Services/topalbums.service';

@Component({
  selector: 'app-box2-list',
  templateUrl: './box2-list.component.html',
  styleUrls: ['./box2-list.component.css']
})
export class Box2ListComponent implements OnInit{
    constructor(public topalbumService: TopalbumService){}

    ngOnInit(): void {
      //console.log(this.productService.getProducts());
      this.getTopAlbum();
    }
    
    getTopAlbum(){
      this.topalbumService.getTopalbum().subscribe(
        res => {
          this.topalbumService.topalbums = res
          console.log(this.topalbumService.topalbums);
        },
        err => {
          console.log(err);
        }
      )
    }
}
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css']
})
export class BoxListComponent implements OnInit{
    constructor(public productService: ProductsService){}

    ngOnInit(): void {
      //console.log(this.productService.getProducts());
      this.getProducts();
    }
    
    getProducts(){
      this.productService.getProducts().subscribe(
        res => {
          this.productService.products = res
          console.log(this.productService.products);
        },
        err => {
          console.log(err);
        }
      )
    }
}

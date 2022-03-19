import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  categories:any[] = [];
  constructor(private category_service: CategoryService, private product_service: ProductService) {
    category_service.get_categories().then(
      (categories)=>{
        categories.forEach(category=>{
          console.log(category);
          this.categories.push(category.val().name);}
      );
      this.categories = this.categories.sort();
  })}

  ngOnInit(): void {
  }

  save(product:any){
    this.product_service.save(product);
  }
}

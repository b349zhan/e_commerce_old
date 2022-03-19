import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, ref, push, set } from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  save(product:any){
    const db = getDatabase();
    const productRef = ref(db, 'products');
    const newProductRef = push(productRef);
    set(newProductRef,product
    );
  }
}

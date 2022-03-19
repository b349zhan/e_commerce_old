import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase, ref, child, get,  DataSnapshot} from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  get_categories(){
    
    // return this.db.list('/categories');
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `/categories/`));
  }
}

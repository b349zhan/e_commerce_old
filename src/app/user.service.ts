import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, child, get, DatabaseReference, DataSnapshot} from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private store: AngularFirestore, private db: AngularFireDatabase ) { }

  save(user: firebase.User){
    
  }


  get(uid:string): Promise<DataSnapshot>{
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `/users/${uid}`));
  }
}

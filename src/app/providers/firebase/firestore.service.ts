import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  getAll() {
    return this.angularFirestore.collection('forms');
  }

  get(path?) {
    return this.angularFirestore.collection('forms').doc('JlrXsK6iMX6CGgaa9sGP');
  }

  post(fields) {
    const form = {
      fields
    };
    return this.getAll().add(form);
  }
}

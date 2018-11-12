import { Component, OnInit } from '@angular/core';
import { DataService } from './providers/data/data.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';
import { FirestoreService } from './providers/firebase/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-forms';
  public userForm: FormlyFieldConfig[];
  @ViewChild('form') form: FormComponent;

  constructor(
    private data: DataService,
    private firestoreService: FirestoreService
  ) {

  }
  ngOnInit() {
    this.form.model = {
      name: '',
      terms: false
    };

    this.firestoreService.get().get().subscribe(data => {
      console.log(data.data());
      if (data.exists) this.form.fields = data.data().fields;
    });

    // Form submitted ==>
    this.form.submit.subscribe((submittedForm) => {
      console.log('El formulario fue submitteado ==>', submittedForm);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { DataService } from './providers/data/data.service';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ViewChild } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic-forms';
  public userForm: FormlyFieldConfig[];
  @ViewChild('form') form: FormComponent;

  constructor(private data: DataService) {

  }
  ngOnInit() {
    this.data.get('user-form').subscribe((form: FormlyFieldConfig[]) => {
      this.form.fields = form;
      this.form.model = {
        name: '',
        terms: false
      };

      // Form submitted ==>
      this.form.submit.subscribe((submittedForm) => {
        console.log('El formulario fue submitteado ==>', submittedForm);
      });
    });
  }
}


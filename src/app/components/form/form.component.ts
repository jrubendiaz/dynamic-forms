import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() fields: FormlyFieldConfig[];
  @Input() model;
  @Output() submit = new EventEmitter;

  public form = new FormGroup({});


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit(this.model);
  }

}

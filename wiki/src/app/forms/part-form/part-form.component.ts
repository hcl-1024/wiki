import { Component } from '@angular/core';
import { Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PartForm } from '../../page';

@Component({
  selector: 'app-part-form',
  standalone: true,
  imports: [],
  templateUrl: './part-form.component.html',
  styleUrl: './part-form.component.css'
})
export class PartFormComponent {

  @Input()
  currentForm!: PartForm;

  @Output()
  submittedForm = new EventEmitter()

  partForm = new FormGroup({
    heading: new FormControl('', [Validators.maxLength(100), Validators.required]),
    content: new FormControl('', [Validators.required]), 
    index: new FormControl()
  });

  get form() { return this.partForm.controls; }

  ngOnInit() {
    this.partForm.patchValue({
      heading: this.currentForm.headings, 
      content: this.currentForm.content, 
      index: this.currentForm.index
    });
  }

  formSubmitted() {
    this.submittedForm.emit(this.partForm.value)
  }

}
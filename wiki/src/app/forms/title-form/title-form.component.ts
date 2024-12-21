import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-title-form',
  standalone: true,
  imports: [],
  templateUrl: './title-form.component.html',
  styleUrl: './title-form.component.css'
})
export class TitleFormComponent {

    @Input()
    currentForm!: string;
  
    @Output()
    submittedForm = new EventEmitter()
  
    partForm = new FormGroup({
      title: new FormControl('', [Validators.maxLength(100), Validators.required]),
    });
  
    get form() { return this.partForm.controls; }
  
    ngOnInit() {
      this.partForm.patchValue({
        title: this.currentForm, 
      });
    }
  
    formSubmitted() {
      this.submittedForm.emit(this.partForm.value)
    }

}
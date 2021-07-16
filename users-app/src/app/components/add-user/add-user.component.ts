import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() onCancelEvent = new EventEmitter<boolean>()
  @Output() onSubmitEvent = new EventEmitter<FormGroup>();

  addUserForm : FormGroup;

  constructor(private fb : FormBuilder) {
    this.addUserForm = this.fb.group({
      name : new FormControl(''),
      email : new FormControl(''),
      age : new FormControl(''),
      isAdmin : new FormControl('')
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.onSubmitEvent.emit(this.addUserForm);
  }

  onCancel(){
    this.onCancelEvent.emit(false);
  }

}

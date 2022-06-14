import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signOffForm  : NgForm //using ViewChild we can use local variable from HTML
  defaultQuestion = "pet";
  answer : string = "My First Pet is ....";
  gender = ['Male','Female'];
  submitted = false;
  username1 : string;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.signOffForm);

    // To reset all values
    //this.signOffForm.reset();
    this.username1 = this.signOffForm.value.userdata.username;
    this.submitted = true;
  }
  OnClick(){
    // this.signOffForm.setValue({
    //   userdata : {username : "Nabin", email:"abc@gmail.com"},
    //   secret : 'pet',
    //   questionAnswer : 'What is your Name ?',
    //   gender : 'Male'
    // })

    //patchValue is used to set specific variable value and setValue will set all values
    this.signOffForm.form.patchValue({
      userdata : {username : "Nabin"}      
    })
  }
}

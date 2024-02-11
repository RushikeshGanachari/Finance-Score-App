import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any = {
    name: '',
    dob: '',
    qualification:'',
    occupation: '',
    mobile:'',
    email:'',
    maritalStatus: '',
    dependents: null
  };

  showDependentField: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);

  fillPercentage!: number;

  constructor() { }

  private getScore(): number {
    // Implement your logic to get the score here
    // For example, you can return a random score between 1 and 10
    return Math.floor(Math.random() * 10) + 1;
  }

  updateMeter(): void {
    const score = this.getScore();
    this.fillPercentage = (score / 10) * 100;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
    this.updateMeter();

  }

  submitForm() {
    // Logic to handle form submission

    console.log('Form submitted:', this.profile);
  }

  toggleDependentField() {
    // Toggle the visibility of the dependents field based on marital status
    this.showDependentField = (this.profile.maritalStatus === 'married');
  }

}

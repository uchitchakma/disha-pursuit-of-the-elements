import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-slide-8',
  standalone: true,
  imports: [
    RouterModule,
    FormsModule,
    CommonModule],
  templateUrl: './home-slide-8.component.html',
  styleUrl: './home-slide-8.component.scss'
})
export class HomeSlide8Component {
  @ViewChild('contactForm') contactForm!: NgForm;
  messageSent = false;
  isSendingEmail = false; // Track email sending state

  // Form input properties
  user_name: string = '';
  user_email: string = '';
  user_phone: string = '';
  size_1200: boolean = false;
  size_1500: boolean = false;
  size_1800: boolean = false;


  constructor(private router: Router) {
    emailjs.init('UjSp-NfRpp8HRL7jU'); // Initialize EmailJS with your actual user ID
  }

  validateNumber(event: any): void {
    const numericValue = event.target.value.replace(/[^0-9]/g, '');
    event.target.value = numericValue.substring(0, 10);
  }

  public sendMessage(e: Event): void {
    e.preventDefault(); // Prevent the default form submission behavior
    this.isSendingEmail = true; // Indicate that the email sending process has started

    // Your email sending logic here
    let templateParams = {
      user_name: this.user_name,
      user_email: this.user_email,
      user_phone: this.user_phone,
      size_1200: this.size_1200 ? "Yes" : "No", // Include whether the user is interested in size 1200
      size_1500: this.size_1500 ? "Yes" : "No", // Include whether the user is interested in size 1500
      size_1800: this.size_1800 ? "Yes" : "No", // Include whether the user is interested in size 1800
    };

    emailjs
      .send('service_h30xxph', 'template_j1tyg9k', templateParams)
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          // Email successfully sent
          this.messageSent = true;
          setTimeout(() => (this.messageSent = false), 3000); // Optional: Hide the message after 3 seconds
          this.contactForm.resetForm(); // Reset the form
        },
        (error) => {
          console.log(error.text); // Handle error
        }
      )
      .finally(() => {
        this.isSendingEmail = false; // Reset the email sending state
      });
}
}



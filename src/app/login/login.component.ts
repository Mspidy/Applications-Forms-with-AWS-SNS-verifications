import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  myform!: FormGroup;
  siginform!: FormGroup;
  otpform!: FormGroup;
  constructor( public service: BackendApiService, public toastr: ToastrService, public router: Router){}

  ngOnInit(){
    this.myform = new FormGroup({
      'username':new  FormControl(''),
      'mobilenumber': new FormControl('')
    });

    this.siginform = new FormGroup({
      'username': new FormControl(''),
      'email': new FormControl(''),
      'phoneNumber': new FormControl(''),
      'password': new FormControl(''),
      're-password': new FormControl('')
    });

    this.otpform = new FormGroup({
      'otpvalue': new  FormControl(''),
    })
    this.getAllUser();
  }

  otpverifcations:any
  submitForm(){
    console.log("Hello World",this.myform.value)
    if(this.myform.valid){
      let obj = {
        phone : this.myform.value.mobilenumber
      }
      console.log(obj)
      this.service.getOTP(obj).subscribe((res)=>{
        console.log('Otp send successfully on registered number',res.data.otp);
        this.otpverifcations = res.data.otp;
      })
    }
    this.myform.reset();
  }

  registerForm(){
    console.log("Register form",this.siginform.value);
    this.siginform.reset();
  }

  getAllUser(){
    this.service.getAllUser().subscribe((res)=>{
      console.log("All User Data=>",res)
    });
  }


  submitotp(){
    if(this.otpform.value.otpvalue == this.otpverifcations){
      this.toastr.success("OTP Successfully accepted");
      this.otpform.reset();
      this.router.navigateByUrl('/userdetails').then(() => {
        window.location.reload();
      });
    } else{
      this.toastr.error("OTP verifications failed");
    }
  }
}

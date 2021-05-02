import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/modules/core/services/notification.service';
import { AppConstant } from 'src/app/modules/shared/constants/app-constant';
import { AuthenticationService } from 'src/app/modules/shared/services/authentication.service';
import { sha256 } from 'js-sha256';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: any;
  otpFormGroup: any;
  txId: any;

  constructor(private authenticationService: AuthenticationService, private notificationService: NotificationService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.formGenerator();
    localStorage.clear();
  }

  formGenerator() {
    this.loginFormGroup = this.formBuilder.group({
      mobileNumber: ['', Validators.required]
    });
    this.otpFormGroup = this.formBuilder.group({
      otp: ['', Validators.required]
    });
  }

  generateOTP() {
    this.authenticationService.generateOTP({mobile : this.loginFormGroup.controls.mobileNumber.value}).subscribe(
      (data: { txnId: any; }) => {
        this.txId = data.txnId;
        this.notificationService.openSnackBar('OTP sent successfully', 'close');
      },
      (error: { error: string; }) => {
        this.notificationService.openSnackBar(error?.error, 'close');
        console.log(error);
      }
    )
  }
  generateToken() {
    this.authenticationService.generateToken({otp: sha256(this.otpFormGroup.controls.otp.value), txnId: this.txId }).subscribe(
      (data: { token: string; }) => {
        localStorage.setItem(AppConstant.TOKEN, data.token);
        this.router.navigate(['/home'])
      },
      (error: { error: {error: string} }) => {
        this.notificationService.openSnackBar(error?.error?.error, 'close');
        console.log(error);
      }
    )
  }

}

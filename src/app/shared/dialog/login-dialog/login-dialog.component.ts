import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.sass']
})
export class LoginDialogComponent implements OnInit {

  form = this.fb.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private fb: FormBuilder,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  get name() {
    return this.form.controls['name'] as FormControl
  }
  get password() {
    return this.form.controls['password'] as FormControl
  }

  loggin() {
    const success = this.authService.login(this.name.value, this.password.value)
    if (success) {
      this.dialogRef.close();
    }
  }

}

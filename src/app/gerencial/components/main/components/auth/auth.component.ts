import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../material.module';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoreService } from '../../../../../shared/store.service';

const angularModules = [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule];

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [...angularModules],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent  implements OnInit{

  isLogin = true;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
    this.createForm(); // recria o form com ou sem confirmPassword
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      ...(this.isLogin ? {} : { confirmPassword: ['', Validators.required] }),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.isLogin) {
        this.storeService.setIsLogin(true);
        this.router.navigate(['gerencial/main/home']);
      } else {
        if (this.form.value.password !== this.form.value.confirmPassword) {
          alert('As senhas não coincidem!');
          return;
        }
        console.log('Cadastro com:', this.form.value);
      }
    }
  }  
}

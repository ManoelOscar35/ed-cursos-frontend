import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../../../../material.module';
import { CommonModule } from '@angular/common';
import { StoreService } from '../../../../../shared/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  isLogin!: boolean;

  constructor(
    private storeService: StoreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.storeService.getIsLogin().subscribe({
      next: (res: boolean) => this.isLogin = res
    });
  }

  sair() {
    this.router.navigate(["gerencial/main"]);
    this.isLogin = false;
  }
}

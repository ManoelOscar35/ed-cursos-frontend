import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-gerencial',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './gerencial.component.html',
  styleUrl: './gerencial.component.scss'
})
export class GerencialComponent {

}

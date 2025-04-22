import { Component } from '@angular/core';
import { MaterialModule } from '../../../../../material.module';
import { CommonModule } from '@angular/common';

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
export class HeaderComponent {

}

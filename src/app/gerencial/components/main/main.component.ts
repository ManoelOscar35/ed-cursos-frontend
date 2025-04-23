import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { AuthComponent } from './components/auth/auth.component';

const angularModules = [CommonModule, RouterModule, MaterialModule];
const components = [ HeaderComponent, AuthComponent ];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...angularModules, ...components],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

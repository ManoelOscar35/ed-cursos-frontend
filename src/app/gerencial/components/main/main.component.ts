import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const angularModules = [CommonModule, RouterModule];
const components = [ HeaderComponent ];

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [...angularModules, ...components],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}

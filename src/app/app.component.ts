import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';

const modules = [MaterialModule];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...modules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ed-cursos';
}

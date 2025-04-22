import { Route } from '@angular/router';
import { MainComponent } from './components/main/main.component';


export default [
    {path: '', redirectTo:'main', pathMatch:'full'},
    {
        path: 'main',
        loadChildren: () => import('./components/main/main.routes'),
        component: MainComponent,
    },
   
] as Route[];
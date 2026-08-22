import { Routes } from '@angular/router';
import { Home } from './pagina/home/home';
import { NotFoundComponent } from './pagina/not-found/not-found';


export const routes: Routes = [
    {path:"", component: Home},

    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];
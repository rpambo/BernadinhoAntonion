import { Routes } from '@angular/router';
import { Home } from './pagina/home/home';
import { PaginaContacto } from './pagina/pagina-contacto/pagina-contacto';
import { PaginaSobre } from './pagina/pagina-sobre/pagina-sobre';


export const routes: Routes = [
    {path:"", component: Home},
    {path:"contato", component: PaginaContacto},
    {path:"sobre-bernardino", component: PaginaSobre}
];

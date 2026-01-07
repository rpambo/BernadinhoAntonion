import { Routes } from '@angular/router';
import { Home } from './pagina/home/home';
import { PaginaContacto } from './pagina/pagina-contacto/pagina-contacto';
import { PaginaSobre } from './pagina/pagina-sobre/pagina-sobre';
import { PaginaP7 } from './pagina/pagina-p7/pagina-p7';
import { MentoriaParaGestores } from './pagina/mentoria-para-gestores/mentoria-para-gestores';


export const routes: Routes = [
    {path:"", component: Home},
    {path:"contato", component: PaginaContacto},
    {path:"sobre-bernardino", component: PaginaSobre},
    {path:"p7", component: PaginaP7},
    {path:"mentoria-para-gestores", component: MentoriaParaGestores}
];

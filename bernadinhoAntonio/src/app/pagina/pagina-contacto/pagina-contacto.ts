import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SecaoContato } from "../../components/secao-contato/secao-contato";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-pagina-contacto',
  imports: [Navbar, SecaoContato, Footer],
  templateUrl: './pagina-contacto.html',
  styleUrl: './pagina-contacto.css',
})
export class PaginaContacto {

}

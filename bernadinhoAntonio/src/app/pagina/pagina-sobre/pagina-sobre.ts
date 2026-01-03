import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Solucao } from "../../components/solucao/solucao";
import { SecaoSobre } from "../../components/secao-sobre/secao-sobre";

@Component({
  selector: 'app-pagina-sobre',
  imports: [Navbar, Footer, Solucao, SecaoSobre],
  templateUrl: './pagina-sobre.html',
  styleUrl: './pagina-sobre.css',
})
export class PaginaSobre {

}

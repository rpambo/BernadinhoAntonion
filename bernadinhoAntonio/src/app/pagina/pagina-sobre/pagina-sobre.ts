import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Solucao } from "../../components/solucao/solucao";
import { SecaoSobre } from "../../components/secao-sobre/secao-sobre";
import { SecaoYoutube } from "../../components/secao-youtube/secao-youtube";

@Component({
  selector: 'app-pagina-sobre',
  imports: [Navbar, Footer, Solucao, SecaoSobre, SecaoYoutube],
  templateUrl: './pagina-sobre.html',
  styleUrl: './pagina-sobre.css',
})
export class PaginaSobre {

}

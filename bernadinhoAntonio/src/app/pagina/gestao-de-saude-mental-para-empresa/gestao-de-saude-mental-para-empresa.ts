import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { GestaoSecao } from "../../components/gestao-secao/gestao-secao";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-gestao-de-saude-mental-para-empresa',
  imports: [Navbar, GestaoSecao, Footer],
  templateUrl: './gestao-de-saude-mental-para-empresa.html',
  styleUrl: './gestao-de-saude-mental-para-empresa.css',
})
export class GestaoDeSaudeMentalParaEmpresa {

}

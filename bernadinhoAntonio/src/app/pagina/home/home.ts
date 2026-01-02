import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { P7 } from "../../components/p7/p7";
import { P7Existe } from "../../components/p7-existe/p7-existe";
import { Solucao } from "../../components/solucao/solucao";
import { SobreBernadino } from "../../components/sobre-bernadino/sobre-bernadino";
import { Contacto } from "../../components/contacto/contacto";
import { Footer } from "../../components/footer/footer";
import { Estatistica } from "../../components/estatistica/estatistica";


@Component({
  selector: 'app-home',
  imports: [Navbar, P7, P7Existe, Solucao, SobreBernadino, Contacto, Footer, Estatistica],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

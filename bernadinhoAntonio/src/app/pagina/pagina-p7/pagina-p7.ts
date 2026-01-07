import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { P7 } from "../../components/p7/p7";
import { P7Section } from "../../components/p7-section/p7-section";

@Component({
  selector: 'app-pagina-p7',
  imports: [Navbar, Footer, P7, P7Section],
  templateUrl: './pagina-p7.html',
  styleUrl: './pagina-p7.css',
})
export class PaginaP7 {

}

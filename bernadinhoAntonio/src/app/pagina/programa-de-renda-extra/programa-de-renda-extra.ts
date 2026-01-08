import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { RendaSection } from "../../components/renda-section/renda-section";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-programa-de-renda-extra',
  imports: [Navbar, RendaSection, Footer],
  templateUrl: './programa-de-renda-extra.html',
  styleUrl: './programa-de-renda-extra.css',
})
export class ProgramaDeRendaExtra {

}

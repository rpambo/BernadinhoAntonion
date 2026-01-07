import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { MentoriaSection } from "../../components/mentoria-section/mentoria-section";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-mentoria-para-gestores',
  imports: [Navbar, MentoriaSection, Footer],
  templateUrl: './mentoria-para-gestores.html',
  styleUrl: './mentoria-para-gestores.css',
})
export class MentoriaParaGestores {

}

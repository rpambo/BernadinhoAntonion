import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Estatistica } from "../../components/estatistica/estatistica";
import { P7 } from "../../components/p7/p7";
import { GestaoSecao } from "../../components/gestao-secao/gestao-secao";
import { P7Existe } from "../../components/p7-existe/p7-existe";
import { Contacto } from "../../components/contacto/contacto";
import { RouterLink } from "@angular/router"

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer, CommonModule, Estatistica, P7, GestaoSecao, P7Existe, Contacto, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.setMetaTags();
    this.addStructuredData();
  }

  private setMetaTags(): void {
    this.titleService.setTitle('Dr. Bernardino António | Especialista em Saúde Mental | Angola');

    this.meta.updateTag({
      name: 'description',
      content: 'Dr. Bernardino António é psicólogo clínico especialista em saúde mental, bem-estar emocional, produtividade humana e programas corporativos em Angola.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'Bernardino António, psicólogo Angola, saúde mental Angola, psicologia clínica Luanda, bem-estar corporativo, burnout Angola, coaching emocional'
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: 'Dr. Bernardino António – Psicólogo Clínico em Angola' });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Atendimento, programas de saúde mental e soluções corporativas para equilíbrio emocional e performance humana.' 
    });
    this.meta.updateTag({ property: 'og:image', content: 'https://bernardinoantonio.com/assets/images/og-image.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://bernardinoantonio.com' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Dr. Bernardino António – Especialista em Saúde Mental' });
    this.meta.updateTag({ 
      name: 'twitter:description', 
      content: 'Psicólogo clínico com experiência em saúde mental, bem-estar corporativo e desenvolvimento emocional em Angola.' 
    });
    this.meta.updateTag({ name: 'twitter:image', content: 'https://bernardinoantonio.com/assets/images/twitter-card.jpg' });

    // Autor, robots
    this.meta.updateTag({ name: 'author', content: 'Dr. Bernardino António' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' });

    // Canonical
    this.meta.updateTag({ rel: 'canonical', href: 'https://bernardinoantonio.com' });

    // Geo tags
    this.meta.updateTag({ name: 'geo.region', content: 'AO-LUA' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Luanda' });
    this.meta.updateTag({ name: 'geo.position', content: '-8.839988;13.289437' });
    this.meta.updateTag({ name: 'ICBM', content: '-8.839988, 13.289437' });
  }

  private addStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': 'Dr. Bernardino António',
      'jobTitle': 'Psicólogo Clínico',
      'description': 'Especialista em saúde mental, bem-estar emocional e performance no trabalho.',
      'url': 'https://bernardinoantonio.com',
      'image': 'https://bernardinoantonio.com/assets/images/bernardino.jpg',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Luanda',
        'addressCountry': 'AO'
      },
      'knowsAbout': [
        'Saúde Mental',
        'Psicologia Clínica',
        'Inteligência Emocional',
        'Desenvolvimento Humano',
        'Produtividade',
        'Burnout'
      ],
      // Ligações dos projetos dele
      'sameAs': [
        'https://gestdreams.com',
        'https://ondabranca.com'
      ],
      // Área profissional e social
      'worksFor': {
        '@type': 'Organization',
        'name': 'GestDreams'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}

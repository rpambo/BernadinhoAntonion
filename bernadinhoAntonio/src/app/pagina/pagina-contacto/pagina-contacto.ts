import { Component, OnInit } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { SecaoContato } from "../../components/secao-contato/secao-contato";
import { Footer } from "../../components/footer/footer";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagina-contacto',
  imports: [Navbar, SecaoContato, Footer],
  templateUrl: './pagina-contacto.html',
  styleUrl: './pagina-contacto.css',
})

export class PaginaContacto implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.setMetaTags();
    this.addStructuredData();
  }

  private setMetaTags(): void {
    this.titleService.setTitle('Contacto | Dr. Bernardino António | Saúde Mental Angola');

    this.meta.updateTag({
      name: 'description',
      content: 'Entre em contacto com o Dr. Bernardino António para consultas, formações, palestras e serviços de saúde mental em Angola.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'contacto Bernardino António, psicólogo Angola, saúde mental Angola, consultas, formação, bem-estar'
    });

    this.meta.updateTag({ property: 'og:title', content: 'Contacto | Dr. Bernardino António' });
    this.meta.updateTag({ property: 'og:description', content: 'Entre em contacto para serviços de saúde mental e bem-estar.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://bernardinoantonio.com/contacto' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Contacto | Bernardino António' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Informações de contacto do Dr. Bernardino António.' });

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  private addStructuredData(): void {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contacto - Dr. Bernardino António',
      'description': 'Página de contacto oficial do especialista em saúde mental Bernardino António.',
      'url': 'https://bernardinoantonio.com/contacto',
      'mainEntity': {
        '@type': 'Person',
        'name': 'Dr. Bernardino António',
        'url': 'https://bernardinoantonio.com'
      },
      'sameAs': [
        'https://gestdreams.com',
        'https://ondabranca.com'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
}

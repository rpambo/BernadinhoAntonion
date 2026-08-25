import { Component, OnInit } from '@angular/core';
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Estatistica } from '../../components/sobre-dr-bernardino/estatistica';
import { P7 } from '../../components/p7/p7';
import { GestaoSecao } from '../../components/portifolio/gestao-secao';
import { P7Existe } from '../../components/podacast-section/p7-existe';
import { Contacto } from '../../components/servico/contacto';

@Component({
  selector: 'app-home',
  imports: [
    Footer,
    CommonModule,
    Estatistica,
    P7,
    GestaoSecao,
    P7Existe,
    Contacto
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
    this.addStructuredData();
  }

  private setMetaTags(): void {

    /*
     * ================================
     * BASIC SEO
     * ================================
     */

    this.titleService.setTitle(
      'Dr. Bernardino António | Medicina do Trabalho e Saúde Mental | Angola'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Dr. Bernardino António é Médico Especialista em Medicina do Trabalho, Coach e Treinador de Inteligência Emocional, com 16 anos de experiência em saúde mental, gestão do stress, bem-estar e qualidade de vida no trabalho em Angola.'
    });

    this.meta.updateTag({
      name: 'author',
      content: 'Dr. Bernardino António'
    });

    this.meta.updateTag({
      name: 'robots',
      content:
        'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    });

    /*
     * ================================
     * CANONICAL
     * ================================
     */

    this.updateCanonical(
      'https://bernardinoantonio.ao/'
    );

    /*
     * ================================
     * OPEN GRAPH
     * ================================
     */

    this.meta.updateTag({
      property: 'og:title',
      content:
        'Dr. Bernardino António | Medicina do Trabalho e Saúde Mental'
    });

    this.meta.updateTag({
      property: 'og:description',
      content:
        'Médico Especialista em Medicina do Trabalho, Coach e Treinador de Inteligência Emocional. 16 anos de experiência em saúde mental, gestão do stress e bem-estar corporativo.'
    });

    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });

    this.meta.updateTag({
      property: 'og:url',
      content:
        'https://bernardinoantonio.ao/'
    });

    this.meta.updateTag({
      property: 'og:site_name',
      content:
        'Dr. Bernardino António'
    });

    this.meta.updateTag({
      property: 'og:locale',
      content: 'pt_AO'
    });

    /*
     * IMPORTANTE:
     * Substituir por uma URL pública e permanente
     * da imagem.
     */
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://bernardinoantonio.ao/imagens/bernadino-antonio.png'
    });

    this.meta.updateTag({
      property: 'og:image:alt',
      content:
        'Dr. Bernardino António'
    });

    /*
     * ================================
     * TWITTER / X
     * ================================
     */

    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });

    this.meta.updateTag({
      name: 'twitter:title',
      content:
        'Dr. Bernardino António | Medicina do Trabalho e Saúde Mental'
    });

    this.meta.updateTag({
      name: 'twitter:description',
      content:
        'Médico Especialista em Medicina do Trabalho, Coach e Treinador de Inteligência Emocional, com 16 anos de experiência.'
    });

    this.meta.updateTag({
      name: 'twitter:image',
      content:
        'https://bernardinoantonio.ao/imagens/bernadino-antonio.png'
    });

    this.meta.updateTag({
      name: 'twitter:image:alt',
      content:
        'Dr. Bernardino António'
    });

    /*
     * ================================
     * LOCAL SEO
     * ================================
     */

    this.meta.updateTag({
      name: 'geo.region',
      content: 'AO-LUA'
    });

    this.meta.updateTag({
      name: 'geo.placename',
      content: 'Luanda'
    });

    this.meta.updateTag({
      name: 'geo.position',
      content: '-8.839988;13.289437'
    });

    this.meta.updateTag({
      name: 'ICBM',
      content: '-8.839988, 13.289437'
    });
  }

  private updateCanonical(url: string): void {

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }

  private addStructuredData(): void {

    /*
     * ==========================================
     * PERSON
     * ==========================================
     */

    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',

      '@id':
        'https://bernardinoantonio.ao/#person',

      name:
        'Dr. Bernardino António',

      url:
        'https://bernardinoantonio.ao/',

      image:
        'https://bernardinoantonio.ao/imagens/bernadino-antonio.png',

      jobTitle:
        'Médico Especialista em Medicina do Trabalho',

      description:
        'Médico Especialista em Medicina do Trabalho, Coach e Treinador de Inteligência Emocional, Treinador de Gestão do Stress e promotor da saúde mental no trabalho, com 16 anos de experiência em intervenções corporativas.',

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Luanda',
        addressCountry: 'AO'
      },

      knowsAbout: [
        'Medicina do Trabalho',
        'Saúde Mental no Trabalho',
        'Inteligência Emocional',
        'Gestão do Stress',
        'Gestão do Stress Ocupacional',
        'Bem-estar Corporativo',
        'Qualidade de Vida no Trabalho',
        'Felicidade Corporativa',
        'Desenvolvimento Humano',
        'Produtividade Humana',
        'Saúde Ocupacional',
        'Burnout'
      ],

      hasOccupation: {
        '@type': 'Occupation',
        name: 'Médico Especialista em Medicina do Trabalho'
      },

      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universidade Nova de Lisboa'
      },

      memberOf: {
        '@type': 'Organization',
        name: 'International Stress Management Association'
      },

      worksFor: {
        '@type': 'Organization',
        name: 'GestDreams',
        url: 'https://gestdreams.com'
      },

      sameAs: [
        'https://gestdreams.com',
        'https://ondabrancaangola.com'
      ]
    };

    /*
     * ==========================================
     * ORGANIZATION
     * ==========================================
     */

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',

      '@id':
        'https://bernardinoantonio.ao/#organization',

      name:
        'GestDreams',

      url:
        'https://gestdreams.com',

      employee: {
        '@id':
          'https://bernardinoantonio.ao/#person'
      }
    };

    /*
     * ==========================================
     * WEBSITE
     * ==========================================
     */

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',

      '@id':
        'https://bernardinoantonio.ao/#website',

      name:
        'Dr. Bernardino António',

      url:
        'https://bernardinoantonio.ao/',

      description:
        'Site oficial do Dr. Bernardino António, Médico Especialista em Medicina do Trabalho, Coach e Treinador de Inteligência Emocional.',

      inLanguage: 'pt-AO',

      publisher: {
        '@id':
          'https://bernardinoantonio.ao/#person'
      }
    };

    /*
     * ==========================================
     * MOVIMENTO ONDA BRANCA
     * ==========================================
     */

    const ondaBrancaSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',

      name:
        'Movimento Onda Branca',

      url:
        'https://ondabrancaangola.com',

      description:
        'Movimento focado na promoção da saúde mental, bem-estar, qualidade de vida e desenvolvimento humano no contexto corporativo.'
    };

    /*
     * ==========================================
     * INSERT JSON-LD
     * ==========================================
     */

    this.insertStructuredData(
      'person-schema',
      personSchema
    );

    this.insertStructuredData(
      'organization-schema',
      organizationSchema
    );

    this.insertStructuredData(
      'website-schema',
      websiteSchema
    );

    this.insertStructuredData(
      'onda-branca-schema',
      ondaBrancaSchema
    );
  }

  private insertStructuredData(
    id: string,
    data: object
  ): void {

    const existingScript = document.getElementById(id);

    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');

    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);

    document.head.appendChild(script);
  }
}
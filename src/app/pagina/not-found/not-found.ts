import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="not-found-container">
      <div class="not-found-content">
        <h1 class="error-code">404</h1>
        <h2 class="error-title">Página Não Encontrada</h2>
        <p class="error-message">
          Desculpa, a página que você está procurando não existe ou foi movida.
        </p>
        <div class="error-actions">
          <button class="uk-button uk-button-primary" (click)="goHome()">
            Voltar para Home
          </button>
          <button class="uk-button uk-button-secondary" (click)="goBack()">
            Voltar Anterior
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .not-found-container {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 80vh;
      background: linear-gradient(135deg, #012933, #1a3a47);
      color: #fff;
      padding: 40px 20px;
    }

    .not-found-content {
      text-align: center;
      max-width: 500px;
    }

    .error-code {
      font-size: 120px;
      font-weight: 900;
      margin: 0;
      background: linear-gradient(135deg, #a47b67, #c9956f);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
      font-family: "Urbanist";
    }

    .error-title {
      font-size: 32px;
      margin: 20px 0 15px 0;
      font-weight: 600;
      color: #a47b67;
      font-family: "Urbanist";
    }

    .error-message {
      font-size: 16px;
      color: #ccc;
      margin-bottom: 40px;
      line-height: 1.6;
    }

    .error-actions {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .uk-button {
      padding: 12px 30px;
      border: none;
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      display: inline-block;
    }

    .uk-button-primary {
      background-color: #a47b67;
      color: white;
      border: 2px solid #a47b67;
    }

    .uk-button-primary:hover {
      background-color: #fa8072;
      border: 2px solid #fa8072;
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(164, 123, 103, 0.3);
    }

    .uk-button-secondary {
      background: rgba(164, 123, 103, 0.1);
      color: #a47b67;
      border: 2px solid #a47b67;
    }

    .uk-button-secondary:hover {
      background-color: #a47b67;
      color: white;
      border: 2px solid #fa8072;
      transform: translateY(-2px);
    }

    @media (max-width: 600px) {
      .error-code {
        font-size: 80px;
      }

      .error-title {
        font-size: 24px;
      }

      .error-actions {
        flex-direction: column;
      }

      .uk-button {
        width: 100%;
      }
    }
  `]
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Atualizar meta tags para 404
    document.title = '404 - Página Não Encontrada | Rafael Pambo';
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  goBack(): void {
    window.history.back();
  }
}

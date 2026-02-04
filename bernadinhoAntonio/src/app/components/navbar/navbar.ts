import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  lastScrollTop = 0;
  showWhiteNavbar = false;
  showTransparenteNavbar = true;
  hideNavbar = false;
  hidenNavbarBottom = true;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // scroll para BAIXO -> esconder navbar
      this.hideNavbar = true;
      this.hidenNavbarBottom = false;
      this.showWhiteNavbar = false;
      this.showTransparenteNavbar = true;
    } else if (currentScroll < this.lastScrollTop) {
      // scroll para CIMA -> mostrar navbar
      this.hideNavbar = false;
      this.hidenNavbarBottom= true;
      if (currentScroll > 100) {
        this.showWhiteNavbar = true;
        this.showTransparenteNavbar = true;
      } else {
        this.showWhiteNavbar = false;
        this.showTransparenteNavbar = false;
      }
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
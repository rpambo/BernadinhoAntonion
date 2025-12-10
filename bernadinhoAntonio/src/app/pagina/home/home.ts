import { Component } from '@angular/core';
import { SlideLogo } from '../../components/slide-logo/slide-logo';
import { SobreBernadino } from '../../components/sobre-bernadino/sobre-bernadino';
import { Back } from "../../components/back/back";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [SlideLogo, SobreBernadino, Back, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

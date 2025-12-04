import { Component } from '@angular/core';
import { SlideLogo } from '../../components/slide-logo/slide-logo';
import { SobreBernadino } from '../../components/sobre-bernadino/sobre-bernadino';

@Component({
  selector: 'app-home',
  imports: [SlideLogo, SobreBernadino],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

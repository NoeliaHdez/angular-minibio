import { NgLocaleLocalization } from '@angular/common';
import { Component } from '@angular/core';
import { NoPreloading } from '@angular/router';
import {
  faBlogger,
  faGithub,
  faLinkedin,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Minibio';
  isNight = false;
  btnNightMode = faMoon;
  isSun = faSun;
  isMoon = faMoon;
  isGithub = faGithub;
  isLinkedin = faLinkedin;
  isBlog = faBlogger;
  isGmail = faEnvelope;

  socialNetwork = [
    {
      img: this.isBlog,
      text: 'Mi blog',
      link: 'https://blogger.com',
    },
    {
      img: this.isGithub,
      text: 'Perfil de GitHub',
      link: 'https://github.com/NoeliaHdez',
    },
    {
      img: this.isLinkedin,
      text: 'LinkedIn',
      link:
        'https://www.linkedin.com/in/noelia-hern%C3%A1ndez-jim%C3%A9nez-99548920a/',
    },
    {
      img: this.isGmail,
      text: 'Gmail',
      link: 'noelia.hdezjimenez@gmail.com',
    },
  ];

  changeMode() {
    this.isNight = !this.isNight;
    if (this.isNight) {
      this.btnNightMode = faSun;
    } else {
      this.btnNightMode = faMoon;
    }
  }
}

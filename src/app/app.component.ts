import { Component } from '@angular/core';
import {
  faBlogger,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

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
  isInstagram = faInstagram;

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
      img: this.isInstagram,
      text: 'Instagram',
      link: 'https://www.instagram.com/accounts/login/',
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

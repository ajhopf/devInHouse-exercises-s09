import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.css']
})
export class LocalStorageComponent {
  userEmail: string = '';
  userPassword: string = '';

  constructor(
    private localStorage: LocalStorageService
  ) { };

  saveInfos(event: Event) {
    event.preventDefault();

    this.localStorage.set('email', event.target[0].value);
    this.localStorage.set('password', event.target[1].value);
  }

  getInfos() {
    this.userEmail = this.localStorage.get('email');
    this.userPassword = this.localStorage.get('password');
  }
}

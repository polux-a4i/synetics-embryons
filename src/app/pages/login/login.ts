import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'syn-login',
  imports: [ButtonModule, CardModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {}

import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'syn-login',
  imports: [ButtonModule, CardModule, InputTextModule, FloatLabel],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {}

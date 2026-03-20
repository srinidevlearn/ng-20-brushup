import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-login',
  imports: [MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}

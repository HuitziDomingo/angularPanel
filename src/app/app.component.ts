import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersService = inject(UsersService)

  constructor() { }

  ngOnInit() {
    this.usersService
  }

  


}

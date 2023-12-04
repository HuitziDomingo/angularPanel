import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { UsersService } from './services/users.service'
import { PetitionsService } from './services/petitions.service'
import { PetitionsHttpService } from './services/petitionsHttp.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersService = inject(UsersService)
  petitionsService = inject(PetitionsService)
  petitionsHttpService = inject(PetitionsHttpService)

  constructor() { }

  ngOnInit() {
    // this.usersService
    this.petitionsService
    this.petitionsHttpService
  }



  getPost() {
    this.petitionsHttpService.petitionHTTP().subscribe({
      next: (res) => {
        console.log(res)
      }
    })
  }



}

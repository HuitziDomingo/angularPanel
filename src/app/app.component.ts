import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { PetitionsHttpService } from './services/petitionsHttp.service'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  petitionsHttpService = inject(PetitionsHttpService)
  form!: FormGroup
  loading: boolean = false
  videoName = new FormControl('')
  video = new FormControl('')


  constructor(
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      videoName: ['', [
        Validators.required,
        Validators.maxLength(2)
      ]],
      video: ['', [Validators.required,
      Validators.maxLength(2)
      ]],
    })
  }

  ngOnInit() { }


  createPost() {
    let post = {
      id: 1,
      email: "user@example.com",
      first_name: "huitzi",
      last_name: "leon",
      avatar: "https://imagen.jpg"
    }

    this.petitionsHttpService.createUsers(post).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log(error)
    })

  }


  addVideo() {
    console.log(this.videoName.value, this.video.value)
  }


}

import { Component, OnInit, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PetitionsHttpService } from '../services/petitionsHttp.service'
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent implements OnInit {

  petitionsHttpService = inject(PetitionsHttpService)
  form!: FormGroup
  loading: boolean = false
  videoName = new FormControl('')
  video = new FormControl('')


  constructor(
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      videoName: ['', Validators.required, Validators.minLength(100)],
      video: ['', Validators.required],
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
    console.log(this.video.value, this.videoName.value)
  }
}

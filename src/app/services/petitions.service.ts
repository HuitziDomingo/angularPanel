import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class PetitionsService {

  constructor() {

  }


  createPost() {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify({
        name: "morpheus",
        job: "leader"
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }


}

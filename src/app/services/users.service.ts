import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly http = inject(HttpClient)
  constructor() {
    this.loadData()
  }
  
  
  async loadData() {
    // this.http.get('https://reqres.in/api/users').subscribe(res => console.log(res))
    let users = await fetch('https://reqres.in/api/users')
    let data = await users.json()
    // console.log(data.data)
  }


}

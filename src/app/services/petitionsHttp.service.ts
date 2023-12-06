import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { UsersResponse,User } from '../interfaces/users.interface'

@Injectable({
  providedIn: 'root'
})
export class PetitionsHttpService {

  constructor(
    private readonly http: HttpClient
  ) {
    // this.petitionHTTP()
  }


  petitionHTTP() {
    return this.http.get<UsersResponse>('https://reqres.in/api/users')
  }


  createUsers(post: User) {
    return this.http.post('https://reqres.in/api/users', post)
  }


}

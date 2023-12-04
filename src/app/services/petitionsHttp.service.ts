import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PetitionsHttpService {

  constructor(
    private readonly http: HttpClient
  ) { 
    // this.petitionHTTP()
  }


  public petitionHTTP() {
    return this.http.get('https://reqres.in/api/users')
  }


}

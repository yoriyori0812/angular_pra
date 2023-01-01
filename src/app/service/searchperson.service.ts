import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Person {
  id: string;
  name: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchpersonService {

  private IsPerson: boolean = false;

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    observe: 'body',
    params: null,
    responseType: 'json'
  };

  private host: string = 'http://localhost:8080/person';

  constructor(private http: HttpClient) { }

  public async search(id: string) {
    let url = `${this.host}?id=${id}`;
    return this.http.get<Person>(url)
    .toPromise();
  }

  getIsPerson() :boolean {
    return this.IsPerson;
  }
  setIsPerson(isPerson:boolean) {
    this.IsPerson = isPerson;
  }

}

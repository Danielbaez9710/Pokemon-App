import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokedex: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //! Variable utilizada en la peticion GET por si se necesita enviar headers de autenticacion
    const requestOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic dXNlcjoyNTg0MThhNy00YzUxLTQ5ODgtYWQwYy1iYTgzZDUwMmE2ZDg='
      }),
    };

    this.http.get('http://localhost:8080/api/pokedex').subscribe(response => {
      this.pokedex = response;

      console.log(response);
    });




  }
}

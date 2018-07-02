import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  constructor(private http: HttpClient) { }
  turnON = '../../assets/imgs/turnON.png';
  turnOFF = '../../assets/imgs/turnOFF.png';
  url_api = 'http://api.thingspeak.com/channels/529312/feed/last.json';
  ngOnInit() {
    this.http.get(this.url_api).subscribe (
      dados => {
        console.log(dados);
        return dados;
    });
  }

}

import { getLocaleCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Entidades/usuario';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor() {
  }

  ngOnInit(): void {
    // Guardamos en localstorage en JSON
    this.usuario.nombre = "Franco";
    this.usuario.apellido = "Lippi";
    localStorage.setItem("usuario", JSON.stringify(this.usuario));

    // Leemos del localstorage
    let usr = localStorage.getItem("usuario");
    console.info(usr);
    if (usr) {
      usr = JSON.parse(usr);
    }
    console.info(usr);
  }



}

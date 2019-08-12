import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

import { Estado } from '../../estado/entidade/estado';
import { Cidade } from '../entidade/cidade';

@Component({
  selector: 'app-salvar',
  templateUrl: './salvar.page.html',
  styleUrls: ['./salvar.page.scss'],
})

export class SalvarPage implements OnInit {
  //objeto para vincular aos campos do formulário
  cidade: Cidade = new Cidade();
  //lista de estado para inserir no combobox
  listaEstado: Observable<Estado[]>;

  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))
    );
  }

  ngOnInit() {

  }

  salvar(){
    this.fire.list('cidade').push(this.cidade);
    this.cidade = new Cidade();
    this.rota.navigate(['listar-cidade']);
  }


}

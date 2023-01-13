import { Transferencia } from './../services/models/transferencia.model';
import { TransferService } from './../services/transfer.service';
import { HttpClient } from '@angular/common/http';
import { outputAst } from "@angular/compiler";
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:'app-new-transfer',
    templateUrl: './new-transfer.component.html',
    styleUrls:['./new-transfer.component.scss'],
})

export class newTransferComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferService, private router: Router) {}

  transfer(){
    console.log('Requested new bank transfer');

    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe((resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extract');
    },
    (error) => console.error(error));
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}

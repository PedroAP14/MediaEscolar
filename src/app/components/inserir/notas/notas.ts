import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  standalone: false,
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas {
  nome: string | null = null;
  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  media: number | null = null;
  situacao: string | null = null;
  turma: any[] = [];

  restaurasDados(): void {
    this.nome = null;
    this.n1 = 0;
    this.n2 = 0;
    this.n3 = 0;
    this.media = null;
    this.situacao = null;
  }

  calcularMedia(): void {

    if (this.nome == null) {
      alert("Insira um nome válido");
      return;
    }
    if ((this.n1 < 0 || this.n2 < 0 || this.n3 < 0) || (this.n1 > 10 || this.n2 > 10 || this.n3 > 10)) {
      alert("Insira notas válidas");
      return;
    }
    else {
      this.media = (this.n1 + this.n2 + this.n3) / 3;
      this.media = Math.round(this.media * 10) / 10;

      switch (true) {
        case (this.media >= 7):
          this.situacao = "APROVADO";
          break;
        case (this.media >= 5):
          this.situacao = "RECUPERAÇÃO";
          break;
        case (this.media >= 0):
          this.situacao = "REPROVADO";
      }
    }

    

  }



}

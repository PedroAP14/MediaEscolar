import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  standalone: false,
  templateUrl: './notas.html',
  styleUrl: './notas.css',
})
export class Notas {
  nome: string | null = null;
  n1: number | null = null;
  n2: number | null = null;
  n3: number | null = null;
  media: number | null = null;
  situacao: string | null = null;
  turma: { nome: string; media: number }[] = [];
  mediaTurma: number | null = null;

  restaurasDados(): void { // vai limpar os dados do formulário
    this.nome = null;
    this.n1 = null;
    this.n2 = null;
    this.n3 = null;
    this.media = null;
    this.situacao = null;

  }

  calcularMedia(): void { //calcula a média

    if (this.nome == null || this.nome.trim() === "") { // caso o nome for nulo ou vazio, o cálculo não ocorre
      alert("Insira um nome válido");
      return;
    }
    if (this.n1 == null || this.n2 == null || this.n3 == null) { // caso alguma das notas forem nulas, o cálculo não ocorre
      alert("Insira todas as notas");
      return;
    }
    if ((this.n1 < 0 || this.n2 < 0 || this.n3 < 0) || (this.n1 > 10 || this.n2 > 10 || this.n3 > 10)) { // caso alguma das notas apresente valor inválido, o cálculo não ocorre
      alert("Insira notas válidas");
      return;
    }
    else {
      this.media = (this.n1 + this.n2 + this.n3) / 3; //calcula a média
      this.media = Math.round(this.media * 10) / 10; // arredonda a média

      switch (true) { // define o status do aluno com base na sua média
        case (this.media >= 7):
          this.situacao = "APROVADO"; // maior ou igual a 7, aprovado
          break;
        case (this.media >= 5):
          this.situacao = "RECUPERAÇÃO"; // maior ou igual a 5 e menor que 7, recuperação 
          break;
        case (this.media >= 0):
          this.situacao = "REPROVADO"; // maior ou igual a 0 e menor que 5, reprovado
          break;
        }
    }

  }

  registrar(): void { //registra o aluno na turma
    let soma = 0;

    if (this.nome == null || this.media == null) { // caso a média não seja calculada não vai registrar
      alert("Calcule a média antes de registrar");
      return;
    }

    this.turma.push({ nome: this.nome.trim(), media: this.media }) // insere o aluno na turma

    for (let i = 0; i < this.turma.length; i++) { //percorre cada aluno da turma e soma a sua média
      soma = soma + this.turma[i].media;
    }

    this.mediaTurma = Math.round((soma / this.turma.length) * 10) / 10; // calcula a média da turma
  }

  restaurarTurma(): void { // Vai apagar a turma
    this.turma = [];
    this.mediaTurma = null;

  }

}

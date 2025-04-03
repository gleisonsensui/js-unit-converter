import UnidadeModel from './UnidadeModel.js';

export default class ConversorController {
  constructor() {
    this.unidade = new UnidadeModel();
    this.qtdEntry = document.querySelector('#qtd-unit');
    this.fromEntry = document.querySelector('#from');
    this.toEntry = document.querySelector('#to');
    this.resultOutput = document.querySelector('#output');
    this.messageOutput = document.querySelector('#message');
    this.btnConverter = document.querySelector('#btn-converter');

    this.execBtnAction();
  }

  execBtnAction() {
    this.btnConverter.addEventListener('click', () => {
      let qtdValue = this.qtdEntry.value;
      let fromValue = this.fromEntry.value;
      let toValue = this.toEntry.value;

      this.getQuantidade(qtdValue);
      this.getFromEntry(fromValue);
      this.getToEntry(toValue);
      this.calcularResultado(fromValue, toValue, qtdValue);
      this.clearQuantidade();
    });
  }

  clearQuantidade() {
    this.qtdEntry.value = '';
  }

  getQuantidade(value) {
    this.unidade.quantidade = value;
  }

  getFromEntry(value) {
    this.unidade.origemUnidade = value;
  }

  getToEntry(value) {
    this.unidade.destinoUnidade = value;
  }

  calcularResultado(origem, destino, value) {
    let conversao = 0;
    if (origem === 'km' && destino === 'm') {
      conversao = value * 1000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'km' && destino === 'cm') {
      conversao = value * 10000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'km' && destino === 'mm') {
      conversao = value * 100000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'm' && destino === 'cm') {
      conversao = value * 100;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'm' && destino === 'mm') {
      conversao = value * 1000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'm' && destino === 'km') {
      conversao = value / 1000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'cm' && destino === 'mm') {
      conversao = value * 10;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'cm' && destino === 'km') {
      conversao = value / 10000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'cm' && destino === 'm') {
      conversao = value / 100;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'mm' && destino === 'km') {
      conversao = value / 100000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'mm' && destino === 'm') {
      conversao = value / 1000;
      this.showOutput(origem, destino, value, conversao);
    } else if (origem === 'mm' && destino === 'cm') {
      conversao = value / 10;
      this.showOutput(origem, destino, value, conversao);
    } else {
      conversao = value;
      this.showOutput(origem, destino, value, conversao);
    }
  }

  showOutput(origem, destino, value, conversao) {
    let message = `Foi convertido ${value}${origem} para ${conversao}${destino}`;
    this.unidade.message = message;
    this.unidade.resultado = conversao;
    this.resultOutput.value = conversao;
    this.messageOutput.textContent = message;
  }
}

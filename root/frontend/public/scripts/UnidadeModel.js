'use strict';

export default class UnidadeModel {
  constructor() {
    this._quantidade = 0;
    this._origemUnidade = 0;
    this._destinoUnidade = 0;
    this._resultado = 0;
    this._message = '';
  }

  get quantidade() {
    return this._quantidade;
  }

  set quantidade(value) {
    this._quantidade = value;
  }

  get origemUnidade() {
    return this._origemUnidade;
  }

  set origemUnidade(value) {
    this._origemUnidade = value;
  }

  get destinoUnidade() {
    return this._destinoUnidade;
  }

  set destinoUnidade(value) {
    this._destinoUnidade = value;
  }

  get resultado() {
    return this._resultado;
  }

  set resultado(value) {
    this._resultado = value;
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }
}

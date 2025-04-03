import './Converter.css';

export default class ConverterComponent extends HTMLElement {
  constructor() {
    super();
    this.markup = `
        <div class="input-group">
          <label for="qtd-unit">Digite a quantidade:</label>
          <input type="number" name="qtd-unit" id="qtd-unit" />
        </div>
        <div class="input-group">
          <label for="from">De:</label>
          <select name="from" id="from">
            <option value="km">Quilometro(s)</option>
            <option value="m">Metro(s)</option>
            <option value="cm">Centimetro(s)</option>
            <option value="mm">Milimetros(s)</option>
          </select>
        </div>
        <div class="input-group">
          <label for="to">De:</label>
          <select name="to" id="to">
            <option value="km">Quilometro(s)</option>
            <option value="m">Metro(s)</option>
            <option value="cm">Centimetro(s)</option>
            <option value="mm">Milimetros(s)</option>
          </select>
        </div>
        <button type="button" id="btn-converter">Converter</button>
        <div id="ouput-group">
            <label for="output">Resultado:</label>
            <input type="text" id="output" readonly>
        </div>
        <id id="message"></id>
      </div>`;

    this.innerHTML = this.markup;
  }

  connectedCallback() {
    console.log('componente converter carregado com sucesso.');
  }
}

customElements.define('converter-field', ConverterComponent);

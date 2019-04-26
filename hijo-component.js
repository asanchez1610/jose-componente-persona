import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `hijo-component`
 * Formulario de persona
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class HijoComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

      </style>
      <h2>Hijo</h2>
      <input value = {{texto::input}} >
      <h2>[[texto]]</h2>
    `;
  }
  static get properties() {
    return {
      texto: {
        type: String,
        value: '',
        notify: true
      },
    };
  }
}

window.customElements.define('hijo-component', HijoComponent);

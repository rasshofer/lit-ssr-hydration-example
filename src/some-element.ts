import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('some-element')
export class SomeElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: 1px solid black;
      padding: 1rem;
    }
  `;

  @property()
  name = 'World';

  @property({ type: Number })
  count = 0;

  private handleClick() {
    this.count++;
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this.handleClick}>Click Count: ${this.count}</button>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'some-element': SomeElement;
  }
}

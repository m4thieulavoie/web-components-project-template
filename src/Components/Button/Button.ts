import styles from "./Buttons.styles.scss";
import { WebComponent } from "../Component/WebComponent";
import { html } from "lit-html";

export class ButtonComponent extends WebComponent {
  static get observedAttributes() {
    return ["dark"];
  }
  constructor() {
    super({
      style: styles,
    });
  }

  render() {
    return html`
      <button
        class="${this.applyClasses([
          {
            apply: this.hasAttribute("dark"),
            className: "dark",
          },
        ])}"
      >
        <slot></slot>
      </button>
    `;
  }
}

window.customElements.define("app-button", ButtonComponent);

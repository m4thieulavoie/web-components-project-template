import styles from "./Buttons.styles.scss";
import { applyStyleToElement } from "sass-to-string";

export class ButtonComponent extends HTMLButtonElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.classList.add("wc-button");
    applyStyleToElement(this, styles);
  }
}

window.customElements.define("app-button", ButtonComponent, {
  extends: "button",
});

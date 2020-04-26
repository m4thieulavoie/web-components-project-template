import styles from "./Banner.styles.scss";
import { html } from "lit-html";
import { WebComponent } from "../Component/WebComponent";

export class BannerComponent extends WebComponent {
  static get observedAttributes() {
    return [""];
  }
  constructor() {
    super({
      style: styles,
    });
  }

  render() {
    const closeButton = document.createElement("button");
    closeButton.onclick = () => this.remove();
    closeButton.textContent = "✖";
    return html`
      <slot></slot>
      <button @click="${() => this.remove()}">✖</button>
    `;
  }
}

window.customElements.define("app-banner", BannerComponent);

import styles from "./Banner.styles.scss";
import { html } from "lit-html";
import { WebComponent } from "../Component/WebComponent";

export class BannerComponent extends WebComponent {
  static get observedAttributes() {
    return [""];
  }

  randomProperty = "wazza";

  constructor() {
    super({
      style: styles,
    });
  }

  private onClick = () => {
    // Example of dispatching a custom event
    this.dispatchEvent(
      new CustomEvent("custom", { detail: { whatever: "yes" } })
    );
    this.remove();
  };

  render() {
    return html`
      <slot></slot>
      <button @click="${this.onClick}">✖</button>
    `;
  }
}

window.customElements.define("app-banner", BannerComponent);

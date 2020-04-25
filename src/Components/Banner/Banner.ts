import styles from "./Banner.styles.scss";
import { applyStyleToElement } from "sass-to-string";

export class BannerComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    this.classList.add("wc-banner");
    applyStyleToElement(shadow, styles);
    const content = document.createElement("slot");
    shadow.appendChild(content);

    const closeButton = document.createElement("button");
    closeButton.onclick = () => this.remove();
    closeButton.textContent = "✖";
    shadow.appendChild(closeButton);
  }
}

window.customElements.define("app-banner", BannerComponent);

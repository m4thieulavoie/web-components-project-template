import { TemplateResult, render, html } from "lit-html";

export interface IWebComponentConfig {
  style?: string;
}

export interface IClassNameData {
  apply: boolean;
  className: string;
}

export abstract class WebComponent extends HTMLElement {
  abstract render(): TemplateResult;
  protected shadow: ShadowRoot;
  private cssStyle = "";

  constructor(private readonly config?: IWebComponentConfig) {
    super();
    if (this.config?.style) {
      this.cssStyle = this.config.style;
    }
    this.shadow = this.attachShadow({ mode: "open" });
  }

  rerender() {
    const domContent = html`
      <style>
        ${this.cssStyle}
      </style>
      ${this.render()}
    `;

    render(domContent, this.shadow);
  }

  applyClasses(data: readonly IClassNameData[]) {
    return data
      .filter((classNameData) => classNameData.apply)
      .map((classNameData) => classNameData.className)
      .join(" ");
  }

  connectedCallback() {
    this.rerender();
  }

  attributeChangedCallback() {
    this.rerender();
  }
}

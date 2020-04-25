# web-components-project-template

Web Components based project with typescript, webpack and sass-to-string.

This repo is a battery-included package to get you started quickly with Web Components. Not only that, but it's also ready to be used with Typescript and SASS!

## Installation

To get started, use the following commands

```
git clone git@github.com:m4thieulavoie/web-components-project-template.git
cd web-components-project-template && npm install
```

## Commands

A couple of handy npm commands are available to get started properly

- **npm start** runs the project on a webpack dev server with HMR
- **npm run build** builds the project with the web components polyfills

## Add a new Web Component

To add a new Web Component, simply create a directory under `src/Components`, and create a file named `[component-name].ts`. Then, in `src/index.ts`, don't forget to export the component like this.

```ts
[...]
export * from './MyComponent/MyComponent';
[...]
```

Then all you need to do is create your Web Component class. Here's a simple one

```ts
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
```

# Like this package?

Of course you do! Thinking and coding this package implied quite a lot of coffee. If you want, you can [buy me one](https://buymeacoff.ee/mathieulavoie)! ☕️

import { CSSResult, CSSResultGroup, LitElement, TemplateResult, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("dta-home")
export class dtaHome extends LitElement {
  static styles?: CSSResult = css`
    :host {
      font-size: 3rem;
      color: red;
    }
  `;
  render(): TemplateResult<1> {
    return html`sup Mert`;
  }
}

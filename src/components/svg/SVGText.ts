interface TextProp {
  textContent: string;
  textWeight: string;
  locX: string;
  locY: string;
}

class SVGText {
  private textContent: string;
  private SVGText: SVGElement;

  constructor({ textContent, textWeight, locX, locY }: TextProp) {
    this.textContent = textContent;
    this.SVGText = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );

    this.SVGText.setAttribute('x', locX);
    this.SVGText.setAttribute('y', locY);
    this.SVGText.setAttribute('font-size', '1.5rem');
    this.SVGText.setAttribute('font-weight', textWeight);

    this.SVGText.innerHTML = this.textContent;
  }

  render(): SVGElement {
    return this.SVGText;
  }
}

export default SVGText;

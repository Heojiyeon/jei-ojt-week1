interface TextProp {
  textContent: string;
}

class SVGText {
  private textContent: string;
  private SVGText: SVGElement;

  constructor({ textContent }: TextProp) {
    this.textContent = textContent;
    this.SVGText = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );

    this.SVGText.setAttribute('x', '10');
    this.SVGText.setAttribute('y', '100');
    this.SVGText.setAttribute('font-size', '1.5rem');
    this.SVGText.setAttribute('font-weight', 'bold');

    this.SVGText.innerHTML = this.textContent;
  }

  render(): SVGElement {
    return this.SVGText;
  }
}

export default SVGText;

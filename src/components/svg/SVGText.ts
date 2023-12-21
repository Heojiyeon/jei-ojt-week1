interface TextProp {
  textContent: string;
  textWeight: string;
  locX: string;
  locY: string;
  textColor?: string;
  textSize?: string;
}

class SVGText {
  private textContent: string;
  private SVGText: SVGElement;

  constructor({
    textContent,
    textWeight,
    locX,
    locY,
    textColor,
    textSize,
  }: TextProp) {
    this.textContent = textContent;
    this.SVGText = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text'
    );

    this.SVGText.setAttribute('x', locX);
    this.SVGText.setAttribute('y', locY);
    this.SVGText.setAttribute('font-size', textSize ? textSize : '1.5rem');
    this.SVGText.setAttribute('font-weight', textWeight);

    if (textColor) {
      this.SVGText.setAttribute('fill', textColor);
    }

    this.SVGText.innerHTML = this.textContent;
  }

  render(): SVGElement {
    return this.SVGText;
  }
}

export default SVGText;

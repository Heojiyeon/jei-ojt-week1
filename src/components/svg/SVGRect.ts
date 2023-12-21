interface RectProp {
  rectWidth: string;
  rectHeight: string;
  locX: string;
  locY: string;
  rectStyle: string;
  onClick?: (currentSelectedOption: number) => void;
  value?: string;
}

class SVGRect {
  private SVGRect: SVGElement;

  constructor({
    rectWidth,
    rectHeight,
    locX,
    locY,
    rectStyle,
    onClick,
    value,
  }: RectProp) {
    this.SVGRect = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'rect'
    );

    this.SVGRect.setAttribute('width', rectWidth);
    this.SVGRect.setAttribute('height', rectHeight);
    this.SVGRect.setAttribute('x', locX);
    this.SVGRect.setAttribute('y', locY);
    this.SVGRect.setAttribute('style', rectStyle);

    if (onClick && value) {
      this.SVGRect.addEventListener('click', () => onClick(Number(value)));
    }
  }

  render(): SVGElement {
    return this.SVGRect;
  }
}

export default SVGRect;

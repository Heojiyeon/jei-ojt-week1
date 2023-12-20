interface RectProp {
  rectWidth: string;
  rectHeight: string;
  locX: string;
  locY: string;
  rectStyle: string;
}

class SVGRect {
  private SVGRect: SVGElement;

  constructor({ rectWidth, rectHeight, locX, locY, rectStyle }: RectProp) {
    this.SVGRect = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'rect'
    );

    this.SVGRect.setAttribute('width', rectWidth);
    this.SVGRect.setAttribute('height', rectHeight);
    this.SVGRect.setAttribute('x', locX);
    this.SVGRect.setAttribute('y', locY);
    this.SVGRect.setAttribute('style', rectStyle);
  }

  render(): SVGElement {
    return this.SVGRect;
  }
}

export default SVGRect;

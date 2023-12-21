interface LineProp {
  locX1: string;
  locY1: string;
  locX2: string;
  locY2: string;
  lineStyle: string;
}

class SVGLine {
  private SVGLine: SVGElement;

  constructor({ locX1, locY1, locX2, locY2, lineStyle }: LineProp) {
    this.SVGLine = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line'
    );

    this.SVGLine.setAttribute('x1', locX1);
    this.SVGLine.setAttribute('y1', locY1);
    this.SVGLine.setAttribute('x2', locX2);
    this.SVGLine.setAttribute('y2', locY2);
    this.SVGLine.setAttribute('style', lineStyle);
  }
  render(): SVGElement {
    return this.SVGLine;
  }
}

export default SVGLine;

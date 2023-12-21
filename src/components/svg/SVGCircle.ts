interface SVGCircleProp {
  locX: string;
  locY: string;
  color: string;
}

class SVGCircle {
  private SVGCircle: SVGElement;

  constructor({ locX, locY, color }: SVGCircleProp) {
    this.SVGCircle = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );

    this.SVGCircle.setAttribute('r', '5');
    this.SVGCircle.setAttribute('cx', locX);
    this.SVGCircle.setAttribute('cy', locY);
    this.SVGCircle.setAttribute('fill', color);
  }
  render(): SVGElement {
    return this.SVGCircle;
  }
}

export default SVGCircle;

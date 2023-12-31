interface PathProp {
  dValue: string;
}

class SVGPath {
  private SVGPath: SVGElement;

  constructor({ dValue }: PathProp) {
    this.SVGPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );

    this.SVGPath.setAttribute('d', dValue);
    this.SVGPath.setAttribute('stroke', '#9fbfe2');
    this.SVGPath.setAttribute('stroke-width', '3px');
    this.SVGPath.setAttribute('fill', 'none');
  }

  render(): SVGElement {
    return this.SVGPath;
  }
}

export default SVGPath;

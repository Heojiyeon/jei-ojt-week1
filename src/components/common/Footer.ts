interface FooterProp {
  rate: number;
}

class Footer {
  private rate: number;
  private Footer: HTMLDivElement;

  constructor({ rate }: FooterProp) {
    this.rate = rate;
    this.Footer = document.createElement('div');

    this.Footer.innerText = `Footer`;
  }

  render(): HTMLDivElement {
    return this.Footer;
  }
}

export default Footer;

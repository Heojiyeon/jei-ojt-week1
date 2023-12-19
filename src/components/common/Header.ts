interface HeaderProp {
  isMain: boolean;
}

class Header {
  private isMain: boolean;
  private Header: HTMLDivElement;

  constructor({ isMain }: HeaderProp) {
    this.isMain = isMain;
    this.Header = document.createElement('div');

    if (this.isMain) {
      this.Header.innerText = 'JEI 덧셈 게임';
    }
  }
  render(): HTMLDivElement {
    return this.Header;
  }
}

export default Header;

interface OptionBarProp {
  onClick: (currentSelectedOption: number) => void;
}

class OptionBar {
  private OptionBar: HTMLDivElement;

  constructor({ onClick }: OptionBarProp) {
    this.OptionBar = document.createElement('div');

    for (let i = 0; i < 10; i++) {
      const optionButton = document.createElement('button');
      optionButton.addEventListener('click', () => {
        onClick(i);
      });
      optionButton.innerText = String(i);

      this.OptionBar.appendChild(optionButton);
    }
  }
  render(): HTMLDivElement {
    return this.OptionBar;
  }
}

export default OptionBar;

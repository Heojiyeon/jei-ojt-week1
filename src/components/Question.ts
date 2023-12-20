import { QuestionContent } from '../pages/question';
import OptionBar from './common/OptionBar';
import SVGText from './svg/SVGText';

class Question {
  private order: number;
  private leftNumber: number;
  private rightNumber: number;

  private setIsCorrect: (currentSelctedOption: number, order: number) => void;

  private selectedOptionValue: number;
  private setSelectedOptionValue: (currentSelectedOption: number) => void;

  private Question: HTMLDivElement;

  constructor({
    order,
    leftNumber,
    rightNumber,
    setIsCorrect,
  }: QuestionContent) {
    this.order = order;
    this.leftNumber = leftNumber;
    this.rightNumber = rightNumber;

    this.setIsCorrect = setIsCorrect;

    this.selectedOptionValue = -1;

    this.setSelectedOptionValue = (currentSelectedOption: number) => {
      this.selectedOptionValue = currentSelectedOption;

      this.setIsCorrect(this.selectedOptionValue, this.order);
    };

    this.Question = document.createElement('div');
    this.Question.innerHTML = `
     <h2>${this.order}. 다음 덧셈을 입력하세요.</h2>
     <div>${this.leftNumber} + ${this.rightNumber}</div>
     `;

    // svg 생성
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );

    svgElement.setAttribute('width', '300px');
    svgElement.setAttribute('height', '300px');
    svgElement.setAttribute('viewbox', '0 0 800 500');

    this.Question.appendChild(svgElement);

    // svg 에 text 컴포넌트 생성
    const svgText = new SVGText({
      textContent: `${this.order}. 다음 덧셈을 하세요.`,
    });

    svgElement.appendChild(svgText.render());

    // optionBar 생성
    /**
     * OptionBar 생성
     * 1. Question에 클릭된 값을 담을 수 있는 selctedOptionValue 생성
     * 2. option 클릭 시, 해당 값을 변경할 수 있는 onClick 함수 전달
     * 2. selectedOptionValue 가 -1이 아닌 경우, this.answer와 동등 비교
     * 3. 정답 유무에 따라 isCorrect 값 변경
     * 4. 다음 문제 출력
     */
    this.Question.appendChild(
      new OptionBar({
        onClick: this.setSelectedOptionValue,
      }).render()
    );
  }

  render(): HTMLDivElement {
    return this.Question;
  }
}

export default Question;

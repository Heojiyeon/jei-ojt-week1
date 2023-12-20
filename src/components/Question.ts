import { QuestionContent } from '../pages/question';
import OptionBar from './common/OptionBar';
import SVGRect from './svg/SVGRect';
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

    // svg 생성
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );

    svgElement.setAttribute('width', '500px');
    svgElement.setAttribute('height', '800px');
    svgElement.setAttribute('viewbox', '0 0 800 500');

    this.Question.appendChild(svgElement);

    // svg 에 text 컴포넌트 생성
    const svgTextTitle = new SVGText({
      textContent: `${this.order}. 다음 덧셈을 하세요.`,
      textWeight: 'Bold',
      locX: '27',
      locY: '179',
    });

    const svgTextFormula = new SVGText({
      textContent: `${this.leftNumber} + ${this.rightNumber} = `,
      textWeight: 'Medium',
      locX: '177',
      locY: '425',
    });

    const svgTextRemaining = new SVGText({
      textContent: `남은 문제 수 : ${10 - this.order}`,
      textWeight: 'Bold',
      locX: '278',
      locY: '757',
    });

    svgElement.appendChild(svgTextTitle.render());
    svgElement.appendChild(svgTextFormula.render());
    svgElement.appendChild(svgTextRemaining.render());

    // svg 에 rect 컴포넌트 생성
    const svgRectAnswer = new SVGRect({
      rectWidth: '30px',
      rectHeight: '30px',
      locX: '282',
      locY: '402',
      rectStyle: 'stroke:#67D091; fill: none',
    });

    svgElement.appendChild(svgRectAnswer.render());

    // optionBar 생성
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

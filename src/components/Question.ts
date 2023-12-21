import { QuestionContent } from '../pages/question';
import SVGCircle from './svg/SVGCircle';
import SVGPath from './svg/SVGPath';
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

    // svg
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );

    svgElement.setAttribute('width', '500px');
    svgElement.setAttribute('height', '800px');
    svgElement.setAttribute('viewbox', '0 0 800 500');

    this.Question.appendChild(svgElement);

    /**
     * Header
     */
    const svgRectHeaderBg = new SVGRect({
      rectWidth: '500px',
      rectHeight: '60px',
      locX: '0',
      locY: '0',
      rectStyle: 'fill: #E5001A;',
    });

    const svgTextHeaderContent = new SVGText({
      textContent: 'JEI 덧셈 게임',
      textWeight: 'Bold',
      locX: '20',
      locY: '40',
      textColor: '#FFF',
    });

    svgElement.appendChild(svgRectHeaderBg.render());
    svgElement.appendChild(svgTextHeaderContent.render());

    /**
     * Question Content Text
     */
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

    /**
     * questionContent Image
     */

    const svgPathBundle = new SVGPath({
      dValue: 'M 230 316 C 230 200, 265 330, 270 315',
    });

    this.leftNumber !== 0 &&
      this.rightNumber !== 0 &&
      svgElement.appendChild(svgPathBundle.render());

    const createQuestionBundle = (dir: string, count: number) => {
      const locXValue = dir === 'left' ? 250 - 22 * count : 260;
      const svgRectQuestionBundle = new SVGRect({
        rectWidth: String(22 * count),
        rectHeight: '24',
        locX: dir === 'left' ? String(locXValue - 8) : String(locXValue),
        locY: '317',
        rectStyle:
          'stroke-width:3px; stroke:#9fbfe2; fill:none; rx:10px; ry:10px;',
      });
      svgElement.appendChild(svgRectQuestionBundle.render());
    };

    createQuestionBundle('left', this.leftNumber);
    createQuestionBundle('right', this.rightNumber);

    const createQuestionCircle = (
      dir: string,
      count: number,
      circleColor: string
    ) => {
      const locXValue = dir === 'left' ? 250 - 20 * count : 270;

      for (let i = 0; i < count; i++) {
        const svgCircleQuestionContent = new SVGCircle({
          color: circleColor,
          locX: i !== 0 ? String(locXValue + 20 * i) : String(locXValue),
          locY: '330',
        });
        svgElement.appendChild(svgCircleQuestionContent.render());
      }
    };

    createQuestionCircle('left', this.leftNumber, '#f6927e');
    createQuestionCircle('right', this.rightNumber, '#8181bf');

    /**
     * Question Answer
     */
    const svgRectAnswer = new SVGRect({
      rectWidth: '30px',
      rectHeight: '30px',
      locX: '270',
      locY: '402',
      rectStyle: 'stroke:#67D091; fill: none',
    });

    /**
     * OptionBar
     */
    const svgRectOptionBG = new SVGRect({
      rectWidth: '454px',
      rectHeight: '50px',
      locX: '23',
      locY: '572',
      rectStyle: 'fill:#D9D9D9; rx: 10px; ry:10px;',
    });

    svgElement.appendChild(svgRectAnswer.render());
    svgElement.appendChild(svgRectOptionBG.render());

    // option click event
    const onOptionButtonClick = (currentSelectedOption?: number) => {
      currentSelectedOption &&
        setTimeout(() => {
          this.setSelectedOptionValue(currentSelectedOption);
          return;
        }, 1000);

      const svgTextAnswer = new SVGText({
        textContent: `${currentSelectedOption}`,
        textWeight: 'Medium',
        locX: '278',
        locY: '425',
        textColor: '#E5001A',
      });

      svgElement.appendChild(svgTextAnswer.render());
    };

    const createOptionBar = () => {
      let locXvalue = 27;

      for (let i = 0; i < 10; i++) {
        const svgRectOptionButton = new SVGRect({
          rectWidth: '40px',
          rectHeight: '40px',
          locX: i !== 0 ? String(locXvalue + 45 * i) : String(locXvalue),
          locY: '577',
          rectStyle: 'fill:#FFFEFE;',
          rectRadius: '10',
          value: String(i),
          onClick: onOptionButtonClick,
        });
        svgElement.appendChild(svgRectOptionButton.render());
      }
    };

    createOptionBar();

    const createOptionNumber = () => {
      const locXValue = 40;

      for (let i = 0; i < 10; i++) {
        const svgTextOptionNumber = new SVGText({
          textContent: `${i}`,
          textWeight: 'Medium',
          locX: i !== 0 ? String(locXValue + 45 * i) : String(locXValue),
          locY: '608',
        });
        svgElement.appendChild(svgTextOptionNumber.render());
      }
    };

    createOptionNumber();
  }

  render(): HTMLDivElement {
    return this.Question;
  }
}

export default Question;

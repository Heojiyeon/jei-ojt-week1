import { QuestionContent } from '../pages/question';
import OptionBar from './common/OptionBar';

class Question {
  private order: number;
  private leftNumber: number;
  private rightNumber: number;
  private Question: HTMLDivElement;

  constructor({ order, leftNumber, rightNumber }: QuestionContent) {
    this.order = order;
    this.leftNumber = leftNumber;
    this.rightNumber = rightNumber;

    this.Question = document.createElement('div');

    this.Question.innerHTML = `
        <h2>${this.order}. 다음 덧셈을 입력하세요.</h2>
        <div>${this.leftNumber} + ${this.rightNumber}</div>
    `;

    // optionBar 생성
    this.Question.appendChild(new OptionBar().render());
  }

  render(): HTMLDivElement {
    return this.Question;
  }
}

export default Question;

import { push } from '../utils/router';
import SVGLine from './svg/SVGLine';
import SVGRect from './svg/SVGRect';
import SVGText from './svg/SVGText';

interface ResultProp {
  countOfCorrectAnswer: number;
}
class Result {
  private Result: HTMLDivElement;

  constructor({ countOfCorrectAnswer }: ResultProp) {
    this.Result = document.createElement('div');

    /**
     * SVG
     */
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );

    svgElement.setAttribute('width', '500px');
    svgElement.setAttribute('height', '800px');
    svgElement.setAttribute('viewbox', '0 0 800 500');

    this.Result.appendChild(svgElement);

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
     * ResultDescription
     */
    const svgRectResultDescriptionBg = new SVGRect({
      rectWidth: '306px',
      rectHeight: '345px',
      locX: '94',
      locY: '174',
      rectStyle: 'fill: #FFF8F8;',
      rectRadius: '10',
    });

    const svgTextResultTitle = new SVGText({
      textContent: '학습 결과',
      textWeight: 'Bold',
      locX: '200',
      locY: '240',
    });

    const svgTextResultSuccessRate = new SVGText({
      textContent: `정답률 ${countOfCorrectAnswer}/10`,
      textWeight: 'Medium',
      locX: '190',
      locY: '350',
    });

    const svgTextResultPass = new SVGText({
      textContent: `통과 ${countOfCorrectAnswer > 5 ? '성공' : '실패'}!`,
      textWeight: 'Bold',
      locX: '200',
      locY: '400',
      textColor: `${countOfCorrectAnswer > 5 ? '#00F' : '#E5001A'}`,
    });

    svgElement.appendChild(svgRectResultDescriptionBg.render());
    svgElement.appendChild(svgTextResultTitle.render());
    svgElement.appendChild(svgTextResultSuccessRate.render());
    svgElement.appendChild(svgTextResultPass.render());

    /**
     * ResultDividingLine
     */
    const svgLineResultDividingLine = new SVGLine({
      locX1: '128',
      locY1: '260',
      locX2: '372',
      locY2: '260',
      lineStyle: 'stroke:rgb(255,0,0);stroke-width:2',
    });

    svgElement.appendChild(svgLineResultDividingLine.render());

    /**
     * RestartGameButton
     */
    const handleRouter = () => push('/');

    const restartGameButton = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'g'
    );

    restartGameButton.setAttribute('id', 'restart-game-button');

    const svgRectRestartGameButton = new SVGRect({
      rectWidth: '300px',
      rectHeight: '60px',
      locX: '100',
      locY: '550',
      rectStyle: 'fill:#FFEBED;',
      rectRadius: '10',
    });

    const svgTextRestartGameContent = new SVGText({
      textContent: '학습 다시하기',
      textWeight: 'Medium',
      locX: '190',
      locY: '590',
      textColor: '#E5001A',
    });

    restartGameButton.appendChild(svgRectRestartGameButton.render());
    restartGameButton.appendChild(svgTextRestartGameContent.render());

    restartGameButton.addEventListener('click', handleRouter);

    svgElement.appendChild(restartGameButton);
  }

  render(): HTMLDivElement {
    return this.Result;
  }
}

export default Result;

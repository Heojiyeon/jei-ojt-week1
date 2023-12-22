import { push } from '../utils/router';
import SVGRect from './svg/SVGRect';
import SVGText from './svg/SVGText';

class StartingPoint {
  private StartingPoint: HTMLDivElement;

  constructor() {
    this.StartingPoint = document.createElement('div');
    // svg
    const svgElement = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    svgElement.setAttribute('width', '500px');
    svgElement.setAttribute('height', '800px');
    svgElement.setAttribute('viewbox', '0 0 800 500');

    this.StartingPoint.appendChild(svgElement);

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

    /**
     * MainTitle
     */
    const svgTextTitleLogo = new SVGText({
      textContent: 'JEI',
      textWeight: 'Bold',
      locX: '220',
      locY: '300',
      textColor: '#E5001A',
      textSize: '50px',
    });
    const svgTextTitleName = new SVGText({
      textContent: '덧셈 게임',
      textWeight: 'Bold',
      locX: '200',
      locY: '340',
      textSize: '30px',
    });

    svgElement.appendChild(svgRectHeaderBg.render());
    svgElement.appendChild(svgTextTitleLogo.render());
    svgElement.appendChild(svgTextTitleName.render());

    /**
     * StartGameButton
     */
    const handleRouter = () => push('/question');

    const startGameButton = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'g'
    );
    startGameButton.setAttribute('id', 'start-game-button');

    const svgRectStartGameButton = new SVGRect({
      rectWidth: '300px',
      rectHeight: '60px',
      locX: '100',
      locY: '470',
      rectStyle: 'fill:#FFEBED;',
      rectRadius: '10',
    });

    const svgTextStartGameContent = new SVGText({
      textContent: '학습 시작하기',
      textWeight: 'Medium',
      locX: '190',
      locY: '510',
      textColor: '#E5001A',
    });

    startGameButton.appendChild(svgRectStartGameButton.render());
    startGameButton.appendChild(svgTextStartGameContent.render());

    startGameButton.addEventListener('click', handleRouter);
    startGameButton.setAttribute('style', 'cursor:pointer;');

    svgElement.appendChild(startGameButton);
  }
  render(): HTMLDivElement {
    return this.StartingPoint;
  }
}

export default StartingPoint;

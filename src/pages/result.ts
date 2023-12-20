import Button from '../components/common/Button';
import Header from '../components/common/Header';
import { push } from '../utils/router';

type ResultProp = {
  $app: HTMLElement | null;
  countOfCorrectAnswer: number;
};

export default function ResultPage({ $app, countOfCorrectAnswer }: ResultProp) {
  if ($app?.innerHTML) {
    $app.innerHTML = '';
  }

  const header = new Header({
    isMain: true,
  });

  const ResultContent = document.createElement('div');
  ResultContent.innerHTML = `
    <h2>학습 결과</h2>
    <div>
      <div>정답률 : ${countOfCorrectAnswer} / 10</div>
      <div>통과 여부 : ${countOfCorrectAnswer > 5 ? '통과!' : '실패!'}</div>
    </div>

  `;

  const startButton = new Button({
    title: '학습 다시하기',
    onClick: () => {
      $app!.innerHTML = '';
      push('/');
    },
  });

  $app?.appendChild(header.render());
  $app?.appendChild(ResultContent);
  $app?.appendChild(startButton.render());
}

import Result from '../components/Result';

type ResultProp = {
  $app: HTMLElement | null;
  countOfCorrectAnswer: number;
};

export default function ResultPage({ $app, countOfCorrectAnswer }: ResultProp) {
  const resultContent = new Result({
    countOfCorrectAnswer,
  });

  if ($app?.innerHTML) {
    $app.innerHTML = '';
  }

  $app?.appendChild(resultContent.render());
}

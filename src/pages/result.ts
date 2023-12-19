import Button from '../components/common/Button';
import Header from '../components/common/Header';

type ResultProp = {
  $app: HTMLElement | null;
};

export default function Result({ $app }: ResultProp) {
  const header = new Header({
    isMain: true,
  });
  const startButton = new Button({
    title: '학습 다시하기',
    onClick: () => history.pushState(null, '', '/'),
  });

  $app?.appendChild(header.render());
  $app?.appendChild(startButton.render());
}

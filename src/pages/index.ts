import Button from '../components/common/Button';
import Header from '../components/common/Header';
import { push } from '../utils/router';

type MainProp = {
  $app: HTMLElement | null;
};

export default function MainPage({ $app }: MainProp) {
  const header = new Header({
    isMain: true,
  });
  const startButton = new Button({
    title: '학습 시작하기',
    onClick: () => push('/question'),
  });

  const render = () => {
    $app?.appendChild(header.render());
    $app?.appendChild(startButton.render());
  };

  render();
}

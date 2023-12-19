import Button from '../components/common/Button';
import Header from '../components/common/Header';

type MainProp = {
  $app: HTMLElement | null;
};

export default function Main({ $app }: MainProp) {
  const header = new Header({
    isMain: true,
  });
  const startButton = new Button({
    title: '학습 시작하기',
    onClick: () => history.pushState(null, '', '/question'),
  });

  $app?.appendChild(header.render());
  $app?.appendChild(startButton.render());
}

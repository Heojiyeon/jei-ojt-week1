import StartingPoint from '../components/StartingPoint';

type MainProp = {
  $app: HTMLElement | null;
};

export default function MainPage({ $app }: MainProp) {
  const startingPointContent = new StartingPoint();

  if ($app?.innerHTML) {
    $app!.innerHTML = '';
  }

  const render = () => {
    $app?.appendChild(startingPointContent.render());
  };

  render();
}

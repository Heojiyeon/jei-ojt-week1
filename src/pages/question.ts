type QuestionProp = {
  $app: HTMLElement | null;
};

export default function Question({ $app }: QuestionProp) {
  const tmpContent = document.createElement('div');
  tmpContent.innerText = '문제 페이지';

  $app?.appendChild(tmpContent);
}

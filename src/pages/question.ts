import Question from '../components/Question';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

type QuestionProp = {
  $app: HTMLElement | null;
};
export interface QuestionContent {
  order: number;
  leftNumber: number;
  rightNumber: number;
  answer: number;
  isCorrect: boolean;
}

export default function QuestionPage({ $app }: QuestionProp) {
  // 문제 배열 생성
  const questions = Array.from({ length: 10 }).fill({
    leftNumber: 0,
    rightNumber: 0,
    answer: 0,
    isCorrect: false,
  }) as QuestionContent[];

  // 랜덤으로 생성된 두 수, 정답을 가지는 문제 배열 생성
  const createdNumberQuestions = questions.map((question, idx) => {
    const getRandomNum = (min: number) => Math.floor(Math.random() * min);

    const createdLeftNumber = getRandomNum(10);
    const createdRightNumber = getRandomNum(9 - createdLeftNumber);
    const createdAnswer = createdLeftNumber + createdRightNumber;

    return {
      ...question,
      order: idx + 1,
      leftNumber: createdLeftNumber,
      rightNumber: createdRightNumber,
      answer: createdAnswer,
    };
  });

  const header = new Header({
    isMain: false,
  });
  const footer = new Footer({
    rate: 1,
  });
  const questionContent = new Question({
    order: createdNumberQuestions[0].order,
    leftNumber: createdNumberQuestions[0].leftNumber,
    rightNumber: createdNumberQuestions[0].rightNumber,
    answer: createdNumberQuestions[0].answer,
    isCorrect: false,
  });

  $app?.appendChild(header.render());
  $app?.appendChild(questionContent.render());
  $app?.appendChild(footer.render());
}

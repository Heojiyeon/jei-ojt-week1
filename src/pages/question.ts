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
  isSolved: boolean;
  isCorrect: boolean;
  setIsSolved: (currentOrder: number) => void;
  setIsCorrect: (currentSelctedOption: number, order: number) => void;
}

export default function QuestionPage({ $app }: QuestionProp) {
  // 현재 문제 order 값 저장
  let currentOrder = 0;

  // 푼 문제 개수
  let countOfSolved = 0;

  // 문제 배열 생성
  const questions = Array.from({ length: 10 }).fill({
    leftNumber: 0,
    rightNumber: 0,
    answer: 0,
    isSolved: false,
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

  // 화면에 보여줄 문항을 생성하는 함수
  const createQuestion = (currentOrder: number) => {
    const { order, leftNumber, rightNumber, answer, isSolved } =
      createdNumberQuestions[currentOrder];

    const questionContent = new Question({
      order,
      leftNumber,
      rightNumber,
      answer,
      isCorrect: false,
      isSolved,
      setIsCorrect,
      setIsSolved,
    });

    countOfSolved += 1;

    const footer = new Footer({
      rate: countOfSolved,
    });

    if ($app?.innerHTML) {
      $app!.innerHTML = '';
    }

    $app?.appendChild(questionContent.render());
    $app?.appendChild(footer.render());
  };

  // 해당 문제 풀이 여부를 변경하는 함수
  const setIsSolved = (currentOrder: number) => {
    createdNumberQuestions[currentOrder - 1].isSolved = true;
  };

  // 선택한 옵션이 정답인지 확인하는 함수
  const setIsCorrect = (currentSelctedOption: number, currentOrder: number) => {
    // 해당 값이 정답인 경우 isCorrect 값 변경
    if (
      currentSelctedOption === createdNumberQuestions[currentOrder - 1].answer
    ) {
      createdNumberQuestions[currentOrder - 1].isCorrect = true;
    }

    setIsSolved(currentOrder);

    createQuestion(currentOrder);
  };

  const header = new Header({
    isMain: false,
  });

  createQuestion(currentOrder);

  $app?.appendChild(header.render());
}

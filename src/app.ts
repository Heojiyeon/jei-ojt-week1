import MainPage from './pages';
import QuestionPage from './pages/question';
import ResultPage from './pages/result';
import { initRouter } from './utils/router';

type AppProp = {
  $app: HTMLDivElement | null;
};

// page 생성 및 라우팅
export default function App({ $app }: AppProp) {
  // 모든 문제를 풀었는 지 확인하기 위한 변수
  let isSolvedAll = false;

  const setIsSolvedAll = () => (isSolvedAll = true);

  // 정답 개수를 저장하기 위한 변수
  let countOfCorrectAnswer = 0;

  const addCountOfCorrectAnswer = () => {
    countOfCorrectAnswer += 1;
  };

  // 라우터 생성 함수
  const createRoute = () => {
    const { pathname } = window.location;

    if (pathname === '/') {
      countOfCorrectAnswer = 0;
      MainPage({ $app });
    } else if (pathname === '/question') {
      $app!.innerHTML = '';
      QuestionPage({ $app, setIsSolvedAll, addCountOfCorrectAnswer });
    } else if (isSolvedAll && pathname === '/result') {
      $app!.innerHTML = '';
      ResultPage({ $app, countOfCorrectAnswer });
    }
  };

  createRoute();

  initRouter(() => createRoute());
}

import Main from './pages';

type AppProp = {
  $app: HTMLDivElement | null;
};

// page 생성 및 라우팅
export default function App({ $app }: AppProp) {
  // 라우터 생성
  const createRoute = () => {
    const { pathname } = window.location;

    if (pathname === '/') {
      Main({ $app });
    }
  };

  createRoute();
}

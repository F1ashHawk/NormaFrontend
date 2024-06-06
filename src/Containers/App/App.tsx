import {useLocation} from 'react-router-dom';
import AuthContainer from '../AuthContainer';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Application} from './styled.ts';
import ApplicationRoleRouter from '../ApplicationRoleRouter/ApplicationRoleRouter.tsx';

function App() {
  const location = useLocation();

  return (
    <Application>
      {(location.pathname === '/login' || location.pathname === '/register') ? <AuthContainer/>: <ApplicationRoleRouter/>}
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false}/>
    </Application>
  )

}

export default App

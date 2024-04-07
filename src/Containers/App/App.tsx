import {useLocation, useNavigate} from 'react-router-dom';
import AuthContainer from '../AuthContainer';
import '../../Styles/normalize.css'
import {useAppSelector} from '../../Hooks/redux/useAppSelector.ts';
import {useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Application} from './styled.ts';

function App() {
  const location = useLocation();

  const {isAuthorization} = useAppSelector(state => state.authSlice);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorization) {
      return navigate('/login');
    }
  }, [isAuthorization, navigate]);

  return (
    <Application>
      {(location.pathname === '/login' || location.pathname === '/register') && <AuthContainer/>}
      <ToastContainer autoClose={1000} pauseOnFocusLoss={false}/>
    </Application>
  )

}

export default App

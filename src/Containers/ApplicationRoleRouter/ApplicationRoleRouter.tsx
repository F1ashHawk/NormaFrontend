import {useEffect} from 'react';
import {useAppSelector} from '../../Hooks/redux/useAppSelector.ts';
import {useNavigate} from 'react-router-dom';

import ClientView from '../ClientView/ClientView.tsx';
import SpecialistView from '../SpecialistView/SpecialistView.tsx';


const ApplicationRoleRouter = () => {
  const {role} = useAppSelector(state => state.userSlice);
  const {isAuthorization} = useAppSelector(state => state.authSlice);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorization || !role) {
      return navigate('/login');
    }
  }, [isAuthorization, navigate, role]);

  if (role === 'client') {
    return <ClientView />
  }

  if (role === 'specialist') {
    return <SpecialistView />
  }
};

export default ApplicationRoleRouter;
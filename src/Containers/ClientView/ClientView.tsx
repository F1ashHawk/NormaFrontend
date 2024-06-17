import ClientHeader from './Components/ClientHeader/ClientHeader.tsx';
import {ClientViewContainer} from './styled.ts';
import ClientMainPage from '../../Modules/ClientMainPage/ClientMainPage.tsx';
import ClientProfileModule from '../../Modules/ClientProfileModule/ClientProfileModule.tsx';
import CreateNewOrderModule from '../../Modules/CreateNewOrderModule/CreateNewOrderModule.tsx';
import {Route, Routes} from 'react-router-dom';
import SpecialistsListModule from '../../Modules/SpecialistsListModule/SpecialistsListModule.tsx';

const ClientView = () => {
  const CLIENT_ROUTES = [
    {path: '/', component: <ClientMainPage/>},
    {path: '/profile/*', component: <ClientProfileModule />},
    {path: '/new-order/:step?', component: <CreateNewOrderModule />},
    {path: '/specialists', component: <SpecialistsListModule />}
  ]
  return (
    <ClientViewContainer>
      <ClientHeader />
      <Routes>
        {CLIENT_ROUTES.map(({path, component}) =>
         <Route  path={path}  element={component} key={path}/>
        )}
      </Routes>
    </ClientViewContainer>
  );
};

export default ClientView;
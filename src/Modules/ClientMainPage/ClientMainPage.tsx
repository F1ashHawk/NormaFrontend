import React from 'react';
import ClientIntro from './Components/ClientIntro/ClientIntro.tsx';
import ClientPopular from './Components/ClientPopular/ClientPopular.tsx';
import ClientHelp from './Components/ClientHelp/ClientHelp.tsx';
import {ClientViewMain} from './styled.ts';

const ClientMainPage :React.FC = () => {
  return (
    <>
      <ClientIntro />
      <ClientViewMain>
        <ClientPopular />
        <ClientHelp />
      </ClientViewMain>
    </>
  );
};

export default ClientMainPage;
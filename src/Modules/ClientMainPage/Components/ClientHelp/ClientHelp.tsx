import {HelpContainer, HelpItem, HelpItemIcon, HelpItemTitle, HelpList} from './styled.ts';

const ClientHelp = () => {
  return (
    <HelpContainer>
      <HelpList>
        <HelpItem>
          <HelpItemTitle>Как работает Норма-Мастер</HelpItemTitle>
          <HelpItemIcon></HelpItemIcon>
        </HelpItem>
        <HelpItem>
          <HelpItemTitle>Специалисты в вашем городе</HelpItemTitle>
          <HelpItemIcon></HelpItemIcon>
        </HelpItem>
        <HelpItem>
          <HelpItemTitle>Сколько это стоит?</HelpItemTitle>
          <HelpItemIcon></HelpItemIcon>
        </HelpItem>
        <HelpItem>
          <HelpItemTitle>Безопасность услуг</HelpItemTitle>
          <HelpItemIcon></HelpItemIcon>
        </HelpItem>
        <HelpItem>
          <HelpItemTitle>Вы специалист?</HelpItemTitle>
          <HelpItemIcon></HelpItemIcon>
        </HelpItem>
      </HelpList>
    </HelpContainer>
  );
};

export default ClientHelp;
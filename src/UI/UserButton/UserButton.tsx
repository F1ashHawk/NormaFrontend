import  {useEffect, useRef, useState} from 'react';
import {LogOutButton, StyledUserButton} from './styled';
import CustomPopup from '../../UI/CustomPopup';
import {Link} from 'react-router-dom';

interface IUserButtonProps {
  handleLogOut: () => void;
}

const UserButton = ({handleLogOut}: IUserButtonProps) => {
  const [openPopup, setOpenPopup] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setOpenPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <StyledUserButton onClick={togglePopup}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="User">
            <path id="Ellipse 45"
                  d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <circle id="Ellipse 46" cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round"/>
          </g>
        </svg>
        {openPopup &&
          <CustomPopup ref={popupRef}>
            <Link to={'/profile'}>Profile</Link>
            <LogOutButton onClick={handleLogOut}>Log out</LogOutButton>
          </CustomPopup>
        }
      </StyledUserButton>
    </>


  );
};

export default UserButton;
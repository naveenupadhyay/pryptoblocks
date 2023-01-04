import { useNavigate } from 'react-router-dom';
import * as APPLICATION_URLS from '../utils/ApplicationURLs';

const MobileNavbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate(APPLICATION_URLS.LOGIN_PAGE);
  };

  return (
    <div className="transition-all duration-500 flex justify-between md:hidden fixed top-0 z-[999] w-full px-5 py-3 bg-white">
      <div className="font-extrabold text-black text-2xl dark:text-white">
        PRYPTO<span className="text-sm font-medium ml-1">blocks</span>
      </div>
      <div onClick={handleLogout}>
        <i className="my-auto fa-solid text-right fa-arrow-right-from-bracket w-[20px] text-base"></i>
      </div>
    </div>
  );
};
export default MobileNavbar;

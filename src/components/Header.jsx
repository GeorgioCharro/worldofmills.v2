
import Logo from '../assets/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-3xl font-bold text-black ml-2">
          <p>WorldOfMills</p>
        </span>
      </div>
      <div className="text-black">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;


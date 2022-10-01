import './MainBar.css';
import logo from './../../assets/images/logo.png';

const MainBar = () => {
  return (
    <header className="main-header">
      <img src={logo} alt="Logo Pokemon"></img>
    </header>
  );
};

export default MainBar;

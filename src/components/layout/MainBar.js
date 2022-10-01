import './MainBar.css';
import logo from './../../assets/images/logo.png';
import Search from 'antd/lib/input/Search';

const MainBar = ({ onSearch }) => {
  return (
    <header className="main-header">
      <img src={logo} alt="Logo Pokemon"></img>
      <Search placeholder="Search your favorite pokemon" onSearch={value => onSearch(value)} />
    </header>
  );
};

export default MainBar;

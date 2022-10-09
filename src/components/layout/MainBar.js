import Search from 'antd/lib/input/Search';
import PropTypes from 'prop-types';
import logo from './../../assets/images/logo.png';
import 'antd/dist/antd.min.css';
import './MainBar.scss';

const MainBar = ({ onSearch }) => {
  return (
    <header className="main-header" data-testid="pokemon-main-header">
      <img src={logo} alt="Logo Pokemon"></img>
      <div className="main-search">
        <Search placeholder="Search your pokemon" onSearch={value => onSearch(value)} />
      </div>
    </header>
  );
};

MainBar.propTypes = {
  onSearch: PropTypes.func
};

export default MainBar;

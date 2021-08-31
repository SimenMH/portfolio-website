import { Link } from 'react-router-dom';
import './styles.css';

const NavArrow = props => {
  const { direction, label, path } = props;
  return (
    <Link to={path} className={`nav-button nav-${direction}`}>
      <p className='label'>{label}</p>
      <div className='nav-arrow' />
    </Link>
  );
};

export default NavArrow;

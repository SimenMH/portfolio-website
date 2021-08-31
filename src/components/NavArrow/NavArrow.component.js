import './styles.css';

const NavArrow = props => {
  const { direction } = props;
  return (
    <div className={`nav-button nav-${direction}`}>
      <div className='nav-arrow' />
    </div>
  );
};

export default NavArrow;

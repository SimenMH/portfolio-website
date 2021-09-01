import './styles.css';

const NavArrow = props => {
  const { direction, label } = props;
  return (
    <div
      onClick={() => props.onClickHandler(direction)}
      className={`nav-button nav-${direction}`}
    >
      <p className='label'>{label}</p>
      <div className='nav-arrow' />
    </div>
  );
};

export default NavArrow;

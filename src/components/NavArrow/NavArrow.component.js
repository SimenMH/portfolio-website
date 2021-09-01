import './styles.css';

const NavArrow = props => {
  const { direction, label, fade } = props;
  return (
    <div
      onClick={() => props.onClickHandler(direction)}
      className={`nav-button nav-${direction} ${
        fade ? 'arrow-fade-out' : 'arrow-fade-in'
      }`}
    >
      <p className='label'>{label}</p>
      <div className='nav-arrow'>
        <svg height='25' width='50' className='arrow-svg'>
          <polyline points='1,25 25,1 50,25 25,1' />
        </svg>
      </div>
    </div>
  );
};

export default NavArrow;

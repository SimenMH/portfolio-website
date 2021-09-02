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
        <svg className='arrow-svg'>
          <polyline className='arrow-poly' points='1,25 25,1 50,25 25,1' />
        </svg>
        <svg className='arrow-svg-fill'>
          <polyline points='1,25 25,1 50,25 25,1' />
        </svg>
      </div>
    </div>
  );
};

export default NavArrow;

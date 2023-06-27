import './styles.css';

const NavArrow = props => {
  const { direction, label, fade } = props;
  return (
    <div
      onClick={() => props.onClickHandler(direction)}
      className={`nav-arrow-button nav-arrow-button--${direction} ${
        fade ? 'arrow-fade-out' : 'arrow-fade-in'
      }`}
    >
      <p className='nav-arrow-button__label'>{label}</p>
      <div className='nav-arrow-button__arrow'>
        <svg viewBox='0 0 50 25' className='nav-arrow-button__arrow__svg'>
          <polyline points='1,25 25,1 50,25 25,1' />
        </svg>
        <svg viewBox='0 0 50 25' className='nav-arrow-button__arrow__fill'>
          <polyline points='1,25 25,1 50,25 25,1' />
        </svg>
      </div>
    </div>
  );
};

export default NavArrow;

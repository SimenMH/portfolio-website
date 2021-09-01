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
      <div className='nav-arrow' />
    </div>
  );
};

export default NavArrow;

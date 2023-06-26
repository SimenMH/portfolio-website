import './styles.css';

const EnvelopeAnimation = ({ animate }) => {
  return (
    <div className={`envelope-container ${animate ? 'animate-envelope' : ''}`}>
      <div
        className={`envelope-left ${animate ? 'animate-envelope-left' : ''}`}
      >
        <svg width='1800' height='1400'>
          <polyline points='0,0 900,700 0,1400' />
        </svg>
      </div>
      <div
        className={`envelope-right ${animate ? 'animate-envelope-right' : ''}`}
      >
        <svg width='1800' height='1400'>
          <polyline points='1800,0 900,700 1800,1400' />
        </svg>
      </div>
      <div
        className={`envelope-bottom ${
          animate ? 'animate-envelope-bottom' : ''
        }`}
      >
        <svg width='1200' height='760'>
          <polyline points='0,760 600,380 1200,760' />
        </svg>
      </div>
      <div className={`envelope-top ${animate ? 'animate-envelope-top' : ''}`}>
        <svg width='1200' height='500'>
          <polyline points='0,0 600,380 1200,0' />
        </svg>
      </div>
    </div>
  );
};

export default EnvelopeAnimation;

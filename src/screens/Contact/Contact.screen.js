import { useState } from 'react';
import './styles.css';

const Contact = () => {
  const [animate, setAnimate] = useState(false);

  const sendMessage = () => {
    setAnimate(true);
  };

  return (
    <div className='screen-container contact-container fade-in'>
      <h1>Contact me</h1>
      <p>
        Whether you're interested in hiring me for your next ambitious project,
        or just want to drop me an anonymous message, don't hesitate to use this
        form!
      </p>
      <div>
        <div className={`envelope ${animate ? 'animate-env' : ''}`}>
          <div className={`envelope-left ${animate ? 'animate-left-env' : ''}`}>
            <svg width='900' height='700'>
              <polyline points='0,0 450,350 0,700' />
            </svg>
          </div>
          <div
            className={`envelope-right ${animate ? 'animate-right-env' : ''}`}
          >
            <svg width='900' height='700'>
              <polyline points='900,0 450,350 900,700' />
            </svg>
          </div>
          <div
            className={`envelope-bottom ${animate ? 'animate-bottom-env' : ''}`}
          >
            <svg width='600' height='380'>
              <polyline points='0,380 300,190 600,380' />
            </svg>
          </div>
          <div className={`envelope-top ${animate ? 'animate-top-env' : ''}`}>
            <svg width='600' height='250'>
              <polyline points='0,0 300,190 600,0' />
            </svg>
          </div>
        </div>

        <form
          className={`contact-form ${animate ? 'hide-form' : ''}`}
          onAnimationEnd={() => setAnimate(false)}
        >
          <div className='form-grid-item form-grid-half'>
            <input
              className='input-field'
              placeholder='Name'
              type='text'
              required={true}
            />
            <label className='input-focus' />
          </div>
          <div className='form-grid-item form-grid-half'>
            <input
              className='input-field'
              placeholder='Email (Optional)'
              type='email'
            />
            <label className='input-focus' />
          </div>
          <div className='form-grid-item'>
            <input className='input-field' placeholder='Subject' type='text' />
            <label className='input-focus' />
          </div>
          <div className='form-grid-item'>
            <textarea
              className='input-field'
              placeholder='Message'
              type='text'
              required={true}
            />
            <label className='input-focus' />
          </div>
        </form>
        <button
          type='submit'
          className='form-grid-item submit-button'
          onClick={sendMessage}
        >
          <p>Send message</p>
        </button>
      </div>
    </div>
  );
};

export default Contact;

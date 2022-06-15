import './styles.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

import SoMeLinks from '../../components/SoMeLinks/SoMeLinks.component';

const Contact = () => {
  const [animate, setAnimate] = useState(false);
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    setFormInput(prevState => {
      const newState = { ...prevState };
      newState[key] = value;
      return newState;
    });
  };

  const sendMessage = async e => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { ...formInput, message: formInput.message.replaceAll('\n', '<br>') },
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      if (response.status === 200) {
        setTimeout(() => {
          setFormInput({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        }, 750);
        setAnimate(true);
      } else {
        throw new Error('Error sending email');
      }
    } catch {
      alert(
        'Sending message failed. Try again later or message me directly by email or phone.'
      );
    }
    setIsSending(false);
  };

  return (
    <div className='contact-container fade-in'>
      <div className='contact-content-container'>
        <section>
          <div className='form-text-container'>
            <h1>Contact me</h1>
            <p>
              Whether you're interested in hiring me, or just want to send me an
              anonymous message, don't hesitate to use this form
            </p>
          </div>
          <div className='form-container'>
            <div className={`envelope ${animate ? 'animate-env' : ''}`}>
              <div
                className={`envelope-left ${animate ? 'animate-left-env' : ''}`}
              >
                <svg width='1800' height='1400'>
                  <polyline points='0,0 900,700 0,1400' />
                </svg>
              </div>
              <div
                className={`envelope-right ${
                  animate ? 'animate-right-env' : ''
                }`}
              >
                <svg width='1800' height='1400'>
                  <polyline points='1800,0 900,700 1800,1400' />
                </svg>
              </div>
              <div
                className={`envelope-bottom ${
                  animate ? 'animate-bottom-env' : ''
                }`}
              >
                <svg width='1200' height='760'>
                  <polyline points='0,760 600,380 1200,760' />
                </svg>
              </div>
              <div
                className={`envelope-top ${animate ? 'animate-top-env' : ''}`}
              >
                <svg width='1200' height='500'>
                  <polyline points='0,0 600,380 1200,0' />
                </svg>
              </div>
            </div>

            <form
              className={`contact-form ${animate ? 'hide-form' : ''}`}
              onSubmit={e => sendMessage(e)}
              onAnimationEnd={e => {
                if (e.animationName === 'hide-form') {
                  setAnimate(false);
                }
              }}
            >
              <div className='form-grid-item form-grid-half'>
                <input
                  className={`input-field ${
                    isSending ? 'input-field-disabled' : ''
                  }`}
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={formInput.name}
                  onChange={handleChange}
                  required={true}
                  disabled={isSending}
                />
                <label className='input-focus' />
              </div>
              <div className='form-grid-item form-grid-half'>
                <input
                  className={`input-field ${
                    isSending ? 'input-field-disabled' : ''
                  }`}
                  type='email'
                  name='email'
                  placeholder='Email (Optional)'
                  value={formInput.email}
                  onChange={handleChange}
                  disabled={isSending}
                />
                <label className='input-focus' />
              </div>
              <div className='form-grid-item'>
                <input
                  className={`input-field ${
                    isSending ? 'input-field-disabled' : ''
                  }`}
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={formInput.subject}
                  onChange={handleChange}
                  required={true}
                  disabled={isSending}
                />
                <label className='input-focus' />
              </div>
              <div className='form-grid-item'>
                <textarea
                  className={`input-field ${
                    isSending ? 'input-field-disabled' : ''
                  }`}
                  type='text'
                  name='message'
                  placeholder='Message'
                  value={formInput.message}
                  onChange={handleChange}
                  required={true}
                  disabled={isSending}
                />
                <label className='input-focus' />
              </div>
              <input
                type='submit'
                className={`form-grid-item submit-button ${
                  isSending || animate ? 'submit-button-disabled' : ''
                } ${animate ? 'hide-button' : ''}`}
                value='Send Message'
                disabled={isSending}
              />
            </form>
          </div>
        </section>
        <section className='contact-details-section'>
          <div>
            <h2>
              Contact Details
              <div className='faded-line-seperator' />
            </h2>
            <p>Email: simenmelo@gmail.com</p>
            <p>Phone: +47 966-33-404</p>
            <p>Time zone: GMT+1</p>
          </div>
          <div className='contact-links-container'>
            <SoMeLinks />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

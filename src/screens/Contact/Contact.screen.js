import { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles.css';

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
              onAnimationEnd={() => setAnimate(false)}
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
                  isSending ? 'submit-button-disabled' : ''
                }`}
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
          <p>
            I am currently interested in jobs within commuting distance of
            Bergen, or remote work.
          </p>
          <div className='some-links'>
            <a
              href='https://github.com/SimenMH//'
              target='_blank'
              rel='noreferrer'
              className='link-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                style={{ width: '70%' }}
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/simen-herland/'
              target='_blank'
              rel='noreferrer'
              className='link-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                style={{ width: '50%', marginBottom: '2px' }}
                viewBox='0 0 24 24'
              >
                <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
              </svg>
            </a>
            <a
              href='mailto: simenmelo@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='link-icon'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                style={{ width: '60%' }}
                viewBox='0 0 24 24'
              >
                <path d='M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z' />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

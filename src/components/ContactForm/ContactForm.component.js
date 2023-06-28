import { useState } from 'react';
import emailjs from 'emailjs-com';

import EnvelopeAnimation from '../EnvelopeAnimation/EnvelopeAnimation.component';

const ContactForm = () => {
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
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
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
    } catch (err) {
      console.log(err);
      alert(
        'Sending message failed. Try again later or message me directly by email or phone.'
      );
    }
    setIsSending(false);
  };

  return (
    <div className='contact-form'>
      <div className='contact-form__text'>
        <h1>Contact me</h1>
        <p>
          If you have any questions, opportunities, or just want to drop me a
          message, I'd love to hear from you!
        </p>
      </div>
      <EnvelopeAnimation animate={animate} />
      <form
        className={`contact-form__form ${
          animate ? 'contact-form__form--hide' : ''
        }`}
        onSubmit={e => sendMessage(e)}
        onAnimationEnd={e => {
          if (e.animationName === 'contact-form__form--hide') {
            setAnimate(false);
          }
        }}
      >
        <div className='contact-form__grid-item contact-form__grid-item--half'>
          <input
            className={`contact-form__input-field ${
              isSending ? 'contact-form__input-field--disabled' : ''
            }`}
            type='text'
            name='name'
            placeholder='Name'
            value={formInput.name}
            onChange={handleChange}
            required={true}
            disabled={isSending}
          />
          <label className='contact-form__input-focus' />
        </div>
        <div className='contact-form__grid-item contact-form__grid-item--half'>
          <input
            className={`contact-form__input-field ${
              isSending ? 'contact-form__input-field--disabled' : ''
            }`}
            type='email'
            name='email'
            placeholder='Email (Optional)'
            value={formInput.email}
            onChange={handleChange}
            disabled={isSending}
          />
          <label className='contact-form__input-focus' />
        </div>
        <div className='contact-form__grid-item'>
          <input
            className={`contact-form__input-field ${
              isSending ? 'contact-form__input-field--disabled' : ''
            }`}
            type='text'
            name='subject'
            placeholder='Subject'
            value={formInput.subject}
            onChange={handleChange}
            required={true}
            disabled={isSending}
          />
          <label className='contact-form__input-focus' />
        </div>
        <div className='contact-form__grid-item'>
          <textarea
            className={`contact-form__input-field ${
              isSending ? 'contact-form__input-field--disabled' : ''
            }`}
            type='text'
            name='message'
            placeholder='Message'
            value={formInput.message}
            onChange={handleChange}
            required={true}
            disabled={isSending}
          />
          <label className='contact-form__input-focus' />
        </div>
        <button
          className={`contact-form__grid-item contact-form__grid-item--half contact-form__try-me contact-form__button  ${
            isSending || animate ? 'contact-form__button--disabled' : ''
          } ${animate ? 'contact-form__button--hide' : ''}`}
          onClick={e => {
            e.preventDefault();
            setAnimate(true);
          }}
        >
          Try me!
        </button>
        <input
          type='submit'
          className={`contact-form__grid-item contact-form__grid-item--half contact-form__button ${
            isSending || animate ? 'contact-form__button--disabled' : ''
          } ${animate ? 'contact-form__button--hide' : ''}`}
          value='Send Message'
          disabled={isSending}
        />
      </form>
    </div>
  );
};

export default ContactForm;

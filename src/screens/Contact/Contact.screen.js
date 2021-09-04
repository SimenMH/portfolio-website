import './styles.css';

const Contact = () => {
  return (
    <div className='screen-container contact-container fade-in'>
      <h1>Contact me</h1>
      <p>
        Whether you're interested in hiring me for your next ambitious project,
        or just want to drop me an anonymous message, don't hesitate to use this
        form!
      </p>
      <form className='contact-form'>
        <ul>
          <li>
            <input
              className='input-field'
              placeholder='Name'
              type='text'
              required={true}
            />
            <div className='input-focus' />
          </li>
          <li>
            <input
              className='input-field'
              placeholder='Email (Optional)'
              type='email'
            />
            <div className='input-focus' />
          </li>
          <li className='form-grid-full'>
            <input className='input-field' placeholder='Subject' type='text' />
            <div className='input-focus' />
          </li>
          <li className='form-grid-full'>
            <textarea
              className='input-field'
              placeholder='Message'
              required={true}
            />
            <div className='input-focus' />
          </li>
          <li className='form-grid-submit'>
            <div className='submit-button'>
              <p>Send message</p>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Contact;

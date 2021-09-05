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
            required={true}
          />
          <label className='input-focus' />
        </div>
        <div className='form-grid-item submit-button'>
          <p>Send message</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;

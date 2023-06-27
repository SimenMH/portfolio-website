import './styles.css';

import SoMeLinks from '../../components/SoMeLinks/SoMeLinks.component';
import ContactForm from '../../components/ContactForm/ContactForm.component';

const Contact = () => {
  return (
    <div className='contact-container fade-in-animation'>
      <div className='contact-container__content'>
        <section>
          <ContactForm />
        </section>
        <section className='contact-container__details'>
          <div>
            <h2>
              Contact Details
              <div className='faded-line-seperator' />
            </h2>
            <p>Email: simenmelo@gmail.com</p>
            <p>Phone: +47 966-33-404</p>
            <p>Time zone: GMT+1</p>
          </div>
          <div className='contact-container__links-container'>
            <SoMeLinks />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

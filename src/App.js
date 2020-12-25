import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import SubmitMemo from '../src/components/SubmitMemo';

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_pmvlvfp',
        'template_n77aj9d',
        e.target,
        'user_PZohKOt9hhQXr3vjdI9LP'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsSubmit(true);
    setTimeout(() => {
      setIsSubmit(false);
    }, 5000);
  };
  return (
    <div className='App'>
      <Navbar></Navbar>
      {isSubmit ? (
        <SubmitMemo />
      ) : (
        <ContactForm sendEmail={sendEmail}></ContactForm>
      )}
    </div>
  );
}

export default App;

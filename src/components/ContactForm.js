import React from 'react';
const ContactForm = ({ sendEmail }) => {
  return (
    <div className='container'>
      <div className='form'>
        <div style={{ textAlign: 'center', fontSize: '14px' }}>
          <h1>Fill form to request appointment</h1>
        </div>
        <form onSubmit={sendEmail}>
          <div className='item'>
            <label for='name'>Nombre:</label>
            <input type='text' placeholder='Nombre' name='name' required />
          </div>
          <div className='item'>
            <label for='name'>Numero de telefono:</label>
            <input
              type='text'
              placeholder='Numero de telefono'
              name='number'
              required
            />
          </div>
          <div className='item'>
            <label for='name'>Pueblo:</label>
            <input type='text' placeholder='Pueblo' name='city' required />
          </div>
          <div className='item'>
            <label for='cars'>Seleccione servicio :</label>
            <p>
              <select name='service' id='cars' className='serviceList' required>
                <option selected></option>
                <option value='$95 - 40 Braids'>$95 - 40 Braids</option>
                <option value='$110 - 50 Braids'>$110 - 50 Braids</option>
                <option value='$120 - 60 Braids'>$120 - 60 Braids</option>
              </select>
            </p>
          </div>
          <button className='btn' type='submit' value='Send'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

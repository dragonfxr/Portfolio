import React, { useState } from 'react';
//在 React 库中，useState 是一个具名导出，而 React 是一个默认导出。因此，你需要使用大括号来导入 useState，但不需要为 React 这样做。

import { images } from '../../constants';
import { AppWrap, MotionWrap} from '../../wrapper';
import { client } from  '../../client';
import'./Footer.scss';


const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: ''});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      message: message, 
      email: email,  
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsSubmitted(true);
      })
  }

  return (
    <>
      <h2 className='head-text'>Take a coffee and chat with me!</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href={"mailto:rfeng422@gmail.com"} className='p-text'>rfeng422@gmail.com</a>
          {/* mailto: 是一个 URI（统一资源标识符）方案，它用于创建电子邮件链接。当用户点击一个带有 mailto: 的链接时，它会尝试打开用户的默认邮件客户端，并创建一封新的电子邮件，其中收件人地址已预填为 mailto: 后面的电子邮件地址。 */}
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href={"tel: +61 042-023-8022"} className='p-text'>+61 042-023-8022</a>
        </div>
      </div>

      {!isSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
        </div>
        <div>
          <textarea className='p-text' placeholder='Your message' value={message} name="message" onChange={handleChangeInput} cols="30"></textarea>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending': 'Send Message'}</button>
      </div>
      //else: 
      : <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__primarybg');
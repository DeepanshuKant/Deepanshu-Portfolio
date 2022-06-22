import React from 'react'
import './Contact.css'

function Contact() {


    function submitDetails() {


    }

    return (
        <>
            <div id="contact">
                <div className="contact__main__parent">
                    <div className="contact__heading">
                        <p>CONTACT US</p>
                        <h1>Reach out for a new project or just say hello</h1>
                    </div>
                    <div className="contact__form">
                        <form onSubmit={submitDetails} className="contact__left">
                            <p>SEND US MESSAGE</p>
                            <input type="text" placeholder='Your Name' className='input__field' required />
                            <input type="email" placeholder='Your Email' className='input__field' required />
                            <input type="text" placeholder='Subject' className='input__field' required />
                            <textarea cols="30" rows="10" placeholder='Your Message'  ></textarea>
                            <input type="submit" value="submit" />
                        </form>

                        <div className="contact__right">
                            <p className='contact__info__p' >CONTACT INFO</p>
                            <div className="contact__right__box">
                                <p >Where to Find Me</p>
                                <h1>C-62, Krishi Vihar, New Delhi - 110048</h1>
                            </div>
                            <div className="contact__right__box">
                                <p>Email Me</p>
                                <h1>dkdeepanshukant@gmail.com</h1>
                            </div>
                            <div className="contact__right__box">
                                <p>Call Me</p>
                                <h1>Mobile: (+91)8383865884</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
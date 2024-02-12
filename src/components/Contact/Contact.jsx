import React from 'react';
import './Contact.css'


function Contact(props) {
    return (
        <section className='contact-container'>
            <h1><span>Contact</span> Me</h1>
            
            <div className='form-container'>
                <div className='form-info'>
                    <div className='info-item'>
                        <i class='bx bx-envelope'></i>
                        <p>nguyenminhnam1739@gmail.com</p>
                    </div>
                    <div className='info-item'>
                        <i class='bx bxl-github'></i>
                        <p>github.com/nguyenminhnam11</p>
                    </div>
                </div>

                <div className='form-field'>
                    <div class="item1"><input type="text" placeholder='Fullname'/></div>
                    <div class="item2"><input type="text" placeholder='LastName'/></div>
                    <div class="item3"><input type="email" placeholder='Email'/></div>  
                    <div class="item4"><input type="text" placeholder='Message'/></div>
                <button class='item5'>Send</button>
                    
                </div>

            </div>
        </section>
    );
}

export default Contact;
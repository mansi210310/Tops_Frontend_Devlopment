import React from 'react'
import './contact.css'


const Contact = () => {
  return (
    <form action="action_page.php" method="post">
        <div class="imgcontainer">
            <h1 className='tital'>Contact Us</h1>
            <p className='head'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta cum corrupti accusantium nobis et corporis.</p>
        </div>

        <div class="container">
            <label for="" className='head-name'><b>Your Name</b></label>
            <input type="text" placeholder="Enter Your Name" name="" required/>
        
            <label for="" className='head-name'><b>Your Mail</b></label>
            <input type="email" placeholder="Enter Your Mail" name="" required/>

            <label for="" className='head-name'><b>Your Message</b></label>
            <textarea name="" id=""></textarea>

            <button type="submit">Submit</button>
        </div>
    </form>
  )
}

export default Contact

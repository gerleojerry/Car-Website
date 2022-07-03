import  React from 'react'
import './../App.css'


function Footer() {

  return  (
    <footer>

      <div className='linethrough'></div>
      <div className='container'>

        <div className='footer__content'>
          <div className='footer_title bold'> YEAR </div>
          <div className='footer__value'> 2021</div>

        </div>

        <div className='footer__content'>
          <div className='bold footer_title '> 3,350</div>
          <div className='footer__value'> MILEAGE</div>

        </div>

        <div className='footer__content'>
          <div className='footer_title bold'> MERCEDES-BENZ </div>
          <div className='footer__value'> C class 2021 </div>

        </div>

        <div className='footer__content'>
          <div className='footer_details'> <img src='images/arrow 1.png' alt='arrow img' /></div>
        </div>

      </div>
    </footer>
  )

}

export default Footer
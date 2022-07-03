import  React from 'react'


function Header() {

  return  (
    <header>

      <div className='header_nav'>

        <div  className='container'>

          {/* THIS IS THE LOGO PART  */ }
          <div className='logo'>

            <div className='logo__logo'>
              <img className='logo__img' src='images/image 2.png' alt='This is the logo' />  

              <div className='logo__text'>CARSLOT.</div>
            </div>

            {/* ================ */}


            <div className='header__nav'>
              <div className='lang'>
                <div className='lang__eng'>ENG</div>

                  <img className="lang__img" src='images/image 4.png' alt='This is the arrow icon' />
                  
              </div>

            <img src='images/image 3.png' alt='This is the alternative'/> 

          </div>
            
             
          </div>

          <div className='hero'>

          {/* THIS IS THE PRICE SECTION  */}

          <div className='price'>
            <img className='price__value'src='images/price.png' alt='this isfor the price' />  <br/>
            <img className='price__location'src='images/las vegas.png' alt='thisis for the location' />  
          </div>


          {/* THIS IS THE END OF THE PRICE SECTION  */}
 


          {/* END OF LOGO SECTION  */}

          <img className='car_img' src='images/image 9.png' alt='This is hero img.' />

        </div>
        {/* END OF HERO SECTION  */}
          <footer>

            <div className='container'> 

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

        <div className='footer__content hidden__small'>
          <div className='footer_details'>FULL DETAILS <img src='images/arrow 1.png' alt='arrow img' /></div>
        </div>

      </div>
      </div>
    </footer>

    {/* THIS IS THE DETAILS SECTION. */}

    {/* RIGHT HAND ICONS  */}

    <div className='icons'>
                
                <img src='images/image 6.png' alt='This is the alternative'/>  

                <img src='images/01.png' alt='This is the alternative'/>  

                <img src='images/image 5.png' alt='This is the alternative'/>  
            </div> 

          {/* THIS IS THE END OF RIGHT HAND ICONS */}


        </div>

        {/* END OF CLASS CONTAINER  */}
      </div>

      {/* THIS IS THE END OF HEADER NAV  */}
      

      <div className='details_container'>
        <button> FULL DETAILS </button>
      </div>

      <div className='coloring'></div>

    </header>
  )

}

export default Header
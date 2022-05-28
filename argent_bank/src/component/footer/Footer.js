import footer from './Footer.module.css'
import propTypes from 'prop-types'

/**
         * Footer component
         * 
         * @param props 
         * 
         * @return footer component
         *    
         */
function Footer(props) {
  
    return (
      <div className={footer.footer}>
        <p >Copyright 2020 Argent Bank</p>
      </div>
    )
  }

  Footer.propTypes = {

  }

export default Footer
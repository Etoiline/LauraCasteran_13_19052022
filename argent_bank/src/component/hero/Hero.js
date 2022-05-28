import hero from './Hero.module.css'
import propTypes from 'prop-types'
import banktree from '../../assets/bank-tree.jpeg'

/**
         * Hero component
         * 
         * @param props 
         * 
         * @return hero component
         *    
         */
function Hero(props) {
  
    return (
      <div className={hero.main}>
        <img src={banktree} alt="Bank tree" className={hero.main__background} />
        <div className={hero.content}>
        <h1>No fees.</h1>

        <h1>No minimum deposit.</h1>

        <h1>High interest rates.</h1>

        <p>Open a savings account with Argent Bank today!</p>
        </div>
      </div>
    )
  }

  Hero.propTypes = {

  }

export default Hero
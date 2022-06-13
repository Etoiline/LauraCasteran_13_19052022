import hero from './Hero.module.css'
import banktree from '../../assets/bank-tree.jpeg'

/**
         * Hero component
         * 
         * 
         * @return hero component
         *    
         */
function Hero() {
  
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


export default Hero
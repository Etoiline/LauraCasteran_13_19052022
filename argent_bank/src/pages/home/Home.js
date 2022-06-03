import home from './Home.module.css'
import propTypes from 'prop-types'
import Hero from '../../component/hero/Hero'
import Features from '../../component/features/Features'


/**
         * Home component
         * 
         * @param props 
         * 
         * @return home component
         *    
         */
function Home(props) {
  //console.log(process.env.REACT_APP_PORT)
  
    return (
      <div className={home.header}>
        <Hero />
        <Features />
      </div>
    )
  }

  Home.propTypes = {

  }

export default Home
import home from './Home.module.css'
import Hero from '../../component/hero/Hero'
import Features from '../../component/features/Features'


/**
         * Home component
         * 
         * 
         * @return home component
         *    
         */
function Home() {
  //console.log(process.env.REACT_APP_PORT)
  
    return (
      <div className={home.header}>
        <Hero />
        <Features />
      </div>
    )
  }


export default Home
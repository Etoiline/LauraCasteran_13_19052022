import features from './Features.module.css'
import propTypes from 'prop-types'
import FeatureItem from './FeatureItem'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

const featuresContent = [{
  logo:iconChat, 
  title : 'You are our #1 priority',
  content: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
},
  {
    logo:iconMoney,
    title:'More savings means higher rates',
    content:'The more you save with us, the higher your interest rate will be!'
  },
  {
    logo:iconSecurity,
    title:'Security you can trust',
    content:'We use top of the line encryption to make sure your data and money is always safe.'
  }]


/**
         * Features component
         * 
         * @param props 
         * 
         * @return features component
         *    
         */
function Features(props) {
  return (
    <div className={features.main}>
    {featuresContent.map(element=> <FeatureItem item={element} />)}
    </div>
    )   

    
  }

  Features.propTypes = {

  }

export default Features
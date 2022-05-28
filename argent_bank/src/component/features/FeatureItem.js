import features from './Features.module.css'
import propTypes from 'prop-types'

/**
         * Features-item component
         * 
         * @param props 
         * 
         * @return features-item component
         *    
         */
function FeaturesItem(props) {
    return (
      <div className={features.features_item}>
        <img src={props.item.logo} alt='icon' className={features.features_item__icon} />
        <h3>{props.item.title}</h3>
        <p>{props.item.content}</p>

      </div>
    )
  }

  FeaturesItem.propTypes = {

  }

export default FeaturesItem
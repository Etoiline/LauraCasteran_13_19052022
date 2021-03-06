import features from './Features.module.css'
import PropTypes from 'prop-types'

/**
         * Features-item component
         * 
         * @param props.item.logo logo de la feature
         * @param props.item.title titre de la feature
         * @param props.item.content contenu de la feature
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
    item:PropTypes.object
  }

export default FeaturesItem
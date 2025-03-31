
import { faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './fooditem.css';
import { useState } from 'react';





const FoodItem = ({ id, name, price, image, category }) => {

  const [itemcount, setItemCount] = useState(0)
  return (
    <div className='fooditem'>
      <div className='foodtem-image-container'>
        <img className='fooditem-image' src={image} alt={name} />
      </div>


      
      <div className='fooditem-icon'>
        {!itemcount ? <FontAwesomeIcon onClick={() => setItemCount(prev => prev + 1)} icon={faPlus} size='2x' className='icon' /> :
          <div className='item-counter-icon'>
            <FontAwesomeIcon className='mines-icon' onClick={() => setItemCount(prev => prev - 1)} icon={faSubtract} size='2x' color='red' />
            <p style={{ fontSize: '1.5rem' }}>{itemcount}</p>
            <FontAwesomeIcon className='plus-icon' onClick={() => setItemCount(prev => prev + 1)} icon={faPlus} size='2x' color='green' />
          </div>}
      </div>




      <div className='fooditem-info'>
        <div className='fooditem-info'>
          <h3 className='fooditem-info-name'>{name}</h3>
        </div>
        <p className='fooditem-info-price'>${price}</p>
      </div>
    </div>
  )
}

export default FoodItem

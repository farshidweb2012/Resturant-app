
import './fooditem.css';




const FoodItem = ({ id, name, price, image, category }) => {




  return (
    <div className='fooditem'>
      <div className='foodtem-image-container'>
        <img className='fooditem-image' src={image} alt={name} />
      </div>
      
     <div className='fooditem-icon'>
      +
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

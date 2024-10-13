
import PropTypes from 'prop-types';

function CustomLine(props) {
  
    return (
      <div 
        style={{
            backgroundColor: props.color, // Change background color
            width: props.width, // Example width
            height: props.height, // Example height
            transform:`rotate(${props.rotationDegrees}deg)`,
        }}>

      </div>
    )
  }


  CustomLine.propTypes = {
  color: PropTypes.string,
  strokeWidth: PropTypes.number,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

  export default CustomLine;
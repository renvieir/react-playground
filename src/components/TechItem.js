import React from 'react';
import PropTypes from 'prop-types';

function TechItem({tech, handleClick}) {
  return (
    <li>
      {tech}
      <button
        type="button"
        onClick={handleClick}>x</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Javascript Quantico',
}

TechItem.propTypes ={
  tech: PropTypes.string,
  handleClick: PropTypes.func.isRequired
}

export default TechItem;
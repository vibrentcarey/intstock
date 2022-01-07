import React from 'react';
import './TopBarDetails.css'
import PropTypes from 'prop-types'

const TopBarDetails = (props) => {
  return (
    <div className='details'>
      <h3 className='details__heading'>{props.heading}:</h3>
      <p className='details__info'>{props.info}</p>
      <p className='details__info'>{props.content}</p>
    </div>
  );
};

TopBarDetails.propTypes = {
  heading: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default TopBarDetails;
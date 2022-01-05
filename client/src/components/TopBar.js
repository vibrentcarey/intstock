import React from 'react';
import './TopBar.css'

import back from '../assets/arrow_back-24px.svg'

import PropTypes from 'prop-types'
const TopBar = (props) => {
  return (
    <div className='top-bar'>
      <section className='top-bar__left'>
        <img src={back} alt='back' />
        <h1>{props.title}</h1>
      </section>
    </div>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool
}

export default TopBar;
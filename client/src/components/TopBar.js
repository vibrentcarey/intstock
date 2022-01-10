import React from 'react';
import './TopBar.css'

import back from '../assets/arrow_back-24px.svg'
import PropTypes from 'prop-types'
import TopBarDetails from './TopBarDetails';
import Button from '../Button/Button';

const TopBar = (props) => {
  console.log(props)
  const showButton = true
  return (
    <div className='top-bar'>
      <section className='top-bar__top'>
        <div className='top-bar__left'>
          <img src={back} alt='back' />
          <h1>{props.title}</h1>
        </div>
        {showButton && <button>Edit</button>}
      </section>
      {props.details && (
        <div className='top-bar__details'>
          {props.details.map((detail, i) => {
            return <TopBarDetails heading={detail.heading} info={detail.info} content={detail.content} key={i} />
          })}
        </div>
      )}
    </div>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  details: PropTypes.array,
}

export default TopBar;
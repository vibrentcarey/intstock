import React from 'react';
import './TopBar.css'

import back from '../assets/arrow_back-24px.svg'
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'
import TopBarDetails from './TopBarDetails';
import Button from '../Button/Button';

const TopBar = (props) => {
  const history = useHistory()
  const handleBack = () => {
    history.goBack()
  }

  return (
    <div className='top-bar'>
      <section className='top-bar__top'>
        <div className='top-bar__left'>
          <img src={back} alt='back' onClick={handleBack} />
          <h1>{props.title}</h1>
        </div>
        {props.showButton && <Button value='Edit'/>}
      </section>
      {props.details && (
        <div className='top-bar__details'>
          <TopBarDetails heading='Warehouse address' info={props.details.address} content={props.details.city + ', ' + props.details.country} />
          <div className='top-bar__additional'>
            <TopBarDetails heading='Warehouse address' info={props.details.address} content={props.details.city + ', ' + props.details.country} />
            <TopBarDetails heading='Warehouse address' info={props.details.address} content={props.details.city + ', ' + props.details.country} />
          </div>
        </div>
      )}
    </div>
  );
};

TopBar.propTypes = {
  title: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  details: PropTypes.object,
}

export default TopBar;
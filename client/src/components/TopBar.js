import React from 'react';
import './TopBar.scss'

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
        {props.showButton && <Button type='edit' value='Edit' />}
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
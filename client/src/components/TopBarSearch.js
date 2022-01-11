import React from 'react';
import './TopBarSearch.scss'
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import { Link } from "react-router-dom";


const TopBarSearch = (props) => {
  return (
    <div className='top-search'>
      <h1 className='top-search__heading'>{props.title}</h1>
      <input className='top-search__input' placeholder='Search...' />
      <Link to={props.path}>
      <Button type="primary" value={props.buttonTitle} />
      </Link>

    </div>
  );
};

TopBarSearch.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired

}

export default TopBarSearch;
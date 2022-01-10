import React from 'react';
import './TopBarSearch.scss'
import PropTypes from 'prop-types'

const TopBarSearch = (props) => {
  return (
    <div className='top-search'>
      <h1>{props.title}</h1>
      <input className='top-search__input' placeholder='Search...'/>
    </div>
  );
};

TopBarSearch.propTypes = {
  title: PropTypes.string.isRequired
}

export default TopBarSearch;
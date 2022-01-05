import React from 'react';
import './TopBarSearch.css'

const TopBarSearch = (props) => {
  return (
    <div className='top-search'>
      <h1>{props.title}</h1>
      <input className='top-search__input' placeholder='Search...'/>
    </div>
  );
};

export default TopBarSearch;
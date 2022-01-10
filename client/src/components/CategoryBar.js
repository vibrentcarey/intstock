import React from 'react';
import './CategoryBar.scss'
import arrows from '../assets/sort-24px.svg'
import PropTypes from 'prop-types'

function CategoryBar (props)  {
  return (
    <div className='category'>
      <ul className='category__list'>
        {props.categories && props.categories.map(category => {
          return <li key={category} className='category__item'>{category} <img className='category__image' src={arrows} alt='arrows'/></li>
        })}
      </ul>
    </div>
  );
};

CategoryBar.propTypes = {
  categories: PropTypes.array.isRequired
}

export default CategoryBar;
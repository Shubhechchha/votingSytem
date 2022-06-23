import React from 'react';
import style from './Card.module.css';

const Card = (props) => {
  return (
    <div className={style.card}>
        {props.childrean}
    </div>
  )
}

export default Card
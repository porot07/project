import { useState } from 'react';
import s from './index.module.css';
import classnames from 'classnames';

import cardBackSide from './assest/card-back-side.jpg';

const PokemonCard = ({ name, img, id, type, values }) => {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    setActive(!active);
  };
  const activePokemon = active && s.active;
  return (
    <div className={s.root} onClick={handleClick}>
      <div className={classnames(s.pokemonCard, activePokemon)}>
        <div className={s.cardFront}>
          <div className={classnames(s.wrap, s.front)}>
            <div className={classnames(s.pokemon, s[type])}>
              <div className={s.values}>
                <div className={classnames(s.count, s.top)}>{values.top}</div>
                <div className={classnames(s.count, s.right)}>{values.right}</div>
                <div className={classnames(s.count, s.bottom)}>{values.bottom}</div>
                <div className={classnames(s.count, s.left)}>{values.left}</div>
              </div>
              <div className={s.imgContainer}>
                <img src={img} alt={name} />
              </div>
              <div className={s.info}>
                <span className={s.number}>#{id}</span>
                <h3 className={s.name}>{name}</h3>
                <small className={s.type}>
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={s.cardBack}>
          <div className={classnames(s.wrap, s.back)}>
            <img src={cardBackSide} alt="card-back-side" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;

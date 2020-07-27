import React, { PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const { removePlayer, name, index, score, changeScore, id } = this.props;
    return (
      <div className='player'>
        <span className='player-name'>
          <button className='remove-player' onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter index={index} score={score} changeScore={changeScore} />
      </div>
    );
  }
}

export default Player;

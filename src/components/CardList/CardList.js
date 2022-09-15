import { Component } from 'react'
import Card from '../Card/Card';

import './CardList.css';

class CardList extends Component {
    render() {
        // destructuring
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {
                    monsters.map((monster) => {
                        return (
                            <Card key={monster.id} monster={monster} />
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList;

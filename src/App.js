import React, {Component} from 'react';
import nanoid from 'nanoid';

import MenuItem from "./Components/MenuItem/MenuItem";

import './App.css';

import HamburgerImage from './assets/hamburger.jpg';
import CheeseburgerImage from './assets/cheeseburger.png';
import FriesImage from './assets/fries.jpeg';
import TeaImage from './assets/tea.jpeg';
import CoffeeImage from './assets/coffee.jpeg';
import ColaImage from './assets/cola.jpeg';

const menu = [
    {name: 'Hamburger', price: 80, image: HamburgerImage},
    {name: 'Cheeseburger', price: 90, image: CheeseburgerImage},
    {name: 'Fries', price: 45, image: FriesImage},
    {name: 'Coffee', price: 70, image: CoffeeImage},
    {name: 'Tea', price: 50, image: TeaImage},
    {name: 'Cola', price: 40, image: ColaImage},
];

class App extends Component {
    state = {

    };

    render() {
        const menuItems = menu.map(item => <MenuItem key={nanoid()} name={item.name} price={item.price} image={item.image}/>);

        return (
            <div className="App container">
                <div className="window leftWindow">

                </div>
                <div className="window rightWindow">
                    {menuItems}
                </div>
            </div>
        );
    }
}

export default App;

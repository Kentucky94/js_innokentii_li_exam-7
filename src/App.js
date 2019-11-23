import React, {Component} from 'react';
import nanoid from 'nanoid';

import MenuItem from "./Components/MenuItem/MenuItem";
import OrderItem from "./Components/OrderItem/OrderItem";

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
        menuItems: [
            {name: 'Hamburger', count: 0},
            {name: 'Cheeseburger', count: 0},
            {name: 'Fries', count: 0},
            {name: 'Coffee', count: 0},
            {name: 'Tea', count: 0},
            {name: 'Cola', count: 0},
        ],
        total: 0,
    };

    addItem = itemName => {
        const menuItems = [...this.state.menuItems];
        const itemIndex = menuItems.findIndex(item => item.name === itemName);
        const menuItem = {...menuItems[itemIndex]};

        menuItem.count++;

        menuItems[itemIndex] = menuItem;

        this.setState({menuItems});
    };

    deleteItem = itemName => {
        const menuItems = [...this.state.menuItems];
        const itemIndex = menuItems.findIndex(item => item.name === itemName);
        const menuItem = {...menuItems[itemIndex]};

        if(menuItem.count > 0){
            menuItem.count--;
        }

        menuItems[itemIndex] = menuItem;

        this.setState({menuItems});
    };

    getTotal = () => {
        let total = this.state.total;

        this.state.menuItems.forEach(item => {
            const count = item.count;

            const price = menu.find(menuItem => menuItem.name === item.name).price;

            total += count * price;
        });

        if(total > 0){
            return 'Total price: ' +  total;
        }else{
            return 'Your order is empty! Please add some items!';
        }
    };

    render() {
        const menuItems = menu.map(item => <MenuItem
            key={nanoid()}
            name={item.name}
            price={item.price}
            image={item.image}
            add={() => this.addItem(item.name)}
        />);

        const orderItems = this.state.menuItems.map(item => {
                const itemInfo = menu.find(menuItem => menuItem.name === item.name);

                const itemTotalPrice = item.count * itemInfo.price;

                let orderItem;

                if(item.count > 0){
                    orderItem =  <OrderItem
                        key={nanoid()}
                        name={item.name}
                        count={item.count}
                        price={itemTotalPrice}
                        delete={() => this.deleteItem(item.name)}
                    />
                }

                return orderItem;
            }
        );

        return (
            <div className="App container">
                <div className="window leftWindow">
                    {orderItems}
                    <p>{this.getTotal()}</p>
                </div>
                <div className="window rightWindow">
                    {menuItems}
                </div>
            </div>
        );
    }
}

export default App;

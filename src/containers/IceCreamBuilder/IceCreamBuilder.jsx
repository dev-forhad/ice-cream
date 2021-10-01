import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {
        items:{
            vanilla:45,
            chocolate : 50,
            lemon : 35,
            orange : 40,
            strawberry : 60
        },
        scoops : [],
        totalPrice : 0
    };

    addScoop = (scoop) => {
        const {scoops, items} = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops : workingScoops,
            totalPrice : prevState.totalPrice + items[scoop]
            }
        });
    }

    removeScoop = (scoop) => {
        debugger;
        console.log(scoop);
        const {scoops, items} = this.state;
        const workingScoops = [...scoops];
        console.log(workingScoops);
        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        if(scoopIndex>=0){
            workingScoops.splice(scoopIndex,1);
        console.log(workingScoops);
        this.setState((prevState) => {
            return {
                scoops : workingScoops,
                totalPrice : prevState.totalPrice - items[scoop]
            }
        });
        }
        
    }

    render() {
        const {items, totalPrice, scoops} = this.state;  
        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream  scoops = {scoops} />
                <Builder items={items} price={totalPrice} add={this.addScoop} remove={this.removeScoop} />
            </div>
        )
    }
}

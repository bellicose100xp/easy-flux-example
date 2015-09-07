/**
 * Created by admin on 8/29/2015.
 */
import React from 'react';
import ListStore from '../stores/ListStore';
import FormInput from './formInput';

let getListState = () => {
    return {
        items: ListStore.getItems()
    }
};

class AppRoot extends React.Component {

    constructor(){
        super();
        this.state = getListState();
    }

    render() {

        let items = ListStore.getItems();

        let itemHtml = items.map(item => {
            return <li key={item.id}> {item.name} </li>
        });

        return <ul>
            {itemHtml}
            <FormInput />
        </ul>;
    }
}

export default AppRoot;
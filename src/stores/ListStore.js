/**
 * Created by admin on 8/29/2015.
 */
import {EventEmitter} from 'events';
import _ from 'lodash';

let ListStore = _.extend({}, EventEmitter.prototype, {
    items: [
        {
            name: 'Item 1',
            id: 0
        },
        {
            name: 'Item 2',
            id: 1
        },
        {
            name: 'Item 3',
            id: 2
        }
    ],

    getItems: function () {
        return this.items;
    }
});

export default ListStore;
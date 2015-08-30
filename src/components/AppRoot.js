/**
 * Created by admin on 8/29/2015.
 */
import React from 'react';

class AppRoot extends React.Component {
    render() {
        let itemHtml = <li>Hello React and Elements 55</li>;

        return (
           <ul>

                  {itemHtml}

          </ul>
        );
    }
}

export default AppRoot;
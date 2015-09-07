/**
 * Created by admin on 9/6/2015.
 */
import React from 'react';

class FormInput extends React.Component {
    render() {
        return <form>
        <input
            type="text"
        ref="firstName"
        name="firstName"/>
            <input type="submit" value="Add Me"/>
        </form>
    }
}

export default FormInput;
/**
 * Created by fiddlest on 2016-10-02.
 */
import React from 'react';


export default class App extends React.Component{
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
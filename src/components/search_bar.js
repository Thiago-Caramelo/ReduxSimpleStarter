import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term : '' };
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                />
            </div>
        );
    }
}

// SearchBar.defaultProps = {
//     car : 'TesteCar'
// }

export default SearchBar;
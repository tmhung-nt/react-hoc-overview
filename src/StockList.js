import React, {Component} from 'react';

class StockList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Stock Name</td>
                            <td>Stock Price</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.tabRow(this.props.data)}
                    </tbody>
                </table>
                {this.props.children}
            </div>
        );
    }
}

export default StockList;

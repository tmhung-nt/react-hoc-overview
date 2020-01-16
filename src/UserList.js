import React, {Component} from 'react';

class UserList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.tabRow(this.props.data)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;

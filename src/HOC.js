import React, {Component} from 'react';
import TableRow from "./TableRow";


export default function Hoc(HocComponent, data){

    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data,
                inputValue: '',
            };
        }

        tabRow = () => {
            if (this.state.data instanceof Array) {
                return this.state.data.map(function (object, i) {
                    return <TableRow obj={object} key={i}/>;
                })
            }
        }

        handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }

        showInputTextBox = () => {
            return (
                <input type="text" placeholder="input value here ..." value={this.state.inputValue}
                    onChange={e => this.handleChange(e)} name="inputValue"
                />
            )
        }

        render(){
            return (
                <HocComponent data={this.state.data} {...this.props} tabRow={this.tabRow}>
                    {this.showInputTextBox()}
                </HocComponent>
            );
        }
    }
}

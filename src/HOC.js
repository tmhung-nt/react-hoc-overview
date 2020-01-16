import React, {Component} from 'react';
import TableRow from "./TableRow";

export default function Hoc(HocComponent, data){
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                data: data
            };
        }

        tabRow = () => {
            if (this.state.data instanceof Array) {
                return this.state.data.map(function (object, i) {
                    return <TableRow obj={object} key={i}/>;
                })
            }
        }

        render(){
            return (
                <HocComponent data={this.state.data} {...this.props} tabRow={this.tabRow}/>
            );
        }
    }
}

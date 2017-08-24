import React , { Component } from 'react';



export class User extends Component {
constructor(props) {
    super();

}

render() {
   return(
        <div>
           <h1 className="text-center">{this.props.data.head}</h1>
           <ul className="list-group">
            <li className="list-group-item">{this.props.data.header}</li>
            <li className="list-group-item">{this.props.data.subheader}</li>            

           </ul>
        </div>


        );
    }
}




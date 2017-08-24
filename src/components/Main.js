import React , { Component } from 'react';


export class Main extends Component {
    constructor(props) {
        super();
        this.state = {
            inputValue : ''

        }
    }


    // dataFromInput(event) {
    //     this.setState({
    //         inputValue: event.target.value

    //     });

    // }

    render() {
        return(

            <div>
                <h1 className="text-center">{this.props.data.head}</h1>
                <ul className="list-group">
                    <li className="list-group-item">{this.props.data.header}</li>
                    <li className="list-group-item">{this.props.data.text}</li>

                </ul>



                {/*<input onChange={this.dataFromInput.bind(this)} />
               <button onClick={() => this.props.changeUser(this.state.inputValue)}>Change Username</button>*/}

            </div>

        );

    }

}


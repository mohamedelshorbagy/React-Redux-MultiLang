import React from 'react'
import { connect } from 'react-redux'
import { Main } from '../components/Main';
import { User } from '../components/User';
import '../App.css';
// Importing Actions 

import { getName } from '../actions/dataReducerActions'; 

import { switchlangauges } from '../actions/translateAction';

class  App extends React.Component  {

  

  
  render() {

    const content = this.props.content;
    const switchlangauges = this.props.switchLang;
    

    const contentTranslation = content.content;



    if(content) {
  return (


    <div className="container">
        <div className="row">
            <div className="col-md-8 col-md-offset-2">


                  <select className="form-control" onChange={(e) => this.props.switchLang(e.target.value)}>
                      <option value="en">English</option>
                      <option value="ge">Germany</option>
                      <option value="uk">Ukraine</option>
                    </select>  



                <div className="navbar navbar-default">
                  <ul className="nav navbar-nav">
                    <li><a href="#">{contentTranslation.page.menu.main}</a></li>
                    <li><a href="#">{contentTranslation.page.menu.user}</a></li>
                  </ul>
                </div>



                    <Main  data={contentTranslation.page.main}/>
                    <User  data={contentTranslation.page.user}/>



                


            </div>


        </div>


{/*
        <Main changeUser={this.props.setName.bind(this)}/>

        <User username={this.props.user.name}/>
*/}

    </div>


    );

    }
  }
}


const mapStateToProps = (state) => {
  return {
    content: state.translateReducer
  };
}



const mapDispatchToProps = (dispatch) => {

  return {
      switchLang: (lang) => {
        dispatch(switchlangauges(lang));

      }

  };

}




export default connect(mapStateToProps ,mapDispatchToProps)(App);
import React, { Component } from 'react';
import './Card1.scss';

class Card1 extends Component {

    state = {store: []}
    componentDidMount() {
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => {console.log(data.data)
                this.setState({store:data.data});
                console.log(this.state.store);
            });
    }
    render() {
        return (

            <div>
                {this.state.store.map((st,id) =>{
                    return([
                    <img src={st.avatar} alt= "avatar is not found"/>,
                    <p>{st.first_name}</p>,
                    <p>{st.last_name}</p>,
                    <p>{st.email}</p>
                    ]
                )})}

            </div>
        );
    }
}

export default Card1;
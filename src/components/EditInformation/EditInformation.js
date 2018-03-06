import React, { Component } from 'react';
import './EditInformation.css';
import axios from 'axios';
import withLoader from "../../hoc/withLoader/withLoader";


class EditInformation extends Component {

    state = {
        title: '',
        content: '',
        idUrl: ''
    };

    componentDidUpdate (prevProps,prevState) {
        if(this.state.idUrl !== prevState.idUrl) {
            axios.get('/' + this.state.idUrl + '.json').then((response) => {
                this.setState({title: response.data.title, content: response.data.content})
            });
        }
    };

    oneInfoEditAction = (event) => {
        event.preventDefault();
        axios.patch('/' + this.state.idUrl + '.json', {title: this.state.title, content: this.state.content}).then(() => {
            this.props.history.replace('/');
        });
    };

    oneInfoValueChanged = (event) => {
        event.persist();
        this.setState({[event.target.name]: event.target.value});
    };



    render() {
        return (
            <form className="EditInformation">
                <div className="SelectCategory">
                    <select name="idUrl" onChange={this.oneInfoValueChanged}>
                        <option value="about">About</option>
                        <option value="advice">Advice</option>
                        <option value="contacts">Contacts</option>
                        <option value="films">Films</option>
                        <option value="another">Another</option>
                    </select>
                </div>
                <div className="TitleOfCategory">
                    <input type="text" name="title"
                           placeholder="Change title name"
                           onChange={this.oneInfoValueChanged}
                           value={this.state.title}
                    />
                </div>
                <div className="TextOfCategory">
                    <textarea type="text" name="content"
                              value={this.state.content}
                              onChange={this.oneInfoValueChanged}>
                    </textarea>
                </div>
                <button onClick={this.oneInfoEditAction}>Save</button>
            </form>
        )
    }
}


export default withLoader(EditInformation, axios) ;

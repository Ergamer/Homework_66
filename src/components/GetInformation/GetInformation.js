import React, {Component} from 'react';
import './GetInformation.css';
import axios from 'axios';


class GetInformation extends Component {
    state = {
        title: '',
        content: ''
    };


    componentDidMount() {
        console.log('mounted')
        axios.get('/' + this.props.match.params.id + '.json').then((response) => {
            this.setState({title: response.data.title, content: response.data.content})
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            axios.get('/' + this.props.match.params.id + '.json').then((response) => {
                this.setState({title: response.data.title, content: response.data.content})
            });
        }
    }


    render() {
        return (
            <div className="GetInformation">
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default GetInformation;

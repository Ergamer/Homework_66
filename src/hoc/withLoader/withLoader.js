import React, {Component, Fragment} from 'react';
import Loader from "../../components/UI/Loader/Loader";
import Backdrop from "../../components/UI/Backdrop/Backdrop";


const withLoader = (WrappedComponent, axios) => {
    return class withLoader extends Component {
        constructor(props) {
            super(props);

            this.state = {
                error: null,
                loading: null
            };

            axios.interceptors.request.use((req) => {
                console.log('request');
                this.setState({loading: true});
                return req;
            }, error => {
                this.setState({loading: false, error: error})
            });

            this.state.id = axios.interceptors.response.use(res => {
                console.log('response');
                this.setState({loading: false});
                return res;
            }, error => {
                this.setState({error: error, loading: false});
            });
        };

        errorDismissed = () => {
            this.setState({error: null});
        };

        componentWillUnmount() {
            axios.interceptors.response.eject(this.state.id);
        };


        render () {
            return (
                <Fragment>
                    {this.state.loading ? <div><Loader/><Backdrop /></div>: null}
                    <WrappedComponent/>
                </Fragment>
            )
        }
    };
};

export default withLoader;

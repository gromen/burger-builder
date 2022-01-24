import React, { Component } from 'react';
import Modal from '../../components/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => class extends Component {
  constructor() {
    super();

    this.state = {
      error: null,
    };
  }

  componentDidMount() {
    this.requestInterceptor = axios.interceptors.request.use(request => {
      this.setState({ error: null });

      return request;
    });
    this.responseInterceptor = axios.interceptors.response.use(
      response => response,
      error => {
        this.setState({ error });
      }
    );
  }

  componentWillUnmount() {
    	axios.interceptors.request.eject(this.requestInterceptor);
    	axios.interceptors.response.eject(this.responseInterceptor);
  }

  errorConfirmedHandler = () => {
    	this.setState({ error: null });
  };

  render() {
    	return (
      <Aux>
        <Modal modalClose={this.errorConfirmedHandler} show={this.state.error}>
          {this.state.error ? this.state.error.message : null}
        </Modal>
        <WrappedComponent {...this.props} />
      </Aux>
    	);
  }
};

export default withErrorHandler;

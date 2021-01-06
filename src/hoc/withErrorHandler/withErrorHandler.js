import React, { Component } from "react";
import Modal from "../../components/Modal/Modal";
import Aux from "../../hoc/Aux/Aux";

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    componentDidMount() {
      axios.interceptors.request.use((request) => {
        this.setState({ error: null });
        return request;
      });
      axios.interceptors.response.use(
        (response) => response,
        (error) => {
          this.setState({ error: error });
          return Promise.reject(error);
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClose={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Aux>
      );
    }
  };
};

export default withErrorHandler;

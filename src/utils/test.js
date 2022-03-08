import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../store';

const ReduxProvider = ({ children }) => (
  <Provider store={store()}>{children}</Provider>
);

export const reduxRender = (ui, options) => render(ui, { wrapper: ReduxProvider, ...options });

export * from '@testing-library/react';

export { reduxRender as render };

ReduxProvider.propTypes = {
  children: PropTypes.node.isRequired
};

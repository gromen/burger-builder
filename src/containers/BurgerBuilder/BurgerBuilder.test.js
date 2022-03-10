import { screen } from '@testing-library/react';
import { render } from '../../utils/test';
import BurgerBuilder from './BurgerBuilder';

describe('BurgerBuilder component', () => {
  it('renders', () => {
    render(<BurgerBuilder />);
  });
});

import { screen } from '@testing-library/react';
import { render } from '@/utils/test';
import Burger from './Burger';

const ingredients = {
  bacon: 0,
  cheese: 0,
  meat: 0,
  onion: 0,
  salad: 0
};

describe('Burger component', () => {
  it('renders component', () => {
    render(<Burger ingredients={ingredients} />);
  });

  it('render "Add ingredients, please" text when no error', () => {
    render(<Burger ingredients={ingredients} hasError={false} />);

    const output = screen.getByText('add ingredients, please', {
      exact: false
    });

    expect(output).toBeInTheDocument();
  });

  it('render "Sorry, something went wrong" text when error', () => {
    render(<Burger ingredients={ingredients} hasError />);

    const output = screen.getByText('sorry, something went wrong', {
      exact: false
    });

    expect(output).toBeInTheDocument();
  });

  it('does not render "Add ingredients, please" if has error', () => {
    render(<Burger ingredients={ingredients} hasError />);

    const output = screen.queryByText('add ingredients, please', {
      exact: false
    });

    expect(output).toBeNull();
  });

  it('does not render "sorry, something went wrong" if has no error', () => {
    render(<Burger ingredients={ingredients} hasError={false} />);

    const output = screen.queryByText('sorry, something went wrong', {
      exact: false
    });

    expect(output).toBeNull();
  });
});

import { screen } from '@testing-library/react';
import { render } from '../../../../utils/test';
import BurgerControl from './BurgerControl';

describe('BurgerControl component', () => {
  it('renders disabled remove button initially', function() {
    render(<BurgerControl removed={() => {}} added={() => {}} disabledNote />);

    const button = screen.getByTitle('remove', { exact: false });

    expect(button).toBeDisabled();
  });
});

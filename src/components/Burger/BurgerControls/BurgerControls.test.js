import { screen } from '@testing-library/react';
import { render } from '@/utils/test';
import BurgerControls from './BurgerControls';

describe('BurgerControls component', () => {
  it('renders disabled order button initially', () => {
    render(
      <BurgerControls
        disabled
        canPurchase
        totalPrice={0.0}
        onClickOrder={() => {}}
        ingredientAdded={() => {}}
        ingredientRemoved={() => {}}
      />
    );

    const buttonOrder = screen.getByText('order burger', { exact: false });

    expect(buttonOrder).toBeDisabled();
  });
});

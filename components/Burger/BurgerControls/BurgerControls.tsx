import BurgerControl from './BurgerControl/BurgerControl';
import classesGlobal from '@/app/App.module.css';
import { CONTROLS, Control } from '@/utils/controls';
import { useAppSelector } from '@/hooks/redux-toolkit';
import Button from '@/components/UI/Button/Button';

interface PropsBurgerControls {
  ingredientAdded: (type: string | number) => void;
  ingredientRemoved: (type: string | number) => void;
  disabled: boolean;
  canPurchase: boolean;
  onClickOrder: () => void;
}

const BurgerControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  canPurchase,
  onClickOrder
}: PropsBurgerControls): JSX.Element => {
  const totalPrice = useAppSelector(
    (state) => state.burgerBuilderState.totalPrice
  );

  return (
    <div className={classesGlobal.TextCenter}>
      <p className={classesGlobal.TextCenter}>
        Total price: <strong>{totalPrice}</strong>
      </p>
      {CONTROLS.map((control: Control) => (
        <BurgerControl
          added={() => {
            ingredientAdded(control.type);
          }}
          removed={() => {
            ingredientRemoved(control.type);
          }}
          key={control.label}
          label={control.label}
          // @ts-expect-error TODO refactor disabled[control.type] to meet ts requirements
          disabledNote={disabled[control.type]}
        />
      ))}
      <Button btnType="Danger" disabled={canPurchase} clicked={onClickOrder}>
        Order burger
      </Button>
    </div>
  );
};

export default BurgerControls;

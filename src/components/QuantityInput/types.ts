export interface QuantityInputProps {
  size?: 'medium' | 'small';
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export interface QuantityInputContainerProps {
  size: 'medium' | 'small';
}

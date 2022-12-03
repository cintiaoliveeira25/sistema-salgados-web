import styled, { css } from 'styled-components';
import { QuantityInputContainerProps } from './types';

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1px;
  border-radius: 6px;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors['base-text']};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.5rem;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWrapper = styled.button.attrs({
  type: 'button',
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-orange']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.2;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors['brand-bege-strong']};
  }
`;

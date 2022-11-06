import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({ theme }) => theme.colors['brand-orange']};
  color: ${({ theme }) => theme.colors['base-white']};
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  &.outlined {
    background: ${({ theme }) => theme.colors['brand-orange']};
    border: 1px solid ${({ theme }) => theme.colors['brand-orange']};
    color: ${({ theme }) => theme.colors['base-white']};
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

import styled from 'styled-components';

export const LayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 70rem;
    /* max-width: 100rem; */
    margin-right: auto;
    margin-left: auto;
  }

  img {
    width: 100%;
    height: auto;
  }

  .logo-image {
    width: 99px;
    height: 95px;
  }

  .image {
    position: relative;
  }

  .image::before {
    content: '';
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors['brand-orange']};
    position: absolute;
    top: -20.8%;
    left: 16.7%;
    z-index: 0;
  }

  .image img {
    position: relative;
    right: 0.5rem;
  }

  .image img,
  .image::before {
    border-radius: 0.25rem;
  }

  @media (min-width: 1600px) {
    .container {
      width: 100%;
      max-width: 100rem;
      margin-right: auto;
      margin-left: auto;
    }

    .image::before {
    content: '';
    height: 100%;
    width: 100%;
    background: ${({ theme }) => theme.colors['brand-orange']};
    position: absolute;
    top: -10%;
    left: 16.7%;
    z-index: 0;
  }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  text-align: center;

  img {
    margin-bottom: 8px;
  }

  p {
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;

import styled from "styled-components";

export const OrderListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  width: 800px;
  margin: 0 auto;
  
  h1 {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;
    text-align: center;
  }

  p {
    padding: 0.25rem 0;
    font-size: 14px;
    font-style: italic;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme['gray-400']};
  border: 1px solid ${props => props.theme['gray-500']};
  height: 3rem;
  width: 100%;
  border-radius: 6px;
`;

export const OrderTable = styled.div`
  flex: 1;
  overflow: auto;
  margin: 2rem 0;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;

    th {
      background-color: ${(props) => props.theme['purple-700']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      
      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5;
      }
    }

    td {
      border-top: 4px solid ${(props) => props.theme['gray-500']};
      color: ${props => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        /* width: 40%; */
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5;
      }

      &:hover {
        background-color: transparent;
      }
    }

    tr {
      background-color: ${(props) => props.theme['gray-300']};
      cursor: default;

      &:hover {
        background-color: ${(props) => props.theme['gray-500']};
      }
    }
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: ${props => props.theme['gray-600']};
  padding: 2rem 0;
  
  span {
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
  }


  hr {
    width: 100%;
    border-top: 1px solid ${props => props.theme['gray-400']};
  }
`;

export const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;
  color: ${props => props.theme['gray-700']};
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 8px;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;

  &:hover {
    color: ${props => props.theme['purple-500']};
    background-color: ${(props) => props.theme['purple-300']};
  }
`;
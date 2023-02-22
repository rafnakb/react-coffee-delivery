import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  justify-content: center;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 3.375rem;

    div {
      display: flex;
      flex-direction: row;
      gap: 0 0.5rem;
    }

    p {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      color: ${props => props.theme['gray-800']};
    }
    
  }
`;

export const FilterBox = styled.span`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  color: ${props => props.theme['yellow-700']};
  border: 1px solid ${props => props.theme['yellow-500']};
  border-radius: 12px;
  padding: 6px 12px;
`;
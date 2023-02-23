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

interface TagProps {
  isSelected: boolean;
}

export const TagBox = styled.button<TagProps>`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  color: ${props => props.theme['yellow-700']};
  border: 1px solid ${props => props.theme['yellow-500']};
  border-radius: 12px;
  padding: 6px 12px;

  &:hover {
    border: 1px solid ${props => props.theme['yellow-300']};
    background: ${props => props.theme['yellow-300']};
    cursor: default;
    transition: all 0.2s;
  }

  & {
    border: 1px solid ${select => select.isSelected ? props => props.theme['yellow-300'] : props => props.theme['yellow-500']};
    background: ${select => select.isSelected ? props => props.theme['yellow-300'] : 'none'};
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2.5rem 2rem;
  padding-bottom: 4rem;
`;

export const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  gap: 16px;
  padding: 1rem 0;
  color: ${props => props.theme['gray-600']};
`;
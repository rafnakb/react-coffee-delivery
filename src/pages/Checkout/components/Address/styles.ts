import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background: ${props => props.theme['gray-100']};
  border-radius: 6px;
  gap: 2rem 0rem;

  header {
    display: flex;
    flex-direction: row;
    gap: 0 0.5rem;
  }

  span {
    color: ${props => props.theme['yellow-700']};
  }
`;

export const SubtitleAndText = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: ${props => props.theme['gray-800']};

  p {
    font-weight: 400;
    font-size: 14px;
    color: ${props => props.theme['gray-700']};
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 1rem;
  }

  input {
    width: 100%;
  }
`;

interface ColumnProps {
  numGrid: number;
}

export const Column = styled.div<ColumnProps>`
  display: flex;
  float: left;
  box-sizing: border-box;
  width: ${props => (props.numGrid)}%;
`;

const BaseInput = styled.input`
  background: ${props => props.theme['gray-400']};
  border: 0;
  padding: 0.75rem;
  border-radius: 4px;
  color: ${props => props.theme['gray-700']};
  border: 1px solid transparent;

  &:focus {
    border: 1px solid ${props => props.theme['yellow-700']};
  }

  &::placeholder {
    color: ${props => props.theme['gray-600']};
  }
`;

export const Input = styled(BaseInput)`
  flex: 1;
`;
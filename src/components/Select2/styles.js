import styled from 'styled-components';

export const Select = styled.select.attrs(props => ({
  className: 'form-control',
}))`
  height: 35px;
  border-radius: 4px;
  border-color: #e6dfdf;
  font-size: 12px;
`;

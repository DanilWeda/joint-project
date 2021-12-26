import styled from 'styled-components';



const BaseTodoWrapper = `
  display: flex;
  font-size: 11px;
  padding: 10px 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: -0.41px;
  background: transparent;
  align-self: center;
  justify-self: center;
  justify-content: center;
  border: 1px solid red;
`;

export const TodoItem = styled.div(
  () => `
	width: 50%;
	height: 100px;
	border: 1px solid red;
	display: flex;
	flex-direction: row;
`
); 


export const TodoWrapper =
  styled.div
  (({ preset, customStyle = '' }) => {
    let acquiredStyles = '';
    switch (preset) {
      case 'BaseTodo':
        acquiredStyles = `
        ${BaseTodoWrapper};
        `;
        break;
		  default: acquiredStyles = BaseTodoWrapper;
    }
    const combinedStyles = acquiredStyles + customStyle;
    const result = customStyle ? combinedStyles : acquiredStyles;
    return result;
  });

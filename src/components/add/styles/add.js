import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Header = styled.h2`
    font-weight: normal;
    font-size: 64px;
    line-height: 78px;
    color: #000000;
    margin:0;
    padding-top:42px;
    padding-bottom: 62px;
`;

export const Form = styled.form`
display: flex;
flex-direction: row;
gap:70px;
align-items: flex-start;
`;

export const InpuContainer = styled.ul`
display:flex;
flex-direction:column;
margin: 0;
padding: 0;
list-style: none;
li:not(:nth-of-type(1)) {
    margin-top:16px;
   }
`;

export const InputText = styled.input`
background-color: #bae8e8;
		border: none;
    border-radius: 5px;
    padding-top:12px;
    padding-bottom:10px;
    padding-left:47px;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    width: 561px;
`;

export const List = styled.li`
`;

export const InputTextArea = styled.textarea`
background-color: #bae8e8;
		border: none;
    border-radius: 5px;
    padding-top:12px;
    padding-bottom:10px;
    padding-left:47px;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    height: 374px;
`;

export const InputSelect = styled.select`
background-color: #bae8e8;
		border: none;
    border-radius: 5px;
    padding-top:12px;
    padding-bottom:10px;
    padding-left:47px;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    width:100%;
    li:not(:nth-of-type(1)) {
  margin-top:16px;
 }
`;

export const Style = styled.option`
`;

export const SubmitButton = styled.button`
font-size: 64px;
  line-height: 78px;
  color: #000000;
  padding-top:20px;
  padding-left: 43px;
  padding-bottom:22px;
  padding-right:22px;
  background-color:#FFD803;
  border: none;
  cursor:pointer;
`;

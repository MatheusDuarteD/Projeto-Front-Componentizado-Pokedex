import styled from 'styled-components'

export const RightSideLayoutDiv = styled.div`
  background-color: #dc0a2d;
  width: 26vw;
  height: 43.3vh;
  display: flex;
  flex-direction: column;
`

export const RightSideTopPanelDiv = styled.div`
  background-color: #DC0A2D;
  height: 71.3%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-style:solid;
  border-right-style:solid;
  box-sizing: border-box;
`

export const WrapperInformationOutput = styled.div`
  background-color: white;
  height: 80%;
  width: 80%;
  border-radius: 5%;
  text-align: center;
  font-family: Arial;
  font-size: 1.2rem;
  box-sizing: border-box;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightSideBottomPanelDiv = styled.div`
  height: 28.8%;
  width: 100%;
  background-color: #DC0A2D;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-right-style: solid;
  border-bottom-style: solid;
  box-sizing: border-box;
`
export const WrapperInput = styled.input`
  box-sizing: border-box;
  padding: 7px;
  margin-left: 15px;
  margin-right: 10px;
  text-align: center;
  // font-family: roboto;
  border-color: black;
  border-radius: 5%;
  border-style: solid;
  font-size: 1rem;

`;

export const WrapperSubmit = styled.input`
  padding: 20px 10px;
  border-style: solid;
  border-color: transparent;
  border-radius: 50%;
  background-color: yellow;
  // font-family: roboto;
  cursor: pointer;
  text-align: center;
`;
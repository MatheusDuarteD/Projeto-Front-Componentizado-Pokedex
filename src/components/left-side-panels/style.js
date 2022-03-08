import styled from 'styled-components'

export const LeftSideLayoutDiv = styled.div`
  background-color: #dc0a2d;
  width: 30vw;
  height: 52vh;
  display: flex;
  flex-direction: column;
  
`

export const LeftSideTopPanelDiv = styled.div`
  width: 100%;
  height: 17.3%;
  background-color: #DC0A2D;
  border-style: solid;
  border-color: light black;
  box-sizing: border-box;
  
`


export const LeftSideMiddlePanelDiv = styled.div`
  width: 100%;
  height: 59%;
  background-color: #DC0A2D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left-style: solid;
  border-right-style: solid;
  box-sizing: border-box;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 90%;
    background-color: white;
    border-bottom-left-radius: 7%;
    border-style: solid;
    
    
    div {
      background-color: ${props => props.theme.color};
      width: 80%;
      height: 80%;
      border-radius: 5%;
      border-style: none;
    }
  }
`

export const LeftSideBottomPanelDiv = styled.div`
  width: 100%;
  height: 23.77%;
  background-color: #DC0A2D;
  border-style: solid;
  border-top-color: transparent;
  box-sizing: border-box;
`

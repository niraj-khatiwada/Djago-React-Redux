import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}
`
export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Loader = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border-top: 3px solid #162447;
  border-right: 5px solid transparent;
  border-bottom: 3px solid #162447;
  border-left: 5px solid transparent;
  animation: ${rotate} 1s infinite
  }
`

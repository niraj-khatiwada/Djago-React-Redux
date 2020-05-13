import React from 'react'
import { LoaderContainer, Loader } from './loader.styles'

export default function LoaderWrapper(ComponentToBeWrapped) {
  return ({ isLoading, ...otherProps }) => {
    return !isLoading ? (
      <ComponentToBeWrapped {...otherProps} />
    ) : (
      <LoaderContainer>
        <Loader></Loader>
      </LoaderContainer>
    )
  }
}

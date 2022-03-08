import React from 'react'
import * as S from './style'


function ImageOutput({src, fitType}) {
  return (
      <S.WrapperImage
        src={src}
        alt="Pokemon artwork"
        fitType={fitType}
      />
  )
}

export default ImageOutput

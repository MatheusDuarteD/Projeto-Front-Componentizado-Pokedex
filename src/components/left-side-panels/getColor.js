import chooseColorByType from "../../common/utils/chooseColorByType/chooseColorByType"

const getColor = (typeArr, theme) => {

  if(typeArr.generalInfo.types !== undefined){
    typeArr.generalInfo.types.map(item => {
      if(item.slot === 1) {
        theme.color = chooseColorByType(item.type.name)
        return theme
      }
      else{
        return null;
      }
    })  
  }
  else {
    return theme
  }
}

export default getColor
import { colorTypes } from "./colorTypes";

const chooseColorByType = (type) => {
  
  let color = "white"

  colorTypes.map((item) => (
    type === item.type ? (
      color = item.color
    ) : (
      <></>
    )
  ))
  
  return color
}

export default chooseColorByType
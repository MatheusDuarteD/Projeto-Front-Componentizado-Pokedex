import capitalize from "../../common/utils/capitalize"


function InformationOutPut({types}) {
  return (
    <div>
      <p>Pokedex index: {types.generalInfo.id}</p>
      <p>Name: {capitalize(types.generalInfo.name)}</p>
      <p>
        Type:{' '}
        {types.generalInfo.types.map(tipo =>
          tipo.slot === types.generalInfo.types.length ? (
            <span key={tipo.slot}>{capitalize(tipo.type.name)} </span>
          ) : (
            <span key={tipo.slot}>{capitalize(tipo.type.name)} / </span>
          )
        )}
      </p>
      <p>Height: {types.generalInfo.height / 10} m</p>
      <p>Weight: {types.generalInfo.weight / 10} kg</p>
    </div>
  )
}

export default InformationOutPut

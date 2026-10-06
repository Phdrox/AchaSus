
import { type OptionDinamic } from "../type/option-select";
  
  export function SelectArrayMapEstablishment<T>({
  data,
  valueKey,
  labelKey,
  labelInitialOption,
  value,
  defaultValue,
  ...props
}:OptionDinamic<T>){    
  return (
    <select value={value} defaultValue={defaultValue} {...props} className="selectEstablishmentMunicipal" >
      <option  disabled  selected={data.length<1?true:false}>{labelInitialOption}</option>
      {data.map((itemsArray,indexArray) => (
        <option key={indexArray} value={String(itemsArray[valueKey])}>
          {String(itemsArray[labelKey])}
        </option>
      ))}
    </select>
  )
}
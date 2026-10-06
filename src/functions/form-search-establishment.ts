import { useDispatch } from "react-redux";
import { type InputEstablishmentType } from "../type/form-input-establishment";
import { type SubmitHandler, useForm } from "react-hook-form"
import { insertCity,insertEstablishment,insertState } from "../redux/reducer/reducer";

export function SubmitSearch() {
  const {handleSubmit,register}= useForm<InputEstablishmentType>()
  const dispatchEstablishmentState=useDispatch()
  const onSubmit:SubmitHandler<InputEstablishmentType>= (data) => {
    dispatchEstablishmentState(insertCity(data.city.slice(0,6)))
    dispatchEstablishmentState(insertEstablishment(data.establishment))
    dispatchEstablishmentState(insertState(data.state))
  }
  
  return {onSubmit,handleSubmit,register}
}
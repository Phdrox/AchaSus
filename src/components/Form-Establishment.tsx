import { useEffect, useState, type ChangeEvent } from "react"
import { type ApiUFType } from "../type/brasil-select";
import { type ApiMunicipalType } from "../type/brasil-select";
import { apiBrasilData } from "../hooks/api-brasil";
import { SelectArrayMapEstablishment } from "./Select-Establishment";
import SearchIcon from '@mui/icons-material/Search';
import { SubmitSearch } from "../functions/form-search-establishment";


export default function FormEstablishment(){
  const [dataUFBrasil,setUFBrasil] = useState<ApiUFType[]>([]);
  const [dataMunicipalBrasil,setMunicipalBrasil] = useState<ApiMunicipalType[]>([]);
  const {handleSubmit,onSubmit,register} = SubmitSearch()
  
  useEffect(() => {
    apiBrasilData.get('uf/v1')
    .then(response => setUFBrasil(response.data))
  }, []) 

  const handleSelect = (event:ChangeEvent<HTMLSelectElement>)=>{
    const valueMunicipal=event.currentTarget.value;
    apiBrasilData.get(`municipios/v1/${valueMunicipal}`)
    .then(response => setMunicipalBrasil(response.data))
  }

  return(
    <form className="flex gap-4 p-4 items-end" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="text-emerald-600 font-quicksand font-bold ">Estado</label>
        <SelectArrayMapEstablishment
          data={dataUFBrasil}
          valueKey={"sigla"}
          labelKey={"sigla"}
          labelInitialOption="UF"
          {...register("state",{required:true,onChange:handleSelect})}
        />
      </div>
      <div>
        <label className="text-emerald-600 font-quicksand font-bold ">Cidade</label>
        <SelectArrayMapEstablishment
          data={dataMunicipalBrasil}
          valueKey={"codigo_ibge"}
          labelKey={"nome"}
          labelInitialOption="Insira sua cidade"
          {...register("city",{required:true})}
        />
      </div>
      <button  className="bg-emerald-700 rounded p-4 h-2/3 
        flex items-center justify-center 
        duration-300 hover:bg-emerald-600 cursor-pointer">
        <SearchIcon className="p-0 m-0 text-white"/>
      </button>
    </form>
  )

}
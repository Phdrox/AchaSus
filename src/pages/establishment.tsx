import {Link, useParams, useSearchParams } from "react-router"
import FormEstablishment from "../components/Form-Establishment"
import { useDispatch, useSelector } from "react-redux"
import {type RootState } from "../redux/store/store"
import {  useEffect, useState } from "react"
import { apiGovData } from "../hooks/api-gov"
import { CardComponentEstablishment } from "../components/Card"
import type { CardEstablishmentType } from "../type/card-establishment"
import CachedIcon from '@mui/icons-material/Cached';
import type { AxiosProgressEvent } from "axios"
import { insertCity} from "../redux/reducer/reducer"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Establishment() {
  const [dataEstablishments,setEstablishments] = useState([]);
  const [titleEstablishmentQuery]=useSearchParams();
  const titleEstablishment=titleEstablishmentQuery.get('title');
  const {id}=useParams();
  const {city}=useSelector(((state:RootState)=>state.establishment));
  const [loadingEstablishments,setLoadingEstablishments]=useState(0);
  console.log(city)

  const dispatch=useDispatch()
  useEffect(()=>{
    if(!id|| !city ) return;

    apiGovData.get(`/cnes/estabelecimentos`,{
      params:{
        codigo_tipo_unidade:id,
        codigo_municipio:city,
        limit:100,
        offset:0
      },
      onDownloadProgress:(progressEvent:AxiosProgressEvent)=>{
        const percent = progressEvent.total
            ? Math.round((progressEvent.loaded * 100) / progressEvent.total)
            : Math.round((progressEvent.progress ?? 0) * 100);

          // ⚡ Atualiza o estado do Redux a cada evento de progresso
        dispatch(insertCity(''))
        setLoadingEstablishments(percent);
      }
    })
    .then(response => 
      setEstablishments(response.data.estabelecimentos)
    )
  }, [id, city])
  
  return (
    <div className="flex flex-col gap-4">
      <Link to={'/'} className="flex justify-center items-center text-white text-xl m-2 p-1
      bg-emerald-500 rounded-md w-16 
      hover:bg-emerald-900
      duration-300 
      cursor-pointer
    ">
        <ArrowBackIcon  />
      </Link>
      <p className="font-quicksand text-5xl text-center text-white w-full bg-emerald-600 p-3 md:w-1/3 lg:w-1/4 lg:rounded-r-2xl ">
        {titleEstablishment}
      </p>
      <div className="flex justify-center" >  
        <FormEstablishment/>
      </div> 
      <div>
      {loadingEstablishments > 0 && loadingEstablishments < 100 ? (
        <div className="flex items-center justify-center p-6">
          <CachedIcon className="animate-spin text-emerald-800 text-3xl" />
        </div>
      ) : dataEstablishments.length === 0 ? (
      <p className="font-quicksand text-xl text-emerald-700 text-center">
        Nenhum Estabelecimento Encontrado
      </p>
      ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {dataEstablishments.map((item: CardEstablishmentType, index) => (
          <CardComponentEstablishment
            key={item.codigo_cnes ?? index}
            {...item}
          />
        ))}
      </div>
      )}
      </div>
    </div>
  )
}

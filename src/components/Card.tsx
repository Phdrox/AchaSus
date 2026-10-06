import type { CardEstablishmentType } from "../type/card-establishment";

interface ICardMain{
  image:string;
  title:string;
}

export const CardComponentMain= ({image,title}:ICardMain) => {
  return(
     <div className="cardMain">
        <img src={image} className="h-64 rounded-t-xl object-cover"/>
        <div className="p-2 text-center">
          <div>
            <p className="uppercase font-bold text-white text-xl">{title}</p>
          </div>
        </div>
     </div>
  )
}

export const CardComponentEstablishment = ({ ...props }: CardEstablishmentType) => {
  return (
    <div className=" flex flex-col gap-3 rounded-xl p-4 shadow-xl font-quicksand border border-emerald-200">
      <p className="font-bold text-emerald-600 text-xl">
        {props.nome_fantasia}
      </p>
      <p className="text-emerald-700 text-md uppercase font-semibold">
       Contato: {props.numero_telefone_estabelecimento || props.endereco_email_estabelecimento}
      </p>
      <div>
        <div className="text-emerald-700 text-md uppercase font-semibold">
          <p>
            Cep: {props.codigo_cep_estabelecimento} 
          </p>
          <p>
            Rua: {props.endereco_estabelecimento} 
          </p>
          <p>
            Bairro: {props.bairro_estabelecimento}
          </p>
          <p>
            N°: {props.numero_estabelecimento}
          </p>
        </div>
        <p className="text-md text-emerald-900 uppercase font-semibold">
          *{props.descricao_turno_atendimento}
        </p>
      </div>
    </div>
  );
};
import { Link } from "react-router"
import { CardComponentMain } from "../components/Card"
import { MainElementsCards } from "../elements/main-titles-card"
export default function Home() {

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10 p-10 grid-rows-2 justify-items-center">
      {MainElementsCards.map((itemsCard)=>(
        <Link to={`/${itemsCard.link}?title=${itemsCard.title}`} className="w-full flex justify-center" >
          <CardComponentMain 
            image={itemsCard.image} 
            title={itemsCard.title}
          />
        </Link>
      ))}
    </div>
  )
}

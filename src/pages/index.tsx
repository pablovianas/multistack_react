import Advantages from "@partials/index/_advantages"
import Presentation from "@partials/index/_Presentation"
import Faq from "@partials/index/_faq"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () =>{
   return {
     props:{
          title: 'Meu título'
     }
   }
}

export default function Index(){
  return (
  
    <div>
      <Presentation></Presentation>
      <Advantages></Advantages>
      <Faq></Faq>
    </div>
  
  
  )
}



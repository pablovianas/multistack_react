import { useState } from "react"
import { SectionContainer, Wave, SectionTitle, SectionSubTitle, AccordionStyled } from "./_faq.styled"
import { AccordionSummary, AccordionDetails, Typography, Container } from "@mui/material"

const questionsList = [
    {
        question: 'Dúvida 1',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus, nemo aliquam explicabo cumque soluta! Tenetur quis aliquid voluptatem sed commodi minima, quos, velit error, dolore non consequatur totam!'
    },
    {
        question: 'Dúvida 2',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus, nemo aliquam explicabo cumque soluta! Tenetur quis aliquid voluptatem sed commodi minima, quos, velit error, dolore non consequatur totam!'
    },
    {
        question: 'Dúvida 3',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus, nemo aliquam explicabo cumque soluta! Tenetur quis aliquid voluptatem sed commodi minima, quos, velit error, dolore non consequatur totam!'
    },
    {
        question: 'Dúvida 4',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio ducimus, nemo aliquam explicabo cumque soluta! Tenetur quis aliquid voluptatem sed commodi minima, quos, velit error, dolore non consequatur totam!'
    }
]
const Faq = () => {
    const [activeAccordion, setActiveAccordion] = useState(0)

    function isOpen(accordionNumber: number): boolean {
        return activeAccordion === accordionNumber;
    }

    function changeOpenAccordion(accordionNumber: number){
        setActiveAccordion(accordionNumber)
        if (isOpen(accordionNumber)){
             setActiveAccordion(0)

        }
    }
    function getIcon(accordionNumber: number){
        return isOpen(accordionNumber) ? 'twf-minus' : 'twf-plus'
        
    }
    return (
        <SectionContainer>
            <Wave src={'img/home/waves.svg'}/>
            <Container>
                <SectionTitle>Ainda está com dúvidas?</SectionTitle>
                <SectionSubTitle>Veja abaixo as perguntas frequentes</SectionSubTitle>
                {questionsList.map((item, index) => (
                    <AccordionStyled key={index} expanded={isOpen(index + 1)} onChange={() => changeOpenAccordion(index + 1)}>
                        <AccordionSummary expandIcon={<i className={getIcon(index + 1)}></i>}>
                            <Typography color={'primary'}>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>{item.answer}</AccordionDetails>
                    </AccordionStyled>
                ))}
            </Container>
        </SectionContainer>
    )
}
export default Faq
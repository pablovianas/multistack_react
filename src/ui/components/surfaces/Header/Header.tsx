import { useState } from "react"
import { Container, Toolbar, IconButton, MenuList, MenuItem, Divider } from "@mui/material"
import useIsMobile from "data/hooks/useIsMobile"
import { RoundedButtonStyled } from "ui/components/inputs/RoundedButton/RoundedButton.style"
import Link from "ui/components/navigation/Link/Link"
import { HeaderAppBar, HeaderLogo, HeaderDrawer ,ButtonsContainer } from "./Header.style"

const Header = () =>{
    const isMobile = useIsMobile()
    return isMobile? <HeaderMobile/> : <HeaderDesktop/>
}
const HeaderDesktop = () =>{
    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                 <Link href={'/'}>
                    <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'}/>
                 </Link>
                 <div>&nbsp;</div>
                 <div>&nbsp;</div>
                 <ButtonsContainer>
                     <Link href={'/cadastro/diarista'} Component={RoundedButtonStyled} mui={{color: 'primary', variant: 'contained'}}>Seja uma diarista </Link>

                      <Link href={'/login'} Component={RoundedButtonStyled} mui={{color: 'primary', variant: 'outlined'}}>Login </Link>
            
                 </ButtonsContainer>
            </Toolbar>
           
            
        </HeaderAppBar>
    
    )
}

export const HeaderMobile = () =>{
    const [isDrawerOpen, setDrawerOpen] = useState(false)


    return (
        <HeaderAppBar>
            <Toolbar component={Container}>
                    <IconButton edge={'start'} color="inherit" onClick={() => setDrawerOpen(true)}>
                        <i className={'twf-bars'}></i>
                    </IconButton>   
                    <Link href={'/'}>
                        <HeaderLogo src={'/img/logos/logo.svg'} alt={'e-diaristas'}/>
                    </Link>    
                    <HeaderDrawer open={isDrawerOpen} onClose={() => setDrawerOpen(false)} onClick={() => setDrawerOpen(false)}>
                        <MenuList>
                            <Link href={'/login'} Component={MenuItem}>Login</Link>    
                                <Divider/>
                            <Link href={'/cadastro/diarista'} Component={MenuItem}>Seja uma diarista</Link>    
                            
                        </MenuList>    
                    </HeaderDrawer> 
            </Toolbar>
        </HeaderAppBar>
    )
}
export default Header
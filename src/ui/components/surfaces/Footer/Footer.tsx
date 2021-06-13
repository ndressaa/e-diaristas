import React from 'react'
import { FooterStyled, FooterContainer, FooterTitle, AppList} from './Footer.style'
import { Typography, Box } from '@material-ui/core'

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>

        <Box sx={{maxWidth: '400px'}} >
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{mt: 2}} >
            e-diaristas te ajuda a encontrar um profissional perfeito
            para realizar a limpeza da sua casa. Garantimos o melhor
            profissional com total segurança e praticidade! São 
            milhares de clientes satisfeitos por todo o país.
          </Typography>
        </Box>

        <div>
          <FooterTitle>Baixe nosso aplicativo</FooterTitle>
          <AppList>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/app-store.png'} alt={'App disponível na App Store'} />
              </a>
            </li>
            <li>
              <a href={'/'} target={'_blank'} rel={'noopener noreferrer'}>
                <img src={'/img/logos/google-play.png'} alt={'App disponível no Google Play'} />
              </a>
            </li>
          </AppList>
        </div>

      </FooterContainer>
    </FooterStyled>
  )
}

export default Footer
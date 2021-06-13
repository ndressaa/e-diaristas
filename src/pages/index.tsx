import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Typography, Container } from '@material-ui/core'
import { FormElementsContainer, MaidsContainer, MaidsPaper } from 'ui/styles/pages/index.style'

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle 
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade'}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask 
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
          />
          <Typography color={'error'}>CEP inválido</Typography>
          <Button 
            variant={'contained'} 
            color={'secondary'} 
            sx={{width: '220px'}}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <MaidsPaper>
          <MaidsContainer>
            <UserInformation 
              name='Andressa'
              picture='https://github.com/ndressaa.png'
              rating={5}
              description={'Pelotas'}
            />
            <UserInformation 
              name='Andressa'
              picture='https://github.com/ndressaa.png'
              rating={5}
              description={'Pelotas'}
            />
            <UserInformation 
              name='Andressa'
              picture='https://github.com/ndressaa.png'
              rating={5}
              description={'Pelotas'}
            />
            <UserInformation 
              name='Andressa'
              picture='https://github.com/ndressaa.png'
              rating={5}
              description={'Pelotas'}
            />
            <UserInformation 
              name='Andressa'
              picture='https://github.com/ndressaa.png'
              rating={5}
              description={'Pelotas'}
            />
            <UserInformation 
              name='Andressa'
              picture='https://github.com/ndressaa.png'
              rating={5}
              description={'Pelotas'}
            />
          </MaidsContainer>
        </MaidsPaper>
      </Container>

    </div>
  )
}

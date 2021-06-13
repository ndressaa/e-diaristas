import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'
import { Button, Typography, Container, CircularProgress } from '@material-ui/core'
import { FormElementsContainer, MaidsContainer, MaidsPaper } from 'ui/styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'

export default function Home() {
  const { 
    cep, setCep, cepValido,
    buscarProfissionais, busca,
    diaristas, restantes,
    carregando,
    erro,
  } = useIndex()

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
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />

          {erro && <Typography color={'error'}>{erro}</Typography>}

          <Button 
            variant={'contained'} 
            color={'secondary'} 
            sx={{width: '220px'}}
            disabled={!cepValido || carregando}
            onClick={() => {buscarProfissionais(cep)}}
          >
            {carregando ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {busca && (diaristas.length > 0 ?
          <MaidsPaper>
            <MaidsContainer>
              {diaristas.map((item, index) => {
                return (
                  <UserInformation 
                    key={index}
                    name={item.nome_completo}
                    picture={item.foto_usuario}
                    rating={item.reputacao}
                    description={item.cidade}
                  />
                )
              })}
            </MaidsContainer>

            <Container sx={{textAlign: 'center'}}>
              {restantes > 0 && (
                <Typography sx={{mt: 5}}>
                ...e mais {restantes} profissiona{restantes > 1 ? 'is' : 'l'} atendem na sua região
              </Typography>
              )}
              <Button variant={'contained'} color={'secondary'} sx={{mt: 5}}>
                Contartar um profissional
              </Button>
            </Container>
          </MaidsPaper>
          :
          (
            <Typography align={'center'} color={'textPrimary'} >
              Ainda não temos nenhum profissional disponível em sua região
            </Typography>
          )
        )}

      </Container>

    </div>
  )
}

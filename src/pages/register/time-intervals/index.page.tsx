import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Container, Header } from '../styles'
import {
  IntervalBox,
  IntervalDay,
  IntervalInputs,
  IntervalsContainer,
  IntervalsItem,
} from './styles'

export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form">
        <IntervalsContainer>
          <IntervalsItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalsItem>

          <IntervalsItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput size="sm" type="time" step={60} />
              <TextInput size="sm" type="time" step={60} />
            </IntervalInputs>
          </IntervalsItem>
        </IntervalsContainer>

        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}

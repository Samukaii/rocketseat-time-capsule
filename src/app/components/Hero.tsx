import Image from 'next/image'
import { FC } from 'react'
import nlwLogo from '../../assets/nlw-space-time.svg'
import { ButtonLink } from '../components/ButtonLink'

export const Hero: FC = () => (
  <div className="space-y-5">
    <Image src={nlwLogo} alt="NLW Spacetime" />

    <div className="max-w-[420px] space-y-1">
      <h1 className="text-5xl font-bold leading-tight text-gray-50">
        Sua cápsula do tempo
      </h1>
      <p className="text-lg leading-relaxed">
        Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
        com o mundo{' '}
      </p>

      <ButtonLink color="green">Cadastrar lembrança</ButtonLink>
    </div>
  </div>
)

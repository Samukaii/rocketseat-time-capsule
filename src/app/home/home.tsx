import Image from 'next/image'
import { FC } from 'react'
import nlwLogo from '../../assets/nlw-space-time.svg'
import { ButtonLink } from '../components/button/ButtonLink'
import { SignIn } from './SignIn'

export const Home: FC = () => {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripes */}
        <div className="pr absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

        {/* Sign In */}
        <SignIn></SignIn>

        {/* Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />

          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo{' '}
            </p>

            <ButtonLink color="green">Cadastrar lembrança</ButtonLink>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col  bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              Criar agora
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}

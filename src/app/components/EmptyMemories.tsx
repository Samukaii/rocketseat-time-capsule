import Link from 'next/link'
import { FC } from 'react'

export const EmptyMemories: FC = () => (
  <div className="flex flex-1 items-center justify-center">
    <p className="w-[360px] text-center leading-relaxed">
      Você ainda não registrou nenhuma lembrança, comece a{' '}
      <Link href="/memories/new" className="underline hover:text-gray-50">
        Criar agora
      </Link>
    </p>
  </div>
)

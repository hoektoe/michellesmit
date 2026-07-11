import { clsx } from 'clsx/lite'
import Image from 'next/image'
import { type ComponentProps, type ReactNode } from 'react'
import { Section } from '../elements/section'

export function Stat({
  stat,
  text,
  className,
  ...props
}: { stat: ReactNode; text: ReactNode } & ComponentProps<'div'>) {
  return (
    <div className={clsx('border-l border-mist-950/20 pl-6', className)} {...props}>
      <div className="text-2xl/10 tracking-tight text-mist-950">{stat}</div>
      <p className="mt-2 text-sm/7 text-mist-700">{text}</p>
    </div>
  )
}

export function StatsWithGraph({ children, ...props }: ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <div className="col-span-2 grid grid-cols-2 gap-x-2 gap-y-10 sm:auto-cols-fr sm:grid-flow-col-dense">
          {children}
        </div>
      </div>
      <div className="pointer-events-none relative h-48 sm:h-64 md:mt-48 lg:h-48">
        <div className="absolute bottom-0 left-1/2 w-[150vw] max-w-[calc(var(--container-7xl)-(--spacing(10)*2))] -translate-x-1/2">
          <Image
            src="/img/dutch_house.png"
            alt="Winelands landscape"
            width={1200}
            height={400}
            className="h-full w-full object-cover object-bottom"
          />
        </div>
      </div>
    </Section>
  )
}

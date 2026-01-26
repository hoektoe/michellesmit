import { clsx } from 'clsx/lite'
import Image from 'next/image'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

export function CallToActionSimple({
  eyebrow,
  headline,
  subheadline,
  cta,
  image,
  className,
  ...props
}: {
  eyebrow?: ReactNode
  headline: ReactNode
  subheadline?: ReactNode
  cta?: ReactNode
  image?: { src: string; alt: string }
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container>
        <div className="flex flex-col items-stretch gap-8 sm:flex-row">
          {image && (
            <div className="relative h-80 w-full shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-40">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          )}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <div className="flex max-w-4xl flex-col gap-2">
                {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
                <Subheading>{headline}</Subheading>
              </div>
              {subheadline && <Text className="flex max-w-3xl flex-col gap-4 text-pretty">{subheadline}</Text>}
            </div>
            {cta}
          </div>
        </div>
      </Container>
    </section>
  )
}

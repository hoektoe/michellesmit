import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Psychologist Near Stellenbosch',
  description:
    'Counselling psychologist serving Stellenbosch and surrounds with anxiety, depression, couples and addiction therapy online or in nearby Paarl.',
  keywords: [
    'psychologist Stellenbosch',
    'therapist Stellenbosch',
    'couples therapy Stellenbosch',
    'anxiety psychologist Stellenbosch',
    'depression therapy Stellenbosch',
    'counselling Stellenbosch',
    'sielkundige Stellenbosch',
    'marriage counselling Stellenbosch',
  ],
  alternates: {
    canonical: '/stellenbosch',
  },
  openGraph: {
    title: 'Psychologist Near Stellenbosch | Michelle Smit',
    description:
      'HPCSA registered psychologist serving Stellenbosch area. Anxiety, depression, relationships & addiction therapy. Online sessions available.',
    images: ['/img/logo.png'],
  },
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        color="sunset"
        headline="Therapy for Stellenbosch & Surrounds"
        subheadline={
          <p>
            Looking for a psychologist near Stellenbosch? I offer therapy services from my practice in nearby Paarl,
            just 15 minutes away, as well as secure online sessions from the comfort of your home.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/hero.webp"
              alt="Therapy services for Stellenbosch"
              width={1408}
              height={736}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="bg-white/75 object-cover"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Therapy options for Stellenbosch clients">
        <p>
          My consulting room is at Bloemendal Clinic near Paarl, approximately 15–20 minutes from Stellenbosch via the
          R44. This gives Stellenbosch clients a nearby option outside the town centre, with free parking and a private,
          peaceful setting for face-to-face sessions.
        </p>

        <p>
          Secure online appointments are also available when travelling is inconvenient. This can be useful when work,
          study, family responsibilities or time between appointments make the trip to Paarl difficult.
        </p>

        <h2>Choosing in-person or online therapy</h2>

        <p>
          Some clients value leaving their everyday environment and meeting in a dedicated consulting room. Others
          prefer the familiarity and convenience of a secure video session. We can discuss which format feels most
          appropriate during the initial consultation, and revisit that choice if your circumstances change.
        </p>

        <h2>Concerns I can support you with</h2>

        <p>Therapy is available in English or Afrikaans for adults and couples seeking support with:</p>

        <ul>
          <li>Anxiety, panic, persistent worry and stress</li>
          <li>Depression, low mood and difficult life transitions</li>
          <li>Communication, trust and recurring conflict in relationships</li>
          <li>Substance use, process addictions, dual diagnosis and the effect of addiction on families</li>
        </ul>

        <h2>Starting the conversation</h2>

        <p>
          The free 15-minute consultation is a brief, no-obligation conversation about what brings you to therapy and
          whether my experience fits the support you need. If we continue, sessions can take place at Bloemendal Clinic
          or online from Stellenbosch.
        </p>
      </DocumentLeftAligned>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        image={{ src: '/img/michelle-consultation.jpg', alt: 'Michelle Smit' }}
        headline="Book your free consultation"
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss your needs and find out how I can help. Available for
            in-person sessions in Paarl or online from anywhere.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a Consultation
            </ButtonLink>
            <PlainButtonLink href="/services" size="lg">
              View All Services <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}

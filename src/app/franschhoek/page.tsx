import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Psychologist Near Franschhoek',
  description:
    'Counselling psychologist serving Franschhoek and the Cape Winelands with anxiety, depression, couples and addiction therapy.',
  keywords: [
    'psychologist Franschhoek',
    'therapist Franschhoek',
    'couples therapy Franschhoek',
    'anxiety psychologist Franschhoek',
    'depression therapy Franschhoek',
    'counselling Franschhoek',
    'sielkundige Franschhoek',
    'marriage counselling Franschhoek',
    'psychologist Cape Winelands',
  ],
  alternates: {
    canonical: '/franschhoek',
  },
  openGraph: {
    title: 'Psychologist Near Franschhoek | Michelle Smit',
    description:
      'HPCSA registered psychologist serving Franschhoek and the Cape Winelands. Anxiety, depression, relationships & addiction therapy. Online sessions available.',
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
        headline="Therapy for Franschhoek & the Winelands"
        subheadline={
          <p>
            Looking for a psychologist near Franschhoek? I offer therapy services from my practice in nearby Paarl, just
            20 minutes away along the scenic R45, as well as secure online sessions from the comfort of your home.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/hero.webp"
              alt="Therapy services for Franschhoek"
              width={1408}
              height={736}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="bg-white/75 object-cover"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="A nearby practice for the Franschhoek Valley">
        <p>
          Bloemendal Clinic is situated on the R45 between Franschhoek and Paarl, around 20 minutes from Franschhoek.
          The practice offers a quiet consulting environment, free parking and a convenient route for clients living or
          working in the valley.
        </p>

        <p>
          Online therapy offers another way to attend when seasonal traffic, changing work hours or family commitments
          make an in-person appointment less practical. Sessions take place over secure video, allowing you to speak
          from a private space without travelling to the clinic.
        </p>

        <h2>Support that works around real life</h2>

        <p>
          Therapy can provide a steady space to make sense of difficult patterns and decide what needs to change. We
          agree on a focus together and adapt the work to your goals, whether you are attending as an individual or as a
          couple. Appointments are available in English and Afrikaans.
        </p>

        <h2>Areas of focus</h2>

        <ul>
          <li>Feeling overwhelmed by anxiety, panic or ongoing stress</li>
          <li>Depression, loss of interest and periods of significant change</li>
          <li>Relationship strain, communication difficulties and rebuilding trust</li>
          <li>Addiction, dual diagnosis, recovery and support for affected family members</li>
        </ul>

        <h2>Planning your first appointment</h2>

        <p>
          Begin with a free 15-minute consultation to ask questions, outline what you would like help with and decide
          whether to meet online or at Bloemendal Clinic. The first full session then gives us time to understand your
          situation in greater depth and agree on the next steps.
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

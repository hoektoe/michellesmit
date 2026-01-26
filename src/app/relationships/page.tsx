import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Relationship & Couples Therapy in Paarl',
  description:
    'Marriage counselling and relationship therapy in Paarl, Western Cape. Improve communication, rebuild trust & strengthen your connection. Individual and couples sessions.',
  keywords: ['couples therapy Paarl', 'marriage counselling Paarl', 'relationship therapist', 'couples counselling Western Cape'],
  alternates: {
    canonical: 'https://michellesmit.com/relationships',
  },
  openGraph: {
    title: 'Relationship & Couples Therapy | Michelle Smit Psychologist',
    description: 'Professional relationship therapy to improve communication and rebuild connection. Paarl & online sessions.',
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
        headline="Is your relationship a choice or a chore?"
        subheadline={
          <p>
            Relationships are complicated. With the right support, you can learn to communicate more effectively,
            understand each other better, and build a stronger connection.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/relationships.png"
              alt="Relationship therapy"
              width={1200}
              height={800}
              className="object-cover bg-white/75"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Navigating Relationships">
        <p>
          Navigating relationships can be tricky. Relationships are complicated because they involve two people who
          each come with their own views, expectations, and ways of communicating — all trying to align and build
          something together.
        </p>

        <p>
          Whether you're struggling in a romantic relationship or experiencing difficulties with family members, therapy
          can provide a safe space to explore what's happening and find a path forward.
        </p>

        <h2>How Relationship Therapy Works</h2>

        <p>
          In therapy, we examine the dynamic between individuals and how they interact. We explore emotions,
          expectations, and unspoken concerns that may be affecting your connection. Often, patterns emerge that neither
          person was fully aware of.
        </p>

        <p>
          By gaining a fresh perspective on these dynamics, you can begin to understand each other more deeply and
          develop healthier ways of relating. Specific events or ongoing concerns can be addressed within our sessions.
        </p>

        <h2>What We Can Work On</h2>

        <ul>
          <li>Communication difficulties and misunderstandings</li>
          <li>Trust issues and rebuilding connection</li>
          <li>Navigating major life transitions together</li>
          <li>Managing conflict in healthy ways</li>
          <li>Understanding different attachment styles</li>
          <li>Family dynamics and intergenerational patterns</li>
          <li>Setting boundaries while maintaining closeness</li>
        </ul>

        <h2>Individual and Couples Sessions</h2>

        <p>
          Relationship therapy can be done individually or as a couple, depending on your needs and circumstances.
          Sometimes individual work helps you gain clarity before or alongside couples sessions.
        </p>

        <p>
          <strong>
            If your relationship feels more like a burden than a source of support, therapy can help you rediscover
            connection — or gain clarity about the path forward.
          </strong>
        </p>
      </DocumentLeftAligned>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        image={{ src: '/img/michelle_avatar.jpg', alt: 'Michelle Smit' }}
        headline="Strengthen your connections."
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss how therapy can help you build healthier, more fulfilling
            relationships.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Book a Consultation
            </ButtonLink>
            <PlainButtonLink href="/#services" size="lg">
              View All Services <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}

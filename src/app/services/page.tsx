import type { Metadata } from 'next'
import Image from 'next/image'

import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export const metadata: Metadata = {
  title: 'Therapy Services',
  description:
    'Therapy services in Paarl for anxiety, depression, substance abuse and relationships with online sessions available.',
  keywords: [
    'therapy services Paarl',
    'psychologist services',
    'mental health therapy',
    'counselling services Western Cape',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Therapy Services | Michelle Smit Psychologist',
    description:
      'Comprehensive therapy services for anxiety, depression, addiction & relationships. In-person and online sessions.',
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
        headline="Therapy Services"
        subheadline={
          <p>
            I offer evidence-based therapy tailored to your unique needs, helping you navigate life&apos;s challenges
            and build resilience in a safe, supportive environment.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/hero.webp"
              alt="Therapy services"
              width={1408}
              height={736}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="bg-white/75 object-cover"
            />
          </>
        }
      />

      <DocumentLeftAligned id="choosing-therapy" headline="Finding the right therapeutic support">
        <p>
          Therapy starts with understanding what is happening in your life and what you would like to change. You do not
          need to arrive with a diagnosis or a perfectly formed goal. We can begin with the experiences that feel
          difficult now, then agree on a practical focus for our work together.
        </p>

        <p>
          I work with adults and couples facing anxiety, depression, relationship difficulties, substance use and the
          effects these concerns can have on families. Sessions are collaborative, confidential and adapted to your
          circumstances rather than following a one-size-fits-all process.
        </p>

        <h2>How therapy begins</h2>

        <p>
          A free 15-minute consultation gives you an opportunity to ask initial questions and decide whether I may be a
          suitable psychologist for your needs. If we decide to continue, the first full session explores your concerns,
          relevant history and goals in more detail.
        </p>

        <h2>In-person and online sessions</h2>

        <p>
          Face-to-face appointments are available at Bloemendal Clinic in Paarl. Secure online sessions are available to
          clients elsewhere in the Western Cape and South Africa, offering continuity when travel or scheduling makes an
          in-person appointment difficult.
        </p>
      </DocumentLeftAligned>

      {/* Services */}
      <FeaturesTwoColumnWithDemos
        id="services"
        headline="Compassionate support for life's challenges."
        subheadline={
          <p>
            Whether you&apos;re dealing with anxiety, depression, relationship difficulties, or substance abuse, I
            provide a safe space to explore your concerns and develop effective strategies for change.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="olive" placement="bottom-right">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/substance-abuse.webp"
                      alt="Substance abuse therapy"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Substance Abuse"
              subheadline={
                <p>
                  Address substance use and dual diagnosis concerns with compassionate, non-judgmental support. Build
                  healthier coping strategies and work towards recovery.
                </p>
              }
              cta={
                <Link href="/substance-abuse">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="steel" placement="bottom-left">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/depression_well.webp"
                      alt="Depression therapy"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Depression"
              subheadline={
                <p>
                  Work through persistent low mood, loss of interest, and feelings of hopelessness with evidence-based
                  approaches including CBT.
                </p>
              }
              cta={
                <Link href="/depression">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="sage" placement="bottom-right">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/anxiety.webp"
                      alt="Anxiety therapy"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Anxiety"
              subheadline={
                <p>
                  Manage feelings of worry, panic, and overwhelm with evidence-based approaches including CBT tailored
                  to your needs.
                </p>
              }
              cta={
                <Link href="/anxiety">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="amber" placement="bottom-left">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/relationship.webp"
                      alt="Relationships therapy"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Relationships"
              subheadline={
                <p>
                  Navigate relationship challenges, improve communication, and build healthier connections with
                  partners, family members, and others in your life.
                </p>
              }
              cta={
                <Link href="/relationships">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
    </>
  )
}

import Image from 'next/image'

import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

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
            I offer evidence-based therapy tailored to your unique needs, helping you navigate life's challenges and
            build resilience in a safe, supportive environment.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/hero.jpeg"
              alt="Therapy services"
              width={1200}
              height={800}
              className="object-cover not-dark:bg-white/75 dark:bg-black/75"
            />
          </>
        }
      />

      {/* Services */}
      <FeaturesTwoColumnWithDemos
        id="services"
        headline="Compassionate support for life's challenges."
        subheadline={
          <p>
            Whether you're dealing with anxiety, depression, relationship difficulties, or substance abuse, I provide a
            safe space to explore your concerns and develop effective strategies for change.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="green" placement="bottom-right">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/substance-abuse.avif"
                      alt="Substance abuse therapy"
                      fill
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
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/depression.avif"
                      alt="Depression therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Depression"
              subheadline={
                <p>
                  Work through persistent low mood, loss of interest, and feelings of hopelessness with evidence-based
                  approaches including CBT and behavioural activation.
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
                <Screenshot wallpaper="protea" placement="bottom-right">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/anxiety.png"
                      alt="Anxiety therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Anxiety"
              subheadline={
                <p>
                  Manage feelings of worry, panic, and overwhelm with evidence-based approaches including CBT and
                  mindfulness-based interventions tailored to your needs.
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
                <Screenshot wallpaper="sunset" placement="bottom-left">
                  <div className="relative aspect-[1800/1250]">
                    <Image
                      src="/img/services/relationships.png"
                      alt="Relationships therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Screenshot>
              }
              headline="Relationships"
              subheadline={
                <p>
                  Navigate relationship challenges, improve communication, and build healthier connections with partners,
                  family members, and others in your life.
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

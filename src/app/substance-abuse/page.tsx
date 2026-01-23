import Image from 'next/image'

import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { DocumentLeftAligned } from '@/components/sections/document-left-aligned'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        color="green"
        headline="Are you battling with an addiction?"
        subheadline={
          <p>
            Whether you're struggling yourself or watching someone you love battle addiction, you don't have to face
            this alone. Understanding is the first step toward recovery.
          </p>
        }
        demo={
          <>
            <Image
              src="/img/services/substance-abuse.avif"
              alt="Substance abuse therapy"
              width={1200}
              height={800}
              className="object-cover not-dark:bg-white/75 dark:bg-black/75"
            />
          </>
        }
      />

      {/* Content */}
      <DocumentLeftAligned id="content" headline="Understanding Substance Abuse">
        <p>
          As a counselling psychologist who served as clinical leader of a licensed psychiatric hospital with a
          specialised substance abuse unit, I have extensive experience helping individuals understand their
          relationship with addiction.
        </p>

        <p>
          I can help you make sense of your substance abuse, explore your triggers, examine your thinking patterns, and
          address maladaptive behaviours in response to addiction.
        </p>

        <h2>Who I Work With</h2>

        <ul>
          <li>Individuals actively struggling with substance abuse</li>
          <li>Friends and family members of those with addiction</li>
          <li>Couples affected by addiction within their relationship</li>
          <li>Those seeking educational understanding about addiction</li>
        </ul>

        <h2>Substances and Addictions</h2>

        <p>
          In South Africa, common substances of abuse include prescription medications, alcohol, heroin, cocaine,
          crystal meth, and cannabis. However, addiction extends beyond substances.
        </p>

        <p>
          Process addictions — including gambling, gaming, shopping, and other compulsive behaviours — can be just as
          destructive and respond well to therapeutic intervention.
        </p>

        <h2>The Path to Recovery</h2>

        <p>
          Recovery is possible, but it requires understanding the underlying factors that contribute to addictive
          behaviour. Through therapy, we explore:
        </p>

        <ul>
          <li>The triggers that lead to substance use</li>
          <li>Underlying emotional pain or trauma</li>
          <li>Thought patterns that maintain addiction</li>
          <li>Healthy coping strategies and alternatives</li>
          <li>Building a support system for lasting recovery</li>
        </ul>

        <p>
          <strong>
            Whether you're unsure if you have a problem or you're ready to make a change, reaching out is a courageous
            first step.
          </strong>
        </p>
      </DocumentLeftAligned>

      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Take the first step toward recovery."
        subheadline={
          <p>
            Schedule a free 15-minute consultation to discuss how therapy can support you or your loved one on the
            journey to recovery.
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

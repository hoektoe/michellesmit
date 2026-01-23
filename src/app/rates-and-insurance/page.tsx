import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { BanknotesIcon } from '@/components/icons/banknotes-icon'
import { MailIcon } from '@/components/icons/mail-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'

export default function Page() {
  return (
    <>
      <section className="py-16">
        <Container>
          <div className="max-w-2xl">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <Heading>Session Rates</Heading>
                <Text size="lg">
                  <p>
                    Sessions are 50–60 minutes in length, either online or face to face at my Paarl practice.
                  </p>
                </Text>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-mist-600 dark:bg-mist-800 dark:text-mist-300">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-mist-950 dark:text-white">Medical Aid</p>
                    <p className="text-mist-600 dark:text-mist-400">
                      Michelle Smit Therapy is registered with most medical aids and the practice can claim on your
                      behalf.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-mist-600 dark:bg-mist-800 dark:text-mist-300">
                    <BanknotesIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-mist-950 dark:text-white">Cash Rates</p>
                    <p className="text-mist-600 dark:text-mist-400">
                      Alternatively, enquire about cash rates for self-pay options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mist-100 text-mist-600 dark:bg-mist-800 dark:text-mist-300">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-mist-950 dark:text-white">For More Information</p>
                    <a
                      href="mailto:practicemanager@michellesmit.com"
                      className="text-mist-600 hover:text-mist-950 dark:text-mist-400 dark:hover:text-white"
                    >
                      practicemanager@michellesmit.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CallToActionSimple
        id="call-to-action"
        headline="Schedule your free 15-minute consultation."
        subheadline={
          <p>
            Simply reach out and I will contact you back to schedule your consultation. Let's discuss how I can support
            you on your journey.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/contact" size="lg">
              Schedule Now
            </ButtonLink>
            <PlainButtonLink href="mailto:therapy@michellesmit.com" size="lg">
              Email Me <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}

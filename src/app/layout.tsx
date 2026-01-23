import Image from 'next/image'

import { ButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { ThemeToggle } from '@/components/elements/theme-toggle'
import { PostHogProvider } from './providers'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Michelle Smit - Counselling Psychologist',
  description:
    'HPCSA registered counselling psychologist based in Cape Town. Available for online therapy or face-to-face sessions in Paarl and Stellenbosch.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PostHogProvider>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/">Welcome</NavbarLink>
                <NavbarLink href="/about">About</NavbarLink>
                <NavbarLink href="/services">Therapy Services</NavbarLink>
                <NavbarLink href="/contact">Contact</NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image
                  src="/img/logo.png"
                  alt="Michelle Smit"
                  width={180}
                  height={60}
                  className="h-14 w-auto dark:invert"
                />
              </NavbarLogo>
            }
            actions={
              <>
                <ThemeToggle />
                <ButtonLink href="/contact">Book a Consultation</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <div className="flex max-w-sm flex-col gap-2">
                <p>Get in Touch</p>
                <div className="flex flex-col gap-2 text-mist-700 dark:text-mist-400">
                  <p>therapy@michellesmit.com</p>
                  <p className="text-sm">M. Psych, Hons Psych, HPCSA Registered</p>
                </div>
              </div>
            }
            links={
              <>
                <FooterCategory title="Services">
                  <FooterLink href="/anxiety">Anxiety</FooterLink>
                  <FooterLink href="/depression">Depression</FooterLink>
                  <FooterLink href="/relationships">Relationships</FooterLink>
                  <FooterLink href="/substance-abuse">Substance Abuse</FooterLink>
                </FooterCategory>
                <FooterCategory title="Practice">
                  <FooterLink href="/about">About</FooterLink>
                  <FooterLink href="/contact">Contact</FooterLink>
                  <FooterLink href="/rates-and-insurance">Rates & Insurance</FooterLink>
                </FooterCategory>
                <FooterCategory title="Locations">
                  <FooterLink href="https://www.google.com/maps/place/Bloemendal+Clinic/@-33.8250139,18.9347237,1204m/data=!3m1!1e3!4m10!1m2!2m1!1sBloemendal+Farm+R45,+Klapmuts+-+Simondium+Rd,++Paarl,+South+Africa+7670!3m6!1s0x1dcdaf1f1111e263:0xe015dc4c465c45bc!8m2!3d-33.8258573!4d18.9362283!15sCkdCbG9lbWVuZGFsIEZhcm0gUjQ1LCBLbGFwbXV0cyAtIFNpbW9uZGl1bSBSZCwgIFBhYXJsLCBTb3V0aCBBZnJpY2EgNzY3MJIBFG1lbnRhbF9oZWFsdGhfY2xpbmlj4AEA!16s%2Fg%2F1pp2tzdmm?entry=ttu" target="_blank">Paarl</FooterLink>
                  <FooterLink href="/contact">Online Sessions</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint={`© ${new Date().getFullYear()} Michelle Smit - Counselling Psychologist`}
          />
        </PostHogProvider>
      </body>
    </html>
  )
}

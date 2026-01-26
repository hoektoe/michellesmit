import Image from 'next/image'
import { Instrument_Serif, Inter } from 'next/font/google'

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

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://michellesmit.com'),
  title: {
    default: 'Michelle Smit | Counselling Psychologist in Paarl',
    template: '%s | Michelle Smit Psychologist',
  },
  description:
    'HPCSA registered counselling psychologist in Paarl, Western Cape. Specialising in anxiety, depression, relationships, and substance abuse therapy. Online sessions available.',
  keywords: [
    'psychologist Paarl',
    'counselling psychologist Western Cape',
    'anxiety therapist Paarl',
    'depression therapy Cape Town',
    'substance abuse counselling',
    'online therapy South Africa',
    'sielkundige Paarl',
    'therapist Paarl',
  ],
  authors: [{ name: 'Michelle Smit' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    siteName: 'Michelle Smit - Counselling Psychologist',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://michellesmit.com',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSerif.variable} ${inter.variable}`}>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://michellesmit.com/#business',
                  name: 'Michelle Smit - Counselling Psychologist',
                  description:
                    'HPCSA registered counselling psychologist specialising in anxiety, depression, relationships, and substance abuse therapy.',
                  url: 'https://michellesmit.com',
                  email: 'therapy@michellesmit.com',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Bloemendal Clinic, R45 Klapmuts-Simondium Road',
                    addressLocality: 'Paarl',
                    addressRegion: 'Western Cape',
                    postalCode: '7670',
                    addressCountry: 'ZA',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -33.8258573,
                    longitude: 18.9362283,
                  },
                  priceRange: '$$',
                  medicalSpecialty: 'Psychiatric',
                  availableLanguage: ['English', 'Afrikaans'],
                  areaServed: [
                    { '@type': 'City', name: 'Paarl' },
                    { '@type': 'City', name: 'Stellenbosch' },
                    { '@type': 'State', name: 'Western Cape' },
                  ],
                  hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Therapy Services',
                    itemListElement: [
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Anxiety Therapy' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Depression Therapy' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Substance Abuse Counselling' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Relationship & Couples Therapy' } },
                      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Online Therapy' } },
                    ],
                  },
                },
                {
                  '@type': 'Person',
                  '@id': 'https://michellesmit.com/#person',
                  name: 'Michelle Smit',
                  jobTitle: 'Counselling Psychologist',
                  description:
                    'HPCSA registered counselling psychologist with a Master\'s degree, specialising in addiction care and dual diagnosis treatment.',
                  url: 'https://michellesmit.com/about',
                  worksFor: { '@id': 'https://michellesmit.com/#business' },
                  hasCredential: [
                    {
                      '@type': 'EducationalOccupationalCredential',
                      credentialCategory: 'degree',
                      name: 'Master of Psychology',
                    },
                    {
                      '@type': 'EducationalOccupationalCredential',
                      credentialCategory: 'Professional License',
                      name: 'HPCSA Registration',
                      recognizedBy: {
                        '@type': 'Organization',
                        name: 'Health Professions Council of South Africa',
                      },
                    },
                  ],
                  knowsLanguage: ['English', 'Afrikaans'],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://michellesmit.com/#website',
                  url: 'https://michellesmit.com',
                  name: 'Michelle Smit - Counselling Psychologist',
                  publisher: { '@id': 'https://michellesmit.com/#person' },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <PostHogProvider>
          {/* Top Banner */}
          <div className="bg-mist-800 dark:bg-mist-900 text-sm text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
              <a href="mailto:therapy@michellesmit.com" className="flex items-center gap-2 hover:text-mist-200 transition-colors">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mist-600 text-xs">@</span>
                <span>therapy@michellesmit.com</span>
              </a>
              <span className="hidden sm:block text-mist-300">Counselling Psychologist based in Paarl</span>
            </div>
          </div>

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
                  <FooterLink href="/stellenbosch">Stellenbosch Area</FooterLink>
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

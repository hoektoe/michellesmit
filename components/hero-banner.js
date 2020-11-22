import Link from 'next/link'
import Image from 'next/image'
import Container from './container'


export default function Header() {
  return (
    <div className="bg-gray-900 py-20">
      <Container>
        <div className="grid sm:grid-cols-2">
          <div>
            <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-white sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
              Feel seen, heard
              <br className="hidden md:inline" />
              <span className="text-green-200">and valued</span>
            </h2>
            <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              When they can give and receive without judgement; and when they derive sustenance and strength from the relationship.
            </p>
          </div>
          <div className="flex justify-center">
            <Image className="rounded-lg" src="/images/lilly.jpg" width={400} height={300} />
          </div>
        </div>
      </Container>
    </div>
  )
}

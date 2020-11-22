import Link from 'next/link'
import Image from 'next/image'
import Container from './container'


export default function Header() {
  return (
    <Container>
      <div className="relative mt-12 sm:mt-16 lg:mt-24">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-start-2">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Welcome
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
            </p>

            <p className="mt-3 text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ex obcaecati natus eligendi delectus, cum deleniti sunt in labore nihil quod quibusdam expedita nemo.
            </p>

          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
            <Image className="relative mx-auto rounded-lg" src="/images/michellesmit.webp" height={600}  width={490} />
          </div>
        </div>
      </div>
    </Container>
  )
}

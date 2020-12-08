import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

export default function Header() {
    return (
        <Container>
            <div className="relative pb-16">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-top">
                    <div className="lg:col-start-2">
                        <p className="pb-6 text-lg text-gray-500">
                        Hi, I’m Michelle.<span className="font-semibold text-accent-500"> If you’re feeling stuck in a negative cycle with an your relationship, or anxiety & depression</span>. I’m here to help you experience the change, relief and lightness you’re looking for. I’m a psychotherapist with a passion for change work that makes a real difference in the lives of individuals and couples that I see. I’ve worked with so many people who were struggling with difficult conditions which they have learned to overcome with the help of proven therapies. 
                        </p>
                        <div>
                        <div className="inline-flex rounded-md shadow">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-accent flex-inline hover:bg-accent-400 md:py-4 md:text-lg md:px-10">
                                More about me
                            </a>
                        </div>
                        </div>
                    </div>

                    <div className="relative flex justify-end pr-8 mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                        <Image
                            className="relative rounded-lg"
                            src="/images/michellesmit.jpg"
                            width={400}
                            height={508}
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

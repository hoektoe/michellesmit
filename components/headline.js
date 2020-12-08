import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

export default function Header() {
    return (
        <Container>
            <div className="bg-white">
                <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="font-serif text-base font-semibold tracking-wide uppercase text-brand">
                            Michelle Smit - Counselling Psychologist
                        </h2>
                        <p className="mt-1 text-4xl font-extrabold text-accent-600 sm:text-5xl sm:tracking-tight lg:text-6xl">
                            Take the step to become better.
                        </p>
                        {/* <p className="max-w-xl mx-auto mt-5 text-xl text-gray-500">
                            Start building for free, then add a site plan to go live. Account plans
                            unlock additional features.
                        </p> */}
                    </div>
                </div>
            </div>
        </Container>
    );
}

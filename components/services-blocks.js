import Image from 'next/image';
import Link from 'next/link';

import Container from './container';

export default function Header() {
    return (
        <div className="grid grid-cols-2 py-16 mt-6 md:grid-cols-3 lg:mt-8">
            <div className="flex flex-col justify-center col-span-1 px-8 py-8 text-center text-white bg-gradient-to-r from-accent-400 to-accent-500">
                <p>Learn to tame</p>
                <h4 className="pb-6 font-serif text-4xl font-bold uppercase">Anxiety</h4>
                <p className="pb-6">I have extensive experience to help people just like you with anxiety. Proving you the tools to manage and enjoy live to the fullest.</p>
                <div>
                    <button type="button" class="inline-flex uppercase items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="flex justify-center col-span-1 bg-gray-50 h-96">
                <Image
                    className="object-fill w-full h-full"
                    src="/images/holding-hands-blue.jpg"
                    layout="fill"
                    unsized
                />
            </div>
            <div className="flex flex-col justify-center col-span-1 px-8 py-8 text-center text-white bg-gradient-to-r from-brand-500 to-brand-400">
                <p>Learn to tame</p>
                <h4 className="pb-6 font-serif text-4xl font-bold uppercase">Anxiety</h4>
                <p className="pb-6">I have extensive experience to help people just like you with anxiety. Proving you the tools to manage and enjoy live to the fullest.</p>
                <div>
                    <button type="button" class="inline-flex uppercase items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-center col-span-1 px-8 py-8 text-center text-white bg-gradient-to-r from-brand-500 to-brand-600">
                <p>Learn to tame</p>
                <h4 className="pb-6 font-serif text-4xl font-bold uppercase">Anxiety</h4>
                <p className="pb-6">I have extensive experience to help people just like you with anxiety. Proving you the tools to manage and enjoy live to the fullest.</p>
                <div>
                    <button type="button" class="inline-flex uppercase items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn more
                    </button>
                </div>
            </div>
            <div className="flex justify-center col-span-1 bg-gray-50 h-96">
                <Image
                    className="object-fill w-full h-full"
                    src="/images/happy.jpg"
                    layout="fill"
                    unsized
                />
            </div>
            <div className="flex flex-col justify-center col-span-1 px-8 py-8 text-center text-white bg-gradient-to-r from-accent-500 to-accent-400">
                <p>Learn to tame</p>
                <h4 className="pb-6 font-serif text-4xl font-bold uppercase">Anxiety</h4>
                <p className="pb-6">I have extensive experience to help people just like you with anxiety. Proving you the tools to manage and enjoy live to the fullest.</p>
                <div>
                    <button type="button" class="inline-flex uppercase items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    );
}

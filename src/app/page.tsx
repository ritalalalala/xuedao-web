import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-4 w-full bg-blue-100 py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="px-24">
        <p className="text-3xl font-bold text-blue-900 sm:text-5xl xl:text-6xl/none">
          Welcome to XueDAO
        </p>
        <p className="max-w-[600px] text-gray-500 md:text-xl">
          Empowering students through decentralized governance and Web3
          technologies.
        </p>
        <div className="mt-8 flex flex-row gap-2 min-[400px]:flex-row">
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Join Us
          </Link>
          <Link
            className="disabled:opacity-500 inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none"
            href="#"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

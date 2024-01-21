import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-4 w-full bg-blue-100 py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="flex flex-col items-center justify-between gap-x-8 px-8 sm:flex-row sm:px-12 md:px-24 lg:px-32 xl:px-48">
        <div className="flex flex-col">
          <p className="text-3xl font-bold text-blue-900 sm:text-5xl xl:text-6xl/none">
            Welcome to XueDAO
          </p>
          <p className="max-w-[600px] text-gray-500 md:text-xl">
            Our mission is to break down barriers, foster global connections
            among students, ignite a deep passion for learning, and promote a
            vibrant culture of knowledge sharing for both students and lifelong
            learners.
          </p>
          <div className="mt-8 flex flex-col gap-2 min-[400px]:flex-row sm:flex-row">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
              href="#"
            >
              Join Us
            </Link>
            <Link
              className="disabled:opacity-500 inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:mt-0">
          <Image
            src="/logo-square.png"
            width={600}
            height={600}
            alt="XueDAO square logo"
          />
        </div>
      </div>
    </div>
  );
}

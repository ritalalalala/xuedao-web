import Image from "next/image";
import Link from "next/link";

import ContactMenu from "@/components/ContactMenu";

function Header() {
  return (
    <div className="sticky top-0 z-10 flex h-20 items-center bg-white px-12 lg:px-16">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo.png" alt="Xue DAO logo" width={150} height={150} />
        <span className="sr-only">XueDAO</span>
      </Link>
      <nav className="ml-auto flex flex-row gap-4 sm:flex-row sm:gap-6">
        <Link
          className="text-md font-medium underline-offset-4 hover:underline"
          href="https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH"
          target="_blank"
        >
          Events
        </Link>
        <Link
          className="text-md font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Resources
        </Link>
        <ContactMenu />
      </nav>
    </div>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";

import ContactMenu from "@/components/ContactMenu";

function Header() {
  return (
    <div className="sticky top-0 z-10 flex h-20 items-center gap-2 bg-white px-4 lg:px-8">
      <Link className="mr-auto flex items-center" href="/">
        <Image src="/logo.png" alt="Xue DAO logo" width={200} height={200} />
        <span className="sr-only">XueDAO</span>
      </Link>
      <nav className="ml-auto flex flex-row gap-4 text-base font-medium sm:flex-row sm:gap-6 sm:text-xl">
        <Link
          className="underline-offset-4 hover:underline"
          href="https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH"
          target="_blank"
        >
          Events
        </Link>
        <Link className="underline-offset-4 hover:underline" href="#">
          Resources
        </Link>
        <ContactMenu />
      </nav>
    </div>
  );
}

export default Header;

import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex h-14 items-center px-12 lg:px-16">
      <Link className="flex items-center justify-center" href="/">
        <Image src="/logo.png" alt="Xue DAO logo" width={150} height={150} />
        <span className="sr-only">XueDAO</span>
      </Link>
      <nav className="ml-auto flex flex-row gap-4 sm:flex-row sm:gap-6">
        <Link
          className="text-md font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Membership
        </Link>
        <Link
          className="text-md font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Events
        </Link>
        <Link
          className="text-md font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Resources
        </Link>
        <Link
          className="text-md font-medium underline-offset-4 hover:underline"
          href="#"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Header;

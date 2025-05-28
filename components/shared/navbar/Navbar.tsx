import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
import { Button } from "@/components/ui/button";



const Navbar = () => {
  return (
    <nav className=" flex flex-between  fixed z-50 w-full gap-5 p-6 transparent sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        
        <p className="h2-bold  font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Collab <span className="text-primary-500 font-black">Sketch</span>
        </p>
      </Link>

      <div className="flex-between gap-5">
        <div >
        <SignedOut>
        <div className="flex gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">
                Log In
              </span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="sign up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
      </div>
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        
      </div>
    </nav>
  );
};
export default Navbar;

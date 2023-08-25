import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  UserButton,
  SignInButton,
  SignedOut,
  SignedIn,
  OrganizationSwitcher,
  OrganizationProfile,
  RedirectToSignIn
} from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <SignedOut>
        <RedirectToSignIn />
        </SignedOut>

        <SignedIn>
        <UserButton />
        <OrganizationSwitcher />
        <OrganizationProfile />
        </SignedIn>
      </main>
    </>
  );
}

import { Inter } from "next/font/google";
import Image from "next/image";
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
import Link from 'next/link';
import { OrganizationMembership } from "@clerk/nextjs/server";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <SignedOut>
        <RedirectToSignIn />
        </SignedOut>

        <SignedIn>
        <UserButton afterSwitchSessionUrl="" afterMultiSessionSingleSignOutUrl="" afterSignOutUrl=""/>
        <OrganizationSwitcher />
        <Link href="/org-profile">Organization Profile</Link>
        <Link href="/create-org">Create Organization</Link>
        <Link href="/org-profile-ec">Organization Profile EC</Link>
        <Link href="/create-org-ec">Create Organization EC</Link>
        </SignedIn>
      </main>
    </>
  );
}

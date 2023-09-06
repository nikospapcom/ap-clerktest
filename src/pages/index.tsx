import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  UserButton,
  SignedOut,
  SignedIn,
  OrganizationSwitcher,
  RedirectToSignIn,
} from "@clerk/nextjs";
import Link from "next/link";
import { dark, neobrutalism } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>

        <SignedIn>
          <UserButton
            afterSwitchSessionUrl=""
            afterMultiSessionSingleSignOutUrl=""
            afterSignOutUrl=""
          />
          <OrganizationSwitcher
            appearance={{
              variables: { colorText: "#000" },
            }}
          />
          <Link href="/org-profile">Organization Profile</Link>
          <Link href="/create-org">Create Organization</Link>
          <Link href="/org-profile-ec">Organization Profile EC</Link>
          <Link href="/create-org-ec">Create Organization EC</Link>
        </SignedIn>
      </main>
    </>
  );
}

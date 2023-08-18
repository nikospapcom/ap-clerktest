// page/_app.tsx
import { ClerkProvider,RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import type { AppProps } from "next/app";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider afterSignInUrl="/signedoutprovider">
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
 
export default MyApp;


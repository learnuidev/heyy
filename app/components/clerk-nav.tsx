import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { WithRounded } from "../(auth)/components/with-roundex";

export const ClerkNav = () => {
  return (
    <nav>
      <SignedOut>
        <div>
          <WithRounded>
            <SignInButton />
          </WithRounded>
        </div>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

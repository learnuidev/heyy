import { useTranslate } from "@/lib/i18n/hooks/use-translate";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { WithRounded } from "./with-roundex";
import { RoundedLink } from "./rounded-link";

export const HomeBanner = () => {
  const translation = useTranslate("home");
  return (
    <section className="text-center mt-24">
      <h1 className="text-4xl font-bold">{translation.title}</h1>
      <p className="text-xl font-light">{translation.description}</p>

      <SignedOut>
        <WithRounded>
          <SignInButton />
        </WithRounded>
      </SignedOut>

      <SignedIn>
        <RoundedLink href="/app">{translation.gettingStarted}</RoundedLink>
      </SignedIn>
    </section>
  );
};

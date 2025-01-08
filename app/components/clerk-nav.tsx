"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { WithRounded } from "../(auth)/components/with-roundex";
import { useTheme } from "next-themes";

import { Moon, Sun } from "lucide-react";

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </button>
  );
}

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
        <div className="flex justify-between items-center">
          <UserButton />
          <DarkModeToggle />
        </div>
      </SignedIn>
    </nav>
  );
};

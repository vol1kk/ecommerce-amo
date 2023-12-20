import assertNever from "@/utils/assertNever";
import { GitHubIcon } from "@/components/Icons";
import { AvailableProviders } from "@/components/SignIn/types";

export function getOAuthIcon(name: Lowercase<AvailableProviders>) {
  switch (name) {
    case "github":
      return <GitHubIcon />;
    case "credentials":
      throw new Error("You shouldn't handle this here");
    default: {
      assertNever(name);
    }
  }
}

import assertNever from "@/utils/assertNever";
import { GitHubIcon } from "@/components/Icons";
import { TAvailableProviders } from "@/components/SignIn";

export function getOAuthIcon(name: Lowercase<TAvailableProviders>) {
  switch (name) {
    case "github":
      return <GitHubIcon />;
    default: {
      assertNever(name);
    }
  }
}

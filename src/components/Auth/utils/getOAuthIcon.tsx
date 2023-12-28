import assertNever from "@/utils/assertNever";
import { GitHubIcon } from "@/components/common/Icons";
import { TAvailableProviders } from "@/components/Auth";

export function getOAuthIcon(name: Lowercase<TAvailableProviders>) {
  switch (name) {
    case "github":
      return <GitHubIcon />;
    default: {
      assertNever(name);
    }
  }
}

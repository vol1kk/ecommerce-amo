import Link from "@/components/common/Link";
import { Auth } from "@/components/client/Auth";

export default function Page() {
  return (
    <Auth>
      <Auth.Image src="/slides/slide-signin.jpg" alt="Sign In" />
      <Auth.Options>
        <Auth.OAuthLogin />
        <Auth.CredentialsLogin />
        <Link
          href="/register"
          className="mt-4 rounded-md bg-accent py-3 text-center font-bold"
        >
          Sign Up
        </Link>
      </Auth.Options>
    </Auth>
  );
}

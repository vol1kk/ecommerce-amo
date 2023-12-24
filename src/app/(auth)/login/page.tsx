import { Auth } from "@/components/Auth";

export default function Page() {
  return (
    <Auth>
      <Auth.Image src="/slides/slide-signin.jpg" alt="Sign In" />
      <Auth.Options>
        <Auth.OAuthLogin />
        <Auth.CredentialsLogin />
      </Auth.Options>
    </Auth>
  );
}

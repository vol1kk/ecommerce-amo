import { Auth } from "@/components/Auth";

export default function Page() {
  return (
    <Auth>
      <Auth.Image src="/slides/slide-register.jpg" alt="Sign Up" />
      <Auth.Options>
        <Auth.CredentialsRegister />
      </Auth.Options>
    </Auth>
  );
}

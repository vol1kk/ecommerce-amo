import {
  AvailableProviders,
  CredentialsLogin,
  OAuthLogin,
} from "@/components/SignIn";

export default function Page() {
  return (
    <main className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:flex-col">
      <img
        aria-hidden
        src="/slides/slide-signin.png"
        alt="Sign in"
        className="aspect-square w-full object-cover"
      />
      <section className="grid flex-1 place-content-center  p-4">
        <div>
          {AvailableProviders.slice(1).map(provider => (
            <OAuthLogin key={provider} name={provider} />
          ))}
        </div>
        <div className="relative inset-x-0 my-8 h-[2px] rounded-md bg-[#666] bg-opacity-25 uppercase">
          <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white px-6 py-1 font-bold text-[#666]">
            Or
          </span>
        </div>
        <CredentialsLogin />
      </section>
    </main>
  );
}

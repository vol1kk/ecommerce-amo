import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid flex-1 place-content-center [&>*]:mb-2">
      <h2 className="text-center text-3xl">
        <span className="mr-2 border-r-[1px] border-lightColor pr-2">404</span>
        <strong>Not Found</strong>
      </h2>
      <p className="text-lg">Could not find requested resource</p>
      <Link
        className="block text-center text-sm font-bold uppercase tracking-widest underline underline-offset-4"
        href="/"
      >
        Return Home
      </Link>
    </main>
  );
}

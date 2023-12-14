import Link from "next/link";
import { HelpCategory, InfoCategory } from "@/layouts/Footer";

export default function Footer() {
  return (
    <footer className=" bg-boldColor px-4 py-8 text-accent">
      <div className="mx-auto flex max-w-screen-xl justify-between gap-4 sm:w-fit sm:flex-col [&>div>h2]:mb-6 [&>div>h2]:text-2xl [&>div>h2]:font-bold [&>div>ul]:text-lg [&>div>ul]:leading-loose">
        {[HelpCategory, InfoCategory].map(category => (
          <div key={category.name} className="flex flex-col items-center">
            <h2>{category.name}</h2>
            <ul>
              {category.links.map(link => (
                <li key={link.name}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col items-center [&>ul>li]:text-center">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <a href="mailto:support@example.com">support@example.com</a>
            </li>
            <li>4357 Wolf Pen Road, Redwood City</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-center font-bold">© Vsevolod Ruzhytskyi, 2023</p>
    </footer>
  );
}

import Head from "next/head";
import Link from "next/link";

const links = [
  { label: "CSR", to: "/csr/photos" },
  { label: "SSR", to: "/ssr/photos" },
  { label: "SSG", to: "/ssg/photos" },
];

export default function Home() {
  return (
    <main>
      <Head>
        <title>Next.js Demo</title>
      </Head>
      <div>
        <h1>Next.js Demo</h1>
        <nav>
          <ul>
            {links.map(({ label, to }, i) => (
              <li key={i}>
                <Link href={to}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}

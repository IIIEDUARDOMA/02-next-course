import Link from "next/link";

function HomePage() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link href="/sobre">Ir para pagina sobre</Link>
    </>
  );
}

export default HomePage;

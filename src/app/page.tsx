import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bem vindo ao Promo Sniper</h1>

      <p>
        <Link prefetch href="/promos">
          Clique aqui para ver as promos
        </Link>
      </p>
    </div>
  );
}

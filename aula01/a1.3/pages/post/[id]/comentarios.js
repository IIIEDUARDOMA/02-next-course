import Link from "next/link";
import { useRouter } from "next/router";

export default function Comentarios() {
  const router = useRouter();

  return (
    <div>
      Comentarios do post com ID:{router.query.id}
      <ul>
        <li>
          <Link href="/">Ir para Home</Link>
        </li>
        <li>
          <Link href={`/post/${router.query.id}`}>Ir para Post</Link>
        </li>
      </ul>
    </div>
  );
}

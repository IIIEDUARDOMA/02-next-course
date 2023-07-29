import { useRouter } from "next//router";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  return (
    <>
      <div>
        Id do post atual: {router.query.id}
        <ul>
          <li>
            <Link href="/">Ir para Home</Link>
          </li>
          <li>
            <Link href={`/post/${router.query.id}/comentarios`}>
              Ir para os comentarios
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

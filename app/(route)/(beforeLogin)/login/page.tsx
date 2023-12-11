"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

// 서버 컴포넌트가 아닌 클라이언트 컴포넌트로
export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

// push 뒤로가기 하면 로그인
// replace 뒤로가기 하면 로그인이전의 라우팅으로

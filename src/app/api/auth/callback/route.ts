import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url); // Guarda os parâmetros dispostos na url
  const code = searchParams.get("code"); // pega o valor do parâmetro 'code'

  const registerResponse = await api.post("/register", { code });

  const { token } = registerResponse.data;

  const redirectUrl = new URL("/", request.url);

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/, max-age=${cookieExpiresInSeconds}`,
    },
  });
  // Set-Cookie salva o cookie e o Path=/ faz com que o cookie esteja disponível em toda a aplicação.
}

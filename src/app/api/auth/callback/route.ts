import { api } from "@/lib/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url); // Guarda os parâmetros dispostos na url
  const code = searchParams.get("code"); // pega o valor do parâmetro 'code'

  const redirectTo = request.cookies.get("redirectTo")?.value; // Caso esse cookie exista (criado no middleware), ao usuário logar, ele vai ser redirecionado para a página que estava tentando acessar.

  const registerResponse = await api.post("/register", { code });

  const { token } = registerResponse.data;

  const redirectUrl = redirectTo ?? new URL("/", request.url);
  // Checa se o usuário estava tentando acessar uma página específica da aplicação. Caso não esteja, é redirecionado para a página inicial para logados.

  const cookieExpiresInSeconds = 60 * 60 * 24 * 30;

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": `token=${token}; Path=/; max-age=${cookieExpiresInSeconds}`,
    },
  });
  // Set-Cookie salva o cookie e o Path=/ faz com que o cookie esteja disponível em toda a aplicação.
}

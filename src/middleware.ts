import { NextRequest, NextResponse } from "next/server";

const signInURL = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(signInURL, {
      headers: {
        "Set-Cookie": `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20`,
      },
    });
  }

  return NextResponse.next();
}

// httpOnly faz com que o cookie não fique visível para o usuário na inspeção ao clicar em f12, ficando disponível apenas na camada de back-end (back-end for front-end).

export const config = {
  matcher: "/memories/:path*",
};

// matcher indica em que rotas deve ser usado o middleware. O ':path*' é colocado para dizer que o middleware deve ser usado em qualquer rota que comece '/memories'

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const redirectUrl = new URL("/", request.url);

  return NextResponse.redirect(redirectUrl, {
    headers: {
      "Set-Cookie": "token=; Path=/; max-age=0",
    },
  });
  // Set-Cookie vai salvar o token como um valor vazio e o max-age mostra que o tempo de duração é zero, ou seja, uma dupla checagem para não ter nenhum valor e assim realizar o logout.
}

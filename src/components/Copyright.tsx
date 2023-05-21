export function Copyright() {
  return (
    <div className="text-sm leading-relaxed text-gray-200">
      Feito com 💜 no NLW da{" "}
      <a
        target="_blank" // abrir em outra página
        rel="norefferer" // é bom colocar por questões de segurança
        href="https://rocketseat.com.br"
        className="underline hover:text-gray-100"
      >
        Rocketseat
      </a>
    </div>
  );
}

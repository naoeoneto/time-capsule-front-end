export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p className="w-[368px] text-center leading-relaxed">
        {/* {" "} é uma forma de forçar o react a não reclamar da quebra de linha */}
        Você ainda não registrou nenhuma lembrança, comece a{" "}
        <a href="" className="underline hover:text-gray-50">
          criar agora
        </a>
      </p>
    </div>
  );
}

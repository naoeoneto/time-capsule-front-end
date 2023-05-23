import { Camera, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function newMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="flex items-center gap-4">
          <label
            htmlFor="media"
            className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>
          <label
            htmlFor="isPublic"
            className="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
            />
            Tornar memória pública
          </label>
        </div>
        <input type="file" id="media" className="invisible h-0 w-0" />
        {/* Ao colocar o valor do id do input como htmlFor do media, os dois ficam interligados. Sendo assim, será possível estilizar apenas o
        label, já que o input está invisível. Usar h e w 0 faz com que o input, mesmo invisível, não ocupe nenhum espaço a mais no formulário*/}
        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        ></textarea>
        {/* spellCheck false evita mostrar erros de digitação. focus:ring-0 é usado para não criar borda como box-shadow no redor da textarea.*/}
      </form>
    </div>
  );
}

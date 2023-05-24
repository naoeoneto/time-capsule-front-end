"use client";
// declarar 'use client' faz com que a aplicação não quebre na hora de utilizar eventos, como um onChange, por exemplo. É usado em lugares onde é necessária interatividade.

import { ChangeEvent, useState } from "react";
// ChangeEvent ajuda a tipar o tipo de evento que vai acontecer numa função. Ao declará-lo, basta passar o mouse sobre o evento (nesse caso sobre o onChange) para ver a tipagem indicada.

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null);

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;

    if (!files) {
      return;
    }

    const previewURL = URL.createObjectURL(files[0]);
    // cria uma url com o primeiro item de files, já que files é um array.
    console.log(previewURL);
    setPreview(previewURL);
  }

  return (
    <>
      <input
        onChange={onFileSelected}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />
      {preview && (
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  );
}

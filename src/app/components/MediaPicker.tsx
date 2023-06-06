'use client'

import { ChangeEventHandler, FC, useState } from 'react'

export const MediaPicker: FC = () => {
  const [preview, setPreview] = useState<string | null>(null)
  const onFileSelected: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { files } = event.target

    if (!files) return

    const previewUrl = URL.createObjectURL(files[0])

    setPreview(previewUrl)
  }
  return (
    <>
      <input
        onChange={onFileSelected}
        name="coverUrl"
        type="file"
        id="media"
        className="invisible h-0 w-0"
        accept="image/*"
      />
      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}

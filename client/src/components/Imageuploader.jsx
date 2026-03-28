import React, { useState } from "react";

export default function Imageuploader() {
  const [images, setImages] = useState([]);

  const handleChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newImages = [...images];
    newImages[index] = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImages(newImages);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

      {[...Array(8)].map((_, index) => {
        const img = images[index];

        return (
          <div key={index} className="relative h-[120px]">

            {img ? (
              <>
                <img
                  src={img.preview}
                  alt="preview"
                  className="w-full h-full object-cover rounded-lg"
                />

                {/* Remove */}
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-1 right-1 bg-black/60 text-white text-xs px-2 py-1 rounded"
                >
                  ✕
                </button>

                {/* Cover */}
                {index === 0 && (
                  <span className="absolute bottom-1 left-1 bg-cyan-500 text-white text-xs px-2 py-1 rounded">
                    Cover
                  </span>
                )}
              </>
            ) : (
              <label className="flex items-center justify-center w-full h-full border-2 border-dashed border-gray-400 rounded-lg cursor-pointer hover:border-cyan-400 transition">
                <span className="text-gray-400 text-sm text-center">
                  + Upload
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleChange(e, index)}
                  className="hidden"
                />
              </label>
            )}
          </div>
        );
      })}
    </div>
  );
}
import { useState } from 'react';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type PhotoType = {
  src: string;
  alt?: string;
};

type GalleryProps = {
  photos: PhotoType[];
  columns?: number;
};

export default function Gallery({ photos, columns = 5 }: GalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const gridClasses = {
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
  };

  const openPhoto = (index: number) => {
    setSelectedPhoto(index);
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto'; // Восстанавливаем скролл
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (selectedPhoto === null) return;

    if (direction === 'prev') {
      setSelectedPhoto(prev => (prev === 0 ? photos.length - 1 : (prev || 0) - 1));
    } else {
      setSelectedPhoto(prev => (prev === photos.length - 1 ? 0 : (prev || 0) + 1));
    }
  };

  return (
    <>
      <div className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-4`}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openPhoto(index)}
          >
            <img
              src={photo.src}
              alt={photo.alt || `Фото ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Полноэкранный просмотр */}
      {selectedPhoto !== null && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closePhoto}
            className="absolute top-4 right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full"
            aria-label="Закрыть"
          >
            <FiX />
          </button>

          <button
            onClick={() => navigatePhoto('prev')}
            className="absolute left-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full"
            aria-label="Предыдущее фото"
          >
            <FiChevronLeft />
          </button>

          <div className="max-w-full max-h-[90vh]">
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt || `Фото ${selectedPhoto + 1}`}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          <button
            onClick={() => navigatePhoto('next')}
            className="absolute right-4 text-white text-2xl p-2 hover:bg-white/10 rounded-full"
            aria-label="Следующее фото"
          >
            <FiChevronRight />
          </button>

          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {selectedPhoto + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
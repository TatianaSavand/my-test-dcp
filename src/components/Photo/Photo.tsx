type PhotoProps = {
  src: string;
  description?: string;
  className?: string;
};

export default function Photo({src, description = "",}: PhotoProps) {
  return (
    <div>
      {/* Изображение */}
      <div className="group relative overflow-hidden">
        <img
          src={src}
          alt={description}
          loading="lazy"
        />
      </div>
    </div>
  );
}
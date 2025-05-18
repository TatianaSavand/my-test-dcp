import Status from "../components/Status/Status.tsx";
import Photo from "../components/Photo/Photo.tsx";

const MainPage = () => {

  return (
    <div className="container mx-auto px-4">
      {/* Обертка для заголовка, адреса и статуса */}
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
        <div>

          {/* Наименование объекта */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600">
            {"ЖК Новый Восход"}
          </h1>

          {/* Адрес объекта */}
          <p className="text-xl md:text-2xl text-gray-600 mt-2 md:mt-0">
            {'Нагорный проезд, 12к1с8, Москва, 117105'}
          </p>
        </div>
        <div className="flex-shrink-0">

          {/* Статус объекта */}
          <Status
            projectId="project-123"
            initialStatus="in_progress"
            onStatusChange={(newStatus) => console.log('Статус изменен:', newStatus)}
          />
        </div>
      </div>

      {/* Аватар объекта */}
      <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-xl">
        <Photo className={"w-full h-full object-cover transition-transform duration-300 hover:scale-105"}
               src={"https://images.wallpaperscraft.com/image/single/architecture_building_modern_176958_3840x2400.jpg"}
               description={'Обложка проекта'}
        />
      </div>
    </div>
  );
};

export default MainPage;
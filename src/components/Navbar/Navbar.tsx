import {NavLink} from "react-router";

interface Tab {
  url: string;
  label: string;
}

function Navbar() {
  // Массив объектов вкладок
  const tabs: Tab[] = [
    {url: 'main', label: 'Главная'},
    {url: 'gallery', label: 'Галерея'},
    {url: 'documents', label: 'Документы'},
    {url: 'responsible', label: 'Ответственные'},
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center text-gray-900">
          <NavLink to='/' className="text-2xl font-bold">
            Цифровой Строительный Паспорт
          </NavLink>
          {tabs.map((tab: Tab) => (<NavLink
            key={tab.url}
            to={tab.url}
            className={({isActive}) => (isActive ? 'text-blue-500' : 'text-gray-500')}
            end // only match exact paths
          >
            {tab.label}
          </NavLink>))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



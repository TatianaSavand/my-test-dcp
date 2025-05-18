import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router'
import GalleryPage from "./pages/Gallery.page.tsx";
import MainPage from "./pages/Main.page.tsx";
import DocumentsPage from "./pages/Documents.page.tsx";
import {ResponsiblePage} from "./pages/Responsible.page.tsx";

// Пример данных фото
const examplePhotos = [
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 1"
  },
  {
    src: "https://s13.stc.yc.kpcdn.net/share/i/12/10196140/wr-960.webp",
    alt: "Визуализация - 2"
  },
  {
    src: "https://vmasshtabe.ru/app/uploads/2016/05/393788-vms-12-etazhey.jpg",
    alt: "Визуализация - 3"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 3"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 3"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 3"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
  {
    src: "https://www.ronenbekerman.com/wp-content/uploads/2018/06/MCARTHUR-VIEW-NIGHT-S.jpg",
    alt: "Визуализация - 2"
  },
];

// Пример данных документов
 const projectDocuments = [
   {
     id: '1',
     title: 'Техническое задание.pdf',
     format: 'pdf' as const,
     size: '2.4 MB',
     url: '/documents/spec.pdf',
   },
   {
     id: '2',
     title: 'Финансовый отчет.xls',
     format: 'xls' as const,
     size: '1.8 MB',
     url: '/documents/report.xls',
   },
   {
     id: '3',
     title: 'Фотографии объекта.zip',
     format: 'zip' as const,
     size: '15.2 MB',
     url: '/documents/photos.zip',
  },
];


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/gallery" element={<GalleryPage photos={examplePhotos} columns={4}/>}/>
          <Route path="/documents" element={<DocumentsPage documents={projectDocuments}/>}/>
          <Route path="/responsible" element={<ResponsiblePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

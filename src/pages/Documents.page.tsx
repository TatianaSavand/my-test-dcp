import {useState, useRef} from 'react';

// Определяем тип для форматов документов
type DocumentFormat = 'pdf' | 'doc' | 'xls' | 'jpg' | 'png' | 'zip';

// Определяем тип для документа
interface DocumentItem {
  id: string;
  title: string;
  format: DocumentFormat;
  size: string;
  url: string;
}

interface DocumentsPageProps {
  documents: DocumentItem[];
}

export default function DocumentsPage({documents}: DocumentsPageProps) {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (doc: DocumentItem) => {
    setSelectedDoc(doc);
  };

  const formatIcons: Record<DocumentFormat, string> = {
    pdf: '📄',
    doc: '📝',
    xls: '📊',
    jpg: '🖼️',
    png: '🖼️',
    zip: '🗄️',
  };

  return (
    <div className={`relative`} ref={dropdownRef}>
        <div
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
          role="listbox"
        >
          <ul className="py-1 max-h-60 overflow-auto">
            {documents.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(doc)}
                role="option"
                aria-selected={selectedDoc?.id === doc.id}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <span className="mr-2">{formatIcons[doc.format]}</span>
                  <div className="flex-1 min-w-0">
                    <p className="truncate font-medium">{doc.title}</p>
                    <p className="text-xs text-gray-500">{doc.size}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  );
}
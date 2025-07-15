import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

export default function DataTable({ columns = [], rows = [], onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-sm rounded-md overflow-hidden text-sm text-black">
        <thead className="bg-gray-200 border-b">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="text-left px-4 py-2 font-extrabold text-black">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {columns.map((col, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-4 py-2 ${
                    col.key === 'status'
                      ? row[col.key] === 'Available'
                        ? 'text-green-600'
                        : row[col.key] === 'In Use'
                        ? 'text-blue-600'
                        : row[col.key] === 'Out of Service'
                        ? 'text-red-500'
                        : ''
                      : 'text-black'
                  }`}
                >
                  {col.key !== 'actions' ? (
                    row[col.key]
                  ) : (
                    <div className="flex gap-6">
                      <Edit
                        className="text-blue-500 cursor-pointer"
                        size={18}
                        onClick={() => onEdit?.(row)}
                      />
                      <Trash2
                        className="text-red-500 cursor-pointer"
                        size={18}
                        onClick={() => onDelete?.(row)}
                      />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

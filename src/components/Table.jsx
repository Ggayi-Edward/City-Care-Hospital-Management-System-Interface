import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

export default function DataTable({ columns = [], rows = [], onEdit, onDelete, statusColorMap = {} }) {
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
          {rows.length > 0 ? (
            rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                {columns.map((col, colIndex) => {
                  const value = row[col.key];
                  let cellStyle = 'text-black';

                  // Apply custom color if provided for status values
                  if (col.key === 'status' && statusColorMap[value]) {
                    cellStyle = statusColorMap[value];
                  }

                  return (
                    <td key={colIndex} className={`px-4 py-2 ${cellStyle}`}>
                      {col.key !== 'actions' ? (
                        value
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
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-500">
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

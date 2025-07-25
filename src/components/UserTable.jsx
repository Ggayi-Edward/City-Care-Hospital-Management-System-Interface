import React from 'react';
import { Edit, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

export default function DataTable({
  columns = [],
  rows = [],
  onEdit,
  onDelete,
  statusColorMap = {},
  loading = false,
  sortable = true,
  sortColumn = null,
  sortDirection = 'asc',
  onSort,
  showRowNumbers = false,
  striped = false,
  compact = false,
}) {
  const handleSort = (column) => {
    if (!sortable || !onSort || column.key === 'actions') return;
    const newDirection =
      sortColumn === column.key && sortDirection === 'asc' ? 'desc' : 'asc';
    onSort(column.key, newDirection);
  };

  const getSortIcon = (column) => {
    if (!sortable || column.key === 'actions') return null;
    if (sortColumn === column.key) {
      return sortDirection === 'asc' ? (
        <ChevronUp className="inline-block w-4 h-4 ml-1" />
      ) : (
        <ChevronDown className="inline-block w-4 h-4 ml-1" />
      );
    }
    return (
      <ChevronDown className="inline-block w-4 h-4 ml-1 opacity-0 group-hover:opacity-50" />
    );
  };

  const getStatusBadge = (value, colorClass) => {
    const badgeColors = {
      'text-green-600': 'bg-green-100 text-green-800 border-green-200',
      'text-yellow-600': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'text-red-600': 'bg-red-100 text-red-800 border-red-200',
      'text-blue-600': 'bg-blue-100 text-blue-800 border-blue-200',
      'text-gray-600': 'bg-gray-100 text-gray-800 border-gray-200',
    };
    const badgeClass =
      badgeColors[colorClass] || 'bg-gray-100 text-gray-800 border-gray-200';
    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeClass}`}
      >
        {value}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gradient-to-r from-indigo-50 to-purple-100 border-b border-gray-200">
            <tr>
              {showRowNumbers && (
                <th className="w-12 px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  #
                </th>
              )}
              {columns
                .filter((col) => col.key !== 'actions') // remove the second action column
                .map((col, idx) => (
                  <th
                    key={idx}
                    className={`text-left px-6 py-4 font-semibold text-gray-700 text-xs uppercase tracking-wider ${
                      sortable && col.key !== 'actions'
                        ? 'cursor-pointer hover:bg-indigo-100 group select-none'
                        : ''
                    }`}
                    onClick={() => handleSort(col)}
                  >
                    <div className="flex items-center">
                      {col.label}
                      {getSortIcon(col)}
                    </div>
                  </th>
                ))}
              {/* Action icon column (kept) */}
              <th className="text-left px-6 py-4 font-semibold text-gray-700 text-xs uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.length > 0 ? (
              rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`hover:bg-indigo-50 transition-colors duration-150 ${
                    striped && rowIndex % 2 === 1 ? 'bg-indigo-50/10' : ''
                  }`}
                >
                  {showRowNumbers && (
                    <td
                      className={`px-6 ${
                        compact ? 'py-3' : 'py-4'
                      } text-sm text-gray-500 font-medium`}
                    >
                      {rowIndex + 1}
                    </td>
                  )}
                  {columns
                    .filter((col) => col.key !== 'actions')
                    .map((col, colIndex) => {
                      const value = row[col.key];
                      let cellStyle = 'text-gray-900';
                      if (col.key === 'status' && statusColorMap[value]) {
                        cellStyle = statusColorMap[value];
                      }
                      return (
                        <td
                          key={colIndex}
                          className={`px-6 ${compact ? 'py-3' : 'py-4'} whitespace-nowrap`}
                        >
                          {col.key === 'status' && statusColorMap[value]
                            ? getStatusBadge(value, statusColorMap[value])
                            : (
                              <span className={`text-sm font-medium ${cellStyle}`}>
                                {value}
                              </span>
                            )}
                        </td>
                      );
                    })}
                  {/* Action icons */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => onEdit?.(row)}
                        className="inline-flex items-center justify-center w-8 h-8 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 rounded-md transition-all duration-200"
                        title="Edit"
                      >
                        <Edit size={14} />
                      </button>
                      <button
                        onClick={() => onDelete?.(row)}
                        className="inline-flex items-center justify-center w-8 h-8 text-rose-600 hover:text-rose-800 hover:bg-rose-100 rounded-md transition-all duration-200"
                        title="Delete"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (showRowNumbers ? 2 : 1)}
                  className="px-6 py-16 text-center"
                >
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-8 h-8 text-indigo-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 mb-1">
                      No data available
                    </h3>
                    <p className="text-xs text-gray-500 max-w-sm">
                      There are no records to display at the moment. Start by adding your first entry to see it here.
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {rows.length > 0 && (
        <div className="bg-slate-50 px-6 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-700">
              Showing <span className="font-medium">{rows.length}</span> result(s)
            </div>
            <div className="text-xs text-gray-500">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

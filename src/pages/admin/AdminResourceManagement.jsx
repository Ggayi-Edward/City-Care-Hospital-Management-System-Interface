import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import DataTable from '../../components/Table';
import ResourceEditForm from '../../components/ResourceEditForm';
import AddResourceForm from '../../components/AddResourceForm';
import DeleteConfirmDialog from '../../components/DeleteConfirmDialogue';

export default function AdminResourceManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [rows, setRows] = useState([
    {
      name: 'X-Ray Machine',
      type: 'Equipment',
      status: 'Available',
      location: 'Room 101',
      updated: 'June 26, 2025, 6:54 PM EAT',
    },
    {
      name: 'Surgical Room',
      type: 'Room',
      status: 'In Use',
      location: 'Floor 2',
      updated: 'June 26, 2025, 6:54 PM EAT',
    },
    {
      name: 'Heart Monitor',
      type: 'Equipment',
      status: 'Out of Service',
      location: 'Room 202',
      updated: 'June 26, 2025, 6:54 PM EAT',
    },
  ]);

  const [editingResource, setEditingResource] = useState(null);
  const [resourceToDelete, setResourceToDelete] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleEdit = (row) => {
    setEditingResource(row);
  };

  const handleDelete = (row) => {
    setResourceToDelete(row);
  };

  const handleConfirmDelete = () => {
    setRows((prev) => prev.filter((r) => r.name !== resourceToDelete.name));
    setResourceToDelete(null);
  };

  const handleSaveEdit = (updated) => {
    setRows((prev) =>
      prev.map((r) =>
        r.name === editingResource.name ? { ...updated, updated: new Date().toLocaleString() } : r
      )
    );
    setEditingResource(null);
  };

  const handleSaveNew = (newResource) => {
    setRows((prev) => [
      ...prev,
      {
        ...newResource,
        updated: new Date().toLocaleString(),
      },
    ]);
    setIsAddFormOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingResource(null);
  };

  const handleCancelAdd = () => {
    setIsAddFormOpen(false);
  };

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.type.toLowerCase().includes(search.toLowerCase()) ||
    row.status.toLowerCase().includes(search.toLowerCase()) ||
    row.location.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { label: 'Resource Name', key: 'name' },
    { label: 'Type', key: 'type' },
    { label: 'Status', key: 'status' },
    { label: 'Location', key: 'location' },
    { label: 'Last Updated', key: 'updated' },
    { label: 'Actions', key: 'actions' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      <AdminSidebar active="Resource Management" />

      <div className="flex-1 flex flex-col">
        <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button onClick={() => navigate('/admin/dashboard')} className="hover:underline text-blue-600">
              Admin Dashboard
            </button>
            <span>/</span>
            <button onClick={() => navigate('/admin/reports')} className="hover:underline text-blue-600">
              Reports Dashboard
            </button>
            <span>/</span>
            <span className="text-gray-500">Resource Management</span>
          </nav>
        </div>

        {/* Search and Add */}
        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search resources"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border rounded pl-9 pr-3 py-1 text-sm w-64"
                />
              </div>
              <button onClick={() => setSearch('')} className="bg-white border px-4 py-1 rounded text-sm">
                Refresh
              </button>
            </div>

            <button
              onClick={() => setIsAddFormOpen(true)}
              className="bg-[#4f91a6] text-white px-4 py-1 rounded text-sm flex items-center gap-2 hover:bg-[#3a7386]"
            >
              <Plus size={16} /> Add New Resource
            </button>
          </div>

          <DataTable
            columns={columns}
            rows={filteredRows}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      {/* Edit Form Modal */}
      {editingResource && (
        <ResourceEditForm
          resource={editingResource}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Add Form Modal */}
      {isAddFormOpen && (
        <AddResourceForm
          onSave={handleSaveNew}
          onCancel={handleCancelAdd}
        />
      )}

      {/* Delete Confirm Dialog */}
      <DeleteConfirmDialog
        isOpen={!!resourceToDelete}
        resourceName={resourceToDelete?.name}
        onConfirm={handleConfirmDelete}
        onCancel={() => setResourceToDelete(null)}
      />
    </div>
  );
}

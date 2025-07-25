import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import AdminTopBar from '../../components/AdminTopbar';
import DataTable from '../../components/UserTable';
import AddUserForm from '../../components/AddUserForm';
import EditUserForm from '../../components/EditUserForm';
import DeleteConfirmDialog from '../../components/DeleteConfirmDialogue';

export default function AdminUserManagement() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([
    {
      name: 'Dr. John Doe',
      role: 'Doctor',
      email: 'john.doe@citycare.org',
      gender: 'Male',
      dob: '1975-03-01',
      lastActive: '2025-06-26',
    },
    {
      name: 'Nurse Jane Smith',
      role: 'Nurse',
      email: 'jane.smith@citycare.org',
      gender: 'Female',
      dob: '1988-09-12',
      lastActive: '2025-06-25',
    },
    {
      name: 'Admin Mark Lee',
      role: 'Admin',
      email: 'mark.lee@citycare.org',
      gender: 'Male',
      dob: '1980-01-15',
      lastActive: '2025-06-24',
    },
    {
      name: 'Nurse Carla Gomez',
      role: 'Nurse',
      email: 'carla.gomez@citycare.org',
      gender: 'Female',
      dob: '1990-07-22',
      lastActive: '2025-06-23',
    },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
  };

  const handleConfirmDelete = () => {
    setUsers((prev) => prev.filter((u) => u.email !== userToDelete.email));
    setUserToDelete(null);
  };

  const handleSaveEdit = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.email === updatedUser.email ? updatedUser : u))
    );
    setEditingUser(null);
  };

  const handleSaveNew = (newUser) => {
    setUsers((prev) => [
      ...prev,
      {
        ...newUser,
        lastActive: new Date().toISOString().split('T')[0],
      },
    ]);
    setIsAddFormOpen(false);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  const handleCancelAdd = () => {
    setIsAddFormOpen(false);
  };

  const filteredRows = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.role.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const columns = [
    { label: 'Name', key: 'name' },
    { label: 'Role', key: 'role' },
    { label: 'Email', key: 'email' },
    { label: 'Gender', key: 'gender' },
    { label: 'Date of Birth', key: 'dob' },
    { label: 'Last Active', key: 'lastActive' },
    { label: 'Actions', key: 'actions' }, // required to show action column even if not manually rendered
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-roboto">
      <AdminSidebar active="User Management" />

      <div className="flex-1 flex flex-col">
        <AdminTopBar user={{ name: 'Lexy' }} />

        {/* Breadcrumbs */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="hover:underline text-blue-600"
            >
              Admin Dashboard
            </button>
            <span>/</span>
            <span className="text-gray-500">User Management</span>
          </nav>
        </div>

        {/* Search and Add */}
        <div className="p-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                />
                <input
                  type="text"
                  placeholder="Search users"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border rounded pl-9 pr-3 py-1 text-sm w-64"
                />
              </div>
              <button
                onClick={() => setSearch('')}
                className="bg-white border px-4 py-1 rounded text-sm"
              >
                Refresh
              </button>
            </div>

            <button
              onClick={() => setIsAddFormOpen(true)}
              className="bg-[#4f91a6] text-white px-4 py-1 rounded text-sm flex items-center gap-2 hover:bg-[#3a7386]"
            >
              <Plus size={16} /> Add New User
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
      {editingUser && (
        <EditUserForm
          user={editingUser}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}

      {/* Add Form Modal */}
      {isAddFormOpen && (
        <AddUserForm onSave={handleSaveNew} onCancel={handleCancelAdd} />
      )}

      {/* Delete Confirm Dialog */}
      <DeleteConfirmDialog
        isOpen={!!userToDelete}
        resourceName={userToDelete?.name}
        onConfirm={handleConfirmDelete}
        onCancel={() => setUserToDelete(null)}
      />
    </div>
  );
}

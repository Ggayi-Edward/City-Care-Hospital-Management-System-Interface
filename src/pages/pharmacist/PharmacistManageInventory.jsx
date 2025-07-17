import React, { useState } from 'react';
import PharmacistSidebar from '../../components/PharmacistSidebar';
import PharmacistTopbar from '../../components/PharmacistTopbar';
import { Plus } from 'lucide-react';

export default function PharmacistManageInventory() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Paracetamol 500mg', quantity: 150, expiry: '2025-12-01' },
    { id: 2, name: 'Amoxicillin 250mg', quantity: 80, expiry: '2025-08-15' },
    { id: 3, name: 'Ibuprofen 200mg', quantity: 60, expiry: '2025-10-20' },
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    expiry: '',
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const { name, quantity, expiry } = newItem;
    if (!name || !quantity || !expiry) return;

    const updated = [
      ...inventory,
      { id: inventory.length + 1, name, quantity: parseInt(quantity), expiry },
    ];
    setInventory(updated);
    setNewItem({ name: '', quantity: '', expiry: '' });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <PharmacistSidebar active="Manage Inventory" />
      <div className="flex-1 flex flex-col">
        <PharmacistTopbar user={{ name: 'PharmaTech', role: 'Pharmacist' }} />

        {/* Breadcrumb */}
        <div className="px-8 pt-4 text-sm text-gray-600">
          <nav className="flex space-x-2 items-center">
            <span className="text-blue-600 font-medium">Pharmacist Dashboard</span>
            <span>/</span>
            <span className="text-gray-500">Manage Inventory</span>
          </nav>
        </div>

        <div className="px-8 pt-6 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-700">Manage Inventory</h3>
          </div>

          {/* Add Item Form */}
          <form
            onSubmit={handleAddItem}
            className="bg-white p-6 rounded shadow max-w-3xl space-y-4"
          >
            <h4 className="text-lg font-medium text-gray-700 flex items-center gap-2">
              <Plus size={18} /> Add New Medication
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Medication Name"
                value={newItem.name}
                onChange={handleChange}
                className="border rounded px-3 py-2 text-sm w-full"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newItem.quantity}
                onChange={handleChange}
                className="border rounded px-3 py-2 text-sm w-full"
              />
              <input
                type="date"
                name="expiry"
                value={newItem.expiry}
                onChange={handleChange}
                className="border rounded px-3 py-2 text-sm w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4f91a6] hover:bg-[#3a7386] text-white px-4 py-2 rounded text-sm"
            >
              Add Medication
            </button>
          </form>

          {/* Inventory Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded shadow text-sm">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 px-4 text-left">Medication</th>
                  <th className="py-2 px-4 text-left">Quantity</th>
                  <th className="py-2 px-4 text-left">Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} className="border-t text-gray-600">
                    <td className="py-2 px-4">{item.name}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">{item.expiry}</td>
                  </tr>
                ))}
                {inventory.length === 0 && (
                  <tr>
                    <td colSpan="3" className="text-center py-4 text-gray-500">
                      No inventory items found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

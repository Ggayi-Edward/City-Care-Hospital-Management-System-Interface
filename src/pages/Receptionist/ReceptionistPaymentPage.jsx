import React, { useState } from 'react';
import ReceptionistSidebar from '../../components/ReceptionistSidebar';
import ReceptionistTopbar from '../../components/ReceptionistTopbar';

export default function ReceptionistPaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [formData, setFormData] = useState({
    patientName: '',
    amount: '',
    insuranceProvider: '',
    policyNumber: '',
    remarks: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSuccessMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate payment processing logic
    console.log('Payment submitted:', { ...formData, method: paymentMethod });
    setSuccessMessage('Payment recorded successfully.');

    // Clear form
    setFormData({
      patientName: '',
      amount: '',
      insuranceProvider: '',
      policyNumber: '',
      remarks: ''
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-roboto">
      <ReceptionistSidebar active="Payments" />
      <div className="flex-1 flex flex-col">
        <ReceptionistTopbar user={{ name: 'Receptionist', role: 'Receptionist' }} />

        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Patient Payment</h2>

          {/* Payment Method Tabs */}
          <div className="mb-6 flex gap-4">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                paymentMethod === 'cash' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setPaymentMethod('cash')}
            >
              Cash
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                paymentMethod === 'insurance' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setPaymentMethod('insurance')}
            >
              Insurance
            </button>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-sm space-y-4 max-w-xl"
          >
            <div>
              <label className="block text-sm font-medium">Patient Name</label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Amount</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-sm"
                required
              />
            </div>

            {paymentMethod === 'insurance' && (
              <>
                <div>
                  <label className="block text-sm font-medium">Insurance Provider</label>
                  <input
                    type="text"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Policy Number</label>
                  <input
                    type="text"
                    name="policyNumber"
                    value={formData.policyNumber}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 text-sm"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium">Remarks</label>
              <textarea
                name="remarks"
                value={formData.remarks}
                onChange={handleChange}
                rows={3}
                className="w-full border rounded px-3 py-2 text-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Submit Payment
            </button>

            {successMessage && (
              <p className="text-green-600 text-sm mt-2">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

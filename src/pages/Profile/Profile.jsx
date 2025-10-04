import React, { useState } from 'react';

export default function MyAccountPage() {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [activeSection, setActiveSection] = useState('myProfile');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setFormData({
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel111@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleSave = () => {
    console.log('Saving changes:', formData);
    alert('Changes saved successfully!');
  };

  return (
    <div className="min-h-screen px-14 my-32 bg-white">
      <div className=" mx-auto px-4 py-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-lg">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-500">/</span>
            <span className="text-black font-medium">My Account</span>
          </div>
          
          {/* Welcome Message */}
          <div className="text-xl font-medium">
            Welcome! <span className="text-red-500">Md Rimel</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-16">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Manage My Account */}
            <div className="mb-6">
              <h3 className="font-medium text-xl mb-4">Manage My Account</h3>
              <div className="ml-8 text-lg space-y-2">
                <button
                  onClick={() => setActiveSection('myProfile')}
                  className={`block w-full text-left ${
                    activeSection === 'myProfile' ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  My Profile
                </button>
                <button
                  onClick={() => setActiveSection('addressBook')}
                  className={`block w-full text-left ${
                    activeSection === 'addressBook' ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  Address Book
                </button>
                <button
                  onClick={() => setActiveSection('paymentOptions')}
                  className={`block w-full text-left ${
                    activeSection === 'paymentOptions' ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  My Payment Options
                </button>
              </div>
            </div>

            {/* My Orders */}
            <div className="mb-6">
              <h3 className="font-medium text-xl mb-4">My Orders</h3>
              <div className="ml-8 text-lg space-y-2">
                <button
                  onClick={() => setActiveSection('returns')}
                  className={`block w-full text-left ${
                    activeSection === 'returns' ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  My Returns
                </button>
                <button
                  onClick={() => setActiveSection('cancellations')}
                  className={`block w-full text-left ${
                    activeSection === 'cancellations' ? 'text-red-500' : 'text-gray-500'
                  }`}
                >
                  My Cancellations
                </button>
              </div>
            </div>

            {/* My Wishlist */}
            <div>
              <button
                onClick={() => setActiveSection('wishlist')}
                className={`font-medium text-xl ${
                  activeSection === 'wishlist' ? 'text-red-500' : 'text-black'
                }`}
              >
                My Wishlist
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeSection === 'myProfile' ? (
              <>
                <h2 className="text-red-500 text-2xl font-medium mb-6">Edit Your Profile</h2>

                <div className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="block mb-2 text-lg">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-lg">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                    </div>
                  </div>

                  {/* Email and Address */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <label className="block mb-2 text-lg">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-lg">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                    </div>
                  </div>

                  {/* Password Changes */}
                  <div>
                    <label className="block mb-4 text-lg">Password Changes</label>
                    <div className="space-y-4">
                      <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-gray-100 rounded"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-8 pt-4">
                    <button
                      onClick={handleCancel}
                      className="px-12 text-lg py-4 hover:bg-gray-50 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-12 py-4 text-lg bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <h3 className="text-2xl font-medium text-gray-400 mb-2">Coming Soon</h3>
                  <p className="text-gray-500">This feature will be available soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsDropdownOpen(false);
  };

  const getSectionLabel = (section) => {
    const labels = {
      myProfile: 'My Profile',
      addressBook: 'Address Book',
      paymentOptions: 'My Payment Options',
      returns: 'My Returns',
      cancellations: 'My Cancellations',
      wishlist: 'My Wishlist'
    };
    return labels[section] || 'My Profile';
  };

  return (
    <div className=" px-4 mt-16 sm:px-8  my-8  md:mt-32 bg-white">
      <div className="mx-auto px-2 sm:px-4 py-4 sm:py-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-12 gap-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm md:text-base sm:text-lg">
            <span className="text-gray-500">Home</span>
            <span className="text-gray-500">/</span>
            <span className="text-black font-medium">My Account</span>
          </div>
          
          {/* Welcome Message */}
          <div className="text-lg sm:text-xl font-medium">
            Welcome! <span className="text-red-500">Md Rimel</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
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

          {/* Dropdown - Mobile & Tablet */}
          <div className="lg:hidden w-full mb-6">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-4 bg-gray-100 rounded text-left font-medium text-base sm:text-lg"
              >
                <span>{getSectionLabel(activeSection)}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded shadow-lg z-10">
                  {/* Manage My Account */}
                  <div className="border-b border-gray-200">
                    <div className="px-4 py-3 font-medium text-gray-700">Manage My Account</div>
                    <button
                      onClick={() => handleSectionChange('myProfile')}
                      className={`block w-full text-left px-8 py-2 ${
                        activeSection === 'myProfile' ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      My Profile
                    </button>
                    <button
                      onClick={() => handleSectionChange('addressBook')}
                      className={`block w-full text-left px-8 py-2 ${
                        activeSection === 'addressBook' ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      Address Book
                    </button>
                    <button
                      onClick={() => handleSectionChange('paymentOptions')}
                      className={`block w-full text-left px-8 py-2 pb-3 ${
                        activeSection === 'paymentOptions' ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      My Payment Options
                    </button>
                  </div>

                  {/* My Orders */}
                  <div className="border-b border-gray-200">
                    <div className="px-4 py-3 font-medium text-gray-700">My Orders</div>
                    <button
                      onClick={() => handleSectionChange('returns')}
                      className={`block w-full text-left px-8 py-2 ${
                        activeSection === 'returns' ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      My Returns
                    </button>
                    <button
                      onClick={() => handleSectionChange('cancellations')}
                      className={`block w-full text-left px-8 py-2 pb-3 ${
                        activeSection === 'cancellations' ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      My Cancellations
                    </button>
                  </div>

                  {/* My Wishlist */}
                  <button
                    onClick={() => handleSectionChange('wishlist')}
                    className={`block w-full text-left px-4 py-3 font-medium ${
                      activeSection === 'wishlist' ? 'text-red-500 bg-red-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    My Wishlist
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1">
            {activeSection === 'myProfile' ? (
              <>
                <h2 className="text-red-500 text-xl sm:text-2xl font-medium mb-6">Edit Your Profile</h2>

                <div className="space-y-6">
                  {/* First Name and Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div>
                      <label className="block mb-2 text-base sm:text-lg">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-base sm:text-lg">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                    </div>
                  </div>

                  {/* Email and Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div>
                      <label className="block mb-2 text-base sm:text-lg">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-base sm:text-lg">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                    </div>
                  </div>

                  {/* Password Changes */}
                  <div>
                    <label className="block mb-4 text-base sm:text-lg">Password Changes</label>
                    <div className="space-y-4">
                      <input
                        type="password"
                        name="currentPassword"
                        placeholder="Current Password"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                      <input
                        type="password"
                        name="newPassword"
                        placeholder="New Password"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 sm:py-4 bg-gray-100 rounded"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end gap-4 sm:gap-8 pt-4">
                    <button
                      onClick={handleCancel}
                      className="px-8 sm:px-12 text-base sm:text-lg py-3 sm:py-4 hover:bg-gray-50 rounded"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg bg-orange-500 hover:bg-orange-600 text-white rounded"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-400 mb-2">Coming Soon</h3>
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
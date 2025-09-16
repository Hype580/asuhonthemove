import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your nanny listings and content</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Nanny Card */}
          <Link href="/admin/nannies/add">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Add New Nanny</h3>
                    <p className="text-sm text-gray-500">Add a new nanny to your team</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Manage Nannies Card */}
          <Link href="/admin/nannies">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Manage Nannies</h3>
                    <p className="text-sm text-gray-500">View and edit existing nannies</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* View Website Card */}
          <Link href="/" target="_blank">
            <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">View Website</h3>
                    <p className="text-sm text-gray-500">See your website as visitors do</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Overview</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600" id="nanny-count">-</p>
              <p className="text-sm text-gray-500">Total Nannies</p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Load nanny count
          fetch('/api/admin/nannies')
            .then(res => res.json())
            .then(data => {
              const countElement = document.getElementById('nanny-count');
              if (countElement) {
                countElement.textContent = data.length || 0;
              }
            })
            .catch(() => {
              const countElement = document.getElementById('nanny-count');
              if (countElement) {
                countElement.textContent = '0';
              }
            });
        `
      }} />
    </AdminLayout>
  );
} 
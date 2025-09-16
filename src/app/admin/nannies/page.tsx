'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import type { Nanny } from '@/types/nanny';

export default function ManageNannies() {
  const [nannies, setNannies] = useState<Nanny[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadNannies();
  }, []);

  const loadNannies = async () => {
    try {
      const response = await fetch('/api/admin/nannies');
      if (response.ok) {
        const data = await response.json();
        setNannies(data);
      } else {
        setError('Failed to load nannies');
      }
    } catch (error) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this nanny?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/nannies/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNannies(nannies.filter(nanny => nanny.id !== id));
      } else {
        setError('Failed to delete nanny');
      }
    } catch (error) {
      setError('Network error occurred');
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Nannies</h1>
            <p className="mt-2 text-gray-600">View and manage your nanny listings</p>
          </div>
          <Link
            href="/admin/nannies/add"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Add New Nanny
          </Link>
        </div>

        {error && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-md">
            {error}
          </div>
        )}

        {nannies.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No nannies</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding a new nanny.</p>
            <div className="mt-6">
              <Link
                href="/admin/nannies/add"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Add Nanny
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nannies.map((nanny) => (
              <div key={nanny.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-16 w-16 rounded-lg object-cover"
                        src={nanny.image}
                        alt={nanny.name}
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {nanny.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {nanny.education.value}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {nanny.background.items.slice(0, 2).map((item, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {item}
                          </span>
                        ))}
                        {nanny.background.items.length > 2 && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                            +{nanny.background.items.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-3">
                    <Link
                      href={`/admin/nannies/edit/${nanny.id}`}
                      className="flex-1 bg-indigo-600 text-white text-center py-2 px-3 rounded-md text-sm font-medium hover:bg-indigo-700"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => nanny.id && handleDelete(nanny.id)}
                      className="flex-1 bg-red-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
} 
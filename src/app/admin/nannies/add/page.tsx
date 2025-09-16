'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import NannyCard from '@/components/nannies/NannyCard';
import type { NannyFormData } from '@/types/nanny';

export default function AddNanny() {
  const [formData, setFormData] = useState<NannyFormData>({
    name: '',
    background: {
      label: 'Background',
      items: []
    },
    education: {
      label: 'Education',
      value: ''
    },
    experience: {
      label: 'Experience',
      value: ''
    },
    zoom: true,
    zoomLevel: 1,
    objectPosition: '50% 40%'
  });
  
  const [imagePreview, setImagePreview] = useState<string>('');
  const [backgroundInput, setBackgroundInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parent: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent as keyof NannyFormData] as any,
        [field]: value
      }
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, imageFile: file }));
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddBackground = () => {
    if (backgroundInput.trim()) {
      setFormData(prev => ({
        ...prev,
        background: {
          ...prev.background,
          items: [...prev.background.items, backgroundInput.trim()]
        }
      }));
      setBackgroundInput('');
    }
  };

  const handleRemoveBackground = (index: number) => {
    setFormData(prev => ({
      ...prev,
      background: {
        ...prev.background,
        items: prev.background.items.filter((_, i) => i !== index)
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const submitData = new FormData();
      
      // Add all form fields
      submitData.append('name', formData.name);
      submitData.append('background', JSON.stringify(formData.background));
      submitData.append('education', JSON.stringify(formData.education));
      submitData.append('experience', JSON.stringify(formData.experience));
      submitData.append('zoom', formData.zoom?.toString() || 'true');
      submitData.append('zoomLevel', formData.zoomLevel?.toString() || '1');
      submitData.append('objectPosition', formData.objectPosition || '50% 40%');
      
      // Add image file
      if (formData.imageFile) {
        submitData.append('image', formData.imageFile);
      }

      const response = await fetch('/api/admin/nannies', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        router.push('/admin/nannies');
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to add nanny');
      }
    } catch (error) {
      setError('Network error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Create preview data for NannyCard
  const previewData = {
    ...formData,
    image: imagePreview || '/placeholder-nanny.png'
  };

  return (
    <AdminLayout>
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New Nanny</h1>
          <p className="mt-2 text-gray-600">Fill in the details and upload a photo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white shadow rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              {/* Image Upload */}
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Photo
                </label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  onChange={handleImageUpload}
                />
                {imagePreview && (
                  <div className="mt-2">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-32 w-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              {/* Background */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Background Areas
                </label>
                <div className="mt-1 flex gap-2">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g. Childcare, Nursing"
                    value={backgroundInput}
                    onChange={(e) => setBackgroundInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddBackground())}
                  />
                  <button
                    type="button"
                    onClick={handleAddBackground}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {formData.background.items.map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-800"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => handleRemoveBackground(index)}
                        className="ml-2 text-indigo-600 hover:text-indigo-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                  Education
                </label>
                <input
                  type="text"
                  id="education"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. Bachelor of Health Science in Nursing"
                  value={formData.education.value}
                  onChange={(e) => handleNestedInputChange('education', 'value', e.target.value)}
                />
              </div>

              {/* Experience */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                  Experience
                </label>
                <textarea
                  id="experience"
                  required
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. 5 years in pediatric nursing, worked at..."
                  value={formData.experience.value}
                  onChange={(e) => handleNestedInputChange('experience', 'value', e.target.value)}
                />
              </div>

              {/* Image Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="zoomLevel" className="block text-sm font-medium text-gray-700">
                    Zoom Level
                  </label>
                  <input
                    type="number"
                    id="zoomLevel"
                    min="1"
                    max="3"
                    step="0.1"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.zoomLevel}
                    onChange={(e) => handleInputChange('zoomLevel', parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label htmlFor="objectPosition" className="block text-sm font-medium text-gray-700">
                    Image Position
                  </label>
                  <input
                    type="text"
                    id="objectPosition"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="e.g. 50% 40%"
                    value={formData.objectPosition}
                    onChange={(e) => handleInputChange('objectPosition', e.target.value)}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm">{error}</div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Nanny'}
                </button>
                <button
                  type="button"
                  onClick={() => router.push('/admin/nannies')}
                  className="py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Preview */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Preview</h3>
            {formData.name && (
              <div className="max-w-sm mx-auto">
                <NannyCard
                  {...previewData}
                  color="#F8E6E6"
                  circleColor="#E7ADAE"
                />
              </div>
            )}
            {!formData.name && (
              <div className="text-center text-gray-500 py-8">
                Fill in the form to see preview
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
} 
"use client";

import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export default function ContentManager({ 
  title, 
  apiEndpoint, 
  fields,
  categories = null 
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchItems();
  }, [apiEndpoint]);

  async function fetchItems() {
    setLoading(true);
    try {
      const res = await fetch(apiEndpoint);
      const data = await res.json();
      if (data.success) {
        setItems(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching items:', error);
      setMessage('Error loading data');
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(field, value) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      const method = editingId ? 'PUT' : 'POST';
      const payload = editingId ? { ...formData, id: editingId } : formData;
      
      const res = await fetch(apiEndpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      
      if (data.success) {
        setMessage(editingId ? 'Updated successfully!' : 'Created successfully!');
        setFormData({});
        setEditingId(null);
        setShowForm(false);
        fetchItems();
        
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error: ' + (data.error || 'Failed to save'));
      }
    } catch (error) {
      console.error('Error saving:', error);
      setMessage('Error saving item');
    }
  }

  async function handleDelete(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const res = await fetch(`${apiEndpoint}?id=${id}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      
      if (data.success) {
        setMessage('Deleted successfully!');
        fetchItems();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error deleting item');
      }
    } catch (error) {
      console.error('Error deleting:', error);
      setMessage('Error deleting item');
    }
  }

  function startEdit(item) {
    setEditingId(item.id);
    setFormData(item);
    setShowForm(true);
  }

  function cancelEdit() {
    setEditingId(null);
    setFormData({});
    setShowForm(false);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#07294e]"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-[#07294e]">{title}</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#b5d56a] text-[#07294e] px-4 py-2 rounded-lg font-medium
            hover:bg-opacity-90 transition-opacity flex items-center space-x-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add New</span>
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-lg ${
          message.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {message}
        </div>
      )}

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-[#07294e] mb-4">
            {editingId ? 'Edit Item' : 'Create New Item'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fields.map((field) => (
                <div
                  key={field.name}
                  className={field.fullWidth ? 'md:col-span-2' : ''}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label} {field.required && <span className="text-red-500">*</span>}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      rows={field.rows || 4}
                      required={field.required}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-[#07294e]"
                    />
                  ) : field.type === 'select' ? (
                    <select
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-[#07294e]"
                    >
                      <option value="">Select {field.label}</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type || 'text'}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2
                        focus:outline-none focus:ring-2 focus:ring-[#07294e]"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex space-x-3">
              <button
                type="submit"
                className="bg-[#07294e] text-white px-6 py-2 rounded-lg font-medium
                  hover:bg-opacity-90 transition-opacity flex items-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>{editingId ? 'Update' : 'Create'}</span>
              </button>
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium
                  hover:bg-gray-300 transition-colors flex items-center space-x-2"
              >
                <X className="w-5 h-5" />
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Items List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        {items.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No items found. Click "Add New" to create one.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Title
                  </th>
                  {categories && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Category
                    </th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Created
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">{item.title || item.name}</div>
                        {item.excerpt && (
                          <div className="text-sm text-gray-500 mt-1 line-clamp-1">
                            {item.excerpt}
                          </div>
                        )}
                      </div>
                    </td>
                    {categories && (
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full
                          bg-[#b5d56a] text-[#07294e]">
                          {item.category}
                        </span>
                      </td>
                    )}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(item.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => startEdit(item)}
                          className="text-blue-600 hover:text-blue-800 p-2 rounded-lg
                            hover:bg-blue-50 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-lg
                            hover:bg-red-50 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

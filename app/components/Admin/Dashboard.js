"use client";

import { useEffect, useState } from 'react';
import AdminForm from '@/components/Admin/AdminForm';
import { supabase } from '@/lib/supabaseClient';

const Dashboard = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  async function load() {
    setLoading(true);
    try {
      const res = await fetch('/api/terms');
      const json = await res.json();
      setTerms(json?.data || []);
    } catch (err) {
      console.warn(err);
    } finally { setLoading(false); }
  }

  useEffect(() => { load(); }, []);

  function startEdit(item) {
    setEditingId(item.id);
    setEditValues({ title: item.title, slug: item.slug, excerpt: item.excerpt, content: item.content || '' });
  }

  function cancelEdit() { setEditingId(null); setEditValues({}); }

  async function saveEdit() {
    const id = editingId;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      const res = await fetch('/api/admin/term', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ id, ...editValues }),
      });
      if (!res.ok) throw new Error((await res.json())?.error || 'Failed to save');
      await load();
      cancelEdit();
    } catch (err) { alert(err.message || err); }
  }

  async function removeItem(id) {
    if (!confirm('Delete this term?')) return;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const token = session?.access_token;
      const res = await fetch('/api/admin/term', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error((await res.json())?.error || 'Failed to delete');
      await load();
    } catch (err) { alert(err.message || err); }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Literary Terms</h2>
            {loading && <div>Loading...</div>}
            {!loading && terms.length === 0 && <div className="text-gray-500">No terms found.</div>}
            <ul className="space-y-4">
              {terms.map(term => (
                <li key={term.id} className="border rounded p-4 flex justify-between items-start">
                  <div className="flex-1">
                    {editingId === term.id ? (
                      <div className="space-y-2">
                        <input value={editValues.title} onChange={(e) => setEditValues(v => ({ ...v, title: e.target.value }))} className="w-full border px-2 py-1 rounded" />
                        <input value={editValues.slug} onChange={(e) => setEditValues(v => ({ ...v, slug: e.target.value }))} className="w-full border px-2 py-1 rounded" />
                        <textarea value={editValues.excerpt} onChange={(e) => setEditValues(v => ({ ...v, excerpt: e.target.value }))} className="w-full border px-2 py-1 rounded" rows={3} />
                      </div>
                    ) : (
                      <div>
                        <h3 className="text-lg font-semibold">{term.title}</h3>
                        <p className="text-sm text-gray-600">{term.excerpt}</p>
                        <div className="text-xs text-gray-400 mt-1">Slug: {term.slug}</div>
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex flex-col gap-2">
                    {editingId === term.id ? (
                      <>
                        <button onClick={saveEdit} className="bg-green-600 text-white px-3 py-1 rounded">Save</button>
                        <button onClick={cancelEdit} className="bg-gray-200 px-3 py-1 rounded">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEdit(term)} className="bg-blue-600 text-white px-3 py-1 rounded">Edit</button>
                        <button onClick={() => removeItem(term.id)} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                      </>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Create New Term</h2>
            <AdminForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

"use client";

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const AdminForm = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [adminPassword, setAdminPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    const payload = {
      title: title.trim(),
      slug: slug.trim() || title.trim().toLowerCase().replace(/[^a-z0-9]+/g,'-'),
      excerpt: excerpt.trim(),
      content,
      adminSecret: adminPassword,
    };

    try {
      const { data: session } = await supabase.auth.getSession();
      const accessToken = session?.access_token || session?.data?.session?.access_token || null;

      const headers = { 'Content-Type': 'application/json' };
      if (accessToken) headers['Authorization'] = `Bearer ${accessToken}`;

      const res = await fetch('/api/admin/create', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Failed to create term');

      setMessage({ type: 'success', text: 'Term created successfully' });
      setTitle(''); setSlug(''); setExcerpt(''); setContent(''); setAdminPassword('');
    } catch (err) {
      setMessage({ type: 'error', text: err.message || 'Failed to create term' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
      {message && (
        <div className={`p-3 rounded ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>{message.text}</div>
      )}

      <label className="block">
        <div className="text-sm font-medium mb-1">Title</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </label>

      <label className="block">
        <div className="text-sm font-medium mb-1">Slug (optional)</div>
        <input value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </label>

      <label className="block">
        <div className="text-sm font-medium mb-1">Excerpt</div>
        <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} className="w-full border px-3 py-2 rounded" rows={3} />
      </label>

      <label className="block">
        <div className="text-sm font-medium mb-1">Content (HTML or Markdown)</div>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="w-full border px-3 py-2 rounded" rows={8} />
      </label>

      <label className="block">
        <div className="text-sm font-medium mb-1">Admin Password</div>
        <input value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} type="password" className="w-full border px-3 py-2 rounded" />
      </label>

      <div className="flex items-center gap-3">
        <button className="bg-[#07294e] text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Saving...' : 'Create'}</button>
      </div>
    </form>
  );
};

export default AdminForm;

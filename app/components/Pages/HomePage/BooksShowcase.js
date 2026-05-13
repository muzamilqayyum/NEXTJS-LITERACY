'use client'


export default function BooksShowcase() {
  const books = [
    {
      id: 1,
      title: "King Lear",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      type: "classic"
    },
    {
      id: 2,
      title: "Shakespeare's Hamlet",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      type: "classic"
    },
    {
      id: 3,
      title: "King Lear",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      type: "classic"
    },
    {
      id: 4,
      title: "Shakespeare's Hamlet",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
      type: "classic"
    },
    {
      id: 5,
      title: "King Lear",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
      type: "classic"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-16 tracking-tight">
            Latest Books & PDFs
          </h1>

          {/* Books Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {books.map((book, index) => (
              <div
                key={book.id}
                className="group"
                style={{
                  animation: `slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`
                }}
              >
                {/* Card */}
                <div className="bg-[#0a2540] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02]">
                  {/* Book Cover */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#0a2540] via-[#0f3554] to-[#164e63]">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent" />
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-[#b5d56a]/0 group-hover:bg-[#b5d56a]/10 transition-all duration-500" />
                  </div>

                  {/* Description */}
                  <div className="p-5 bg-[#0a2540] min-h-[80px] flex items-center justify-center">
                    <p className="text-white text-sm font-medium leading-relaxed text-center">
                      Download Literary Notes Download Literary NotesDownload
                    </p>
                  </div>

                  {/* Buy Button */}
                  <button className="w-full bg-[#b5d56a] hover:bg-[#a3c458] text-[#0a2540] font-bold py-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(181,213,106,0.5)] relative overflow-hidden group/btn">
                    <span className="relative z-10">Buy Now</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center">
            <button className="bg-[#0a2540] hover:bg-[#164e63] text-white font-bold py-5 px-16 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg relative overflow-hidden group">
              <span className="relative z-10">Books & PDFs</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#b5d56a]/0 via-[#b5d56a]/20 to-[#b5d56a]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
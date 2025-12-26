"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Star, MessageSquare, User, CheckCircle } from "lucide-react";

export default function ReviewsPage() {
  // State for reviews and form
  const [reviews, setReviews] = useState<any[]>([]);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({ name: '', platform: '', content: '', rating: 5 });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Fetch reviews on mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('is_approved', true) // Only show approved ones
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching reviews:", error);
    } else if (data) {
      setReviews(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('reviews').insert([
      { 
        name: formData.name,
        platform: formData.platform,
        content: formData.content,
        rating: formData.rating,
        is_approved: false // Admin must approve in Supabase dashboard
      }
    ]);

    if (!error) {
      setSubmitted(true);
      setFormData({ name: '', platform: '', content: '', rating: 5 });
      // Refresh reviews list (though the new one won't show until approved)
      fetchReviews();
    } else {
      console.error("Error submitting review:", error);
      alert("Submission failed. Please check your connection.");
    }
    setLoading(false);
  };

  return (
    <main className="pt-32 pb-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 text-yellow-400 mb-4">
             {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <h1 className="text-5xl font-black text-slate-900 mb-4 italic tracking-tighter uppercase">
            Client <span className="text-blue-600">Reviews</span>
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Real feedback from brands we&apos;ve helped scale across Shopify, Amazon, and custom web platforms.
          </p>
        </div>

        {/* Dynamic Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {reviews.length > 0 ? (
            reviews.map((rev) => (
              <div key={rev.id} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < rev.rating ? "currentColor" : "none"} 
                        className={i < rev.rating ? "text-yellow-400" : "text-slate-200"}
                      />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed">
                    &quot;{rev.content}&quot;
                  </p>
                </div>
                
                <div className="flex items-center gap-3 border-t pt-4 mt-auto">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-none">{rev.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase font-black mt-1 tracking-widest">
                      {rev.platform || "Verified Client"}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white rounded-[2rem] border border-dashed border-slate-300">
              <p className="text-slate-400 font-medium italic">No approved reviews yet. Be the first!</p>
            </div>
          )}
        </div>

        {/* Write a Review Section */}
        <section className="max-w-2xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-slate-100 relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-10 animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-black italic mb-4">THANK YOU!</h2>
              <p className="text-slate-500 mb-8">Your review has been submitted and is pending admin approval.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-blue-600 font-bold uppercase text-xs tracking-widest hover:underline"
              >
                Submit another review
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black italic mb-2 uppercase tracking-tighter">Write a Review</h2>
                <p className="text-sm text-slate-400 font-medium">Help others by sharing your experience.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Interactive Star Selection */}
                <div className="flex flex-col items-center gap-3 mb-4">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Select Rating</span>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="transition-transform active:scale-90"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <Star 
                          size={36} 
                          className={`transition-colors ${(hover || formData.rating) >= star ? "text-yellow-400 fill-yellow-400" : "text-slate-200"}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900"
                  />
                  <input 
                    type="text" 
                    placeholder="Company / Platform" 
                    value={formData.platform}
                    onChange={(e) => setFormData({...formData, platform: e.target.value})}
                    className="w-full p-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all font-medium text-slate-900"
                  />
                </div>

                <textarea 
                  placeholder="Share your thoughts on working with Edxly..." 
                  required
                  rows={4}
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full p-6 bg-slate-50 rounded-[2rem] border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none font-medium text-slate-900"
                />

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-[#1e4eb8] text-white py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100 disabled:opacity-50"
                >
                  {loading ? "SENDING..." : <><MessageSquare size={18} /> POST REVIEW</>}
                </button>
              </form>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
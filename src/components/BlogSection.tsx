import React from "react";
import Image, { StaticImageData } from "next/image";
import { p1, p2, p3 } from "@/assets/houses";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: StaticImageData;
  date: string;
  readTime: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "How Does One Go About Buying Furniture?",
      excerpt: "Discover the best practices for selecting and purchasing quality furniture that fits your space and style.",
      imageUrl: p1,
      date: "May 15, 2023",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Innovative Décor Ideas Shaping Homes Today",
      excerpt: "Explore the latest interior design trends that are transforming living spaces around the world.",
      imageUrl: p2,
      date: "June 2, 2023",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Design Industry Updates You Should Know About",
      excerpt: "Stay informed with the most important developments in the design and architecture industry.",
      imageUrl: p3,
      date: "June 10, 2023",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="h-container x-round-card">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end ">
        <div className="mb-0">
          <div className="flex items-center">
            <div className="w-8 h-1 bg-gradient-to-r mr-3 from-red-500 to-red-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Real Estate News & Articles</span>
          </div>
          <h2 className="title ">Latest From Our Blog</h2>
        </div>

        <button className="flex items-center gap-2 group mb-6">
          <span className="text-lg font-medium text-gray-900 group-hover:text-red-600 transition-colors">View All Articles</span>
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white shadow-md group-hover:bg-red-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-900 group-hover:text-white transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </button>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
              <Image src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="text-white text-sm font-medium">
                  {post.date} • {post.readTime}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
              <button className="inline-flex items-center px-5 py-3 border border-red-500 rounded-full text-gray-900 hover:bg-red-500 hover:text-white transition-colors duration-300">
                Read More
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

"use client"

import { Calendar, User, MessageSquare } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Article {
  id: number
  title: string
  date: string
  image: string
  slug: string
}

export default function NewsSection() {
  const articles: Article[] = [
    {
      id: 1,
      title: "Facebook Design Is Dedicated To What's New",
      date: "2024-12-26",
      image: "/placeholder.svg?height=400&width=600",
      slug: "facebook-design",
    },
    {
      id: 2,
      title: "Achieving Fashion Elegance: Runway To Real Life",
      date: "2024-12-26",
      image: "/placeholder.svg?height=400&width=600",
      slug: "fashion-elegance",
    },
    {
      id: 3,
      title: "Crafting A Digital Identity: The Art Of Agency",
      date: "2024-12-26",
      image: "/placeholder.svg?height=400&width=600",
      slug: "digital-identity",
    },
  ]

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-bold text-sm tracking-wider uppercase">.: NEWS &amp; ARTICLE :.</p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight text-center text-black">
            Browse Our Articles On The
            <br />
            Marketing &amp; Growth
          </h2>
        </div>

        {/* Articles */}
        <div className="space-y-6 flex flex-col gap-5">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} overflow-hidden`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={600}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-orange-500 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 text-orange-500 mr-2" />
                    <span>admin</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="w-4 h-4 text-orange-500 mr-2" />
                    <span>Comment</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-black hover:text-orange-500 transition-all">{article.title}</h3>

                <Link
                  href={`/`}
                  className="text-orange-500 font-medium hover:underline inline-block mt-2"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

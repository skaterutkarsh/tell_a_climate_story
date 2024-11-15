import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

const Content = () => {
  const { id } = useParams();

  return (
    <section className="story-detail-section max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      {/* Story Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
        Story {id}: The Devastating Impact of Climate Change on Biodiversity
      </h1>

      {/* Story Content */}
      <article className="story-content text-gray-700 leading-relaxed space-y-4">
        <p className="text-lg">
          Climate change is accelerating at an unprecedented rate, causing
          significant disruptions in ecosystems and threatening the survival of
          countless species.
        </p>
        <p className="text-lg">
          Rising temperatures, altered precipitation patterns, and increased
          occurrence of extreme weather events are drastically affecting
          biodiversity worldwide.
        </p>
        <p className="text-lg">
          Species are being forced to adapt to changing environments, migrate to
          new areas, or face extinction. The loss of biodiversity not only
          affects natural ecosystems but also has far-reaching consequences for
          human societies.
        </p>
      </article>

      {/* Related Articles Section */}
      <section className="related-articles mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Article 1 */}
          <article className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              How Deforestation Accelerates Climate Change
            </h3>
            <p className="text-gray-600 text-sm">
              Deforestation plays a critical role in increasing atmospheric
              carbon dioxide, directly contributing to global warming.
            </p>
            <a
              href="#"
              className="text-green-600 font-bold mt-2 inline-block hover:underline"
            >
              Read more
            </a>
          </article>

          {/* Article 2 */}
          <article className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Rising Sea Levels and Coastal Ecosystems
            </h3>
            <p className="text-gray-600 text-sm">
              The impact of rising sea levels on coastal ecosystems is forcing
              species to migrate and adapt at unprecedented rates.
            </p>
            <a
              href="#"
              className="text-green-600 font-bold mt-2 inline-block hover:underline"
            >
              Read more
            </a>
          </article>

          {/* Article 3 */}
          <article className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-700 mb-2">
              Climate Change and Agricultural Shifts
            </h3>
            <p className="text-gray-600 text-sm">
              Farmers around the world are adapting to new growing conditions
              caused by climate change, with varying success.
            </p>
            <a
              href="#"
              className="text-green-600 font-bold mt-2 inline-block hover:underline"
            >
              Read more
            </a>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Content;

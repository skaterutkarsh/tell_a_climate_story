import React from "react";

const Stories = () => {
  return (
    <section className="featured-stories-section max-w-6xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-green-100 rounded-lg shadow-lg mt-10 mb-10">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Featured Climate Change Stories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Story 1 */}
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Impact of Glacial Melting on Water Resources
          </h3>
          <p className="text-gray-600">
            Glaciers are retreating at an alarming rate due to climate change,
            threatening freshwater supplies and ecosystems around the world.
          </p>
          <a
            href="/story/5"
            className="text-green-600 font-bold mt-4 inline-block hover:underline"
          >
            Read more
          </a>
        </article>

        {/* Story 2 */}
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            The Role of Forests in Climate Regulation
          </h3>
          <p className="text-gray-600">
            Forests act as carbon sinks, helping to mitigate the effects of
            climate change. Their preservation is crucial in the fight against
            global warming.
          </p>
          <a
            href="/story/6"
            className="text-green-600 font-bold mt-4 inline-block hover:underline"
          >
            Read more
          </a>
        </article>

        {/* Story 3 */}
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            The Link Between Climate Change and Extreme Weather
          </h3>
          <p className="text-gray-600">
            As global temperatures rise, the frequency and intensity of extreme
            weather events like hurricanes and heatwaves are increasing.
          </p>
          <a
            href="/story/7"
            className="text-green-600 font-bold mt-4 inline-block hover:underline"
          >
            Read more
          </a>
        </article>

        {/* Story 4 */}
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Adapting to Climate Change in Coastal Cities
          </h3>
          <p className="text-gray-600">
            Coastal cities are at the frontline of climate change impacts,
            facing rising sea levels, flooding, and infrastructure challenges.
          </p>
          <a
            href="/story/8"
            className="text-green-600 font-bold mt-4 inline-block hover:underline"
          >
            Read more
          </a>
        </article>

        {/* Story 5 */}
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Biodiversity Loss and Climate Change
          </h3>
          <p className="text-gray-600">
            Biodiversity is declining at an unprecedented rate due to climate
            change, threatening ecosystems and human livelihoods.
          </p>
          <a
            href="/story/9"
            className="text-green-600 font-bold mt-4 inline-block hover:underline"
          >
            Read more
          </a>
        </article>

        {/* Story 6 */}
        <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Renewable Energy: A Key to Mitigating Climate Change
          </h3>
          <p className="text-gray-600">
            Transitioning to renewable energy sources like solar and wind power
            is one of the most effective ways to combat climate change.
          </p>
          <a
            href="/story/10"
            className="text-green-600 font-bold mt-4 inline-block hover:underline"
          >
            Read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default Stories;

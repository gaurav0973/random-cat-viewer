import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function App() {
  const [cat, setCat] = useState(null);

  async function fetchCat() {
    const { data } = await api.get("/cats/cat/random");
    setCat(data.data);
  }

  useEffect(() => {
    fetchCat();
  }, []);

  if (!cat) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <div className="max-w-md bg-white rounded-2xl overflow-hidden shadow">
        
        <img
          src={cat.image}
          alt={cat.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold">{cat.name}</h1>

          <p className="text-sm text-orange-500 mt-1">
            {cat.origin}
          </p>

          <p className="text-gray-600 mt-4">
            {cat.description}
          </p>

          <p className="mt-4 font-medium">
            Life Span: {cat.life_span} yrs
          </p>

          <button
            onClick={fetchCat}
            className="w-full mt-6 bg-orange-500 text-white py-3 rounded-xl"
          >
            New Cat
          </button>
        </div>
      </div>
    </div>
  );
}
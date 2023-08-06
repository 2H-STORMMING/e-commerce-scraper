import Link from "next/link";

const SEARCHES = [
  {
    id: 1,
    term: "Monitors over $500",
    url: "/search/monitors?sort_by=r&min_price=500",
    color: "bg-yellow-400",
  },
  {
    id: 2,
    term: "iphone",
    url: "/search?term=iphone",
    color: "bg-blue-400",
  },
  {
    id: 3,
    term: "Macbook Pro",
    url: "/search/macbook",
    color: "bg-green-400",
  },
  {
    id: 4,
    term: "iphone",
    url: "/search?term=iphone",
    color: "bg-pink-400",
  },
];

export default function Home() {
  return (
    <div className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get started by clicking on one of the exemple search items or typing in
        an item yourself! above
      </h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
      lg:gris-cols-4 xl:grid-cols-4 justify-center items-center gap-5 mt-5 "
      >
        {
          // Loop through the SEARCHES array and render a Search component for each item
          SEARCHES.map((search) => (
            <Link
              href={search.url}
              key={search.id}
              prefetch={false}
              className={`${search.color} w-full h-36 hover:opacity-50 text-white 
            font-bold py-2 px-4 rounded md:text-center `}
            >
              {search.term}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

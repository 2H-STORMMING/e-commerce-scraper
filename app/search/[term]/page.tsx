import { redirect } from "next/navigation";
import { PageResult, SearchParams } from "@/typing";
import { getFetchUrl } from "@/lib/getFetchUrl";
import ResultsList from "@/components/ResultsList";

export const revalidate = 300;

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

async function Searchpage({ searchParams, params: { term } }: Props) {
  if (!term) {
    redirect("/");
  }
  // fetch from api
  const response = await fetch(getFetchUrl("api/search"), {
    method: "POST",
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });

  const results = (await response.json()) as PageResult[];
  console.log(results);

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  );
}

export default Searchpage;

import useSWR from "swr";

export default function HomePage() {
  const url = "https://example-apis.vercel.app/api/art";
  const fetcher = async (url) => {
    const res = await fetch(url); // If the status code is not in the range 200-299,  // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data."); // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };

  const { data } = useSWR(url, fetcher);
  console.log(data);

  return (
    <div>
      <h1>Hello from Next.js</h1>
    </div>
  );
}

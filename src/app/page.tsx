import { Map } from "@/components/map";

export default function Home() {
  return (
    <div>
      <header>
        <h1>biz-buddy</h1>
        <p>Time to help some business</p>
      </header>
      <main>
        <p>Here is where the map goes</p>
        <Map />
      </main>
      <footer>
        <p>@crydafan on X</p>
      </footer>
    </div>
  );
}

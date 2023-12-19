import Image from "next/image";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Portfolio />
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="">
        <Image
          className="rounded-full"
          src="/profile.jpg"
          alt="Michael Dimitras profile picture"
          width={400}
          height={300}
          priority
        />
      </div>
      <h2 className={`mb-3 text-2xl font-semibold`}>Coming Soon</h2>
    </main>
  );
}

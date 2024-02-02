import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="profile-container">
        <Image
          className="rounded-full shadow-lg mx-auto"
          src="/profile.jpg"
          alt="Michael Dimitras profile picture"
          width={400}
          height={300}
          priority
        />
        <p className="profile-caption">Coming Soon</p>
      </div>
    </main>
  );
}

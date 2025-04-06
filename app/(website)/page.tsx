import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl">Something new on the way</h1>
      <h3>Stay tuned...</h3>
      <UserButton />
    </div>
  );
}

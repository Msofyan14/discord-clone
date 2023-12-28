import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-2xl ">
      <Button variant="destructive">Discord Clone</Button>

      <div className="mt-2">
        <UserButton afterSignOutUrl="/" />
      </div>
      <ModeToggle />
    </div>
  );
}

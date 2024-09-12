import { Plus } from "lucide-react";
import logoInOrbit from "../assets/in-orbit-logo.svg";
import letsStart from "../assets/rocket-launch-illustration.svg";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";
export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logoInOrbit} alt="Logo in Orbit" />
      <img src={letsStart} alt="ilustrarion let's start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar meta
        </Button>
      </DialogTrigger>
    </div>
  );
}

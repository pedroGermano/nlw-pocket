import { Plus } from "lucide-react";
import logoInOrbit from "./assets/in-orbit-logo.svg";
import letsStart from "./assets/rocket-launch-illustration.svg";

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logoInOrbit} alt="Logo in Orbit" />
      <img src={letsStart} alt="ilustrarion let's start" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <button
        className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-center gap-2 font-medium tracking-tight hover:bg-violet-600"
        type="button"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  );
}

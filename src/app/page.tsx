import Image from "next/image";
import hero from "@/assets/service.svg";
export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-80px)]">
      <h2 className="font-medium text-2xl mb-2">Gerencie Sua Empresa</h2>
      <h1 className="font-bold text-3xl md:text-4xl mb-8 text-indigo-500">
        Atendimentos, CLientes
      </h1>
      <Image
        className="max-w-sm md:max-w-xl"
        alt={"Hero System control"}
        src={hero}
        width={400}
      />
    </main>
  );
}

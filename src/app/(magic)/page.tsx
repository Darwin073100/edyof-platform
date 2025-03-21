import { CardPrimary } from "@/presentation/components/ui/cards/CardPrimary";
import { SideBar } from "@/presentation/components/ui/side-bar/SideBar";
import { IoAdd, IoAddSharp } from "react-icons/io5";

export default function Home() {

  return (
    <main className="flex w-full py-4 pr-4">
        <SideBar/>
        <div className="h-full w-full">
          <div className="grid grid-cols-5 gap-4 w-full text-gray-700">
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
            <CardPrimary 
              valueDescription="Activo recaudado"
              value="$2,000,000"
              noteDescription="Lotes vendidos"
              note="20.0 %" />
          </div>
        </div>
      </main>
  );
}

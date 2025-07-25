import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Progress } from "@/components/ui/progress"
function App() {
  return (
    <div>
       <div className="px-1 h-screen flex flex-col overflow-hidden">
        <h1 className="flex text-2xl font-bold justify-center">Productos</h1>

        <Menubar className="border rounded-none">
          <MenubarMenu>
            <MenubarTrigger>Ingreso</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Gasto</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Residuo</MenubarTrigger>
          </MenubarMenu>
        </Menubar>

        <Progress className="bg-blue-200 transform -scale-x-100" value={30} />

        <ScrollArea className="w-full h-[70%] border overflow-hidden">
          <div className="p-4">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i}>
                <div className="text-sm">Item {i + 1}</div>
                <Separator className="my-2" />
              </div>
            ))}
          </div>
        </ScrollArea>

        <Menubar className="border rounded-none">
          <MenubarMenu>
            <MenubarTrigger>Alimento</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Transporte</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Antojo</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Servicio</MenubarTrigger>
          </MenubarMenu>
        </Menubar>

        <ScrollArea className="w-full h-full border overflow-hidden">
          <div className="p-4 grid grid-cols-2 gap-4">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i}>
                <Button className="rounded-none" variant="secondary">
                  hamburguesa {i + 1}
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="h-30 flex items-center justify-center">
          <Button className="rounded-full p-5" variant="secondary">
            Nuevo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App
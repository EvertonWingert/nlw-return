import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";
export function CloseButton() {
    return (
        <Popover.Button className="absolute top-0 right-0 p-2 rounded-full bg-transparent border-0 text-zinc-400 hover:text-zinc-100"
            title="Fechar formulário">


            <X className="h-4 w-4" weight="bold" />
        </Popover.Button>
    )
}
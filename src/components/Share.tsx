import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast, Toaster } from "sonner";

export default function Share() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const copyUrl = () => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("The link has been copied to your clipboard.");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        toast.error("Failed to copy the link. Please try again.");
      });
  };

  return (
    <>
      <Toaster richColors expand={true} />
      <DropdownMenu modal={false} open={dropdownOpen}>
        <DropdownMenuTrigger
          asChild
          onClick={() => {
            setDropdownOpen((val) => !val);
          }}
        >
          <button className="rounded-full border-1 border-md-separator px-5 py-4 font-sans flex items-baseline justify-center leading-none hover:bg-md-fg hover:text-md-bg hover:border-md-fg transition-colors ease-in-out duration-200 hover:cursor-pointer">
            Share
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          onPointerDownOutside={() => {
            setDropdownOpen((val) => !val);
          }}
          onEscapeKeyDown={() => {
            setDropdownOpen((val) => !val);
          }}
          onClick={() => {
            setDropdownOpen((val) => !val);
          }}
        >
          <DropdownMenuItem>
            <a href="/">Github</a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="/">Twitter (X)</a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <button onClick={copyUrl}>Copy link</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

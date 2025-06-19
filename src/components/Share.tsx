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
        toast.custom(() => (
          <p className="px-5 py-4 bg-white border-1 rounded-md border-md-separator font-sans text-sm shadow-md">
            The link has been copied to your clipboard.
          </p>
        ));
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        toast.custom(() => (
          <p className="px-5 py-4 bg-white border-1 rounded-md border-md-separator font-serif text-sm shadow-md">
            Failed to copy the link. Please try again.
          </p>
        ));
      });
  };

  return (
    <>
      <Toaster offset={{ bottom: "6vh", right: "6vh" }} />
      <DropdownMenu modal={false}>
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
          <DropdownMenuItem className="hover:[&_*]:text-md-bg">
            <a
              href="/"
              className="flex flex-row gap-0.5 justify-items-start align-top"
            >
              <p>Github</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right size-3 text-md-muted"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                  <path d="m21 3-9 9"></path>
                  <path d="M15 3h6v6"></path>
                </svg>
              </span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:[&_*]:text-md-bg">
            <a
              href="/"
              className="flex flex-row gap-0.5 justify-items-start align-top"
            >
              <p>Twitter/X</p>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right size-3 text-md-muted"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"></path>
                  <path d="m21 3-9 9"></path>
                  <path d="M15 3h6v6"></path>
                </svg>
              </span>
            </a>
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

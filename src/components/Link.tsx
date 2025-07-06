import { toast, Toaster } from "sonner";

export default function CopyLink() {
  const getUrl = () => {
    const url = window.location.href;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.custom(() => (
          <p className="px-5 py-4 bg-white border-1 rounded-md border-md-separator font-text text-sm shadow-md">
            The link has been copied to your clipboard.
          </p>
        ));
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
        toast.custom(() => (
          <p className="px-5 py-4 bg-white border-1 rounded-md border-md-separator font-text text-sm shadow-md">
            Failed to copy the link. Please try again.
          </p>
        ));
      });
  };

  return (
    <>
      <Toaster offset={{ bottom: "10vh", right: "10vh" }} />
      <button onClick={getUrl} className="p-3.5 border-md-separator border-1 rounded-full text-md-fg hover:border-md-fg hover:bg-md-fg hover:text-md-bg hover:cursor-pointer transition-colors duration-100 ease-in">
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
          className="lucide lucide-link-icon lucide-link"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </button>
    </>
  );
}

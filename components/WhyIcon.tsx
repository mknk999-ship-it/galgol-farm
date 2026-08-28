import type { WhyItem } from "@/data/whyYeongyang";

const paths: Record<WhyItem["icon"], React.ReactNode> = {
  seal: (
    <>
      <circle cx="12" cy="9.5" r="6" />
      <path d="M9 14.5 7.5 21l4.5-2.2 4.5 2.2-1.5-6.5" />
    </>
  ),
  store: (
    <>
      <path d="M4 10V20h16V10" />
      <path d="M3 10 5 4h14l2 6" />
      <path d="M9 20v-6h6v6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.3 3.8 5.3 3.8 8.5s-1.3 6.2-3.8 8.5c-2.5-2.3-3.8-5.3-3.8-8.5S9.5 5.8 12 3.5Z" />
    </>
  ),
  map: (
    <>
      <path d="M4 5.5 9 4l6 2 5-1.5v14L15 20l-6-2-5 1.5Z" />
      <path d="M9 4v14M15 6v14" />
    </>
  ),
};

export default function WhyIcon({ icon }: { icon: WhyItem["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-red"
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}

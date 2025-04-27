import { DM_Sans, Fira_Code } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

interface FontProviderProps {
  children: React.ReactNode;
}

export function FontProvider(props: Readonly<FontProviderProps>) {
  const { children } = props;

  return (
    <div className={`${dmSans.variable} ${firaCode.variable}`}>{children}</div>
  );
}

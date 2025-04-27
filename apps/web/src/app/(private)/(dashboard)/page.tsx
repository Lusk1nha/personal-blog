import { Title } from "@personal-blog/ui/title.tsx";

export default function DashboardPage() {
  return (
    <main className="h-full border-x border-border mx-1 sm:mx-2">
      <div className="flex flex-col px-2.5 py-8 md:py-12 pb-4">
        <section>
          <Title>Hi, I’m Paulina 👋</Title>
        </section>
      </div>
    </main>
  );
}

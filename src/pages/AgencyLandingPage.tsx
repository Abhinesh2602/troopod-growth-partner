import Header from "@/components/Header";

const AgencyLandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <section className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agency Solutions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Coming soon — details for agency partners will be added here
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AgencyLandingPage;

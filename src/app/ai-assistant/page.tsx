import AIAssistantForm from "@/components/AIAssistantForm";

export default function AIAssistantPage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary/5 py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
                        AI-Powered Marketing Assistant
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                        Leverage our custom AI to brainstorm innovative marketing ideas. Describe your business and challenge, and get suggestions that typical agencies don't offer.
                    </p>
                </div>
            </section>

            {/* AI Form Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        <AIAssistantForm />
                    </div>
                </div>
            </section>
        </div>
    );
}

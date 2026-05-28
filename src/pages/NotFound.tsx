import { PageShell } from "../components/layout/PageShell";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <PageShell>
      <section className="py-32 md:py-48 bg-bg flex items-center">
        <Container className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-teal">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text">
              Page not found
            </h2>
            <p className="text-lg text-muted max-w-md mx-auto">
              Sorry, we couldn't find the page you're looking for. It might have moved or this link could be broken.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button as="a" href="/">
              Go home
            </Button>
            <Button as="a" href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

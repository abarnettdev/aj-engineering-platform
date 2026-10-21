import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import { Linkedin, Github, Mail, FileDown } from "lucide-react";
import { PageHero, Accent } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · AJ Barnett" },
      {
        name: "description",
        content:
          "Contact AJ Barnett about full-time roles, contract work, websites, applications, design systems, and practical AI integrations.",
      },
      { property: "og:title", content: "Contact · AJ Barnett" },
      {
        property: "og:description",
        content:
          "Open to full-time design and engineering roles, focused contracts, and client software projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        chapter="07"
        chapterLabel="END"
        image="/visuals/contact-studio.webp"
        imageAlt="The ajbarnett.tech recruiter contact form and Ask A.J. entry point displayed across laptop and phone."
        imageCaption="Clear next steps"
        imageMeta="Available"
        headline={
          <>
            Tell me what
            <br />
            <Accent>you need to build.</Accent>
          </>
        }
        description={
          <>
            I am open to full-time roles, contract design or engineering work,
            freelance websites and applications, design-system consulting, and
            practical AI integrations.
          </>
        }
      />

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <a
            href="mailto:aj.barnett84@gmail.com"
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong hover:bg-surface-elevated"
          >
            <Mail className="h-5 w-5 text-accent" />
            <h2 className="mt-4 font-display text-2xl">Email</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              aj.barnett84@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/aj-barnett-2b5574382/"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong hover:bg-surface-elevated"
          >
            <Linkedin className="h-5 w-5 text-accent" />
            <h2 className="mt-4 font-display text-2xl">LinkedIn</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              /in/aj-barnett-2b5574382
            </p>
          </a>
          <a
            href="https://github.com/abarnettdev"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong hover:bg-surface-elevated"
          >
            <Github className="h-5 w-5 text-accent" />
            <h2 className="mt-4 font-display text-2xl">GitHub</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Code, systems, and side projects
            </p>
          </a>
          <a
            href="/resumes/aj-barnett-product-design.pdf"
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong hover:bg-surface-elevated"
          >
            <FileDown className="h-5 w-5 text-accent" />
            <h2 className="mt-4 font-display text-2xl">
              Product Design Résumé
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">Download PDF</p>
          </a>
          <a
            href="/resumes/aj-barnett-software-engineering.pdf"
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-border-strong hover:bg-surface-elevated"
          >
            <FileDown className="h-5 w-5 text-accent" />
            <h2 className="mt-4 font-display text-2xl">Engineering Résumé</h2>
            <p className="mt-1 text-sm text-muted-foreground">Download PDF</p>
          </a>
        </div>
      </Section>
    </>
  );
}

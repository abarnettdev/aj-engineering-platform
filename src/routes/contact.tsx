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
          "Contact AJ Barnett about product design, design systems, and senior software engineering roles.",
      },
      { property: "og:title", content: "Contact · AJ Barnett" },
      {
        property: "og:description",
        content:
          "Open to product design, design systems, and senior software engineering opportunities.",
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
        eyebrow="Contact · Let's connect"
        chapter="07"
        chapterLabel="END"
        image="/visuals/contact-studio.webp"
        imageAlt="The ajbarnett.tech recruiter contact form and Ask A.J. entry point displayed across laptop and phone."
        imageCaption="Signal · Not noise"
        imageMeta="Available"
        headline={
          <>
            Let's build
            <br />
            <Accent>something worth it.</Accent>
          </>
        }
        description={
          <>
            Product design, design systems, and senior software engineering
            roles with teams shipping useful products for real people.
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

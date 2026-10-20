from __future__ import annotations

from pathlib import Path
from shutil import copy2

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    KeepTogether,
    PageTemplate,
    Paragraph,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"
PUBLIC_DIR = ROOT / "public" / "resumes"
INK = colors.HexColor("#161616")
MUTED = colors.HexColor("#595959")
GOLD = colors.HexColor("#9A5700")
RULE = colors.HexColor("#D8D5CF")


def bullet(text: str) -> Paragraph:
    return Paragraph(f"• {text}", STYLES["BulletResume"])


def role(company: str, title: str, dates: str, bullets: list[str]) -> list[object]:
    content: list[object] = [
        KeepTogether(
            [
                Paragraph(company.upper(), STYLES["Company"]),
                Paragraph(f"{title}  |  {dates}", STYLES["Role"]),
            ]
        ),
        Spacer(1, 4),
    ]
    content.extend(bullet(item) for item in bullets)
    content.append(Spacer(1, 6))
    return content


def draw_page(canvas, doc) -> None:
    canvas.saveState()
    width, height = letter
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.5)
    canvas.line(0.62 * inch, 0.48 * inch, width - 0.62 * inch, 0.48 * inch)
    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(0.62 * inch, 0.3 * inch, "AJ BARNETT  ·  AJBARNETT.TECH")
    canvas.drawRightString(width - 0.62 * inch, 0.3 * inch, f"PAGE {doc.page}")
    canvas.restoreState()


def build_resume(
    filename: str,
    focus: str,
    summary: str,
    strengths: str,
    experience: list[tuple[str, str, str, list[str]]],
    skills: list[tuple[str, str]],
) -> Path:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    destination = OUTPUT_DIR / filename

    document = BaseDocTemplate(
        str(destination),
        pagesize=letter,
        leftMargin=0.62 * inch,
        rightMargin=0.62 * inch,
        topMargin=0.45 * inch,
        bottomMargin=0.54 * inch,
        title=f"AJ Barnett - {focus} Resume",
        author="AJ Barnett",
        subject=f"Professional resume focused on {focus.lower()}",
    )
    frame = Frame(
        document.leftMargin,
        document.bottomMargin,
        document.width,
        document.height,
        leftPadding=0,
        rightPadding=0,
        topPadding=0,
        bottomPadding=0,
    )
    document.addPageTemplates([PageTemplate(id="resume", frames=[frame], onPage=draw_page)])

    story: list[object] = [
        Paragraph("AJ BARNETT", STYLES["Name"]),
        Paragraph(focus.upper(), STYLES["Focus"]),
        Spacer(1, 8),
        Paragraph(
            "Cape Coral, FL  ·  (941) 786-2752  ·  aj.barnett84@gmail.com  ·  "
            "ajbarnett.tech  ·  linkedin.com/in/aj-barnett",
            STYLES["Contact"],
        ),
        Spacer(1, 11),
        Paragraph("PROFILE", STYLES["Section"]),
        Paragraph(summary, STYLES["Body"]),
        Spacer(1, 5),
        Paragraph(f"<b>Core strengths:</b> {strengths}", STYLES["Body"]),
        Spacer(1, 10),
        Paragraph("EXPERIENCE", STYLES["Section"]),
    ]

    for company, title, dates, items in experience:
        story.extend(role(company, title, dates, items))

    story.extend([Paragraph("CAPABILITIES", STYLES["Section"]), Spacer(1, 3)])
    for label, value in skills:
        story.append(Paragraph(f"<b>{label}:</b> {value}", STYLES["Skill"] ))

    story.extend(
        [
            Spacer(1, 6),
            Paragraph("LICENSES & PROFESSIONAL DEVELOPMENT", STYLES["Section"]),
            Paragraph(
                "FAA Private Pilot Certificate  ·  FAA Instrument Rating - Airplane  ·  "
                "Microsoft Azure professional coursework",
                STYLES["Body"],
            ),
        ]
    )

    document.build(story)
    copy2(destination, PUBLIC_DIR / filename)
    return destination


styles = getSampleStyleSheet()
STYLES = {
    "Name": ParagraphStyle(
        "Name",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=24,
        leading=24,
        textColor=INK,
        spaceAfter=4,
    ),
    "Focus": ParagraphStyle(
        "Focus",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=10.5,
        leading=13,
        tracking=1.2,
        textColor=GOLD,
    ),
    "Contact": ParagraphStyle(
        "Contact",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.2,
        leading=10.5,
        textColor=MUTED,
    ),
    "Section": ParagraphStyle(
        "Section",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=8.5,
        leading=10,
        tracking=1.5,
        textColor=GOLD,
        borderColor=RULE,
        borderWidth=0,
        borderPadding=0,
        spaceAfter=5,
    ),
    "Body": ParagraphStyle(
        "Body",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.5,
        leading=11.2,
        textColor=INK,
        alignment=TA_LEFT,
    ),
    "Company": ParagraphStyle(
        "Company",
        parent=styles["Normal"],
        fontName="Helvetica-Bold",
        fontSize=9.4,
        leading=11,
        textColor=INK,
    ),
    "Role": ParagraphStyle(
        "Role",
        parent=styles["Normal"],
        fontName="Helvetica-Oblique",
        fontSize=8.2,
        leading=10.5,
        textColor=MUTED,
    ),
    "BulletResume": ParagraphStyle(
        "BulletResume",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.3,
        textColor=INK,
        leftIndent=9,
        firstLineIndent=-7,
        spaceAfter=2.2,
    ),
    "Skill": ParagraphStyle(
        "Skill",
        parent=styles["Normal"],
        fontName="Helvetica",
        fontSize=8.1,
        leading=10.3,
        textColor=INK,
        spaceAfter=3,
    ),
}


design_experience = [
    (
        "CDW Corporation",
        "Senior Software Engineer I | Technical Lead",
        "2022-2026",
        [
            "Led frontend architecture and engineering for Legato, CDW's enterprise design system, in partnership with Product Design, Product, QA, and engineering teams.",
            "Co-led more than 170 shared UI assets across React, TypeScript, Stencil Web Components, and HTML/JavaScript; ownership was shared across the team.",
            "Architected semantic design tokens and used Storybook as the source of truth for variants, states, implementation guidance, and accessible usage.",
            "Embedded WCAG 2.1 AA and Section 508 requirements into reusable components and supported incremental adoption in existing applications.",
            "Helped increase adoption from 38% to 92% and mentored five engineers through component design, code review, and architecture decisions.",
        ],
    ),
    (
        "Equity Trust Company (Midland Trust)",
        "Software Engineer",
        "2020-2022",
        [
            "Designed and delivered responsive client, advisor, and payment portals for regulated financial workflows.",
            "Connected interface design to React implementation, authentication, role-based access, APIs, and data-backed business processes.",
            "Built cross-platform experiences with React and Ionic and optimized accessibility, performance, and SEO.",
        ],
    ),
    (
        "Priority Marketing",
        "Full-Stack Software Engineer",
        "2016-2020",
        [
            "Designed and developed responsive websites and digital products for healthcare, nonprofit, hospitality, education, government, and commercial clients.",
            "Created custom CMS themes and reusable frontend patterns with attention to typography, hierarchy, accessibility, SEO, performance, and conversion.",
            "Worked directly with creative directors, designers, account managers, and client stakeholders from concept through launch and support.",
        ],
    ),
    (
        "Moore & Scarry Advertising (later Caldwell & Kerr / Affinitiv)",
        "Junior Graphic Designer -> Senior Frontend Web Developer",
        "2015-2016",
        [
            "Progressed through four roles in 15 months, moving from design production into senior frontend development.",
            "Designed and built high-volume automotive campaigns, landing pages, and responsive experiences with Adobe tools, HTML, CSS, JavaScript, PHP, and WordPress.",
        ],
    ),
    (
        "Independent / Freelance",
        "Freelance Software Engineer",
        "2010-2015",
        [
            "Designed, developed, and deployed websites, CMS platforms, eCommerce experiences, brand assets, and business applications for organizations across several industries.",
        ],
    ),
]

engineering_experience = [
    (
        "CDW Corporation",
        "Senior Software Engineer I | Technical Lead",
        "2022-2026",
        [
            "Led architecture, reusable component development, accessibility, developer experience, governance, and adoption for the Legato enterprise design system.",
            "Helped increase adoption from 38% to 92% across targeted Digital Customer experiences and enabled 19 of 27 major initiatives to ship on Legato.",
            "Co-led more than 170 UI assets across React, TypeScript, Stencil Web Components, and HTML/JavaScript; reduced implementation effort through shared patterns and Storybook documentation.",
            "Led and mentored five engineers through architecture guidance, code reviews, interviews, and technical coaching.",
            "Modernized legacy .NET microsites by incrementally adding React without disrupting production users.",
        ],
    ),
    (
        "Equity Trust Company (Midland Trust)",
        "Software Engineer",
        "2020-2022",
        [
            "Built full-stack financial applications with React, TypeScript, Node.js, PostgreSQL, REST APIs, Redux, and Sequelize.",
            "Developed client, advisor, and payment portals with Microsoft Entra ID authentication and custom role-based authorization.",
            "Built web, iOS, and Android experiences with React and Ionic and supported deployments, release pipelines, and production issues.",
        ],
    ),
    (
        "Priority Marketing",
        "Full-Stack Software Engineer",
        "2016-2020",
        [
            "Designed and developed production websites, custom applications, CMS platforms, and integrations for clients across several industries.",
            "Integrated third-party APIs, CRM systems, payment gateways, analytics, and marketing automation while managing hosting, DNS, deployment, security, and performance.",
        ],
    ),
    (
        "Moore & Scarry Advertising (later Caldwell & Kerr / Affinitiv)",
        "Junior Graphic Designer -> Senior Frontend Web Developer",
        "2015-2016",
        [
            "Progressed through four roles in 15 months and owned frontend delivery for high-volume automotive campaigns and responsive websites.",
        ],
    ),
    (
        "Independent / Freelance",
        "Freelance Software Engineer",
        "2010-2015",
        [
            "Delivered websites, CMS platforms, eCommerce solutions, and business applications using PHP, WordPress, Joomla, Drupal, ASP.NET MVC, C#, JavaScript, and SQL Server.",
        ],
    ),
]


if __name__ == "__main__":
    build_resume(
        "aj-barnett-product-design.pdf",
        "Product Design | UI/UX | Design Systems",
        "Designer-engineer with 15+ years of experience taking digital products from visual concept through responsive implementation. Began in graphic and web design, moved into full-stack engineering, and later led enterprise design-system architecture. Strongest at the point where interface decisions become accessible, documented, production-ready components.",
        "interface design, visual hierarchy, typography, responsive systems, interaction states, accessibility, design tokens, component specifications, Storybook, Figma collaboration, Adobe Creative Suite, and frontend implementation",
        design_experience,
        [
            ("Product and interface", "responsive UI, interaction design, visual hierarchy, typography, conversion-aware layouts, content structure"),
            ("Systems", "semantic design tokens, component APIs, variants and states, accessibility guidance, Storybook documentation, governance"),
            ("Tools", "Figma collaboration, Adobe Photoshop, Illustrator, After Effects, HTML, CSS, SCSS, React, TypeScript, Stencil"),
            ("Quality", "WCAG 2.1 AA, Section 508, keyboard behavior, responsive reflow, performance, SEO"),
        ],
    )
    build_resume(
        "aj-barnett-software-engineering.pdf",
        "Staff / Lead Software Engineer | Frontend Platform & Full-Stack",
        "Staff-level software engineer and technical lead with 15+ years of experience building frontend platforms, full-stack applications, and enterprise design systems. Hands-on across React, TypeScript, Node.js, REST APIs, PostgreSQL, authentication, CI/CD, accessibility, and legacy modernization. Known for practical architecture, mentoring engineers, and aligning technical decisions with product outcomes.",
        "React, TypeScript, frontend architecture, Node.js, REST APIs, PostgreSQL, C#/ASP.NET, authentication, enterprise design systems, accessibility, testing, CI/CD, performance, technical leadership, and legacy modernization",
        engineering_experience,
        [
            ("Front end", "React, TypeScript, JavaScript, HTML5, CSS3, SCSS, Tailwind CSS, Stencil, Web Components, Redux, TanStack Start, Ionic, Storybook, Nx, Vite"),
            ("Back end and platform", "Node.js, Bun, PHP, C#, ASP.NET MVC, REST APIs, PostgreSQL, SQL Server, Sequelize, Microsoft Entra ID, authentication and role-based access"),
            ("Delivery", "Git, Azure DevOps, CI/CD, deployments, production support, testing, performance, SEO"),
            ("Design and quality", "enterprise design systems, design tokens, Figma collaboration, WCAG 2.1 AA, Section 508, responsive design"),
        ],
    )

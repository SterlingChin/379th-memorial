# 379th Bomb Group Memorial

**Website:** [379th-memorial.org](https://379th-memorial.org)

A memorial website honoring the men of the 379th Bombardment Group (Heavy) — "The Grand Slam Group" — who flew B-17 Flying Fortresses from Kimbolton, England during World War II.

## About the 379th

The 379th Bomb Group was part of the Mighty 8th Air Force, 1st Bombardment Division. From May 1943 to April 1945, they:

- Flew **330 combat missions**
- Completed **10,492 sorties**
- Dropped **26,460 tons of bombs**
- Shot down **315 enemy aircraft**
- Lost **141 B-17s** to enemy action

In April 1944, the 379th achieved an unprecedented "Grand Slam" — ranking #1 in bombing accuracy, tonnage, aircraft attacking, lowest losses, and lowest abort rate. No other bomb group in the 8th Air Force ever accomplished this.

## Project Purpose

This site preserves the history of the 379th and provides:

- **Searchable crew database** — Find ancestors who served
- **War stories** — First-person accounts from veterans
- **Photo archive** — Crews, aircraft, and Kimbolton airfield
- **Mission records** — Historical documents and reports
- **Family connections** — Connect with other descendants

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Content:** Markdown with YAML frontmatter
- **Hosting:** Vercel

## Getting Started

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/379th-memorial.git
cd 379th-memorial

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Contributing

We welcome contributions! If you have:

- **Photos** — Crew photos, aircraft, airfield images
- **Documents** — Letters, mission reports, service records
- **Stories** — Written accounts from veterans or families
- **Corrections** — Historical accuracy improvements

Please open an issue or submit a pull request.

### Adding Content

All content is in Markdown format in the `/content` directory:

```
content/
├── history/          # Historical articles
├── crew/             # Individual crew member profiles
├── war-stories/      # First-person accounts
├── aircraft/         # Aircraft information
└── memorials/        # Memorial locations
```

### Content Format

```markdown
---
title: "Story Title"
author: "Veteran Name"
squadron: "524th"
featured: true
---

Your content here in Markdown format...
```

## Data Sources

This site preserves content originally from:

- **www.379thbga.org** — The original 379th Bomb Group Association website
- **Mighty 8th Air Force Museum** — Savannah, Georgia
- **National Archives** — Official military records
- **Family contributions** — Photos and documents from descendants

## License

This project is open source under the MIT License. Historical content remains the property of original contributors and their families.

## Acknowledgments

- The original 379th Bomb Group Association and its volunteers
- The families who have shared photos, stories, and documents
- The Mighty 8th Air Force Museum for historical preservation
- All who served in the 379th Bomb Group

---

*"To perpetuate the history of the 379th Bomb Group (H), to remember and honor the memory of lost comrades, and to educate present and future generations."*

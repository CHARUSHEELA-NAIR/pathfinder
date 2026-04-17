import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import MarkExploredButton from "../components/MarkExploredButton";

interface FilmEntry {
  title: string;
  year: number;
  genre: string[];
  platform: string;
  description: string;
  emoji: string;
  link: string;
  bgColor: string;
}

const films: FilmEntry[] = [
  {
    title: "The Social Network",
    year: 2010,
    genre: ["Biography", "Drama"],
    platform: "IMDb",
    description:
      "The founding of Facebook — ambition, betrayal, and the messy birth of a billion-dollar idea from a Harvard dorm room.",
    emoji: "💻",
    link: "https://www.imdb.com/title/tt1285016/",
    bgColor: "from-secondary/60 to-muted/40",
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    genre: ["Biography", "Drama"],
    platform: "IMDb",
    description:
      "Chris Gardner's relentless climb from homelessness to Wall Street success — a testament to grit and unconditional love.",
    emoji: "🌅",
    link: "https://www.imdb.com/title/tt0454921/",
    bgColor: "from-primary/30 to-secondary/40",
  },
  {
    title: "Shark Tank India",
    year: 2022,
    genre: ["Business", "Reality"],
    platform: "Amazon Prime",
    description:
      "Indian entrepreneurs pitch their boldest ideas to veteran investors — raw, inspiring, and grounded in real commerce.",
    emoji: "🦈",
    link: "https://www.amazon.com/gp/video/detail/B09QDYLRR9",
    bgColor: "from-accent/20 to-secondary/30",
  },
  {
    title: "Joy",
    year: 2015,
    genre: ["Biography", "Drama"],
    platform: "IMDb",
    description:
      "Joy Mangano invents a self-wringing mop and fights every obstacle to build a household empire — women entrepreneurs, take note.",
    emoji: "🧹",
    link: "https://www.imdb.com/title/tt2446980/",
    bgColor: "from-secondary/50 to-muted/50",
  },
  {
    title: "Steve Jobs",
    year: 2015,
    genre: ["Biography", "Drama"],
    platform: "IMDb",
    description:
      "Three product launches, three decades — an unflinching portrait of the perfectionist who shaped the digital age.",
    emoji: "🍎",
    link: "https://www.imdb.com/title/tt2080374/",
    bgColor: "from-muted/60 to-primary/20",
  },
  {
    title: "The Intern",
    year: 2015,
    genre: ["Comedy", "Drama"],
    platform: "IMDb",
    description:
      "A 70-year-old retired widower joins a fashion startup — warm, witty, and full of wisdom about mentorship across generations.",
    emoji: "👔",
    link: "https://www.imdb.com/title/tt2361509/",
    bgColor: "from-primary/25 to-secondary/35",
  },
  {
    title: "The Wolf of Wall Street",
    year: 2013,
    genre: ["Biography", "Crime"],
    platform: "IMDb",
    description:
      "Jordan Belfort's dizzying rise and fall on Wall Street — a cautionary tale dressed in excess and extraordinary salesmanship.",
    emoji: "🐺",
    link: "https://www.imdb.com/title/tt0993846/",
    bgColor: "from-accent/15 to-muted/40",
  },
  {
    title: "Moneyball",
    year: 2011,
    genre: ["Biography", "Sport"],
    platform: "IMDb",
    description:
      "Billy Beane rebuilds the Oakland A's with data and intuition — proof that disruptive thinking beats a bigger budget.",
    emoji: "⚾",
    link: "https://www.imdb.com/title/tt1210166/",
    bgColor: "from-secondary/40 to-primary/25",
  },
  {
    title: "Air",
    year: 2023,
    genre: ["Biography", "Drama"],
    platform: "IMDb",
    description:
      "How Nike's small basketball division gambled everything on an unknown rookie named Michael Jordan — and changed sports forever.",
    emoji: "👟",
    link: "https://www.imdb.com/title/tt14076540/",
    bgColor: "from-muted/50 to-secondary/40",
  },
  {
    title: "WeCrashed",
    year: 2022,
    genre: ["Biography", "Drama"],
    platform: "Apple TV+",
    description:
      "The meteoric rise and spectacular collapse of WeWork — a miniseries about charisma, delusion, and Silicon Valley excess.",
    emoji: "🏢",
    link: "https://tv.apple.com/us/show/wecrashed/umc.cmc.6wsi760suo58hy1hvp77zrst",
    bgColor: "from-primary/20 to-accent/15",
  },
  {
    title: "The Dropout",
    year: 2022,
    genre: ["Biography", "Crime"],
    platform: "Hulu",
    description:
      "Elizabeth Holmes builds Theranos into a $9B blood-testing empire — and the high price of faking it until you can't.",
    emoji: "🩸",
    link: "https://www.hulu.com/series/the-dropout-6be32516-5834-49c9-8258-5de57e4d9ab7",
    bgColor: "from-secondary/35 to-muted/45",
  },
  {
    title: "Inventing Anna",
    year: 2022,
    genre: ["Crime", "Drama"],
    platform: "Netflix",
    description:
      "Anna Sorokin cons her way through New York high society posing as a German heiress — audacity, identity, and ambition on full display.",
    emoji: "💎",
    link: "https://www.netflix.com/title/81008305",
    bgColor: "from-accent/20 to-primary/20",
  },
];

const platformColors: Record<string, string> = {
  IMDb: "bg-yellow-600/20 text-yellow-800 border-yellow-700/30",
  "Amazon Prime": "bg-blue-600/20 text-blue-900 border-blue-700/30",
  Netflix: "bg-red-600/20 text-red-900 border-red-700/30",
  "Apple TV+": "bg-gray-600/20 text-gray-900 border-gray-600/30",
  Hulu: "bg-green-600/20 text-green-900 border-green-600/30",
};

export default function Inspiration() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative bg-card border-b-2 border-border parchment-texture overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10 select-none flex items-center justify-center">
          <span className="text-[20rem] leading-none">🎬</span>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-16 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span
                className="text-4xl float-subtle select-none"
                aria-hidden="true"
              >
                🧭
              </span>
              <span className="text-xs uppercase tracking-[0.28em] text-muted-foreground font-body border border-border px-3 py-1 rounded-full">
                Captain's Logbook
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 leading-tight">
              Logbook of Legends
            </h1>
            <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto leading-relaxed">
              Stories of those who charted unknown waters — founders, dreamers,
              and disruptors whose voyages can illuminate your own. Watch,
              learn, and set sail.
            </p>
          </motion.div>

          {/* Compass divider */}
          <motion.div
            className="flex items-center justify-center gap-4 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="h-px flex-1 max-w-24 bg-border" />
            <span className="text-2xl select-none" aria-hidden="true">
              ⚜️
            </span>
            <div className="h-px flex-1 max-w-24 bg-border" />
          </motion.div>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[
              { value: "12", label: "Curated Films" },
              { value: "5", label: "Platforms" },
              { value: "∞", label: "Lessons Aboard" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
        {/* Mark explored — centered below the hero stats */}
        <div className="max-w-5xl mx-auto px-6 pb-8 flex justify-center relative z-10">
          <MarkExploredButton sectionId="inspiration" />
        </div>
      </section>

      {/* Film Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="font-body text-muted-foreground text-sm uppercase tracking-[0.22em]">
            — Charted Voyages of the Screen —
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-ocid="inspiration.list"
        >
          {films.map((film, index) => (
            <FilmCard key={film.title} film={film} index={index} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-card border-t-2 border-border parchment-texture">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-4xl select-none" aria-hidden="true">
              📜
            </span>
            <h2 className="font-display text-3xl text-foreground mt-4 mb-3">
              Ready to Write Your Own Story?
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              The legends above all started with a map and a direction. Head
              back to the helm and chart your career voyage.
            </p>
            <a
              href="/career"
              className="inline-flex items-center gap-2 bg-secondary border-2 border-border text-foreground font-body font-semibold px-8 py-3 rounded-lg shadow-maritime hover:shadow-maritime-lg transition-smooth hover:-translate-y-1"
              data-ocid="inspiration.start_voyage_button"
            >
              <span aria-hidden="true">⚓</span>
              Discover Your Career Path
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FilmCard({ film, index }: { film: FilmEntry; index: number }) {
  const tiltClass = index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
      className="group"
      data-ocid={`inspiration.item.${index + 1}`}
    >
      <div
        className={`bg-card border-2 border-border rounded-lg shadow-maritime overflow-hidden flex flex-col h-full float-on-hover transition-smooth ${tiltClass} parchment-texture`}
      >
        {/* Poster area */}
        <div
          className={`relative bg-gradient-to-br ${film.bgColor} aspect-[3/2] flex items-center justify-center border-b-2 border-border`}
        >
          <span
            className="text-6xl select-none drop-shadow-sm"
            aria-hidden="true"
          >
            {film.emoji}
          </span>
          {/* Film strip decoration */}
          <div className="absolute top-2 left-0 right-0 flex justify-between px-2 opacity-20 pointer-events-none">
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-2 opacity-20 pointer-events-none">
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
            <div className="w-3 h-2 bg-foreground rounded-sm" />
          </div>
          {/* Year badge */}
          <div className="absolute top-2.5 right-2.5">
            <span className="bg-card/90 border border-border text-foreground text-xs font-mono px-2 py-0.5 rounded font-body">
              {film.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-4 gap-3">
          <div>
            <h3 className="font-display text-lg text-foreground leading-snug line-clamp-2 mb-1.5">
              {film.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {film.genre.map((g) => (
                <Badge
                  key={g}
                  variant="outline"
                  className="text-xs font-body border-border text-muted-foreground px-2 py-0"
                >
                  {g}
                </Badge>
              ))}
            </div>
          </div>

          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
            {film.description}
          </p>

          <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
            <span
              className={`text-xs font-body px-2.5 py-1 rounded-full border font-medium ${
                platformColors[film.platform] ??
                "bg-muted text-muted-foreground border-border"
              }`}
            >
              {film.platform}
            </span>
            <a
              href={film.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-body font-semibold text-foreground bg-secondary border border-border px-3 py-1.5 rounded hover:shadow-maritime transition-smooth hover:-translate-y-0.5 active:translate-y-0"
              data-ocid={`inspiration.watch_link.${index + 1}`}
              aria-label={`Watch ${film.title} on ${film.platform}`}
            >
              <span aria-hidden="true">🎬</span>
              Watch
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

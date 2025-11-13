export const ASSETS = {
  hero: {
    homeVideo: "/assets/backgrounds/home2.mp4",
    emmaVideo: "/assets/emma_dna/videos/emma_dna_command_symphony.mp4",
    poster: "/assets/emma_dna/images/EMMA.png",
  },

  emma: {
    images: {
      core: "/assets/emma_dna/images/emma_dna_command_symphony.png",
      dualCore: "/assets/emma_dna/images/emma_dna_dual_core.png",
      strand: "/assets/emma_dna/images/emma_dna_strand.png",
      seal: "/assets/emma_dna/images/emma_dna_seal.png",
    },
    videos: {
      commandSymphony: "/assets/emma_dna/videos/emma_dna_command_symphony.mp4",
    },
    team: {
      megaEric: "/assets/core/team/MEGA-ERIC.mp4",
      megaEmma: "/assets/core/team/MEGA-EMMA.mp4",
      megaEricAvatar: "/assets/core/team/mega_eric_official.png",
      megaEmmaAvatar: "/assets/core/team/mega_emma_official.png",
    },
  },

  pillars: {
    academy: "/assets/ai/images/pillars/ahk_academy_pillar.mp4",
    boutique: "/assets/ai/images/pillars/ahk_boutique_pillar.mp4",
    hub: "/assets/ai/images/pillars/ahk_hub_pillar.mp4",
    launchpad: "/assets/ai/images/pillars/ahk_launchpad_pillar.mp4",
    projects: "/assets/ai/images/pillars/ahk_projects_pillar.mp4",
    studio: "/assets/ai/images/pillars/ahk_studio_pillar.mp4",
  },

  brand: {
    logo: "/assets/core/logo/ahk_hex_logo.png",
  },
} as const;

export const withBust = (path: string) => {
  if (typeof window === "undefined") return path;
  const v = (globalThis as any).__NEXT_DATA__?.buildId ?? "dev";
  return `${path}?v=${encodeURIComponent(v)}`;
};
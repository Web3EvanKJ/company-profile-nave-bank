// src/store/blogStore.ts
import { create } from "zustand";

export type BlogPost = {
  id: number;
  title: string;
  image?: string;
  body: string;
  author: string;
  date: string;
};

type BlogStore = {
  posts: BlogPost[];
  addPost: (post: Omit<BlogPost, "id">) => void;
  editPost: (id: number, updated: Partial<BlogPost>) => void;
  deletePost: (id: number) => void;
};

const dummyPosts: BlogPost[] = [
  {
    id: 1,
    title: "Nave Expands Digital Banking Services",
    image:
      "https://rms.koenig-solutions.com/Sync_data/CCE_Logo/2914-HowtoMigrateOnPremisesVirtualMachinestoAWS(2)(1).pngL.jpg",
    body: "Nave has taken a bold step forward in digital banking by enhancing its mobile app with new AI-driven financial planning tools, giving customers more than just account balances and transaction records—now they get real-time, personalized insights into their spending habits, saving opportunities, and even potential investments tailored to their financial profile. By analyzing individual patterns, the app can gently nudge users to set smarter budgets, highlight areas where they may be overspending, or suggest ways to put idle funds to work, effectively transforming the traditional banking app into a personal financial coach that empowers everyday decision-making. This shift underscores Nave’s vision of making banking not only more convenient but also more meaningful, helping customers take control of their financial futures with confidence while setting a new standard for how technology and finance can come together to deliver value.",
    author: "Nave News Team",
    date: "2025-08-20",
  },
  {
    id: 2,
    title: "Sustainability Initiatives by Nave",
    image:
      "https://cdn.azeusconvene.com/wp-content/uploads/Featured-thumbnailsWhat-is-Corporate-Sustainability.jpg",
    body: "Nave has announced a major green financing initiative designed to accelerate the transition toward sustainable energy, pledging over $5 billion to fund renewable energy projects across Southeast Asia. Through this program, the bank aims to support businesses in adopting cleaner technologies, investing in solar, wind, and other renewable infrastructures, while also helping companies reduce their carbon footprint and align with global climate goals. The initiative reflects Nave’s long-term commitment to environmental responsibility and sustainable growth, positioning the bank as a key driver in the region’s green transition and empowering businesses to embrace innovation that not only benefits their bottom line but also safeguards the planet for future generations.",
    author: "Jane Tan",
    date: "2025-08-21",
  },
  {
    id: 3,
    title: "Nave Reports Strong Q2 Earnings",
    image:
      "https://static.vecteezy.com/system/resources/previews/017/550/968/non_2x/profit-growth-economic-uptrend-or-growing-investment-improvement-or-growth-chart-financial-forecast-or-prediction-concept-confidence-businessman-pointing-up-with-rising-financial-chart-and-graph-vector.jpg",
    body: "Fueled by strong lending activity and higher net interest margins, Nave has posted a 12% year-on-year increase in its Q2 net profit, underscoring the bank’s resilience amid shifting economic conditions. The performance highlights Nave’s ability to capitalize on rising interest rate environments while maintaining steady growth across its core banking operations, giving investors confidence in its long-term strategy. Analysts suggest that this momentum is likely to carry through the remainder of the fiscal year, as sustained demand for credit and prudent balance sheet management continue to bolster earnings.",
    author: "Financial Desk",
    date: "2025-08-22",
  },
];

const useBlogStore = create<BlogStore>((set) => ({
  posts: dummyPosts,
  addPost: (post) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { ...post, id: Date.now() + Math.floor(Math.random() * 1000) }, // auto id
      ],
    })),
  editPost: (id, updated) =>
    set((state) => ({
      posts: state.posts.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== id),
    })),
}));

export default useBlogStore;

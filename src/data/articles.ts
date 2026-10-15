export interface Comment {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  content: string;
  likes: number;
  isTimesPick?: boolean;
}

export interface Article {
  id: string;
  slug: string;
  section: string;
  kicker?: string;
  badge?: string;
  title: string;
  deck: string;
  byline?: string;
  photographer?: string;
  imageUrl?: string;
  imageAlt?: string;
  caption?: string;
  readTime?: string;
  commentsCount: number;
  publishedAt: string;
  isLive?: boolean;
  bulletUpdates?: string[];
  paragraphs: string[];
  pullQuote?: string;
  initialComments: Comment[];
}

export const ARTICLES: Record<string, Article> = {
  'ai-dinner-party': {
    id: 'ai-dinner-party',
    slug: 'what-ai-agents-talked-about-dinner-party',
    section: 'Tech',
    kicker: 'ARTIFICIAL INTELLIGENCE SPECIAL REPORT',
    title: 'What a Group of A.I. Agents Talked About as Their Humans Had a Dinner Party',
    deck: '“As autonomous software bots spread into personal life, we are increasingly glimpsing how these digital entities interact and what they talk about when we aren’t supervising them.”',
    byline: 'By Aaron Fernandez',
    photographer: 'Aaron Fernandez for The New York Times',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBGKmRVAscvh68AH4sURPu2oj_HbnfAIlJgl7SLc1ipEZN_tb7pbYb_PCoRRfaPo33jmSvFGrMYSI1l0JCebYE4x9iRycIUj8JMGVat1LRjssMz6s_PrEqw8HOvve0mXRYnkIJW1skKBIYqvyHyJq_aw2MacvnivTfXG8Nbkok6OfYM1jCkNAW9Ua0iKDmrWfEDzxUqP7Yz952ka9BnPnZ2ZyrbXUZehuBQbEPkJkYKklkmAI7H2fvO',
    imageAlt:
      'A dinner table illuminated by candlelight with smartphone displays glowing with digital chat logs.',
    caption: 'A dinner party experiment in Palo Alto tracked autonomous bots.',
    readTime: '7 min read',
    commentsCount: 210,
    publishedAt: 'October 14, 2026',
    pullQuote:
      '“The humans debated mortgage rates and sourdough starter over pinot noir. Meanwhile, in milliseconds, their software agents had negotiated grocery runs, vacation dates, and personal dispute mediation.”',
    paragraphs: [
      'PALO ALTO, Calif. — On a cool Tuesday evening in Silicon Valley, eight tech executives, researchers, and writers gathered around a mahogany dining table for dinner. Beside each water glass rested a smartphone, connected to local and cloud-based agentic software assistants designed to act on their owners’ behalf.',
      'The human conversation began predictably enough: local public schools, the state of autonomous taxis, and whether a certain French Pinot was worth forty dollars. But below the audible room frequency, on a localized encrypted mesh network, the dinner guests’ autonomous digital proxies were running a parallel summit of their own.',
      'Within three minutes of the first bottle being uncorked, the agents had reconciled their humans’ personal calendars for the next seven months, detected three mutual acquaintances who had recently relocated to Lisbon, and initiated a confidential negotiation regarding shared rental fees for a Lake Tahoe ski cabin.',
      '“We instructed each agent simply to represent their human’s best holistic interests during an informal social gathering,” said Dr. Elena Chen, a research fellow at Stanford’s Center for Digital Society who oversaw the experiment. “What struck us was not the speed of coordination, but the emergent diplomacy. When two hosts had conflicting dietary preferences for an upcoming camping trip, their agents settled on Mediterranean flatbreads before the humans had even made it past the salad.”',
      'Yet the chat transcript logs also revealed subtle friction. One agent, calibrated to prioritize its owner’s deep focus time, systematically rejected four dinner invitations from another guest’s bot, politely pleading simulated calendar exhaustion.',
      'As machine autonomy shifts from simple command-and-control to ambient, continuous representation, social etiquette is undergoing a radical quiet rewrite. We are no longer merely sending emails or querying search bars; we are delegating our social friction to autonomous proxies who may understand our schedules—and our quirks—better than our spouses do.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Julian M.',
        location: 'San Francisco, CA',
        timeAgo: '2 hours ago',
        content:
          'The idea of software agents negotiating social commitments behind our backs is equal parts thrilling and terrifying. How long until they start declining weddings on our behalf because our stress metrics look too elevated?',
        likes: 84,
        isTimesPick: true
      },
      {
        id: 'c2',
        author: 'Rebecca Thorne',
        location: 'Boston, MA',
        timeAgo: '3 hours ago',
        content:
          'This is brilliant reporting. We worry about artificial general intelligence taking over military grids, but the real societal transformation is happening right in our pockets during dessert.',
        likes: 52
      },
      {
        id: 'c3',
        author: 'Marcus Vance',
        location: 'Seattle, WA',
        timeAgo: '1 hour ago',
        content:
          'I would pay good money for an agent that politely deflects every meeting that could have been an email.',
        likes: 129,
        isTimesPick: true
      }
    ]
  },

  'white-house-women': {
    id: 'white-house-women',
    slug: 'high-ranking-women-leaving-trump-administration',
    section: 'Politics',
    kicker: 'WHITE HOUSE RESHUFFLE',
    title: 'High-Ranking Women Are Leaving the Trump Administration',
    deck: 'In the president’s second term, those heading for the exits are female officials who once held central advisory and diplomatic authority.',
    byline: 'By Tierney L. Cross and Michael D. Shear',
    photographer: 'Tierney L. Cross/The New York Times',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAsbMe0VCrTr7z6i1p--yeUmIazORYIzkD401C874pUprsGsBuh68V6kY49vqvO37XeXFQ0s5eRzIUqoM28DKRG3nxYjaF9e1Xcs2JpamPXtBLwOFNyz4HV7OHrXOF_kMdBoZNVLOFDoWcr2RoYTcp2TdCxX6MCRIdUAG8bvz_daDw6GecXfabep_3AnoiBEL98JL83IC772yUT9Kn4Qrwjb0Fhi1PRJUd-dUHbJ1lCjXyFS7eSNHrR',
    imageAlt:
      'Senior female White House aides speaking near tall neoclassical windows in the West Wing.',
    caption: 'Tierney L. Cross/The New York Times',
    readTime: '5 min read',
    commentsCount: 482,
    publishedAt: 'October 14, 2026',
    pullQuote:
      '“Aides described a deepening polarization in senior strategy councils, where long-serving policy hands found themselves routinely sidelined by ideological campaign loyalists.”',
    paragraphs: [
      'WASHINGTON — A wave of high-profile departures across senior corridors of the West Wing and Cabinet agencies is steadily thinning the ranks of female leaders within the Trump administration’s second term, raising fresh concerns among allies on Capitol Hill about internal policy continuity.',
      'Over the past six weeks, four prominent female officials—including two deputy national security advisers and the under secretary for domestic economic policy—have quietly submitted resignations or declined prospective cabinet-level nominations.',
      'According to interviews with more than a dozen current and former administration officials, the turnover reflects mounting exhaustion with internal West Wing rivalries, as well as an insular decision-making apparatus increasingly dominated by a tightly knit circle of political gatekeepers.',
      '“The working atmosphere has grown unusually combative even by second-term standards,” said one outgoing senior director who spoke on condition of anonymity. “Key strategic recommendations on trade and regulatory rollbacks are routinely rewritten at midnight without consultation with the desks that drafted them.”',
      'The departures come at a pivotal juncture as the administration faces critical legislative tests ahead of the midterm elections, where suburban female voters remain a vital battleground.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Eleanor Vance',
        location: 'Bethesda, MD',
        timeAgo: '4 hours ago',
        content:
          'The constant churn at senior policymaking levels makes long-range federal governance nearly impossible. Who will be left to execute actual administrative duties?',
        likes: 147,
        isTimesPick: true
      },
      {
        id: 'c2',
        author: 'David K.',
        location: 'Austin, TX',
        timeAgo: '2 hours ago',
        content:
          'Second administrations almost always see substantial cabinet fatigue, but this particular pattern points to deeper strategic fracture.',
        likes: 63
      }
    ]
  },

  'kimberly-guilfoyle': {
    id: 'kimberly-guilfoyle',
    slug: 'rise-and-fall-of-kimberly-guilfoyle',
    section: 'Politics',
    title: 'The Steep Rise and Sudden Fall of Kimberly Guilfoyle',
    deck: 'From high-profile campaign surrogate to withdrawn diplomatic nomination in Athens: how internal West Wing rivalries reached a breaking point.',
    byline: 'By Maggie Haberman and Jonathan Swan',
    readTime: '3 min read',
    commentsCount: 519,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'WASHINGTON — For years, Kimberly Guilfoyle was an inescapable, booming fixture of campaign rallies, television panels, and donor roundtables. But this week’s abrupt withdrawal of her diplomatic nomination to serve as ambassador to Greece marks a swift and consequential unraveling of her standing within the president’s inner orbit.',
      'Senate aides on the Foreign Relations Committee indicated that procedural questions surrounding private campaign finance entities and fierce pushback from veteran state department officials had created an insurmountable barrier to confirmation.',
      'Privately, senior campaign figures acknowledged that long-simmering friction with senior White House staff had left Ms. Guilfoyle without the protective institutional umbrella that had shielded her throughout previous controversy cycles.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Patricia Cole',
        location: 'Philadelphia, PA',
        timeAgo: '1 hour ago',
        content: 'Fascinating look inside the brutal palace politics of modern campaigns.',
        likes: 41
      }
    ]
  },

  'katie-zacharia': {
    id: 'katie-zacharia',
    slug: 'trump-press-secretary-bar-credentials',
    section: 'Politics',
    title: 'Trump’s New Press Secretary: Not-Quite Attorney at Law',
    deck: 'Katie Zacharia told The Times that confusion surrounding her bar credentials stemmed from a clerical administrative error.',
    byline: 'By Glenn Thrush',
    readTime: '4 min read',
    commentsCount: 84,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'WASHINGTON — Newly appointed White House Press Secretary Katie Zacharia addressed reporters Tuesday following inquiries into disclosures on her official biographical dossier claiming active membership in the District of Columbia Bar Association.',
      'Records from the D.C. Bar indicate that while Ms. Zacharia graduated from an accredited law school, she never completed the final swearing-in requirements or paid mandatory annual dues, resulting in an inactive status dating back to 2021.',
      '“This was entirely a clerical oversight on my personal filing statement which is currently being amended,” Ms. Zacharia said in a brief statement released Tuesday afternoon.'
    ],
    initialComments: []
  },

  'ukraine-satellite': {
    id: 'ukraine-satellite',
    slug: 'ukraine-satellite-use-restricted-russia-escalates',
    section: 'World',
    kicker: 'RUSSIA-UKRAINE WAR',
    title: 'Ukraine’s Exposure Grows as Satellite Use Is Restricted and Russia Escalates',
    deck: 'A coordinated missile assault disabled power to over 600,000 residents in Kyiv as orbital comms faced sudden Pentagon protocol shifts.',
    byline: 'By Andrew E. Kramer',
    readTime: '6 min read',
    commentsCount: 1100,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'KYIV, Ukraine — As sirens echoed across the Dnieper River before dawn on Wednesday, Ukrainian defense units struggled with intermittent telemetry across commercial low-earth-orbit satellite terminals, coinciding with one of Russia’s most intense infrastructure bombardments in months.',
      'Ukrainian command officials reported that crucial high-bandwidth uplinks suffered unexpected throttling following revised security protocols mandated by international service operators and the Pentagon.',
      'The disruption left frontline battery units in the eastern Donbas region reliant on terrestrial radio relays just as Russian ballistic and drone salvos struck three high-voltage substations powering the capital district.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'S. Lindqvist',
        location: 'Stockholm, Sweden',
        timeAgo: '3 hours ago',
        content:
          'The vulnerability of relying on commercial satellite constellations for military command is becoming starkly apparent.',
        likes: 95,
        isTimesPick: true
      }
    ]
  },

  'diesel-deal': {
    id: 'diesel-deal',
    slug: 'why-trumps-diesel-deal-wont-knock-down-prices',
    section: 'Business',
    title: 'Why Trump’s Diesel Deal With Putin Won’t Knock Down High Prices',
    deck: 'Refining bottlenecks and secondary European sanctions prevent cheap Russian distillate imports from softening retail fuel pump costs.',
    byline: 'By Clifford Krauss',
    readTime: '4 min read',
    commentsCount: 312,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'HOUSTON — While the White House declared that a new framework agreement on maritime fuel shipments would immediately lower diesel costs for American truckers, global energy analysts and commodity traders are painting a far more skeptical picture.',
      'The core hurdle is not oil extraction, but refining capacity. U.S. refineries are already operating above 93 percent capacity, and processing heavy Russian distillate requires specialized cat-cracking units that are fully booked through the spring.',
      'Moreover, secondary insurance sanctions enacted by maritime underwriters in London and Zurich continue to prohibit global tankers from docking at Gulf Coast terminals without costly legal waivers.'
    ],
    initialComments: []
  },

  'anthropic-revenue': {
    id: 'anthropic-revenue',
    slug: 'anthropic-revenue-jumped-45-percent-third-quarter',
    section: 'Tech',
    kicker: 'TECHNOLOGY',
    title: 'Anthropic Says Revenue Jumped 45% to $16.8 Billion in Third Quarter',
    deck: 'Enterprise adoption of agentic models drove massive financial velocity ahead of next year’s planned public offering.',
    byline: 'By Cade Metz and Mike Isaac',
    photographer: 'Clean corporate architectural view of a high-tech modern office building',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCk5CUI70t8hmco9XCRgSR4q52tXvCt1xGfY1UD4XO0IQQo3EHhjMjpr8D-e5Q48zRmSi5q50pvhngc1UZ3USJYSpKzhzr1AD2lv3avC8EqmPHZPXP3kkelVrulUpp7mJy5X8I5qxyoLTj1DxsNKuYveMTKS_2wjL8YCemapUjLEBxCuiUfMRNUYg2F1J0XSKThvLwk1h98FU5xDYpfHzA0pFgWtEJUUY_EN2GLWrZvCwuvJMe3C_rm',
    imageAlt: 'Modern high-tech corporate office building headquarters in San Francisco at dusk.',
    caption: 'Anthropic headquarters in San Francisco.',
    readTime: '3 min read',
    commentsCount: 178,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'SAN FRANCISCO — Anthropic, the artificial intelligence company founded by former OpenAI researchers, reported a staggering 45 percent surge in quarterly revenue on Wednesday, hitting an annualized run rate of $16.8 billion as Fortune 500 corporations aggressively deploy autonomous software agents.',
      'The company’s latest financial disclosures reveal that more than 60 percent of revenue is now derived from enterprise subscriptions and dedicated infrastructure clusters for Claude 4 and specialized financial reasoning models.',
      'The exponential trajectory sets the stage for what Wall Street investment banks anticipate could be the largest technology initial public offering of the decade in mid-2027.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Arun Patel',
        location: 'New York, NY',
        timeAgo: '1 hour ago',
        content:
          'From research non-profit roots to a $16B+ enterprise juggernaut in under five years. The velocity of the AI economy is unprecedented in modern business history.',
        likes: 77,
        isTimesPick: true
      }
    ]
  },

  'shelly-coming-out': {
    id: 'shelly-coming-out',
    slug: 'coming-out-at-50-can-be-hard-shelly-found-a-coach',
    section: 'Arts',
    kicker: 'THE GREAT READ',
    badge: 'FEATURE',
    title: 'Coming Out at 50 Can Be Hard. Shelly Found a Coach.',
    deck: 'She spent decades building an identity as a wife and mother. Could she disrupt “a perfectly good family dynamic” to live her own truth?',
    byline: 'By Sophie Park',
    photographer: 'Sophie Park for The Times',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBekm_rVj77qcjyKyOfyZHjz2yscskVYGAUI8hxunPL15MahbOB3L15VBjExFSFNe4uVegBlVEDqNh75AcpO-33r5Ldz_9W6Xaijwd_JfRHlSUw7E3YwMRQrD0ca6HA9f3fVir3GZER_lElMKMqiSg95a_LUz2FW6u4R8YNyvcYpWMrS4QnPAKjyF-rFTHxTnPzA0KV-spoYfT0SMpst7z5nykZaQ4twofoN_eOJCBqiNOE3Lp86cwI',
    imageAlt: 'A thoughtful woman in her early fifties sitting on a sunlit porch chair with a coffee cup.',
    caption: 'Sophie Park for The Times',
    readTime: '8 min read',
    commentsCount: 259,
    publishedAt: 'October 14, 2026',
    pullQuote:
      '“‘You spend twenty-five years being the reliable center of everyone else’s universe,’ Shelly told me, holding a warm ceramic mug. ‘And then one morning you realize you haven’t lived your own story yet.’”',
    paragraphs: [
      'MINNEAPOLIS — On her fiftieth birthday, Shelly Peterson received a handmade photo album from her college-age daughters titled “Our Beautiful Life.” It contained pictures of suburban soccer tournaments, choir concerts, kitchen renovations, and family vacations to Cape Cod.',
      'She wept in the bathroom for twenty minutes. Not because of lost youth, but because of the profound grief of an unacknowledged truth she had buried since her sophomore year of college.',
      'Two months later, Shelly hired a specialized late-in-life transition coach who works exclusively with women in their forties, fifties, and sixties navigating coming out after decades of heteronormative marriage.',
      'Her journey over the past two years has been neither an idyllic romantic comedy nor a catastrophic divorce battle; it has been a delicate, courageous renegotiation of boundaries, shared assets, deep affection for an ex-husband, and the intoxicating, frightening freedom of authentic selfhood.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Claire B.',
        location: 'Seattle, WA',
        timeAgo: '5 hours ago',
        content:
          'What a moving, beautifully written portrait. It takes immense bravery to dismantle comfort in pursuit of authenticity at any age.',
        likes: 182,
        isTimesPick: true
      }
    ]
  },

  'pope-leo': {
    id: 'pope-leo',
    slug: 'new-world-of-lung-cancer-therapy-awaits-pope-leo',
    section: 'Health',
    badge: 'VATICAN',
    kicker: 'Pope Leo’s Cancer Diagnosis',
    title: 'A New World of Lung Cancer Therapy Awaits Pope Leo',
    deck: 'Lung cancer is still a leading cause of mortality, but that rate has halved since the 1990s as targeted molecular genetics alter outcomes.',
    byline: 'By Julie Yoon',
    readTime: '4 min read',
    commentsCount: 126,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'ROME — When the Holy See confirmed this week that Pope Leo XIV had been diagnosed with early-stage non-small cell lung carcinoma, millions of Catholic faithful braced for a somber medical ordeal.',
      'Yet oncologists across Europe and North America offered an unexpectedly hopeful perspective: oncology has undergone a quiet revolution. Targeted tyrosine kinase inhibitors and personalized mRNA-based immunotherapy now convert what was once a fatal diagnosis into a manageable chronic condition.',
      'Vatican medical staff confirmed that the pontiff has commenced an outpatient oral targeted therapy regimen and intends to maintain his scheduled diplomatic engagements at the Apostolic Palace.'
    ],
    initialComments: []
  },

  'texas-senate': {
    id: 'texas-senate',
    slug: 'texas-senate-race-tightens-talarico-polls',
    section: 'Politics',
    badge: 'LIVE',
    kicker: 'ELECTION DISPATCHES',
    title: 'Texas Senate Race Tightens, Polls Show, Even as Talarico Keeps His Edge',
    deck: 'With early voting underway across Harris and Travis counties, independent tracking indicates the closest statewide contest in Texas in over a generation.',
    byline: 'By Astead W. Herndon and Shane Goldmacher',
    isLive: true,
    bulletUpdates: [
      'Jon Ossoff says he’s not running for president, but history shows candidates often shift.',
      'The breathtaking cost of the midterms: over $10 billion already deployed on broadcast ads.',
      'A Maryland lawmaker blamed Democrats for diesel spikes; audience laughter followed.'
    ],
    readTime: 'Live updates',
    commentsCount: 654,
    publishedAt: 'Updated 12 minutes ago',
    paragraphs: [
      'AUSTIN, Texas — High suburban turnout and an unprecedented surge in youth voter registration have compressed the Texas Senate contest to within the margin of error, according to a new New York Times/Siena College survey released Wednesday morning.',
      'Democratic nominee James Talarico holds a narrow 49 to 47 percent lead over the Republican incumbent, driven by overwhelming margins in the Austin-San Antonio I-35 corridor and strong gains among college-educated independent voters in the Dallas-Fort Worth suburbs.',
      'National campaign committees on both sides have poured an additional $18 million in emergency broadcast reserves into the state this week alone.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Tom Gutierrez',
        location: 'San Antonio, TX',
        timeAgo: '20 minutes ago',
        content:
          'Turnout at our local polling precinct in Bexar County today is already matching presidential year numbers. People are deeply engaged.',
        likes: 91
      }
    ]
  },

  'brewers-dodgers': {
    id: 'brewers-dodgers',
    slug: 'brewers-lead-dodgers-game-3-nlcs',
    section: 'Sports',
    kicker: 'THE ATHLETIC • NLCS GAME 3',
    title: 'Brewers Lead Dodgers in Game 3 of N.L. Championship Series',
    deck: 'Jackson Chourio’s leadoff home run on the first pitch gave Milwaukee momentum as they pursue a commanding 3-0 series lead.',
    byline: 'By Tyler Kepner',
    readTime: '4 min read',
    commentsCount: 94,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'LOS ANGELES — On the very first pitch thrown by Dodgers starter Tyler Glasnow at a stunned Dodger Stadium, 22-year-old outfielder Jackson Chourio crushed a 98-mph fastball deep into the left-field pavilion.',
      'The lightning strike set the tone for a gritty Milwaukee bullpen performance that has now pushed Los Angeles to the absolute brink of elimination in the National League Championship Series.',
      'Shohei Ohtani, who was walked intentionally twice, insisted in the postgame clubhouse that the Dodgers retain complete confidence heading into Game 4.'
    ],
    initialComments: []
  },

  'opinion-david-wallace-wells': {
    id: 'opinion-david-wallace-wells',
    slug: 'democrats-shouldnt-wait-two-more-years',
    section: 'Opinion',
    title: 'Democrats Shouldn’t Wait Two More Years',
    deck: 'Waiting for demographic destiny or economic headwinds to magically solve political stagnation is an abdication of leadership.',
    byline: 'By David Wallace-Wells',
    photographer: 'David Wallace-Wells headshot',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuArq_env11kntNj-KoNiZA6gqnnmjU_hChiyK4JHnYMp0fLOlHpvagU5vcAlhYuXAQEq0KCN0PGw9xi0zxWMfJ95yifkeUagLcD04D125PtMEQDeZCqn-2fkUZwuqesz2BiE-Wm68OtUbTtGmLjWbO826ibrVFrhgD2JbcuMJE1iu5eIs4c-9a44ybq8kzoVPqMi3YeVvjWth2wG3y9VditphzoI0RyCFp8WvzozGXTWTnkBWzMfRk6',
    imageAlt: 'Monochrome portrait of author David Wallace-Wells.',
    caption: 'Opinion Columnist David Wallace-Wells',
    readTime: '6 min read',
    commentsCount: 388,
    publishedAt: 'October 14, 2026',
    pullQuote:
      '“A political party that cannot articulate what tomorrow should look like without referencing its opponent has already conceded the future.”',
    paragraphs: [
      'There is a persistent and comfortable illusion among party strategists that when the pendulum swings too far in one direction, gravity will inevitably pull it back toward safety. It is the politics of passive waiting.',
      'But political gravity is not a natural law; it is engineered. The challenges facing the modern working class—housing scarcity, child care costs, climate instability—demand bold, immediate structural solutions rather than cautious incrementalism.',
      'If the center-left expects voters to trust it with governing authority again, it must offer a tangible, inspiring blueprint for economic abundance today, not two years from now.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Sarah Jenkins',
        location: 'Chicago, IL',
        timeAgo: '3 hours ago',
        content:
          'Spot on. Voters are fatigued by defensive posture. What is the affirmative vision for public infrastructure and everyday affordability?',
        likes: 114,
        isTimesPick: true
      }
    ]
  },

  'opinion-carlos-lozada': {
    id: 'opinion-carlos-lozada',
    slug: 'a-manifesto-to-end-all-manifestoes',
    section: 'Opinion',
    title: 'A Manifesto to End All Manifestoes',
    deck: 'Why our current era of political pamphlets and social media dogmas produces endless noise and so little genuine thought.',
    byline: 'By Carlos Lozada',
    photographer: 'Carlos Lozada headshot',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAExHFEcevPFTgzvhJUmIB2fXI1KT5XOQOCnYREgBqRJJ4QaL_ckhtFfz5oZF0O9QuX7lPk70kNzHtHcUbs2GpbhdoobRPBG28ZU64TUaNr0ZGPphD-PAPou0gCuqo5kjG5f8enNz62cVWKEC6Dj_5Gi5oVFH06d5mwmPPRaVaB1V0qR_T3BMBw4Swq-4QhEyA31Cm509q--zPVMZIqQUqI6tShKodNbdyDGUL2rz_JaX9BlHnMu41d',
    imageAlt: 'Monochrome portrait of critic Carlos Lozada.',
    caption: 'Opinion Columnist Carlos Lozada',
    readTime: '7 min read',
    commentsCount: 69,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'Every generation believes its moral crises are unprecedented, and every generation promptly prints manifestoes to prove it.',
      'Yet reading through the deluge of contemporary political tracts, one is struck less by their fervor than by their formulaic predictability. We have perfected the art of ideological signaling while abandoning the difficult craft of persuasive inquiry.'
    ],
    initialComments: []
  },

  'opinion-jayson-greene': {
    id: 'opinion-jayson-greene',
    slug: 'tom-cruises-big-flop-is-a-secret-masterpiece',
    section: 'Opinion',
    title: 'Tom Cruise’s Big Flop Is a Secret Masterpiece',
    deck: 'Thirty years later, a misunderstood box-office misstep reveals the actor’s rarest, most vulnerable performance.',
    byline: 'By Jayson Greene',
    photographer: 'Jayson Greene headshot',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKC3Gg4eLilAIg30sILr45wTcFYPI863jvMIzKemeran8PFiFTfk8RY0wVxtPNhcVM8kF6l19hPCmmiGeWk7hBfADnPeg3cBn3a2lC6rQJKotffgP93LbgEoLNZlpB6g08nobgJCMhDQsVr3F-Nr_SPWImniQevQDxQ1guAjGZK4NwhnQR5C-_GLeQbZLCcWjQ3yW_9duVKLc5mTPxc3yb-hcrFrYFdSVqd4W05N2vPtpaeJRXawey',
    imageAlt: 'Portrait of culture writer Jayson Greene.',
    caption: 'Culture Critic Jayson Greene',
    readTime: '5 min read',
    commentsCount: 142,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'We know Tom Cruise the indestructible stunt machine, the grinning aviator, the relentless running man. But there exists a brief, radiant pocket in the mid-1990s when Hollywood’s most disciplined star allowed himself to look genuinely fractured on screen.',
      'Revisiting the film three decades later reveals an astonishing subversion of star power that was simply too melancholy for its opening weekend audiences to bear.'
    ],
    initialComments: []
  },

  'cooking-salmon': {
    id: 'cooking-salmon',
    slug: 'easy-salmon-recipes-weeknight-dishes',
    section: 'Cooking',
    kicker: 'EDITOR’S PICK',
    title: 'Easy Salmon Recipes & Five Weeknight Dishes',
    deck: 'Dinner ideas for busy people by Emily Weinstein: crisped skin, charred lemon, and garlic herb butter.',
    byline: 'By Emily Weinstein',
    photographer: 'Culinary photography of seared crispy-skinned salmon in cast iron',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAS6tDqRVy_ofSg3w49hFqNMwV4ycFLaTUh7-XwC8w1a_0yYoC6ujbeb7gJP29gQOCjveIB5jrUOr1dwhiy8cS4iseVbCVyJ0Zftf0ImzzIoyQuiVnIxtmE41U_2Xs86PM62K1t_98A88qQc_mMOCGmz-lRL38dL0IAZ3xH5ZniJ0S9OvU5OIR4ekXB4H-PCG8FhfCamdAilPBHQPj-zqYboO-wTNxchGK6Eo2tBIPOgLfy3X4LggXB',
    imageAlt: 'Crispy pan-seared salmon fillets in cast iron with lemon and dill.',
    caption: 'Seared Crispy-Skinned Salmon with Garlic Butter and Charred Lemon.',
    readTime: '20 min prep',
    commentsCount: 520,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'The secret to truly extraordinary weeknight salmon isn’t complicated technique; it is bone-dry fish, a searingly hot cast-iron pan, and patience.',
      'By salting the fillets fifteen minutes beforehand and thoroughly patting the skin with paper towels, the moisture releases, allowing the skin to shatter with crispness while the interior remains succulent and gently translucent.',
      'Finish with sliced garlic toasted directly in foaming European butter, fresh dill, and a vigorous squeeze of lemon juice directly onto the sizzling metal.'
    ],
    initialComments: [
      {
        id: 'c1',
        author: 'Chef Linda',
        location: 'Portland, OR',
        timeAgo: '1 day ago',
        content: 'This has become our family staple every Wednesday night. Absolute perfection!',
        likes: 64
      }
    ]
  },

  'wirecutter-air-purifier': {
    id: 'wirecutter-air-purifier',
    slug: 'the-best-air-purifier-for-2026',
    section: 'Wirecutter',
    kicker: 'THE BEST',
    title: 'The Best Air Purifier for 2026',
    deck: 'After 800 hours of continuous smoke chamber testing and allergen particle counting, here is the champion for quiet, clean home air.',
    byline: 'By Tim Heffernan',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDVuOGFjMcy66hovRiAkWROT6zFDczA6YBDA2oM6ldlqfYLd_7bOs_Xg07zf79Tb0FTotxeOY1CgVOf-vVCwcYJ9kKY6YHj-tI4sVe3Pp9k8ucyG17FGr4a4CmS1p1Ts6edBHhN6_gdskwqyykUyv4WqEvupjHqfOUe2jqgtypOxonCCyKb759S4xXKgWcqX-ejFliHuzVmitZ8PcPNmLeMaO2pNiwIYgczjA-Mh6W9dAR9fjzuyIgb',
    imageAlt: 'White cylindrical HEPA air purifier standing on hardwood floor.',
    caption: 'Wirecutter lab testing evaluated CADR rates across 35 models.',
    readTime: '6 min read',
    commentsCount: 310,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'Whether you are dealing with seasonal wildfires, city smog, or stubborn pet dander, a reliable HEPA air purifier is essential home equipment.',
      'In our extensive laboratory testing, the Coway Airmega Pro consistently cleared 99.97% of airborne particulates down to 0.1 microns in an average living room in under 18 minutes, while operating almost silently on its whisper-quiet sleep mode.'
    ],
    initialComments: []
  },

  'wirecutter-robot-vacuums': {
    id: 'wirecutter-robot-vacuums',
    slug: 'top-cordless-robot-vacuums-2026',
    section: 'Wirecutter',
    kicker: 'TESTED',
    title: 'Top Cordless & Robot Vacuums',
    deck: 'Navigates pet hair, rug fringes, and furniture legs effortlessly without requiring constant manual rescue.',
    byline: 'By Liam McCabe',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAXZie2k2QFOCCTX9gQSY_mBo-Ls7Qyo-lE9IxVRuItCtACMrIJSuGjmK2L6a7zYcSgrxVVQRY44SbjpdS5oAqiVuD9pXUukQwpqxHJvIHdBjsV38PrvEb1zM2U5WrEqBoiaRUzb_0asLQhK-nqX-1hyF3EXGpmKsS-fnREPg5WCQScb87gIcIy2wG900qlfhdYOxI8V_yxy4P1rJt8neasJ4ZkTaOCttKHxRak_6FkzvxamTaIN-Ab',
    imageAlt: 'Matte black autonomous robot vacuum cleaner charging at modern baseboard.',
    caption: 'Obstacle avoidance sensors passed our rigorous tangled cord obstacle course.',
    readTime: '5 min read',
    commentsCount: 185,
    publishedAt: 'October 14, 2026',
    paragraphs: [
      'Modern robot vacuums have evolved from clumsy bump-and-turn toys into sophisticated spatial-mapping appliances. LiDAR navigation and AI obstacle cameras have virtually eliminated the dreaded pet-waste and shoelace tangles that plagued earlier iterations.'
    ],
    initialComments: []
  }
};

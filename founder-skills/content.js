(() => {
  const S = {
    sbaMarket: ["SBA market research and competitive analysis", "https://www.sba.gov/business-guide/plan-your-business/market-research-competitive-analysis"],
    ftcAds: ["FTC advertising and marketing guidance", "https://www.ftc.gov/business-guidance/advertising-marketing"],
    ftcReviews: ["FTC review solicitation guidance", "https://www.ftc.gov/business-guidance/resources/soliciting-paying-online-reviews-guide-marketers"],
    searchStarter: ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"],
    searchEssentials: ["Google Search Essentials", "https://developers.google.com/search/docs/essentials"],
    helpful: ["Helpful, reliable, people-first content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"],
    aiFeatures: ["AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    cwv: ["Core Web Vitals", "https://developers.google.com/search/docs/appearance/core-web-vitals"],
    localBusiness: ["LocalBusiness structured data", "https://developers.google.com/search/docs/appearance/structured-data/local-business"],
    gbpGuidelines: ["Business Profile representation guidelines", "https://support.google.com/business/answer/3038177?hl=en"],
    gbpRanking: ["Improve local ranking on Google", "https://support.google.com/business/answer/7091?hl=en"],
    gbpReviews: ["Get more Google reviews", "https://support.google.com/business/answer/3474122?hl=en"],
    gbpServices: ["Manage Business Profile services", "https://support.google.com/business/answer/9455399?hl=en"],
    lsaStart: ["Local Services Ads getting started", "https://support.google.com/localservices/answer/6224841?hl=en"],
    lsaRank: ["Local Services Ads rankings", "https://support.google.com/localservices/answer/7527305?hl=en"],
    lsaLeads: ["How Local Services Ads leads work", "https://support.google.com/localservices/answer/7195435?hl=en"],
    adsBest: ["Google Ads best practices", "https://support.google.com/google-ads/answer/6154846?hl=en"],
    adsStructure: ["Google Ads account structure best practices", "https://support.google.com/google-ads/answer/14752782"],
    adsMatch: ["Keyword matching options", "https://support.google.com/google-ads/answer/7478529?hl=en"],
    adsNegatives: ["Negative keywords", "https://support.google.com/google-ads/answer/2453972?hl=en"],
    adsQuality: ["Quality Score", "https://support.google.com/google-ads/answer/6167118?hl=en"],
    adsLanding: ["Ads and landing pages", "https://support.google.com/google-ads/answer/6238826?hl=en"],
    adsSmart: ["Smart Bidding", "https://support.google.com/google-ads/answer/7065882?hl=en"],
    adsConversions: ["Primary and secondary conversions", "https://support.google.com/google-ads/answer/11461796?hl=en"],
    enhancedLeads: ["Enhanced conversions for leads", "https://support.google.com/google-ads/answer/14274408?hl=en"],
    ga4Recommended: ["GA4 recommended events", "https://support.google.com/analytics/answer/9267735?hl=en"],
    ga4Key: ["GA4 key events", "https://support.google.com/analytics/answer/13128484?hl=en"],
    ga4Attribution: ["GA4 attribution overview", "https://support.google.com/analytics/answer/10596866?hl=en"],
    dataLayer: ["Google Tag Manager data layer", "https://developers.google.com/tag-platform/tag-manager/datalayer"],
    consent: ["Google consent mode", "https://developers.google.com/tag-platform/security/guides/consent"],
    wcag: ["WCAG 2.2", "https://www.w3.org/TR/WCAG22/"],
    forms: ["W3C accessible forms tutorial", "https://www.w3.org/WAI/tutorials/forms/"]
  };

  const o = (score, text) => ({ score, text });
  const q = (prompt, best, acceptable, weak, dangerous, explanation) => ({
    type: "choice",
    prompt,
    options: [o(5, best), o(3, acceptable), o(1, weak), o(0, dangerous)],
    explanation
  });
  const w = (prompt, rubric) => ({ type: "written", prompt, rubric });
  const lesson = (title, body, bullets) => ({ title, body, bullets });
  const module = (id, title, purpose, objectives, lessons, fieldwork, proof, sources, questions) => ({
    id, title, purpose, objectives, lessons, fieldwork, proof, sources,
    questions: questions.map((question, index) => ({ ...question, id: `${id}-${index + 1}` }))
  });

  window.MASTERY_CONFIG = {
    storageKey: "osideFounderSkillsMastery.v1",
    heroEyebrow: "Oside Digital · Founder operating system",
    heroTitle: "Master the founder skills required to sell and deliver search-ownership growth for roofing clients.",
    heroLede: "Learn positioning, market research, search ownership, GBP, websites, PPC, LSA, CRO, attribution, sales, pricing, ethics, and client-ready operating judgment.",
    foundationNote: "Primary-source foundation reviewed June 27, 2026. If you are starting from scratch, begin with Module 1; the baseline diagnostic is optional.",
    modulesSummary: "Founder strategy, roofing-market judgment, Google Search, GBP, LSA, PPC, GA4, CRO, ethics, and client delivery translated into practical decisions.",
    labsSummary: "Offer design, market mapping, search audit, rank-grid diagnosis, economics, measurement, proposal practice, and roofing capstone.",
    reportEyebrow: "Founder Skills Mastery report",
    reportTitle: "Oside Founder Skills Mastery Report",
    reportFilename: "oside-founder-skills-mastery",
    sourceReminder: "Recheck current Google Search, Business Profile, Local Services Ads, Google Ads, GA4, Tag Platform, FTC, accessibility, and privacy guidance before advising a live client.",
    resetPrompt: "Clear all Founder Skills learning, lab, and diagnostic progress?",
    integrationPractice: "Complete a search-ownership audit, local-rank diagnosis, economics model, measurement plan, and one proposal role-play.",
    readinessGroups: [
      { key: "sell-first", title: "Ready to sell the first audit?", ids: ["identity-offer", "market-research", "search-ownership", "sales-delivery"] },
      { key: "diagnose", title: "Ready to diagnose roofing search ownership?", ids: ["search-ownership", "local-gbp", "website-seo-aeo", "cro-leads", "paid-acquisition", "measurement"] },
      { key: "advise", title: "Ready to advise and retain clients?", ids: ["sales-delivery", "pricing-scope", "risk-ethics", "measurement", "capstone"] }
    ],
    labs: [
      {
        id: "offer-icp",
        title: "Founder offer and ICP brief",
        description: "Define the first wedge so Oside is sellable, deliverable, and honest.",
        task: "Write the ideal roofing client profile, painful trigger events, excluded clients, first paid offer, deliverables, inputs, timeline, success criteria, guarantees avoided, risks, proof requirements, and minimum viable fulfillment checklist.",
        proof: "A skeptical roofer can tell who the offer is for, what they get, what they do not get, and why the scope is safe."
      },
      {
        id: "market-map",
        title: "Roofing market and competitor map",
        description: "Turn a local roofing market into a prioritized founder opportunity map.",
        task: "Pick one city or service area. Map priority services, search intents, visible competitors, GBP patterns, review strengths, website weaknesses, paid surfaces, LSA presence, directories, seasonality, and three testable entry points.",
        proof: "Your recommendations separate observed evidence, inference, uncertainty, and next validation step."
      },
      {
        id: "search-ownership-audit",
        title: "Search ownership audit workflow",
        description: "Create the repeatable audit you can sell to customer #1.",
        task: "Build the audit sequence: discovery questions, access list, SERP screenshots, local-rank grid, GBP review, website/SEO/AEO review, paid/LSA review, measurement review, competitor comparison, priorities, client walkthrough, and next-step recommendation.",
        proof: "Another consultant could follow the workflow and produce a consistent client-ready audit."
      },
      {
        id: "rank-grid",
        title: "Roofing local-rank diagnostic",
        description: "Measure local visibility without confusing ranking with revenue.",
        task: "Enter 25 ranks from left-to-right, top-to-bottom; use 21 for not found beyond rank 20. Interpret average, median, top-3 share, top-10 share, and not-found share beside relevance, distance, prominence, service fit, website alignment, competitors, and qualified demand.",
        proof: "The diagnosis states what is known, what is likely, what is uncertain, and which action would be tested first.",
        calculator: "rank"
      },
      {
        id: "economics",
        title: "Founder acquisition economics",
        description: "Know whether a lead channel or service promise can make financial sense.",
        task: "Model allowable acquisition cost, qualified-lead rate, close rate, average job value, gross profit, capacity, response rate, sales leakage, churn/retention, and founder delivery time. Use the calculator to derive a raw-lead cost ceiling.",
        proof: "You can explain why a channel is investable, too risky, or only testable in a narrow scope.",
        calculator: "economics"
      },
      {
        id: "measurement-plan",
        title: "Measurement and CRM operating spec",
        description: "Design the minimum system that connects marketing work to qualified roofing opportunities.",
        task: "Specify calls, forms, source fields, UTMs, click IDs, GA4 events/key events, Ads conversions, CRM stages, qualified definitions, deduplication, values, consent, dashboards, QA tests, ownership, cadence, and known attribution limits.",
        proof: "Every reported number has a source of truth, owner, validation method, and caveat."
      },
      {
        id: "sales-proposal",
        title: "Discovery, proposal, and scope role-play",
        description: "Practice selling the right work without overpromising.",
        task: "Write a discovery call script, qualification rubric, audit pitch, objection handling notes, proposal outline, scope boundaries, price rationale, kickoff checklist, and 'not yet' criteria. Record or rehearse a five-minute walkthrough.",
        proof: "You can earn trust by being specific, calm, and willing to decline unsafe work."
      },
      {
        id: "capstone",
        title: "Roofing founder capstone",
        description: "Integrate the complete Founder Skills operating system.",
        task: "Choose a roofing client scenario and produce the full package: ICP fit, market map, search ownership audit, GBP/local-rank diagnosis, website/SEO/AEO plan, paid/LSA economics, landing-page/CRO plan, measurement spec, sales recommendation, proposal scope, risks, 30-day plan, and client walkthrough.",
        proof: "The capstone is useful without a follow-on sale, honest about uncertainty, and specific enough to guide customer #1."
      }
    ]
  };

  window.MASTERY_MODULES = [
    module(
      "identity-offer",
      "1. Founder positioning, niche, and offer design",
      "Turn Oside from a broad idea into a narrow, credible first offer for roofing and home-services clients.",
      ["Define a sharp ideal customer", "Separate promise from process", "Design a first offer you can deliver alone"],
      [
        lesson("The first wedge", "A founder wins early by narrowing the audience, trigger, problem, and deliverable until the offer is easy to understand and safe to fulfill.", ["Narrow does not mean small forever.", "The first wedge should create learning and proof.", "Avoid selling every marketing service at once."]),
        lesson("Offer promise versus operating system", "The promise is the client-facing outcome; the operating system is how you diagnose, prioritize, implement, measure, and communicate.", ["Do not promise rankings, leads, or revenue you do not control.", "Promise useful evidence, disciplined action, and transparent recommendations.", "A scoped audit can be valuable without forcing a retainer."]),
        lesson("Founder constraints", "Time, expertise, proof, access, and delivery capacity should shape the first product.", ["A solo founder needs a repeatable checklist.", "Low trust requires stronger evidence and lower-risk entry points.", "A clear 'not for' list protects reputation."]),
        lesson("Roofing context", "Roofing clients often care about replacement demand, storm seasonality, emergency repairs, insurance sensitivity, reviews, crews, service areas, and speed to lead.", ["The offer should reflect job economics.", "The wrong lead type can be operationally expensive.", "A founder must learn the client’s business, not only the platforms."])
      ],
      ["Write a one-page ICP and anti-ICP.", "Define the first paid audit deliverable.", "Draft a promise you can defend without guaranteed outcomes."],
      "You can explain what Oside sells, to whom, why now, and what it deliberately refuses.",
      [S.sbaMarket, S.ftcAds],
      [
        q("A founder says Oside helps 'any local business get more leads.' What is the best critique?", "It is too broad to sell, diagnose, price, or prove; narrow the customer, trigger, problem, and deliverable.", "It can work as a long-term vision but not as the first wedge.", "It only needs a better logo.", "Broad positioning is safer because it excludes no one.", "Early offers need sharpness so the founder can learn quickly and earn trust."),
        q("Which first offer is safest for customer #1?", "A scoped search-ownership audit with evidence, priorities, risks, and optional next steps.", "A narrow diagnostic that creates immediate clarity.", "A guarantee of top-three map rankings in 30 days.", "A full-service growth retainer with no defined boundaries.", "A first offer should be useful, bounded, and honest about uncertainty."),
        q("What should the founder promise?", "A rigorous diagnosis, clear priorities, and responsible execution recommendations.", "A repeatable process and transparent decision logic.", "Guaranteed qualified roofing jobs.", "Whatever closes the sale fastest.", "The founder controls process quality, not every market outcome."),
        q("Which client is a poor initial fit?", "A roofer with unclear service areas, no response process, and demands for guaranteed leads.", "A roofer who wants evidence before committing to a retainer.", "A roofer with imperfect tracking but willingness to fix it.", "A roofer with seasonal demand.", "Unsafe clients magnify founder risk and make results uninterpretable."),
        q("Why define an anti-ICP?", "It prevents the founder from accepting work that cannot be delivered responsibly.", "It clarifies sales, scope, and referrals.", "It makes the market smaller forever.", "It is only a branding exercise.", "A good anti-ICP protects delivery quality and reputation."),
        q("A roofer asks, 'Can you just run my ads?' Best founder response?", "Diagnose economics, tracking, landing experience, service fit, and sales handling before recommending ad spend.", "Offer a paid audit or narrow test if prerequisites are met.", "Say yes and launch broad match tomorrow.", "Promise ads will reveal everything automatically.", "Paid traffic can expose or worsen operational problems."),
        q("What proves an offer is ready to sell?", "A specific audience, painful problem, deliverable, inputs, timeline, proof standard, price logic, and refusal criteria.", "A clear page and call script tied to delivery capacity.", "A catchy name.", "A list of all marketing services.", "Sellability and deliverability are both required."),
        q("Which phrase is most credible?", "We will show where your roofing search demand is being won, lost, and mismeasured.", "We will map and prioritize your search opportunities.", "We will dominate Google for you.", "We will double leads in 14 days.", "Credible language names evidence and avoids outcomes outside the founder’s control."),
        w("Write Oside’s first-offer brief for a roofing client.", "Include ICP, anti-ICP, trigger, problem, deliverables, inputs, timeline, success criteria, price logic, client responsibilities, risks, exclusions, and next-step options."),
        w("Draft a sales explanation of Oside’s search-ownership audit in under 150 words.", "Score clarity, specificity, roofing relevance, honest limitations, business value, plain language, and absence of ranking or revenue guarantees.")
      ]
    ),

    module(
      "market-research",
      "2. Roofing and home-services market research",
      "Learn how to study a roofing market before prescribing tactics.",
      ["Map local demand and competitors", "Distinguish facts from assumptions", "Turn research into a testable opportunity thesis"],
      [
        lesson("Research inputs", "Use customer conversations, sales notes, reviews, SERPs, GBP profiles, websites, ads, LSA units, directories, seasonality, and service economics.", ["No single tool tells the whole story.", "Live SERP observation matters.", "Client operations shape marketing opportunity."]),
        lesson("Intent classification", "Replacement, repair, storm damage, emergency, commercial, inspection, maintenance, material, insurance, and cost queries imply different pages and lead handling.", ["Intent affects value and urgency.", "Keyword volume can hide low fit.", "Ambiguous intent requires careful qualification."]),
        lesson("Competitor reality", "Competitors differ by proximity, prominence, reviews, site quality, offer, paid investment, brand awareness, and operational strength.", ["Do not reduce competitors to rankings.", "Screenshots preserve evidence.", "Patterns matter more than one query."]),
        lesson("Opportunity thesis", "Good research ends with a prioritized hypothesis, not a pile of observations.", ["State the expected lever and why.", "Name uncertainty.", "Define the smallest responsible test."])
      ],
      ["Classify 100 local roofing queries.", "Map ten competitors across GBP, organic, LSA, and PPC.", "Write three opportunity hypotheses with evidence."],
      "You can explain a roofing market using evidence, not vibes.",
      [S.sbaMarket, S.gbpRanking, S.searchStarter],
      [
        q("What is the weakest research method?", "Relying on one keyword-volume export without SERP, competitor, client, or operational context.", "Starting with a tool but validating with live evidence.", "Interviewing the owner about margins and capacity.", "Reviewing competitor GBP and websites.", "Founder decisions should combine demand, competition, and business fit."),
        q("A keyword has high volume but low close rate. Best interpretation?", "Volume alone is not value; inspect intent, qualification, offer fit, and sales handling.", "It may need separate messaging or exclusion.", "More volume always solves it.", "The keyword should automatically be the homepage target.", "Demand must be filtered through economics and operations."),
        q("Which evidence best supports a replacement-focused opportunity?", "SERPs show replacement-specific pages, strong commercial intent, local competitors, and the client has margin and capacity.", "Search demand, business fit, and competitive gap align.", "The owner prefers replacements.", "A blog post ranks for shingles.", "Opportunity needs both market signal and business readiness."),
        q("Why screenshot SERPs during research?", "Search results vary by location, time, device, and personalization; screenshots preserve the observed evidence.", "They support transparent client communication.", "Screenshots are a ranking factor.", "They replace measurement.", "Research artifacts prevent vague or shifting claims."),
        q("A competitor dominates maps but has a weak site. What should you infer?", "GBP prominence may be strong while website opportunity still exists; inspect reviews, proximity, links, content, and conversion.", "There may be a multi-surface gap.", "The weak site does not matter.", "The client can ignore maps.", "Different surfaces have different constraints and opportunities."),
        q("What is the best use of reviews in market research?", "Identify customer language, decision criteria, pain, proof needs, and operational promises.", "Use them to understand the market’s trust vocabulary.", "Copy competitor testimonials.", "Assume every review is accurate.", "Reviews reveal language and expectations but require ethical handling."),
        q("How should a founder treat uncertain data?", "Name the uncertainty, define what would change the decision, and propose a small validation step.", "Proceed with a caveat and measurement plan.", "Hide uncertainty to look confident.", "Wait for perfect certainty.", "Trust grows when uncertainty is handled clearly."),
        q("Which research output is most useful?", "A prioritized opportunity map linking demand, competition, client economics, constraints, and next tests.", "A concise thesis with evidence.", "A giant spreadsheet of unprioritized keywords.", "A vanity score with no decision.", "Research should improve decisions."),
        w("Create a local roofing market research plan for Oceanside roof replacement.", "Include data sources, query set, competitor set, GBP review, website review, paid/LSA scan, customer language, economics, assumptions, screenshots, and opportunity ranking."),
        w("Write a three-part opportunity thesis from imperfect market evidence.", "Include observed evidence, interpretation, uncertainty, risks, smallest test, and what would make you change direction.")
      ]
    ),

    module(
      "search-ownership",
      "3. Search ownership strategy across Google surfaces",
      "Understand search ownership as a multi-surface system spanning maps, organic, paid, LSA, websites, reviews, and AI-assisted discovery.",
      ["Map the search journey", "Choose channel roles", "Avoid platform tunnel vision"],
      [
        lesson("Search surfaces", "A roofing prospect may encounter LSA, Search Ads, Local Pack, GBP, organic pages, AI Overviews, directories, videos, reviews, and brand results.", ["No surface is permanent or fully controllable.", "Different surfaces need different evidence.", "A founder should map the whole journey."]),
        lesson("Ownership means coverage and quality", "Search ownership is not one ranking; it is the degree to which a business is visible, credible, useful, measurable, and chosen for important demand.", ["Rank is one signal.", "Customer choice happens after visibility.", "Measurement quality affects every recommendation."]),
        lesson("Channel roles", "GBP and local organic build trust and discovery; LSA and PPC can capture high-intent demand; landing pages convert; measurement tells the truth imperfectly.", ["Channels should cooperate, not contradict.", "Paid can test messages faster.", "Organic and GBP create durable assets."]),
        lesson("AI search reality", "AI features may summarize or cite web sources, but consultants should optimize for useful, crawlable, trustworthy content rather than promise AI inclusion.", ["There is no magic AI Overview tag.", "Human usefulness remains the anchor.", "Source clarity helps both people and systems."])
      ],
      ["Draw the full search journey for roof replacement.", "Assign each surface a job.", "Write a channel-priority recommendation for a constrained client."],
      "You can diagnose search opportunity without mistaking one surface for the whole market.",
      [S.searchEssentials, S.aiFeatures, S.gbpRanking, S.lsaStart, S.adsBest],
      [
        q("What is 'search ownership' in Oside’s context?", "Owning more of the important discovery, trust, conversion, and measurement journey for profitable searches.", "A multi-surface operating lens.", "Ranking first for one keyword.", "Buying every ad slot.", "Search ownership is broader than a single position."),
        q("A client ranks organically but loses map visibility. Best diagnosis posture?", "Treat organic and local visibility as related but distinct; inspect GBP relevance, distance, prominence, reviews, website signals, and proximity.", "Map the surface-specific constraints.", "Assume the website is broken.", "Ignore maps because organic ranks.", "Local results have their own ranking context."),
        q("Why should paid and organic messages align?", "A customer’s trust compounds when ad, GBP, landing page, website, and reviews make compatible promises.", "Message consistency improves interpretation and conversion.", "Google requires identical wording everywhere.", "It lets you avoid tracking.", "A fractured journey loses trust and makes data hard to interpret."),
        q("Which recommendation is strongest for a new roofer with no reviews?", "Fix proof, GBP basics, response, and a narrow website/landing-page foundation before heavy paid scaling.", "Run a small test only if economics and trust gaps are acknowledged.", "Spend aggressively because paid bypasses trust.", "Ignore reviews until later.", "Paid visibility cannot fully compensate for weak trust."),
        q("What is the danger of 'AI Overview optimization' as a standalone promise?", "Inclusion is controlled by search systems; focus on useful, crawlable, evidence-rich source content without guarantees.", "It may be part of broader SEO/AEO work.", "It guarantees citations if enough schema is added.", "It replaces GBP and ads.", "Consultants do not control AI feature selection."),
        q("What does a channel role document prevent?", "Tactics competing for the same vague goal or sending conflicting signals to customers.", "It clarifies where each channel fits.", "It eliminates the need for reporting.", "It guarantees cheaper acquisition.", "Defined roles reduce waste and confusion."),
        q("A client wants only LSA because it is 'top of Google.' Best answer?", "LSA can be valuable, but maps, organic, website proof, reviews, brand, and measurement still influence demand capture and sales.", "Position LSA as one surface in the system.", "Agree and stop all other work.", "Claim LSA is guaranteed top placement.", "No single surface equals full ownership."),
        q("Which search-ownership metric is most meaningful?", "Qualified opportunities and booked jobs by important demand segment, with visibility and conversion context.", "Business outcomes connected to channel diagnostics.", "Total impressions.", "A single average rank.", "Search ownership should connect visibility to commercial outcomes."),
        w("Map the search-ownership system for 'roof replacement near me'.", "Include surfaces, customer intent, proof needs, channel roles, landing/website path, measurement, likely leaks, and first diagnostic steps."),
        w("Explain AI Overviews and LLM discovery to a roofer without hype.", "Score accuracy, plain language, useful content emphasis, uncertainty, no guarantee, and connection to broader SEO/source-readiness work.")
      ]
    ),

    module(
      "local-gbp",
      "4. Google Business Profile, local SEO, reviews, and map-pack judgment",
      "Build the founder judgment required to diagnose and improve local visibility responsibly.",
      ["Use local ranking factors correctly", "Audit GBP completeness and compliance", "Build ethical review and proof systems"],
      [
        lesson("Local ranking frame", "Google describes local ranking around relevance, distance, and prominence.", ["A founder cannot change user distance.", "Relevance starts with truthful business information.", "Prominence includes broad signals such as reviews and web presence."]),
        lesson("Profile integrity", "Name, category, address/service area, hours, services, photos, links, and eligibility must represent the real business.", ["Do not create fake locations.", "Do not stuff names.", "Access and ownership matter."]),
        lesson("Reviews as operations", "Reviews reflect customer experience, solicitation process, response, service quality, and trust.", ["Ask ethically.", "Do not gate or pay for fake sentiment.", "Responses are public proof of professionalism."]),
        lesson("Local-to-website continuity", "GBP promises should match service pages, landing pages, tracking, and call handling.", ["Mismatch lowers trust.", "Service and location pages should support real offerings.", "Local rank grids require context."])
      ],
      ["Audit a roofing GBP for compliance and opportunity.", "Design an ethical review request workflow.", "Interpret a 5×5 map rank grid."],
      "You can improve local visibility without risking profile suspension or misleading a client.",
      [S.gbpGuidelines, S.gbpRanking, S.gbpServices, S.gbpReviews],
      [
        q("Which local ranking factors does Google publicly emphasize?", "Relevance, distance, and prominence.", "The main local ranking frame.", "Keyword density, domain age, and ad spend.", "Only review count.", "Use the official frame without oversimplifying it."),
        q("A roofer wants to add 'best roof replacement near me' to the business name. Best response?", "Do not stuff the name; the profile name should reflect the real-world business name.", "Explain compliance and risk.", "Add it during storm season only.", "Add every target city too.", "Profile representation must be truthful and guideline-compliant."),
        q("A service-area roofer wants a fake office for maps. What should you do?", "Refuse and explain eligibility, suspension, trust, and long-term risk.", "Offer safer alternatives using real service areas and proof.", "Create the listing if competitors do it.", "Use a coworking address secretly.", "Fake locations are a serious policy and trust risk."),
        q("What is the best review growth strategy?", "Make review requests part of a real customer workflow, ask all appropriate customers, and avoid incentives or gating.", "Use ethical timing and clear instructions.", "Only ask happy customers after screening sentiment.", "Buy starter reviews.", "Reviews must reflect real experiences and compliant solicitation."),
        q("Rank grid shows strong center rankings and weak edges. Best interpretation?", "Proximity and local prominence may be limiting outer coverage; inspect competitors, service relevance, and business value before expanding effort.", "Distance pattern matters.", "The website is definitely penalized.", "The city pages must be duplicated immediately.", "Spatial patterns need cautious interpretation."),
        q("What should GBP services do?", "Truthfully describe services customers can actually buy and the business can fulfill.", "Support relevance and customer understanding.", "List every keyword variation.", "Include services the business hopes to offer someday.", "Services should represent real offerings."),
        q("Why connect GBP to website pages?", "Customers and search systems need consistent evidence of services, locations, proof, and next steps.", "Continuity improves trust and conversion.", "GBP cannot rank without a website.", "Every GBP service needs 50 pages.", "Continuity matters; one-to-one page inflation does not."),
        q("When should you delay GBP optimization?", "Ownership, eligibility, address, name, category, or suspension risk is unresolved.", "Fix prerequisites first.", "When the profile has fewer than 100 reviews.", "Never; change everything immediately.", "Unsafe edits can create verification or suspension problems."),
        w("Audit a roofing GBP for a service-area business.", "Cover eligibility, ownership/access, name, categories, services, service areas, hours, links, photos, reviews, posts, performance, policy risks, website continuity, and priority actions."),
        w("Interpret a 5×5 local rank grid for 'roof repair near me'.", "Include pattern, likely causes, relevance/distance/prominence, competitors, uncertainty, lead value, recommended tests, and what not to conclude.")
      ]
    ),

    module(
      "website-seo-aeo",
      "5. Roofing website SEO, AEO, and content judgment",
      "Learn how to evaluate a roofing website as a search, trust, conversion, and source-readiness asset.",
      ["Plan useful page architecture", "Apply SEO and AEO fundamentals", "Spot technical and content risks"],
      [
        lesson("Website job", "A roofing website should help the right prospect understand fit, trust the business, and take a measurable next step.", ["Traffic is not the goal.", "Pages need distinct jobs.", "Proof and clarity matter."]),
        lesson("Helpful content", "Useful content answers real questions with experience, evidence, caveats, and next steps.", ["Avoid thin city/service pages.", "Do not mass-produce generic AI copy.", "Write for homeowners first."]),
        lesson("Technical foundations", "Crawlability, indexability, mobile experience, performance, internal links, titles, snippets, schema, and accessibility support discovery and usability.", ["Technical SEO cannot fix a bad offer.", "Crawlable links matter.", "Measure representative templates."]),
        lesson("AEO/source readiness", "Direct answers, entity clarity, first-hand proof, citations, structured data alignment, and updated pages can make content easier for people and systems to use.", ["No guaranteed AI citations.", "Schema must match visible content.", "Human usefulness is the standard."])
      ],
      ["Audit a roofing site’s top ten pages.", "Create a source-ready roof replacement page outline.", "Find technical launch blockers."],
      "You can distinguish real website opportunity from cosmetic redesign advice.",
      [S.searchStarter, S.helpful, S.aiFeatures, S.localBusiness, S.cwv, S.wcag],
      [
        q("What makes a roofing page worth creating?", "Distinct customer intent, real service capability, useful content, proof, and a measurable next step.", "A page should help users and support business goals.", "A keyword variation exists.", "A competitor has a page.", "Pages need purpose beyond keyword matching."),
        q("Which website issue is most urgent?", "Priority pages are accidentally noindexed or inaccessible to crawlers and users.", "A technical blocker that hides valuable pages.", "The homepage hero color feels boring.", "The blog has fewer posts than a competitor.", "Discovery and lead-path blockers come before cosmetics."),
        q("What is weak about mass city pages with swapped names?", "They may be thin, duplicative, and unhelpful if they lack local substance and real service evidence.", "They create maintenance and trust risk.", "They are too short by default.", "Google requires thousands of them.", "Scaled low-value pages can harm quality and trust."),
        q("What is the safest AEO strategy?", "Create clear, useful, evidence-rich pages that answer real questions and can be crawled, understood, and trusted.", "Improve source readiness within normal SEO/content work.", "Add hidden LLM instructions.", "Promise AI Overview citations.", "AEO should not become manipulative or guarantee-based."),
        q("What should structured data do?", "Reflect visible, truthful page content and help systems understand entities and page information.", "Support clarity when eligible and accurate.", "Replace content quality.", "Invent reviews or prices.", "Structured data must match reality."),
        q("Core Web Vitals are best treated as what?", "User-experience metrics for loading, responsiveness, and visual stability, interpreted with field and lab context.", "A performance signal and usability diagnostic.", "The only SEO factor.", "A guaranteed ranking switch.", "Performance matters, but it is one part of the system."),
        q("Which roof replacement content is strongest?", "Explains process, materials, cost factors, timing, local conditions, proof, risks, financing, and next steps without fake guarantees.", "Answers buying questions with specific evidence.", "Repeats 'roof replacement city' every paragraph.", "Avoids all cost discussion.", "Useful decision support earns trust."),
        q("A client wants an AI-written blog library this week. Best response?", "Prioritize high-value questions, add first-hand evidence, review for accuracy, and publish only content that helps real customers.", "Use AI cautiously as a workflow aid.", "Publish everything to increase index count.", "Hide AI text from users.", "Quality and accuracy matter more than volume."),
        w("Create a roofing website audit checklist for a first client.", "Cover strategy, architecture, technical SEO, mobile, performance, content, proof, local alignment, AEO/source readiness, accessibility, tracking, and prioritized fixes."),
        w("Outline a source-ready 'roof replacement cost' page.", "Include direct answer, variables, examples, caveats, local context, evidence, author/reviewer, citations, schema alignment, internal links, CTA, and no unsupported claims.")
      ]
    ),

    module(
      "cro-leads",
      "6. Landing pages, conversion, and lead-quality systems",
      "Understand conversion as a business-quality system, not just a page layout.",
      ["Diagnose conversion constraints", "Design lead paths", "Protect lead quality"],
      [
        lesson("Conversion economics", "A conversion rate is only useful when connected to qualified opportunities, close rate, job value, gross profit, and capacity.", ["Cheap leads can be bad.", "Low volume can still be profitable.", "Response speed affects outcomes."]),
        lesson("Message match", "The page should continue the promise made by ads, GBP, organic snippets, or referrals.", ["Confirm service and geography quickly.", "Use proof that matches the claim.", "Do not bait and switch."]),
        lesson("Friction and trust", "Forms, phone paths, tap targets, load speed, accessibility, objections, reviews, and process clarity shape whether prospects act.", ["Friction can also qualify.", "Mobile matters heavily.", "Every form failure is invisible revenue loss."]),
        lesson("Lead quality loop", "Marketing should learn from CRM dispositions, call outcomes, booked jobs, and revenue—not just raw submissions.", ["Define qualified lead.", "Record source and campaign.", "Feed quality back into budgets and pages."])
      ],
      ["Critique a roofing landing page.", "Design a form/call QA checklist.", "Model lead quality economics."],
      "You can improve conversion without optimizing toward junk leads.",
      [S.adsLanding, S.adsQuality, S.forms, S.cwv, S.wcag],
      [
        q("What is the biggest flaw in optimizing only for form conversion rate?", "It can increase unqualified leads while hiding close rate, job value, and sales leakage.", "It ignores downstream business quality.", "It always improves revenue.", "It replaces CRM reporting.", "Conversion must be tied to lead quality and revenue."),
        q("A paid landing page gets many calls but few inspections. First diagnosis?", "Audit query intent, message match, service fit, call handling, qualification, pricing expectations, and tracking before redesigning.", "Find where the funnel leaks.", "Change the button color.", "Assume Google sent fake traffic.", "Downstream quality requires full-funnel diagnosis."),
        q("What should a roofing landing-page hero do?", "Confirm service, geography, outcome, proof, and next step quickly.", "Orient the visitor and reduce uncertainty.", "Show a stock roof photo only.", "Include every service the company offers.", "The hero must continue intent and create confidence."),
        q("Which form is strongest?", "A short form that gathers enough information to respond usefully, works on mobile, handles errors, and sets expectations.", "A proportional form with a clear follow-up promise.", "A 20-field form for every visitor.", "A form with hidden required fields.", "Form friction should match commitment and operational need."),
        q("Why test click-to-call paths?", "Phone leads can silently fail through wrong numbers, tracking errors, mobile UI, after-hours routing, or missed notifications.", "Calls often drive high-value local service leads.", "Calls are automatically tracked perfectly.", "Forms are always better than calls.", "Operational QA is part of conversion work."),
        q("A page promises 'free roof replacement through insurance.' Best response?", "Remove or qualify the claim unless it is truthful, supportable, and not misleading for typical users.", "Use careful insurance language and evidence.", "Make it the main CTA.", "Every storm lead expects that promise.", "Advertising claims need support and context."),
        q("Which proof best improves conversion quality?", "Relevant local projects, authentic reviews, licenses/insurance, warranty/process details, and clear fit criteria.", "Proof that helps the right customer decide.", "Generic award badges only.", "Anonymous testimonials copied from competitors.", "Proof should be specific and truthful."),
        q("What should happen after a lead submits?", "Confirmation, source capture, CRM creation, owner notification, response SLA, and a clear next-step expectation.", "A measurable handoff into sales.", "A thank-you page with no tracking.", "Nothing until the owner checks email.", "Post-submit systems affect conversion value."),
        w("Critique a roof-replacement landing page that converts at 12% but closes poorly.", "Assess traffic mix, promise, service fit, qualification, proof, form/call path, response, CRM dispositions, pricing expectations, tracking, and recommended tests."),
        w("Write a mobile-first landing-page wireframe for emergency roof repair.", "Include message match, urgency without fear, trust, process, call path, form path, accessibility, tracking, after-hours handling, and qualification.")
      ]
    ),

    module(
      "paid-acquisition",
      "7. Google Ads, LSA, and paid acquisition economics",
      "Learn how to judge paid channels through economics, intent, automation, lead handling, and measurement quality.",
      ["Choose paid channel roles", "Model campaign economics", "Avoid automation and tracking traps"],
      [
        lesson("Paid is a testable system", "Google Ads and LSA can create demand-capture opportunities, but the business still controls offer, proof, response, sales, and fulfillment.", ["Clicks and leads are inputs.", "Smart bidding needs trustworthy goals.", "LSA profiles still need review strength and lead handling."]),
        lesson("Search Ads fundamentals", "Structure, match types, negatives, assets, landing pages, Quality Score components, budgets, and bidding all influence outcomes.", ["Broad matching needs guardrails.", "Landing pages affect user experience.", "Primary conversions should reflect real value."]),
        lesson("LSA fundamentals", "LSA is a local lead product for eligible providers with screening, profiles, leads, rankings, and operational requirements.", ["Paying for leads is not the same as buying jobs.", "Responsiveness matters.", "Eligibility varies."]),
        lesson("Economics before scale", "Allowable cost depends on qualified rate, close rate, gross profit, job mix, capacity, seasonality, and lifetime value where relevant.", ["Model before launching.", "Constrain tests when data is weak.", "Optimize to qualified and sold stages when possible."])
      ],
      ["Build a paid channel fit matrix.", "Calculate raw lead cost ceilings.", "Write a no-go checklist for paid scaling."],
      "You can say when paid acquisition is investable, testable, or irresponsible.",
      [S.adsBest, S.adsStructure, S.adsMatch, S.adsNegatives, S.adsSmart, S.adsConversions, S.lsaStart, S.lsaRank, S.lsaLeads],
      [
        q("What is the safest paid-channel promise?", "A disciplined test with clear goals, tracking, constraints, and learning—not guaranteed leads or jobs.", "A measurable operating system.", "Guaranteed CPL below competitors.", "Top placement whenever the client wants.", "Paid platforms still involve auctions, automation, competitors, and sales outcomes."),
        q("When is Smart Bidding risky?", "When conversion tracking is untrusted, goals are too shallow, volume is thin, or lead quality is not fed back.", "When inputs do not represent business value.", "Whenever automation exists.", "Only after the account spends over budget.", "Automation amplifies the goal you give it."),
        q("A roofing Search campaign spends on 'roofing jobs hiring.' What failed?", "Intent control: negatives, match/query review, and campaign structure did not prevent employment traffic.", "The query is mismatched to service leads.", "The landing page needs more images.", "The bid is too low.", "Query intent can destroy economics."),
        q("What makes LSA fit stronger?", "Eligible services, verification readiness, strong reviews/profile, viable economics, fast response, and clear service areas/job types.", "Operational readiness plus demand.", "A desire for instant jobs.", "No website.", "LSA still needs profile trust and operations."),
        q("Which conversion should usually be primary for bidding?", "A meaningful lead or qualified opportunity that approximates business value and can be validated.", "The deepest reliable conversion with enough volume.", "Every pageview.", "Any click on the page.", "Bidding should optimize toward value, not noise."),
        q("Why use negative keywords?", "To prevent irrelevant intent from consuming budget and distorting learning.", "To protect focus and economics.", "To block all long-tail searches.", "Because broad match never works.", "Negatives are part of intent governance."),
        q("A client asks to double budget after three good days. Best answer?", "Review volume, lag, query quality, conversion quality, seasonality, and learning before scaling deliberately.", "Scale only with guardrails.", "Double immediately because early data proves it.", "Pause SEO to fund ads.", "Short windows can mislead."),
        q("What is the most useful paid acquisition report?", "Spend to qualified opportunities, booked jobs, and profit by channel/query/market, with caveats and next decisions.", "A decision-focused report.", "Clicks and impressions only.", "Screenshots of green arrows.", "Paid reporting should guide action."),
        w("Build a paid acquisition go/no-go checklist for a roofing client.", "Include economics, service fit, eligibility, tracking, landing page, review/profile strength, call handling, CRM stages, budget, constraints, risk, and test design."),
        w("Explain why a low CPL campaign may still be bad.", "Discuss qualification, close rate, job value, margin, capacity, sales handling, attribution, spam, opportunity cost, and optimization target.")
      ]
    ),

    module(
      "measurement",
      "8. Analytics, call tracking, CRM, and attribution",
      "Design measurement that is useful enough to make founder decisions while honest about attribution limits.",
      ["Define business events", "Connect marketing to CRM stages", "Explain attribution uncertainty"],
      [
        lesson("Measurement ladder", "Track from impression/click to session, call/form, qualified lead, appointment, estimate, booked job, revenue, and gross profit.", ["Raw leads are not enough.", "CRM discipline matters.", "Attribution is imperfect."]),
        lesson("Events and key events", "GA4 recommended events, key events, Ads conversions, call tracking, data-layer events, and CRM IDs should be defined before reporting.", ["Use consistent names.", "Validate every trigger.", "Separate primary and secondary conversions."]),
        lesson("Attribution reality", "Attribution models assign credit; they do not reveal perfect causality.", ["Phone calls complicate tracking.", "Cross-device and privacy choices matter.", "Reports need caveats."]),
        lesson("Consent and governance", "Measurement systems need consent awareness, data minimization, access control, documentation, and handoff.", ["Do not make the agency the only owner.", "Document source of truth.", "QA after every change."])
      ],
      ["Write an event specification.", "QA a test lead from click to CRM.", "Build a source-of-truth table."],
      "You can make marketing numbers decision-useful without pretending they are perfect.",
      [S.ga4Recommended, S.ga4Key, S.ga4Attribution, S.dataLayer, S.consent, S.adsConversions, S.enhancedLeads],
      [
        q("What is the best definition of a qualified roofing lead?", "A lead meeting agreed service, geography, timing, contactability, and commercial-fit criteria.", "A business-defined stage that sales can validate.", "Any phone call over ten seconds.", "Any form submission.", "Qualification must reflect business reality."),
        q("Why connect CRM stages to marketing data?", "So spend and effort can be judged by qualified opportunities, estimates, booked jobs, and revenue—not raw leads alone.", "It closes the loop between acquisition and sales.", "It makes attribution perfect.", "It replaces sales follow-up.", "CRM feedback improves decisions."),
        q("What is a source of truth?", "The defined system and field trusted for a specific business fact, with owner and reconciliation rules.", "The authoritative record for a fact.", "Whichever dashboard looks best.", "Google Ads for every revenue number.", "Different facts may have different authoritative systems."),
        q("Why are call-tracking systems risky if unmanaged?", "They can break NAP consistency, misroute calls, lose source data, or create ownership/handoff issues.", "They require QA and documentation.", "They automatically improve rankings.", "They remove the need for CRM.", "Calls are valuable but operationally fragile."),
        q("A campaign has many conversions but sales says leads are bad. First move?", "Validate tracking, definitions, CRM disposition, query intent, duplicate/spam handling, and sales feedback before changing bids.", "Audit the measurement and quality loop.", "Ignore sales because platform data wins.", "Turn off all tracking.", "Conflicting signals require reconciliation."),
        q("What should be a key event?", "An action important enough to business outcomes and defined consistently enough to report and optimize.", "A meaningful conversion milestone.", "Every scroll.", "Every page view.", "Key events should represent value."),
        q("What is the right attribution expectation?", "Use attribution to inform decisions while explaining model limits, missing data, lag, and multi-touch behavior.", "Treat it as useful but incomplete.", "It perfectly identifies why every job closed.", "It is useless because imperfect.", "Mature reporting is neither blind trust nor cynicism."),
        q("What belongs in a measurement handoff?", "Access, event spec, tags, triggers, CRM fields, call setup, consent behavior, dashboards, QA evidence, owners, and caveats.", "A reproducible operating document.", "Only a GA4 screenshot.", "Agency-owned assets with no transfer path.", "Measurement continuity protects the client."),
        w("Design a minimum measurement plan for Oside’s first roofing audit.", "Include calls/forms, GA4 events, Ads/LSA conversion mapping, CRM stages, source fields, UTMs/click IDs, qualified criteria, values, consent, QA, dashboard, owner, cadence, and limitations."),
        w("Explain attribution limits to a roofing client in plain English.", "Cover multiple touchpoints, calls, privacy, cross-device behavior, lag, model assumptions, CRM truth, and how decisions will still be made.")
      ]
    ),

    module(
      "sales-delivery",
      "9. Sales discovery, audit delivery, and client communication",
      "Learn how to run a consultative sales and delivery process that earns trust before customer #1.",
      ["Ask diagnostic questions", "Present evidence clearly", "Handle objections without overpromising"],
      [
        lesson("Discovery is diagnosis", "A strong sales call uncovers business model, job mix, capacity, current channels, lead quality, sales handling, urgency, constraints, and decision process.", ["Do not prescribe before listening.", "Look for disqualifiers.", "Record exact language."]),
        lesson("Audit delivery", "A good audit is a narrative from evidence to decision: what is happening, why it matters, what is uncertain, what to do first, and what not to do.", ["Prioritize ruthlessly.", "Use screenshots and examples.", "Separate observation from inference."]),
        lesson("Client communication", "Founders need calm, plain-language explanations of technical topics.", ["Avoid jargon as status theater.", "Use business impact.", "State caveats confidently."]),
        lesson("Objection handling", "Objections often reveal risk, past vendor trauma, unclear value, weak proof, or bad fit.", ["Do not fight every objection.", "Reframe with evidence.", "Be willing to say 'not yet'."])
      ],
      ["Write a discovery script.", "Create a 10-slide audit walkthrough outline.", "Practice five hard objections."],
      "You can sell by diagnosing, not by performing certainty.",
      [S.ftcAds, S.gbpRanking, S.adsBest],
      [
        q("What is the best first sales-call posture?", "Diagnose business goals, constraints, lead economics, operations, and trust gaps before recommending tactics.", "Ask questions before prescribing.", "Pitch every service immediately.", "Show tool screenshots to prove expertise.", "Discovery should reveal whether help is safe and valuable."),
        q("A roofer says previous SEO 'did nothing.' Best response?", "Ask what was promised, measured, delivered, accessed, reported, and how leads/sales were tracked.", "Investigate the failure mode.", "Say all SEO vendors are bad.", "Promise your SEO will work instantly.", "Past disappointment needs diagnosis, not defensiveness."),
        q("What makes an audit client-ready?", "Evidence, prioritization, business impact, uncertainty, next steps, risks, and a clear walkthrough.", "A decision-oriented narrative.", "A 100-page export.", "A score without context.", "Useful audits support decisions."),
        q("How should you present a local-rank grid?", "Explain the query, location protocol, pattern, likely causes, limitations, business value, and next test.", "Use it as one diagnostic input.", "Claim it proves revenue loss exactly.", "Show only red cells to create fear.", "Rank grids need context and restraint."),
        q("A prospect asks for guaranteed results. Best answer?", "Explain what you can control, what the market controls, what will be measured, and when you would decline the work.", "Offer a scoped test and clear success criteria.", "Guarantee results to win trust.", "Avoid all discussion of uncertainty.", "Trustworthy sales names uncertainty."),
        q("Which objection is a possible disqualifier?", "The client refuses tracking, access, truthful claims, or operational fixes while demanding guaranteed outcomes.", "They ask for proof and process.", "They need budget clarity.", "They had a bad vendor before.", "Some objections reveal unsafe fit."),
        q("What belongs in the executive summary?", "The main opportunity, biggest leak, business impact, first action, required client decision, and caveats.", "What the owner needs to decide.", "Every technical detail.", "Only positive findings.", "Executives need clear decision context."),
        q("What is the strongest follow-up after an audit presentation?", "A written recap with priorities, responsibilities, assumptions, recommended scope, timeline, and decision options.", "A clear next-step document.", "A generic 'checking in' email.", "A surprise invoice.", "Follow-up should preserve clarity."),
        w("Write a discovery call script for a roofing search-ownership audit.", "Include rapport, business goals, job mix, service areas, capacity, economics, channels, tracking, response, past vendors, urgency, decision process, disqualifiers, and close."),
        w("Create an audit presentation outline for customer #1.", "Cover thesis, evidence, local visibility, website, paid/LSA, measurement, opportunities, risks, priorities, recommendations, scope options, and caveats.")
      ]
    ),

    module(
      "pricing-scope",
      "10. Pricing, proposals, scope control, and retention",
      "Build commercial judgment so Oside can survive delivery and earn long-term trust.",
      ["Price around value and risk", "Write clear scopes", "Design retainers only after diagnosis"],
      [
        lesson("Pricing logic", "Pricing should reflect client value, difficulty, risk, time, expertise, proof, and alternatives—not only hours.", ["Underpricing can cause rushed work.", "Overpromising creates refund pressure.", "A first audit may be priced to learn while still serious."]),
        lesson("Scope control", "Clear inclusions, exclusions, access needs, timeline, assumptions, revision limits, and change-order rules protect both sides.", ["Ambiguity becomes free work.", "Scope should match founder capacity.", "Dependencies must be visible."]),
        lesson("Proposal clarity", "A good proposal connects diagnosis to outcomes, deliverables, responsibilities, timeline, price, risks, and decision options.", ["Do not hide caveats.", "Make the first step easy to approve.", "Avoid service menus without diagnosis."]),
        lesson("Retention path", "Retainers should follow a useful diagnosis and have operating cadence, measures, responsibilities, and exit criteria.", ["Do not sell indefinite activity.", "Monthly work needs priority logic.", "Reporting should drive decisions."])
      ],
      ["Draft an audit proposal.", "Write scope boundaries and change-order rules.", "Design a post-audit retainer option."],
      "You can sell profitable work without creating delivery chaos.",
      [S.sbaMarket, S.ftcAds],
      [
        q("What is the biggest risk of a vague proposal?", "The client and founder will disagree about what is included, what success means, and what happens next.", "It creates scope and trust risk.", "It makes the document shorter.", "It always closes faster.", "Ambiguity becomes operational debt."),
        q("Which pricing model is safest for a first audit?", "A fixed-scope paid diagnostic with explicit deliverables, assumptions, timeline, and optional next-step recommendations.", "A bounded project price.", "A commission-only deal based on poorly tracked revenue.", "A huge retainer before diagnosis.", "Early work should be bounded and measurable."),
        q("What should exclusions do?", "Clarify what is not included so the client can make informed decisions and the founder can deliver well.", "Prevent misunderstanding.", "Hide important work.", "Make the offer sound smaller.", "Good exclusions increase trust."),
        q("When is a retainer justified?", "After diagnosis shows recurring work with clear priorities, owner responsibilities, measurement, cadence, and decision rules.", "When there is a real operating system.", "Before access is granted.", "Any time the client has budget.", "Retainers need a reason beyond recurring revenue."),
        q("A client wants unlimited revisions. Best response?", "Define review rounds, decision owner, change-order rules, and what counts as new scope.", "Protect quality and timelines.", "Agree because customer #1 matters.", "Refuse all feedback.", "Boundaries enable delivery."),
        q("What is a proposal assumption?", "A condition the scope depends on, such as access, data quality, client responsiveness, platform eligibility, or implementation authority.", "A stated dependency.", "A hidden excuse.", "A guarantee.", "Assumptions make risk visible."),
        q("Which scope is dangerous?", "Manage all marketing until leads improve, with no deliverables, access list, measurement standard, or boundaries.", "An open-ended outcome promise.", "Audit GBP, website, PPC, and measurement with clear output.", "Build a 30-day action roadmap.", "Open-ended promises create delivery and trust risk."),
        q("What should a monthly report support?", "Decisions about priorities, experiments, investment, risks, and responsibilities.", "Learning and action.", "Proof the founder was busy.", "A pile of metrics.", "Retention depends on decision usefulness."),
        w("Write a proposal structure for a $1,500 roofing search-ownership audit.", "Include problem, fit, deliverables, timeline, access, client responsibilities, exclusions, price, assumptions, success criteria, optional next steps, and risks."),
        w("Design a retainer only after a completed audit.", "Include workstreams, cadence, measurement, communication, backlog prioritization, client duties, change rules, renewal/exit criteria, and safeguards against activity theater.")
      ]
    ),

    module(
      "risk-ethics",
      "11. Ethics, claims, privacy, accessibility, and account stewardship",
      "Protect Oside and clients by making honest, compliant, user-respecting decisions.",
      ["Avoid misleading claims", "Respect accounts and data", "Build accessible and privacy-aware systems"],
      [
        lesson("Truthful claims", "Marketing claims, review use, insurance language, rankings, lead promises, and case studies should be truthful, supportable, and not misleading.", ["Do not fabricate proof.", "Use caveats where outcomes vary.", "Avoid fear-based manipulation."]),
        lesson("Reviews and endorsements", "Review solicitation, incentives, testimonials, and responses carry ethical and legal risk.", ["Do not buy fake reviews.", "Do not hide typicality issues.", "Document permissions."]),
        lesson("Data and account stewardship", "Access, ownership, consent, tracking numbers, tags, CRM data, and handoff should protect the client.", ["The client should own critical assets.", "Least-privilege access helps.", "Document changes."]),
        lesson("Accessibility and inclusion", "Forms, navigation, contrast, keyboard support, tap targets, and error messages affect real users and conversion.", ["Accessibility is not just compliance.", "Broken forms exclude leads.", "Test with assistive expectations."])
      ],
      ["Create a claims-risk checklist.", "Audit account ownership and access.", "Run a landing-page accessibility review."],
      "You can spot the work that might win short-term attention but damage trust, compliance, or users.",
      [S.ftcAds, S.ftcReviews, S.consent, S.wcag, S.forms, S.gbpGuidelines],
      [
        q("A testimonial says insurance paid for an entire roof. Safest use?", "Use only with truthful context and permission; avoid implying typical or guaranteed insurance outcomes.", "Add caveats and avoid overgeneralizing.", "Make it the main promise.", "Remove all context to keep it persuasive.", "Individual outcomes can mislead if presented as typical."),
        q("What is account stewardship?", "Managing access, ownership, documentation, data, and handoff so the client is protected.", "Responsible control of business-critical assets.", "Keeping all accounts under the agency forever.", "Avoiding documentation.", "Stewardship outlasts the engagement."),
        q("Which review tactic is unacceptable?", "Buying fake reviews or gating requests to only happy customers.", "Asking real customers through a consistent process.", "Responding professionally to criticism.", "Documenting review request timing.", "Review trust depends on authenticity."),
        q("Why should tracking numbers be governed carefully?", "They can affect call routing, reporting continuity, client ownership, and local identity consistency.", "They need documentation and QA.", "They are always forbidden.", "They automatically increase leads.", "Phone infrastructure can become a hidden dependency."),
        q("Which accessibility issue is highest risk for conversion?", "A mobile form that cannot be completed by keyboard/screen-reader users or has unclear errors.", "A lead-path blocker.", "A paragraph that is too long.", "A missing animation.", "Accessibility and conversion overlap strongly."),
        q("What is the safest stance on privacy and consent?", "Collect only needed data, respect consent requirements, document tag behavior, and avoid sending sensitive data unnecessarily.", "Use privacy-aware measurement design.", "Track everything because more data is always better.", "Ignore consent for small businesses.", "Measurement must respect users and laws."),
        q("A competitor uses fake urgency. What should Oside do?", "Avoid deceptive scarcity and use truthful urgency tied to real risks, weather, scheduling, or inspection timing.", "Compete with clarity and evidence.", "Copy it until caught.", "Use fear to increase conversion.", "Ethical persuasion is durable."),
        q("When should Oside say 'not yet'?", "When claims, access, eligibility, tracking, operations, or client expectations make the work unsafe or misleading.", "When prerequisites need repair first.", "Never.", "Only when budget is low.", "Restraint is part of professional judgment."),
        w("Create Oside’s risk checklist before launching a roofing campaign.", "Include claims, reviews, insurance language, licensing, privacy/consent, accessibility, account ownership, tracking numbers, platform policies, data retention, and approval workflow."),
        w("Explain to a client why you will not fake a location or buy reviews.", "Score clarity, respect, policy/legal risk, business trust, alternative plan, and willingness to walk away.")
      ]
    ),

    module(
      "capstone",
      "12. Roofing-specific founder capstone",
      "Prove you can integrate founder strategy, search diagnosis, delivery, sales, measurement, and ethics into a client-ready recommendation.",
      ["Synthesize all modules", "Prioritize under uncertainty", "Present a safe founder recommendation"],
      [
        lesson("Capstone scenario", "A capstone is not a final exam of memory; it is a simulation of customer #1 with incomplete data, tradeoffs, and client constraints.", ["Use evidence.", "Name assumptions.", "Prioritize the next useful action."]),
        lesson("Integrated diagnosis", "Combine ICP fit, market demand, GBP/local patterns, website quality, paid opportunity, CRO, measurement, economics, and risk.", ["Avoid one-channel tunnel vision.", "Connect problems to business impact.", "Do not bury the lede."]),
        lesson("Founder recommendation", "The final recommendation should state what to do first, why, what it costs, who owns it, how it will be measured, and what could go wrong.", ["Give options.", "State refusal conditions.", "Keep the owner oriented."]),
        lesson("Proof of mastery", "A founder proves mastery by producing a useful artifact that another smart person can understand, challenge, and teach back.", ["The work should stand without a sales pitch.", "Artifacts matter.", "Confidence comes from practice under constraints."])
      ],
      ["Complete the full roofing capstone.", "Record a five-minute walkthrough.", "Retake weak diagnostic domains after revising the capstone."],
      "You can walk into a real roofing sales conversation with a disciplined, honest, evidence-backed operating system.",
      [S.searchEssentials, S.gbpRanking, S.lsaStart, S.adsBest, S.ga4Attribution, S.ftcAds],
      [
        q("What is the capstone’s main purpose?", "Prove integrated founder judgment under realistic constraints, not memorization.", "Show you can diagnose and recommend responsibly.", "Create a pretty slide deck.", "Guarantee customer results.", "Mastery is practical synthesis."),
        q("A capstone finds ten problems. What should the recommendation do?", "Prioritize by business impact, risk, dependency, confidence, effort, and next learning value.", "Choose the first few actions deliberately.", "List everything as equally urgent.", "Start with the easiest cosmetic task.", "Founders must prioritize."),
        q("Which capstone evidence is weakest?", "Unsupported claims copied from a tool without screenshots, context, or business interpretation.", "Raw exports with no decision logic.", "Annotated SERP screenshots.", "CRM lead-quality evidence.", "Evidence needs interpretation and traceability."),
        q("What should the first 30-day plan include?", "A small number of high-leverage actions, owners, due dates, measurement, risks, and review cadence.", "Focused execution with learning.", "Every possible marketing tactic.", "Only brand redesign.", "Short plans need focus."),
        q("How should the founder handle missing client data?", "State the gap, explain why it matters, use cautious assumptions, and define the first validation step.", "Make uncertainty explicit.", "Invent the numbers.", "Ignore the gap.", "Missing data is manageable when disclosed."),
        q("Which capstone recommendation is most dangerous?", "Scale paid traffic before fixing tracking, call handling, offer fit, and lead-quality definitions.", "A growth push without prerequisites.", "Run a narrow paid test after readiness checks.", "Improve GBP compliance first.", "Scaling amplifies leaks."),
        q("What makes the walkthrough strong?", "Clear story, evidence, priorities, tradeoffs, owner decisions, caveats, and next steps in plain English.", "It helps the client decide.", "It shows every technical detail.", "It avoids all bad news.", "A walkthrough is a decision tool."),
        q("What is the final readiness signal?", "You can explain what you would do, not do, measure, charge, and decline for a real roofing client.", "You can defend the operating system.", "You completed every screen once.", "You feel excited.", "Confidence comes from defended judgment."),
        w("Complete the full roofing founder capstone.", "Include ICP fit, market map, SERP/local-rank evidence, GBP audit, website/SEO/AEO audit, PPC/LSA economics, CRO plan, measurement spec, proposal scope, risks, 30-day plan, and walkthrough notes."),
        w("Write the executive recommendation for customer #1.", "Score business clarity, prioritization, evidence, assumptions, scope, price logic, measurement, ethical caveats, refusal criteria, and next decision.")
      ]
    )
  ];
})();

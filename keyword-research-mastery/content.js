(() => {
  const S = {
    seoStarter: ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"],
    essentials: ["Google Search Essentials", "https://developers.google.com/search/docs/essentials"],
    aiFeatures: ["Google Search AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    performance: ["Search Console Performance report", "https://support.google.com/webmasters/answer/7576553?hl=en"],
    searchAnalyticsApi: ["Search Console Search Analytics API", "https://developers.google.com/webmaster-tools/v1/searchanalytics/query"],
    urlInspection: ["URL Inspection Tool", "https://support.google.com/webmasters/answer/9012289?hl=en"],
    trends: ["Google Trends help", "https://support.google.com/trends/answer/4365533?hl=en"],
    keywordPlanner: ["Keyword Planner", "https://support.google.com/google-ads/answer/7337243?hl=en"],
    searchTerms: ["Search terms report", "https://support.google.com/google-ads/answer/2472708?hl=en"],
    matchTypes: ["Keyword matching options", "https://support.google.com/google-ads/answer/7478529?hl=en"],
    broadMatch: ["Broad match", "https://support.google.com/google-ads/answer/2407779?hl=en"],
    negatives: ["Negative keywords", "https://support.google.com/google-ads/answer/2453972?hl=en"],
    adsConversions: ["Google Ads conversion goals", "https://support.google.com/google-ads/answer/11461796?hl=en"],
    aiMax: ["AI Max for Search", "https://support.google.com/google-ads/answer/15910366?hl=en"],
    gbpPerformance: ["Business Profile performance and insights", "https://support.google.com/business/answer/9918094?hl=en"],
    gbpRanking: ["Improve local ranking", "https://support.google.com/business/answer/7091?hl=en"],
    gbpServices: ["Manage Business Profile services", "https://support.google.com/business/answer/9455399?hl=en"],
    gbpLinks: ["Manage local business links", "https://support.google.com/business/answer/6218037?hl=en"],
    ga4Events: ["GA4 recommended events", "https://support.google.com/analytics/answer/9267735?hl=en"],
    ga4Attribution: ["GA4 attribution overview", "https://support.google.com/analytics/answer/10596866?hl=en"],
    gtmDataLayer: ["Google Tag Manager data layer", "https://developers.google.com/tag-platform/tag-manager/datalayer"],
    looker: ["Looker Studio help", "https://support.google.com/looker-studio/?hl=en"],
    ahrefs: ["Ahrefs Keywords Explorer documentation", "https://help.ahrefs.com/en/collections/68642-keywords-explorer"],
    semrush: ["Semrush Keyword Overview manual", "https://www.semrush.com/kb/5-keyword-overview"],
    moz: ["Moz Keyword Explorer guide", "https://moz.com/help/keyword-explorer"],
    screamingFrog: ["Screaming Frog SEO Spider user guide", "https://www.screamingfrog.co.uk/seo-spider/user-guide/"],
    schema: ["LocalBusiness structured data", "https://developers.google.com/search/docs/appearance/structured-data/local-business"]
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
    storageKey: "osideKeywordResearchMastery.v1",
    heroEyebrow: "Oside Digital · Keyword research and search demand",
    heroTitle: "Master search demand, query intent, SERP evidence, and keyword-to-revenue decisions.",
    heroLede: "Learn keyword tools, Google Search Console, Google Ads search terms, SERP inspection, GBP query data, competitor query mapping, zero-volume keywords, AI Overview behavior, local modifiers, service economics, negative keywords, and how to turn research into pages, ads, offers, and reports.",
    foundationNote: "Primary-source foundation reviewed June 27, 2026. Google surfaces, Ads automation, GBP reporting, and third-party keyword tools change quickly; verify docs before implementing a live strategy.",
    modulesSummary: "Search demand strategy, SERP inspection, GSC, Google Ads search terms, GBP query data, competitor mapping, zero-volume opportunities, AI-search behavior, pages, ads, offers, and reporting.",
    labsSummary: "Keyword universe, SERP inspection, GSC mining, Ads search-term audit, GBP query map, competitor ownership, local-rank grid, and roofing capstone.",
    reportEyebrow: "Keyword Research & Search Demand mastery report",
    reportTitle: "Oside Keyword Research & Search Demand Mastery Report",
    reportFilename: "oside-keyword-research-search-demand-mastery",
    sourceReminder: "Recheck Google Search, Google Ads, GBP, Analytics, and keyword-tool documentation before changing a live client strategy.",
    resetPrompt: "Clear all keyword research, search demand, lab, and diagnostic progress?",
    integrationPractice: "Complete a query universe, SERP evidence sheet, GSC/Ads/GBP mining pass, local-rank diagnosis, page/ad recommendation map, and one client-ready report.",
    readinessGroups: [
      { key: "research", title: "Ready to research demand?", ids: ["foundations", "serp-inspection", "tools", "gsc", "gbp-local"] },
      { key: "activation", title: "Ready to turn queries into growth assets?", ids: ["ads-terms", "competitors", "economics", "pages", "ads-offers-reports"] },
      { key: "advise", title: "Ready to advise roofing clients?", ids: ["foundations", "serp-inspection", "gbp-local", "ai-search", "ads-offers-reports", "capstone"] }
    ],
    labs: [
      {
        id: "query-universe",
        title: "Roofing keyword universe and intent map",
        description: "Build a useful research universe without drowning in keyword rows.",
        task: "Create a roofing query set across replacement, repair, emergency, storm, insurance, commercial, material, financing, brand, competitor, informational, and hiring/product exclusions. Add intent, urgency, likely job value, page/ad destination, market, source, and confidence.",
        proof: "Another strategist can see which queries matter, which are traps, and what action each bucket supports."
      },
      {
        id: "serp-inspection",
        title: "SERP inspection evidence sheet",
        description: "Inspect live results as a customer-choice environment, not as a rank vanity exercise.",
        task: "For ten priority roofing queries, document location/device/date, ads, LSA, Local Pack, organic results, AI features, directories, PAA, reviews, destination pages, competitor repetition, and likely searcher next step.",
        proof: "You can explain search opportunity from observed surfaces rather than from volume alone."
      },
      {
        id: "gsc-mining",
        title: "Search Console query mining workflow",
        description: "Turn existing organic query data into page, content, CTR, and measurement decisions.",
        task: "Analyze query/page/device/date patterns for a roofing site. Segment brand versus non-brand, service versus research, local modifiers, rising/falling queries, high impressions with weak CTR, pages with mixed intent, and queries with conversions where available.",
        proof: "Your output contains prioritized decisions with caveats, not a raw export."
      },
      {
        id: "ads-search-term-audit",
        title: "Google Ads search-term and negative-keyword audit",
        description: "Protect paid learning by separating valuable intent from expensive noise.",
        task: "Audit a search-term sample. Classify each term by service fit, urgency, geography, job type, likely value, match behavior, landing promise, negative action, and conversion-quality feedback.",
        proof: "You can reduce waste without accidentally blocking valuable long-tail demand."
      },
      {
        id: "gbp-query-map",
        title: "GBP query and local modifier map",
        description: "Use Business Profile query signals with the proper humility.",
        task: "Map profile searches, GBP actions, website clicks, call paths, local-rank grids, service areas, proximity patterns, and website/landing-page destinations. Separate relevance, distance, prominence, and conversion leaks.",
        proof: "You can tell whether the problem is local visibility, profile persuasion, page continuity, call/form handling, or lead quality."
      },
      {
        id: "competitor-ownership",
        title: "Competitor query ownership matrix",
        description: "See which competitors own which moments across paid, local, organic, AI, and third-party surfaces.",
        task: "For a target market, map competitor visibility across ten queries and five SERP surfaces. Weight by intent, likely value, controllability, evidence quality, destination strength, and client opportunity.",
        proof: "Your competitor map leads to practical priorities instead of envy."
      },
      {
        id: "local-rank",
        title: "Local-rank and demand diagnostic",
        description: "Sample local visibility and interpret it alongside demand and economics.",
        task: "Enter a 5×5 rank grid for one high-value query. Use 21 when not found beyond rank 20. Interpret average, median, top-3 share, top-10 share, edge weakness, competitor pockets, serviceability, query value, and expected lead quality.",
        proof: "You do not confuse a red grid with guaranteed lost revenue or a green grid with profitable demand.",
        calculator: "rank"
      },
      {
        id: "capstone",
        title: "Roofing keyword research capstone",
        description: "Turn research into a client-ready growth recommendation.",
        task: "Choose a roofing market and produce the full package: query universe, SERP inspection, GSC mining plan, Ads search-term/negative strategy, GBP query map, competitor query ownership, zero-volume opportunity list, AI feature observation, local-rank diagnostic, service economics scoring, page/ad/offer map, report narrative, caveats, and 30-day test plan.",
        proof: "A roofing owner could understand where demand exists, what to build, what to buy, what to avoid, and what to measure next."
      }
    ]
  };

  window.MASTERY_MODULES = [
    module(
      "foundations",
      "1. Search demand, intent, and founder judgment",
      "Learn why keyword research is a business decision system, not a spreadsheet ritual.",
      ["Separate demand from value", "Classify intent before volume", "Connect queries to business economics"],
      [
        lesson("Keyword research is demand research", "A keyword is evidence of a possible customer situation, not automatically a business opportunity.", ["Volume is a clue, not a verdict.", "Low volume can still be high value.", "Search demand must be filtered through service fit and economics."]),
        lesson("Intent beats wording", "Roof replacement estimate, roofing company near me, roof leak repair, and how long do shingles last each imply different urgency, page needs, and value.", ["Classify the job behind the query.", "Ambiguous queries need SERP inspection.", "Never treat all roofing searches equally."]),
        lesson("Value depends on the business", "The same query can be valuable or distracting depending on margin, crew capacity, geography, financing, insurance work, seasonality, and sales ability.", ["Ask operational questions early.", "A lead type can be unprofitable.", "Research should support choices."]),
        lesson("Founder-level output", "The useful deliverable is a prioritized demand map: what to pursue, what to test, what to avoid, and what evidence is missing.", ["Avoid unprioritized keyword dumps.", "Show assumptions.", "Tie recommendations to next actions."])
      ],
      ["Interview a roofing owner about job mix, margins, service areas, and bad leads.", "Classify 100 queries by intent, urgency, and business value.", "Write a one-page demand thesis."],
      "You can explain why a keyword with lower volume may deserve higher priority than a popular generic term.",
      [S.seoStarter, S.essentials, S.keywordPlanner, S.trends],
      [
        q("What is the founder-level purpose of keyword research?", "To identify profitable demand patterns and turn them into useful pages, ads, offers, and measurement decisions.", "To improve strategy using search evidence.", "To collect the largest possible keyword export.", "To chase the highest-volume term regardless of fit.", "Keyword research should improve business decisions."),
        q("A keyword has high search volume but poor close rate. What is the best interpretation?", "Volume is not value; inspect intent, service fit, geography, qualification, offer, and sales handling.", "The keyword may need exclusion or separate messaging.", "Increase budget because more volume solves it.", "Make it the homepage target immediately.", "Economics and intent determine value."),
        q("Which roofing query is most commercially specific?", "roof replacement estimate oceanside ca", "roofing", "how long do shingles last", "roofing jobs", "Service, transaction, and location make the intent clearer."),
        q("Why can a zero-volume keyword still matter?", "Keyword tools sample demand imperfectly and may miss specific high-intent local phrases.", "Some rare searches can be valuable.", "Zero volume means nobody can ever search it.", "Only high-volume head terms can create jobs.", "Tool data is a model, not the market itself."),
        q("What should happen before choosing keyword priorities?", "Understand services, margins, geography, capacity, seasonality, customer fit, and sales constraints.", "Tie demand to operations.", "Open one tool and sort by volume.", "Copy a competitor's title tags.", "The business context defines the opportunity."),
        q("What is the biggest danger of keyword-volume worship?", "It can prioritize broad or low-fit demand over profitable searches that the business can actually serve.", "It can mislead page and ad decisions.", "It makes reports shorter.", "It always improves SEO.", "Volume without intent is noisy."),
        q("What is a useful first research output?", "A demand map organized by intent, job value, market, channel, destination, evidence, and next action.", "A prioritized opportunity brief.", "A CSV with every keyword untouched.", "A rank guarantee.", "Research should become a decision artifact."),
        q("Why should negative intent be researched too?", "Irrelevant employment, DIY, product, free, warranty, and out-of-area searches can waste paid spend and distort learning.", "Bad-fit demand is part of the map.", "Negatives are only for ecommerce.", "All traffic helps brand awareness equally.", "Avoiding bad demand improves learning."),
        w("Create a founder explanation of keyword research for a roofing owner.", "Explain demand, intent, value, geography, service fit, page/ad use, measurement, and uncertainty without jargon or volume worship."),
        w("Build a roofing demand-priority rubric.", "Include intent, urgency, job value, close probability, service fit, geography, competition, seasonality, channel fit, evidence confidence, and next action.")
      ]
    ),

    module(
      "serp-inspection",
      "2. SERP inspection and searcher-behavior evidence",
      "Learn to inspect search results as the real customer environment.",
      ["Inventory search surfaces", "Infer intent from result patterns", "Preserve evidence for client decisions"],
      [
        lesson("The SERP is the battlefield", "Search results show what Google believes may satisfy the query and what customers see before they choose.", ["Inspect ads, LSA, maps, organic, directories, AI features, and PAA.", "Record location and device.", "Screenshots beat memory."]),
        lesson("Intent from result mix", "A SERP full of local companies differs from one full of national guides, calculators, directories, videos, or shopping results.", ["Result type reveals likely intent.", "Mixed SERPs need careful segmentation.", "One query can support multiple journeys."]),
        lesson("Surface ownership", "A roofer can appear through GBP, website pages, LSAs, PPC, directories, reviews, images, and citations.", ["Repeated credible presence matters.", "Third-party surfaces can influence choice.", "Owned and paid paths should not contradict."]),
        lesson("Evidence protocol", "Useful inspection includes query, city or coordinate, date, device, personalization limits, observed surfaces, owners, destination URLs, and uncertainty.", ["Use stable methods.", "Avoid pretending one screenshot is universal.", "Create repeatable samples."])
      ],
      ["Inspect ten roofing SERPs on mobile and desktop.", "Label every visible surface and owner.", "Write a one-paragraph opportunity summary for each query."],
      "You can look at a SERP and describe the searcher's likely choices, not just a rank position.",
      [S.seoStarter, S.aiFeatures, S.gbpRanking, S.urlInspection],
      [
        q("What should a SERP inspection record first?", "Query, location or coordinate, date/time, device, method, and whether the query is branded or non-branded.", "Context before interpretation.", "Only the top organic rank.", "Only keyword volume.", "Without context, the observation is weak evidence."),
        q("A query shows LSAs, text ads, a Local Pack, directories, and organic roofers. What does that suggest?", "Commercial local intent with multiple paid, local, and organic decision surfaces.", "A multi-surface opportunity.", "Only SEO matters.", "The query has no buyer intent.", "Commercial SERPs often contain many surfaces."),
        q("A SERP is mostly national advice articles and AI summary content. What should you consider?", "The query may be informational or early-stage, requiring a different content and conversion path than an estimate page.", "Match the journey stage.", "Send all traffic to a contact page.", "Bid aggressively without qualification.", "Result mix reflects likely intent."),
        q("Why inspect destination pages from the SERP?", "Destinations reveal what competitors promise, prove, and ask users to do after the click.", "The journey continues beyond rank.", "Only the blue link matters.", "Destination quality cannot affect outcomes.", "Search visibility and conversion are connected."),
        q("What is risky about one office-based search?", "Local results vary by searcher location, device, personalization, and time, so one search is not market visibility.", "Use it as a sample only.", "It proves all rankings.", "It replaces rank grids.", "SERP samples need humility."),
        q("How should AI features be treated during SERP inspection?", "As query-dependent surfaces to document, not as proof that all SEO clicks have disappeared.", "Observe presence, citations, and intent.", "Ignore them forever.", "Assume they replace every local result.", "AI features vary by query and context."),
        q("What does repeated competitor visibility across surfaces imply?", "The competitor may be easier to choose because it appears in several trust and decision moments.", "Visibility repetition can matter.", "It proves they have the best service.", "It means you should copy their keywords exactly.", "Search ownership is multi-surface."),
        q("Which SERP note is most useful?", "Roof replacement estimate shows LSAs and local pages; client absent from Pack and organic; competitors lead to replacement-specific proof pages.", "Evidence plus implication.", "Competitor wins.", "We need more keywords.", "Useful notes connect observation to action."),
        w("Create a SERP inspection template for roofing keyword research.", "Include query, location, device, date, surfaces, owners, destination URLs, AI features, reviews, proof, CTA, client presence, competitor presence, likely intent, opportunity, and confidence."),
        w("Explain how to interpret a mixed SERP for roof repair cost.", "Discuss informational versus commercial intent, local pack presence, article results, ads, AI features, page type, conversion path, and testing.")
      ]
    ),

    module(
      "tools",
      "3. Keyword tools, sampling limits, and source triangulation",
      "Use keyword tools as evidence sources without letting tools replace judgment.",
      ["Choose the right tool for the question", "Understand tool bias and sampling", "Triangulate demand across sources"],
      [
        lesson("No tool is the market", "Keyword Planner, Trends, Search Console, third-party databases, SERPs, GBP, and Ads search terms each see different slices of demand.", ["Each source has bias.", "Compare sources before deciding.", "Document confidence."]),
        lesson("Keyword Planner and Trends", "Keyword Planner can help discover ideas and forecast Ads context; Trends helps compare relative interest over time and geography.", ["Planner is Ads-oriented.", "Trends is relative, not exact volume.", "Seasonality matters in roofing."]),
        lesson("Third-party tools", "Ahrefs, Semrush, Moz, and similar tools can speed competitor and keyword discovery, but their volumes and difficulty scores are estimates.", ["Use them for discovery, not truth.", "Inspect SERPs manually.", "Do not sell difficulty scores as certainty."]),
        lesson("Tool stack discipline", "A founder should define the research question before opening a tool: demand discovery, competitor gap, paid waste, content idea, local relevance, or reporting.", ["Question first, tool second.", "Avoid tool tourism.", "Keep exports decision-focused."])
      ],
      ["Compare one query set in Keyword Planner, Trends, Search Console, and a third-party tool.", "Record where sources agree or conflict.", "Write a confidence note for each priority bucket."],
      "You can use tools quickly while explaining what each tool can and cannot prove.",
      [S.keywordPlanner, S.trends, S.performance, S.ahrefs, S.semrush, S.moz],
      [
        q("What is the correct posture toward keyword tools?", "Use them as imperfect evidence sources that need SERP, business, and performance validation.", "Tools accelerate discovery but do not replace judgment.", "Treat one tool's volume as exact demand.", "Let keyword difficulty decide strategy automatically.", "Tools estimate reality from limited data."),
        q("When is Google Trends useful?", "Comparing relative interest over time, geography, and topics, especially for seasonality and demand shifts.", "Understanding direction and seasonality.", "Finding exact monthly search counts.", "Replacing Search Console.", "Trends is comparative and relative."),
        q("When is Keyword Planner especially relevant?", "When planning paid search themes, keyword ideas, forecasts, and auction-oriented demand context.", "It is useful for Google Ads planning.", "It proves organic ranking difficulty.", "It shows every local long-tail query.", "Planner is Ads-centered."),
        q("A third-party tool says a keyword is easy. What next?", "Inspect the SERP, business fit, competitor strength, page requirements, and actual value before prioritizing.", "Use difficulty as one clue.", "Promise rankings.", "Create 50 pages immediately.", "Difficulty scores are estimates."),
        q("Why compare multiple tools?", "Agreement can raise confidence and disagreement can reveal sampling limits, seasonality, wording differences, or hidden demand.", "Triangulation improves judgment.", "To find the tool with the prettiest chart.", "Because more exports always mean better strategy.", "Different sources see different evidence."),
        q("What should be removed from a client-facing keyword export?", "Noise that does not change decisions, while preserving access to evidence and assumptions.", "Summarize by intent and priority.", "All caveats.", "All low-volume terms automatically.", "Reports should clarify, not bury."),
        q("Which tool source best shows queries already bringing organic impressions?", "Google Search Console Performance report.", "Search Console query/page data.", "Keyword Planner.", "A generic blog idea generator.", "GSC reflects observed site performance."),
        q("What is a dangerous tool workflow?", "Export thousands of keywords, sort by volume, assign one page per keyword, and ignore SERP and business fit.", "It mistakes data quantity for strategy.", "Start with a research question.", "Validate with performance data.", "Mechanical keyword mapping creates weak strategy."),
        w("Design a keyword-tool workflow for a roofing startup market.", "Include research question, sources, collection order, dedupe, intent classification, volume caveats, SERP validation, business scoring, and output format."),
        w("Explain tool disagreement to a client.", "Cover sampling, rounded estimates, geography, timing, paid versus organic context, SERP validation, and how decisions still get made.")
      ]
    ),

    module(
      "gsc",
      "4. Google Search Console query mining",
      "Use Search Console to mine real organic visibility and find practical opportunities.",
      ["Read queries with page context", "Segment brand, intent, device, and geography", "Turn GSC into page and CTR decisions"],
      [
        lesson("GSC is observed Search evidence", "The Performance report can show clicks, impressions, CTR, and average position by queries, pages, countries, devices, dates, and search appearance where available.", ["It is not exact revenue.", "Query/page context matters.", "Data can be sampled or anonymized."]),
        lesson("Query-page pairing", "A query without the landing page can mislead. A page ranking for mixed intents may need clearer purpose, consolidation, or new supporting pages.", ["Always inspect page pairings.", "Segment brand and non-brand.", "Look for cannibalization by role, not word overlap."]),
        lesson("Opportunity patterns", "High impressions with weak CTR, rising queries without matching pages, valuable queries on weak pages, and lost clicks after SERP changes all deserve diagnosis.", ["Do not rewrite titles blindly.", "Inspect the SERP first.", "Tie changes to measurement."]),
        lesson("API and reporting", "Search Console data can be exported or queried for recurring analysis, then summarized into owner-friendly decisions.", ["Automate only after the logic is sound.", "Annotate site changes.", "Separate diagnosis from storytelling."])
      ],
      ["Export queries and pages for a roofing site.", "Classify top queries by brand, service, market, and intent.", "Create five page or snippet recommendations with evidence."],
      "You can turn GSC query data into practical SEO and content decisions without overstating precision.",
      [S.performance, S.searchAnalyticsApi, S.urlInspection, S.seoStarter],
      [
        q("What should GSC query data be connected to?", "Pages, devices, dates, countries, search appearance, SERP context, and conversions where possible.", "Query data needs context.", "Only total clicks.", "Only average position.", "Context prevents false conclusions."),
        q("A page has impressions for roof repair and roof replacement. What should you inspect?", "Whether one page genuinely satisfies both intents or whether distinct page roles would serve users better.", "Intent and page purpose.", "Keyword density.", "Domain age.", "Mixed queries can signal mixed intent."),
        q("High impressions and low CTR can mean what?", "Snippet mismatch, low position, SERP features, brand weakness, wrong intent, or broad impressions; inspect before rewriting.", "It is a diagnostic pattern.", "The title is always bad.", "The page should be deleted immediately.", "CTR needs context."),
        q("Why segment brand and non-brand queries?", "Brand demand behaves differently from discovery demand and should not be blended into acquisition diagnosis.", "They answer different questions.", "Brand traffic is worthless.", "Non-brand is always profitable.", "Segments prevent misleading averages."),
        q("What is the best use of average position?", "A directional diagnostic metric interpreted with query, page, date, device, and SERP context.", "Use carefully.", "A precise rank tracker.", "A revenue forecast.", "Average position aggregates many contexts."),
        q("A query rose in impressions but clicks fell. What should you do?", "Segment query/page/device/date, inspect SERP changes, review snippets, and compare business outcomes before reacting.", "Diagnose the mix.", "Rewrite every page.", "Assume Google penalty.", "Aggregate movement can hide changes."),
        q("What makes a GSC opportunity credible?", "The query has business value, relevant impressions/clicks, a page fit or gap, SERP feasibility, and a clear next action.", "Evidence plus action.", "Any query with one impression.", "Only the highest average position.", "Opportunity requires relevance and value."),
        q("When should URL Inspection be used?", "When diagnosing whether a specific page is indexed, crawlable, canonicalized, or eligible to appear.", "For page-level eligibility checks.", "To find keyword volume.", "To change rankings directly.", "Index eligibility precedes performance claims."),
        w("Create a GSC mining checklist for a roofing website.", "Include date range, brand split, page pairing, service buckets, location modifiers, devices, CTR patterns, rising/falling queries, cannibalization, index checks, conversion connection, and caveats."),
        w("Diagnose a roof replacement page losing organic clicks.", "Validate tracking, segment queries/pages/devices/markets, inspect SERP/AI changes, check index/canonical, review snippets, competition, seasonality, demand, and conversions.")
      ]
    ),

    module(
      "ads-terms",
      "5. Google Ads search terms, match types, and negative keywords",
      "Use paid-search query evidence to learn fast while protecting budget.",
      ["Interpret search terms correctly", "Use match types and negatives with judgment", "Connect query quality to conversion quality"],
      [
        lesson("Search terms reveal actual matches", "The search terms report shows terms that triggered ads and received clicks or impressions under reporting rules.", ["It is not every auction.", "It is essential for intent control.", "Pair with conversion quality."]),
        lesson("Match types govern reach", "Exact, phrase, broad, and AI-enabled matching can expand coverage beyond the literal keyword list.", ["Automation needs guardrails.", "Broad match can discover or waste.", "Search-term review remains important."]),
        lesson("Negative keywords protect learning", "Negatives help prevent irrelevant intent such as jobs, DIY, materials-only, free, reviews-only, warranty-only, or out-of-area searches from distorting results.", ["Do not overblock valuable ambiguity.", "Use lists and themes.", "Review after lead-quality feedback."]),
        lesson("Query quality is downstream", "A search term can look plausible but still produce bad leads if the landing promise, geography, form, phone handling, or sales qualification is wrong.", ["Trace query to sale.", "Use CRM stages.", "Do not optimize raw leads blindly."])
      ],
      ["Audit 100 search terms from a lead-gen campaign.", "Build a negative-keyword list by intent class.", "Write a paid-search query-quality report tied to qualified leads."],
      "You can reduce wasted spend while preserving high-value long-tail discovery.",
      [S.searchTerms, S.matchTypes, S.broadMatch, S.negatives, S.adsConversions, S.aiMax],
      [
        q("What is the search terms report used for?", "Understanding actual user terms that triggered ads so you can judge intent, negatives, structure, and lead quality.", "Query-quality diagnosis.", "Exact organic rank tracking.", "GBP category selection.", "Search terms show paid matching evidence."),
        q("A campaign spends on roofing jobs hiring. What failed?", "Intent control through keywords, match types, negatives, structure, or review cadence.", "Employment traffic should be excluded.", "The landing page needs more photos.", "The bid is too low.", "Bad matches waste budget."),
        q("Why not add every poor lead's query as a negative immediately?", "Some terms are ambiguous; verify pattern, service fit, landing promise, and sales feedback before blocking valuable demand.", "Use evidence and thresholds.", "Negate everything after one call.", "Never use negatives.", "Overblocking can reduce useful learning."),
        q("What is broad match best paired with?", "Strong conversion quality signals, relevant assets/pages, negatives, budget guardrails, and search-term review.", "Guardrails and measurement.", "No tracking.", "A generic homepage.", "Automation needs quality feedback."),
        q("What is a negative keyword's purpose?", "Prevent irrelevant intent from consuming spend and distorting learning.", "Protect economics and focus.", "Block all low-volume searches.", "Guarantee conversion rate.", "Negatives control fit, not all uncertainty."),
        q("What should be reviewed with search terms?", "Conversions, qualified stages, geography, device, landing page, match type, campaign, cost, and sales disposition.", "Query-to-quality context.", "Only clicks.", "Only Quality Score.", "Paid learning needs downstream evidence."),
        q("A term has few clicks but one sold roof. What should you consider?", "It may be a high-value long-tail signal worth preserving and exploring, despite low volume.", "Value can outweigh volume.", "Delete it because sample size is small.", "Make it the only keyword.", "Rare terms can matter when economics are strong."),
        q("What is a dangerous paid keyword recommendation?", "Scale spend to raw form fills before query quality, attribution, CRM stages, and sold-job feedback are governed.", "Bad signals can scale waste.", "Use qualified conversions.", "Review search terms.", "Optimization signals must reflect quality."),
        w("Build a negative-keyword taxonomy for a roofing replacement campaign.", "Include employment, DIY, materials/products, free/cheap mismatch, out-of-area, competitor policy, warranty-only, education-only, commercial/residential mismatch, and review rules."),
        w("Write a search-term audit summary for a roofer.", "Include spend, query themes, good demand, waste, negatives, match-type behavior, landing-page fit, lead quality, CRM feedback, and next test.")
      ]
    ),

    module(
      "gbp-local",
      "6. GBP query data, local modifiers, and map-pack demand",
      "Use Business Profile and local-rank data to understand local demand without overclaiming.",
      ["Interpret GBP searches and actions", "Map local modifiers and proximity", "Separate relevance, distance, prominence, and conversion"],
      [
        lesson("GBP performance is local discovery evidence", "Business Profile performance can show how people find and interact with a profile, including available searches, calls, website clicks, messages, directions, and other actions.", ["Metrics vary by business.", "Search terms can lag.", "Actions are not revenue."]),
        lesson("Local ranking frame", "Google describes local ranking around relevance, distance, and prominence.", ["Distance cannot be edited away.", "Relevance comes from truthful fit.", "Prominence includes broader reputation and web presence."]),
        lesson("Local modifiers", "Near me, city, neighborhood, service area, emergency, open now, and material modifiers can imply different expectations and map behavior.", ["Map the geography honestly.", "Do not fake offices.", "Service pages should match actual capability."]),
        lesson("GBP-to-page continuity", "Profile links should lead to pages that reinforce the service, identity, proof, geography, and next action promised by the profile and query.", ["Use UTMs carefully.", "Avoid unrelated landing pages.", "Calls and forms need tracking."])
      ],
      ["Export or review GBP performance where available.", "Create a city and service modifier map.", "Compare one local-rank grid to profile actions and CRM quality."],
      "You can diagnose whether local search is a visibility problem, relevance problem, page problem, or lead-quality problem.",
      [S.gbpPerformance, S.gbpRanking, S.gbpServices, S.gbpLinks, S.schema],
      [
        q("What are Google's main stated local ranking factors?", "Relevance, distance, and prominence.", "The official local ranking frame.", "Keyword density, ad spend, and domain age.", "Daily posting and photo geotags only.", "Use the official frame."),
        q("What should GBP query data not be treated as?", "A complete, exact list of all local demand or guaranteed revenue attribution.", "A directional signal.", "Useful context.", "A source to compare with actions.", "GBP data has limits and lag."),
        q("A roofer ranks near its office but not 15 miles away. What is the first interpretation?", "Distance, local competition, serviceability, relevance, and prominence likely vary across the grid.", "Local rank is geographic.", "The profile is broken.", "Add the far city to the business name.", "Proximity matters."),
        q("Which local modifier is likely highest urgency?", "emergency roof leak repair near me", "roof colors", "roofing jobs", "types of shingles", "Emergency and repair terms imply urgent service need."),
        q("What should GBP services represent?", "Real services customers can buy and the business can fulfill.", "Truthful service relevance.", "Every keyword variation.", "Competitor services the roofer does not offer.", "Services are business information, not a keyword dump."),
        q("Why tag GBP website links with UTMs?", "To identify profile-driven website sessions and actions in analytics while preserving a valid destination.", "Attribution clarity.", "To improve ranking directly.", "To stuff city keywords into the URL.", "UTMs support measurement, not rank manipulation."),
        q("Rank improves but calls fall. What should you inspect?", "Query mix, seasonality, competitors, profile actions, phone function, page continuity, tracking, capacity, and lead quality.", "Visibility is only one stage.", "Reverse every GBP edit.", "Assume the rank grid is wrong.", "Outcomes need funnel diagnosis."),
        q("What is a dangerous local keyword tactic?", "Adding keywords or cities to the business name when they are not part of the real-world business name.", "It risks policy and trust.", "Using truthful services.", "Linking to relevant pages.", "Misrepresentation can harm the profile."),
        w("Create a local modifier map for roofing search demand.", "Include city, neighborhood, near me, emergency, open now, replacement, repair, storm, insurance, commercial/residential, material, and service-area constraints."),
        w("Diagnose a GBP profile with high searches and low booked jobs.", "Inspect query intent, profile relevance, reviews, actions, website link, calls/forms, tracking, spam, sales response, pricing, capacity, competitors, and seasonality.")
      ]
    ),

    module(
      "competitors",
      "7. Competitor query mapping and search ownership",
      "Map who controls the important search moments and why.",
      ["Identify competitor visibility patterns", "Weight surfaces by value", "Turn gaps into practical priorities"],
      [
        lesson("Competitors differ by query", "The competitor for roof replacement estimate may not be the same competitor for emergency repair, commercial roofing, or metal roof cost.", ["Map by intent bucket.", "Avoid one-size competitor lists.", "Market geography matters."]),
        lesson("Search ownership matrix", "Useful mapping tracks query, surface, owner, destination, proof, offer, reviews, ad presence, local pack presence, organic page, AI citation, and third-party influence.", ["Weight by business value.", "Separate controllable and uncontrollable factors.", "Preserve screenshots."]),
        lesson("Destination strength", "A competitor's rank matters less if the destination fails the searcher; a lower-ranked competitor with proof and clear CTA may still win.", ["Inspect pages and profiles.", "Note message match.", "Compare trust signals."]),
        lesson("Ethical competitive response", "Do not copy blindly. Use competitor evidence to identify customer expectations, proof gaps, offer angles, and assets to build.", ["Differentiate truthfully.", "Avoid fake offices and reviews.", "Build durable advantages."])
      ],
      ["Map five competitors across ten roofing queries.", "Score each competitor by surface, destination, proof, and offer.", "Write three action priorities for the client."],
      "You can identify which competitor advantages are real, which are fragile, and which should shape the strategy.",
      [S.seoStarter, S.gbpRanking, S.performance, S.keywordPlanner, S.screamingFrog],
      [
        q("Why map competitors by query bucket?", "Competitor strength changes by service, intent, geography, and search surface.", "Different queries create different battles.", "One competitor list is always enough.", "Only domain authority matters.", "Search competition is contextual."),
        q("What belongs in a search ownership matrix?", "Query, intent, location, surfaces, owner, position/presence, destination, proof, offer, client presence, competitor presence, value, and evidence date.", "A structured evidence table.", "Only keyword volume.", "Only backlinks.", "Ownership spans many factors."),
        q("A directory outranks every roofer. What should you consider?", "The directory may be a customer-choice surface to monitor, influence where appropriate, or account for in reporting.", "Third-party surfaces can matter.", "Directories are irrelevant.", "Copy the directory page.", "SERPs often include third-party intermediaries."),
        q("A competitor appears in LSA, Pack, organic, and reviews. What does this suggest?", "They may have repeated trust exposure across the journey, increasing selection chances.", "Multi-surface presence matters.", "They must be impossible to beat.", "They automatically have better crews.", "Visibility does not prove service quality but affects choice."),
        q("What is a bad competitor response?", "Copy their page titles, categories, offers, and city pages without checking truth, fit, or customer value.", "Blind copying is fragile.", "Study their proof gaps.", "Build better assets.", "Competitor analysis should inform, not clone."),
        q("Which competitor gap is most actionable?", "High-value query where competitors have weak proof, weak page fit, poor reviews, or no local-specific content and the client can serve it well.", "A gap tied to client strength.", "Any keyword they do not rank for.", "A fake-city opportunity.", "Actionability requires fit and evidence."),
        q("Why inspect competitor pages?", "To understand message, proof, CTA, service specificity, local substance, and conversion path after the search click.", "Destinations shape outcomes.", "Pages do not matter if they rank.", "Only technical tags matter.", "Customer choice happens on pages too."),
        q("What should be weighted most heavily?", "Queries and surfaces tied to profitable, serviceable demand and likely customer choice.", "Value and fit.", "Alphabetical keyword order.", "The biggest volume number.", "Weighting prevents false priorities."),
        w("Build a competitor query ownership matrix for roof replacement in one city.", "Include query set, surfaces, owners, positions, destination URLs, proof, reviews, ads/LSA/Pack/organic/AI/directories, value weight, client gap, and next action."),
        w("Explain why a weaker-ranking competitor may still win leads.", "Discuss message match, reviews, proof, phone/form visibility, offers, speed-to-lead, brand familiarity, third-party presence, and sales response.")
      ]
    ),

    module(
      "economics",
      "8. Zero-volume keywords, long-tail demand, and service economics",
      "Prioritize rare and specific demand when it matches valuable roofing economics.",
      ["Find hidden long-tail opportunities", "Score queries by economics", "Avoid building pages for every variation"],
      [
        lesson("Zero-volume does not mean zero value", "Tools may miss specific local, seasonal, emergency, and problem-aware searches that still produce profitable leads.", ["Look for language from customers.", "Use Search Console and Ads terms.", "Inspect SERPs."]),
        lesson("Long-tail specificity", "Queries combining service, material, problem, urgency, city, insurance, financing, or property type can reveal precise needs.", ["Specificity can improve message match.", "Do not create thin pages for every variation.", "Cluster by intent."]),
        lesson("Economics scoring", "A query should be scored by likely job type, margin, close rate, capacity, acquisition cost, sales difficulty, and strategic value.", ["A cheap lead can be bad.", "A rare replacement lead can be excellent.", "Use owner interviews."]),
        lesson("Content versus ad activation", "Some long-tail demand deserves a page, some deserves ad copy or negatives, some deserves FAQ coverage, and some should be ignored.", ["Match action to evidence.", "Avoid doorway page patterns.", "Build useful clusters."])
      ],
      ["Collect 50 customer-language phrases from calls, reviews, forms, sales notes, and GSC.", "Cluster zero-volume and low-volume terms by intent.", "Score ten long-tail opportunities by expected business value."],
      "You can defend a low-volume opportunity because it fits service economics, not because a tool says it is hidden gold.",
      [S.performance, S.searchTerms, S.trends, S.seoStarter, S.essentials],
      [
        q("Why can zero-volume keywords matter?", "Tools may miss specific local and long-tail demand that still converts into valuable jobs.", "Tool data is incomplete.", "Zero-volume always means huge demand.", "All zero-volume terms deserve pages.", "Low reported volume requires judgment."),
        q("Which long-tail query is likely valuable for replacement?", "architectural shingle roof replacement estimate oceanside", "roof", "shingle colors pinterest", "roofing jobs near me", "Specific service and location signals commercial fit."),
        q("What should prevent long-tail page sprawl?", "Intent clustering, usefulness, proof, service reality, and a clear reason for a distinct page.", "Build pages only when they serve users.", "One URL per keyword variation.", "Copy the same city text repeatedly.", "Thin pages can harm usefulness."),
        q("What is service economics scoring?", "Evaluating demand by likely job value, margin, close rate, fit, capacity, cost, and strategic priority.", "Business value scoring.", "Sorting by volume only.", "Ranking pages by word count.", "Economics turns research into priorities."),
        q("Where can customer language come from?", "Calls, reviews, forms, CRM notes, sales objections, Search Console, Ads search terms, GBP data, and competitor pages.", "Real customer artifacts.", "Only keyword tools.", "Only internal guesses.", "Customer language improves relevance."),
        q("A query has low volume but high urgency and high job value. What next?", "Inspect SERP, validate service fit, design a page/ad/offer test, and track lead quality.", "Test with guardrails.", "Ignore it because volume is low.", "Create 30 duplicate pages.", "Rare valuable demand can be tested."),
        q("Which term may deserve a negative despite volume?", "roofing jobs hiring", "emergency roof leak repair", "roof replacement financing", "hail damage roof inspection", "Employment intent is usually not a service lead."),
        q("What makes a long-tail FAQ useful?", "It answers a real decision question with specificity, honesty, proof, and a clear next step when relevant.", "It supports customer decisions.", "It repeats keywords.", "It hides the main CTA.", "FAQs should help users, not stuff terms."),
        w("Create a zero-volume keyword validation workflow.", "Include source collection, dedupe, intent clustering, SERP inspection, customer evidence, business scoring, action choice, measurement, and stop conditions."),
        w("Score ten roofing long-tail keywords by business value.", "Include urgency, job type, margin, geography, competition, close probability, page fit, ad fit, evidence, and recommendation.")
      ]
    ),

    module(
      "ai-search",
      "9. AI Overviews, AI features, and answer-oriented query behavior",
      "Study AI search features without panic, hype, or fake certainty.",
      ["Observe AI feature presence", "Distinguish informational and local hiring intent", "Build answer-worthy evidence"],
      [
        lesson("AI features are query-dependent", "Google's AI features may appear differently by query, user, context, and time. They should be observed as part of the SERP, not treated as a universal replacement for search.", ["Record presence and citations.", "Compare intent classes.", "Watch changes over time."]),
        lesson("Informational versus hiring intent", "AI summaries may be more visible for research questions than for urgent local hiring paths where maps, ads, LSAs, and organic local pages still matter.", ["Do not ignore research journeys.", "Do not abandon local fundamentals.", "Segment query type."]),
        lesson("Answer-worthy content", "Clear, useful, accurate content grounded in first-hand experience, real projects, expert review, local context, and structured facts is more durable than generic AI content.", ["Add original evidence.", "Avoid fabricated experience.", "Use direct answers plus nuance."]),
        lesson("Measurement limits", "AI feature visibility and traffic attribution can be difficult to isolate. Use query/page trends, referral data where available, conversions, brand search, and manual observation.", ["Anecdotes are not dashboards.", "Document methods.", "Tie to business outcomes."])
      ],
      ["Track AI feature presence for 30 roofing queries.", "Classify which intents trigger AI features.", "Write one answer-worthy roofing content brief with local proof."],
      "You can explain how AI search changes keyword research while still grounding recommendations in evidence.",
      [S.aiFeatures, S.seoStarter, S.essentials, S.performance, S.schema],
      [
        q("How should AI Overviews or AI features be handled in keyword research?", "Document them by query and intent as one search surface, then connect observations to content and business outcomes.", "Observe without panic.", "Assume SEO is dead.", "Ignore them entirely.", "AI features vary and need evidence."),
        q("Which query is more likely to need answer-oriented content?", "does hail damage mean I need a new roof", "roof replacement estimate near me", "roofing company phone number", "roofing jobs hiring", "Research questions need direct helpful answers."),
        q("What makes content more answer-worthy?", "Accurate, useful, specific, first-hand, well-structured information that directly resolves the user's question.", "Evidence and clarity.", "Generic AI text at scale.", "Hidden keyword lists.", "Useful content is the foundation."),
        q("What is dangerous AI-search advice?", "Replace all local SEO, GBP, and paid strategy with generic AI-written articles because AI Overviews exist.", "Overreacting without evidence.", "Observe query patterns.", "Improve useful content.", "AI search changes surfaces but not all journeys."),
        q("How should a roofer study AI feature impact?", "Track priority queries, AI presence, cited sources, page/query trends, conversions, brand effects, and limitations over time.", "Use a documented sample.", "Ask one chatbot once.", "Assume no clicks matter.", "A stable observation protocol beats anecdotes."),
        q("What should local roofing content include?", "Real service experience, local conditions, project proof, process, customer questions, safety, limitations, and next steps.", "First-hand useful details.", "A national generic essay.", "A city name repeated 80 times.", "Local expertise must be real."),
        q("Why does SERP intent matter more with AI features?", "AI features may satisfy broad informational needs while high-intent local hiring still requires trust, proximity, proof, and action paths.", "Different journeys need different assets.", "All queries are now the same.", "Only FAQ pages matter.", "Segmenting intent prevents bad strategy."),
        q("What should be reported about AI visibility?", "Query sample, method, observed AI features, cited source types, client presence, changes, limitations, and business implication.", "Evidence with caveats.", "A guaranteed AI citation score.", "Only screenshots without context.", "AI reporting needs humility."),
        w("Create an AI-feature observation protocol for roofing queries.", "Include query set, intent buckets, location/device/date, AI presence, citations, local surfaces, client/competitor presence, landing pages, changes, and decision rules."),
        w("Write an answer-worthy content brief for hail damage roof inspection.", "Include direct answer, local/storm context, safety, inspection criteria, insurance caution, repair versus replacement nuance, photos/proof, expert review, schema, CTA, and measurement.")
      ]
    ),

    module(
      "pages",
      "10. Turning keyword research into pages, architecture, and content briefs",
      "Convert demand maps into useful website decisions.",
      ["Map intent to page types", "Avoid doorway and cannibalization traps", "Write useful briefs"],
      [
        lesson("One page per intent, not per keyword", "Pages should exist when they help users and support a distinct business purpose, not merely because a keyword variation exists.", ["Cluster related phrases.", "Separate truly different journeys.", "Avoid thin local pages."]),
        lesson("Architecture from demand", "Homepage, service hubs, priority service pages, service area pages, location pages, resources, projects, financing, and contact pages should match real customer needs.", ["Service and location pages need substance.", "Internal links express relationships.", "Navigation should match user tasks."]),
        lesson("Content briefs", "A useful brief includes target intent, audience, decision stage, queries, SERP findings, offer, proof, sections, FAQs, internal links, schema, CTA, exclusions, and measurement.", ["Briefs guide builders.", "Use customer language.", "Include what not to do."]),
        lesson("Cannibalization and consolidation", "Multiple pages can mention the same words; the issue is when pages compete for the same purpose without distinct value.", ["Use query/page data.", "Consolidate or differentiate with evidence.", "Avoid panic over overlap."])
      ],
      ["Turn one demand map into a sitemap recommendation.", "Write a content brief for a roof replacement page.", "Identify two pages that should be consolidated or differentiated."],
      "You can turn keyword research into a website plan that helps customers and search engines.",
      [S.seoStarter, S.essentials, S.performance, S.schema],
      [
        q("When does a query deserve a separate page?", "When it represents a distinct user need the business can serve with useful content, proof, and a measurable action.", "Distinct intent and value.", "Whenever a tool lists a variation.", "Whenever a competitor has one.", "Pages need purpose beyond words."),
        q("What is the best page target for roof replacement estimate oceanside?", "A truthful local roof replacement page or estimate-focused section with service, proof, geography, and conversion path.", "A relevant service page.", "A generic homepage only.", "A fake office page.", "Intent should map to a useful destination."),
        q("What is keyword cannibalization?", "Multiple pages competing for the same purpose without distinct value, diagnosed through intent and performance evidence.", "A page-role issue.", "Any repeated word across pages.", "A formal penalty for synonyms.", "Overlap is not automatically cannibalization."),
        q("What belongs in a content brief?", "Intent, audience, queries, SERP evidence, offer, proof, sections, FAQs, internal links, schema, CTA, measurement, and exclusions.", "A builder-ready plan.", "Only a keyword and word count.", "A copied competitor outline.", "Briefs should translate research into execution."),
        q("What is a doorway-page risk?", "Creating many thin location or keyword pages that exist mainly to capture search traffic without unique usefulness.", "Thin scaled pages are risky.", "Publishing one useful service page.", "Using customer language.", "Search Essentials discourage manipulative pages."),
        q("How should internal links be chosen?", "By relevance, user next step, page hierarchy, and explanatory anchor text.", "Help people and crawlers understand relationships.", "Stuff exact-match anchors everywhere.", "Hide links in footers only.", "Links should be useful."),
        q("Which content decision is strongest?", "Build one excellent replacement page plus useful supporting FAQs/projects when evidence supports the cluster.", "Cluster by intent and value.", "Create a separate page for every city plus every synonym automatically.", "Delete all informational content.", "Useful depth beats thin sprawl."),
        q("How should search research influence page copy?", "Copy should match the user's problem, service, geography, proof needs, objections, and next step in plain language.", "Use research to improve relevance.", "Repeat the exact keyword as often as possible.", "Hide the CTA below long SEO text.", "Keyword research informs communication."),
        w("Write a content brief for a residential roof replacement page.", "Include intent, query cluster, SERP findings, customer problem, offer, proof, sections, FAQs, local relevance, internal links, schema, CTA, measurement, and exclusions."),
        w("Turn a roofing keyword map into a sitemap recommendation.", "Explain which pages to create, consolidate, improve, defer, or reject based on intent, business value, evidence, proof, and maintenance.")
      ]
    ),

    module(
      "ads-offers-reports",
      "11. Turning research into ads, offers, landing pages, and reports",
      "Translate keyword research into action across channels and client communication.",
      ["Build ad groups and offers from intent", "Connect landing pages and measurement", "Report decisions, not dumps"],
      [
        lesson("Ads from intent clusters", "Paid search structure should reflect intent, geography, value, and landing-page promise rather than a chaotic list of keywords.", ["Separate high-value themes.", "Use negatives and match types intentionally.", "Align ads to pages."]),
        lesson("Offers and message match", "Replacement, emergency repair, storm inspection, commercial roofing, and financing queries may need different proof, promise, CTA, and qualification.", ["Match urgency.", "Avoid overpromising.", "Use exclusions where needed."]),
        lesson("Measurement and reporting", "Keyword research should flow into GA4 events, Google Ads conversions, call/form attribution, CRM stages, and reports by demand segment.", ["Raw leads are not equal.", "Use qualified stages.", "Show caveats."]),
        lesson("Client-ready narrative", "A strong report explains what demand exists, what is worth pursuing, what to avoid, what to build, what to buy, how to measure, and what to test next.", ["Lead with decisions.", "Append evidence.", "Avoid spreadsheet theater."])
      ],
      ["Create a paid-search structure from a roofing query map.", "Write three offers matched to intent buckets.", "Build a one-page keyword research report with recommended actions."],
      "You can turn research into campaigns, offers, pages, measurement, and a client conversation.",
      [S.searchTerms, S.matchTypes, S.negatives, S.adsConversions, S.ga4Events, S.gtmDataLayer, S.looker],
      [
        q("What should paid-search ad groups reflect?", "Intent, service, geography, value, landing-page promise, and match/negative strategy.", "Meaningful demand clusters.", "One giant bucket.", "One ad group per every tiny synonym.", "Structure should support learning and relevance."),
        q("Why connect keyword research to offers?", "Different intents require different promises, proof, urgency, qualification, and next steps.", "Offer fit affects conversion quality.", "Every query needs the same discount.", "Offers are unrelated to keywords.", "Searches reveal customer situations."),
        q("What is the best reporting unit?", "Demand segment tied to visibility, traffic, calls/forms, qualified leads, booked jobs, value, caveats, and next decision.", "Decision-oriented segment reporting.", "A list of 500 keywords.", "Average rank alone.", "Reports should guide action."),
        q("A landing page converts poorly for a high-intent keyword. What should you inspect?", "Query promise, ad copy, page message, proof, CTA, form/call path, speed, trust, tracking, qualification, and sales response.", "Trace the whole journey.", "Button color only.", "Keyword volume.", "Conversion is a journey."),
        q("Which offer fits emergency roof leak repair?", "Fast contact path, service availability truth, safety guidance, triage expectations, and direct call option.", "Urgent and practical.", "A long design consultation.", "A generic blog download.", "Offer should match urgency."),
        q("What should a keyword research report avoid?", "Unprioritized exports, vanity metrics, false precision, ranking guarantees, and recommendations detached from business economics.", "Avoid spreadsheet theater.", "Clear next steps.", "Evidence appendices.", "Reports should create clarity."),
        q("Why include CRM stages in keyword reporting?", "Different queries can produce different qualification, appointment, sold-job, and revenue outcomes.", "Lead quality differs by demand segment.", "CRM data is irrelevant.", "Clicks equal jobs.", "Keyword value is downstream."),
        q("What is a good 30-day test plan?", "Choose a small set of high-value intent clusters, define pages/ads/offers, tracking, budget, negatives, quality threshold, and review cadence.", "Focused learning with guardrails.", "Launch every keyword.", "Wait six months before measuring anything.", "Testing should be bounded."),
        w("Create a keyword-to-campaign plan for roof replacement.", "Include intent clusters, match types, negatives, ads, landing pages, offers, conversion events, CRM stages, budget guardrails, and review cadence."),
        w("Write a client-ready keyword research report outline.", "Include executive summary, demand map, SERP evidence, GSC/Ads/GBP findings, competitor ownership, economics, recommendations, risks, 30-day test, and appendix.")
      ]
    ),

    module(
      "capstone",
      "12. Roofing keyword research capstone",
      "Prove you can research, prioritize, activate, and explain search demand for a roofing client.",
      ["Synthesize all evidence sources", "Create a practical action plan", "Present recommendations with caveats"],
      [
        lesson("Capstone scenario", "A roofing client wants more profitable replacement jobs but has mixed repair calls, weak organic service pages, some GBP visibility, and unclear paid-search query quality.", ["This is normal.", "The job is synthesis.", "Evidence should lead to action."]),
        lesson("Full research package", "The package includes query universe, SERP inspection, GSC plan, Ads search-term review, GBP query/local map, competitor ownership, zero-volume opportunities, AI observation, and economics scoring.", ["Each source answers a different question.", "No single tool decides.", "Document uncertainty."]),
        lesson("Activation plan", "Research should become pages, ads, offers, negatives, GBP link choices, tracking specs, dashboards, sales feedback loops, and a 30-day test.", ["Build only what fits.", "Measure quality.", "Iterate deliberately."]),
        lesson("Founder communication", "The best output is a clear story: where profitable demand exists, why it matters, what to build, what to buy, what to avoid, and how we will know if it worked.", ["Plain English wins.", "Caveats build trust.", "Do not bury the owner in rows."])
      ],
      ["Complete the full roofing capstone.", "Record a five-minute walkthrough.", "Revise weak areas after retaking the diagnostic."],
      "You can deliver a roofing keyword research strategy that a client can understand and a marketer can implement.",
      [S.seoStarter, S.performance, S.searchTerms, S.negatives, S.gbpPerformance, S.gbpRanking, S.aiFeatures, S.adsConversions, S.ga4Events],
      [
        q("What is the capstone's primary deliverable?", "A decision-ready search demand plan linking queries to economics, SERPs, competitors, pages, ads, offers, measurement, and tests.", "A practical growth recommendation.", "A giant keyword export.", "A guaranteed rank forecast.", "Capstone mastery is synthesis."),
        q("Which source should decide the strategy alone?", "None; triangulate tool data, SERPs, GSC, Ads terms, GBP, competitors, customer language, and economics.", "Use multiple sources.", "Keyword Planner alone.", "One AI answer.", "No single source sees the whole market."),
        q("A roofer wants replacements but most demand data shows repair. What should you do?", "Separate repair, replacement, storm, and ambiguous intent; test whether repair demand can qualify into replacement without wasting capacity.", "Segment and validate.", "Ignore all repair terms.", "Market repairs as replacements dishonestly.", "Intent and economics need nuance."),
        q("What makes the recommendation trustworthy?", "It states evidence, assumptions, risks, what is known, what is unknown, and the next measurement plan.", "Clear caveats and proof.", "Absolute certainty.", "A bigger spreadsheet.", "Trust comes from honest reasoning."),
        q("What should the local-rank diagnostic contribute?", "A geographic visibility sample interpreted with query value, proximity, competitors, serviceability, and lead outcomes.", "Contextual local evidence.", "Exact market share.", "Guaranteed revenue loss.", "Rank grids are samples."),
        q("What should happen to bad-fit terms?", "They should become negatives, exclusions, separate messaging, deprioritized content, or documented risks depending on channel and evidence.", "Bad demand needs a decision.", "Ignore them.", "Put them in every title.", "Avoiding waste is part of mastery."),
        q("Which capstone page recommendation is strongest?", "Create or improve pages only where distinct intent, proof, business fit, and measurement justify the asset.", "Build useful pages.", "One page per keyword.", "No pages because ads can do everything.", "Activation should match evidence."),
        q("What should the 30-day review inspect?", "Visibility, query mix, CTR, landing behavior, calls/forms, qualified stages, sold jobs, spend, negatives, local changes, and assumptions.", "Demand-to-revenue learning.", "Only rankings.", "Only impressions.", "Review the whole chain."),
        w("Complete the roofing keyword research capstone.", "Include query universe, SERP inspection, GSC/Ads/GBP evidence, competitor map, zero-volume list, AI observation, local-rank grid, economics scoring, page/ad/offer/report plan, risks, and 30-day test."),
        w("Write the five-minute client walkthrough script.", "Explain demand, important queries, competitors, local visibility, bad-fit terms, opportunities, recommended pages/ads/offers, tracking, caveats, and next steps in plain English.")
      ]
    )
  ];

  const total = window.MASTERY_MODULES.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.MASTERY_MODULES.length !== 12 || total !== 120) {
    console.error(`Keyword research mastery content error: expected 12 modules and 120 questions; found ${window.MASTERY_MODULES.length} and ${total}.`);
  }
})();

(() => {
  const S = {
    starter: ["Google SEO Starter Guide", "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"],
    essentials: ["Google Search Essentials", "https://developers.google.com/search/docs/essentials"],
    helpful: ["Helpful, reliable, people-first content", "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"],
    ai: ["AI features and your website", "https://developers.google.com/search/docs/appearance/ai-features"],
    genai: ["Generative AI content guidance", "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"],
    crawl: ["Crawling and indexing overview", "https://developers.google.com/search/docs/crawling-indexing/overview"],
    sitemap: ["Build and submit a sitemap", "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap"],
    canonical: ["Canonical URLs", "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls"],
    mobile: ["Mobile-first indexing", "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing"],
    js: ["JavaScript SEO basics", "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics"],
    titles: ["Title links", "https://developers.google.com/search/docs/appearance/title-link"],
    snippets: ["Snippets and meta descriptions", "https://developers.google.com/search/docs/appearance/snippet"],
    localSchema: ["LocalBusiness structured data", "https://developers.google.com/search/docs/appearance/structured-data/local-business"],
    generalSchema: ["Structured data general guidelines", "https://developers.google.com/search/docs/appearance/structured-data/sd-policies"],
    schemaRoof: ["Schema.org RoofingContractor", "https://schema.org/RoofingContractor"],
    images: ["Google Images SEO", "https://developers.google.com/search/docs/appearance/google-images"],
    cwv: ["Core Web Vitals", "https://developers.google.com/search/docs/appearance/core-web-vitals"],
    pageExperience: ["Page experience", "https://developers.google.com/search/docs/appearance/page-experience"],
    spam: ["Google spam policies", "https://developers.google.com/search/docs/essentials/spam-policies"],
    links: ["Link best practices", "https://developers.google.com/search/docs/crawling-indexing/links-crawlable"],
    searchConsole: ["Search Console guide", "https://developers.google.com/search/docs/monitor-debug/search-console-start"],
    analytics: ["Search Console and Analytics", "https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console"],
    robots: ["Robots meta controls", "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag"],
    openaiBots: ["OpenAI crawlers", "https://developers.openai.com/api/docs/bots"],
    indexNow: ["IndexNow documentation", "https://www.indexnow.org/documentation"],
    accessibility: ["WCAG overview", "https://www.w3.org/WAI/standards-guidelines/wcag/"]
  };

  const o = (score, text) => ({ score, text });
  const q = (prompt, best, acceptable, weak, dangerous, explanation) => ({
    type: "choice", prompt,
    options: [o(5, best), o(3, acceptable), o(1, weak), o(0, dangerous)],
    explanation
  });
  const w = (prompt, rubric) => ({ type: "written", prompt, rubric });
  const lesson = (title, body, bullets) => ({ title, body, bullets });
  const module = (id, title, purpose, objectives, lessons, fieldwork, proof, sources, questions) => ({
    id, title, purpose, objectives, lessons, fieldwork, proof, sources,
    questions: questions.map((question, index) => ({ ...question, id: `${id}-${index + 1}` }))
  });

  window.WEB_MODULES = [
    module(
      "strategy",
      "1. Roofing website strategy, search demand, and business economics",
      "Define the site as a customer-acquisition and trust system before choosing pages, keywords, or technology.",
      ["Connect the website to profitable jobs", "Classify roofing search intent", "Define measurable site outcomes"],
      [
        lesson("The website’s job", "A roofing site must help the right homeowner understand fit, trust the business, and take a measurable next step.", ["Traffic is not the goal.", "The site supports organic, paid, GBP, referrals, and AI-assisted discovery.", "Strategy begins with job mix, geography, capacity, and economics."]),
        lesson("Intent and value", "Replacement, repair, emergency, storm, insurance, commercial, material, and research queries imply different needs.", ["Map each intent to an appropriate page and CTA.", "High volume does not equal high value.", "Ambiguous repair demand may still uncover replacement work."]),
        lesson("Search surfaces", "A website can appear through ordinary organic results, local organic pages, images, videos, featured formats, AI Overviews, AI Mode, and third-party citations.", ["No surface is guaranteed.", "The same page may support multiple journeys.", "GBP and website evidence should corroborate each other."]),
        lesson("Measurement contract", "Define qualified calls, forms, inspections, estimates, booked jobs, revenue, and gross profit.", ["Pageviews and rankings are intermediate signals.", "Call handling affects website ROI.", "Set attribution expectations before launch."])
      ],
      ["Interview a roofer about job mix, margins, capacity, and bad leads.", "Classify 100 roofing queries by intent and page destination.", "Write a one-page website success brief."],
      "You can defend every major website decision using customer intent and business value.",
      [S.starter, S.helpful],
      [
        q("What is the strongest primary goal for a roofing website?", "Create qualified, measurable opportunities that fit the roofer’s service and economics.", "Help relevant customers choose and contact the business.", "Maximize total pageviews.", "Rank number one for every roofing keyword.", "A useful site connects discovery to suitable business outcomes."),
        q("Which query has clearest replacement intent?", "roof replacement estimate in Oceanside", "roofing contractor near me", "how long do shingles last", "roofing jobs hiring", "Service, transaction, and location are explicit in the best query."),
        q("A roofer dislikes repair jobs. What should the site do?", "Clarify service fit and qualification while testing whether some repairs lead to replacement opportunities.", "Separate repair and replacement journeys.", "Hide every mention of repairs without research.", "Send all repair searches to a replacement page.", "The strategy should reflect economics without ignoring customer reality."),
        q("What should determine priority service pages?", "Demand, job value, service capability, geography, evidence, and conversion opportunity.", "Business importance plus distinct customer intent.", "Keyword volume alone.", "Competitor page count.", "A page earns priority through customer and business need."),
        q("Why include informational content?", "To resolve real pre-purchase questions and connect appropriate readers to a useful next step.", "To build topical usefulness and trust.", "To hit a monthly word quota.", "To publish every AI-generated question.", "Information must serve the journey rather than inflate inventory."),
        q("Which metric is closest to value?", "Profitable booked jobs influenced by the site.", "Qualified leads by page and source.", "Average keyword position.", "Total indexed pages.", "The measurement ladder should reach business outcomes."),
        q("How should AI Overviews affect strategy?", "Treat them as another search surface while strengthening durable SEO and useful source content.", "Observe which questions and sources appear.", "Create a separate AI-only website.", "Add an AI schema tag that guarantees citations.", "Google says no special schema or AI file is required."),
        q("When should a site project be postponed?", "When the offer, service area, tracking, response, or business identity is too unclear to build responsibly.", "Until minimum strategy inputs are defined.", "Whenever the domain is new.", "Never; design should begin before discovery.", "Unclear inputs create polished misalignment."),
        w("Write a website strategy brief for a roofing company seeking more replacements in three cities.", "Cover audience, jobs, economics, markets, intent, pages, proof, CTA, acquisition surfaces, capacity, measurement, constraints, and success criteria."),
        w("Explain SEO and AEO to a roofing owner without promising rankings or AI citations.", "Define discoverability and source usefulness, connect them to customers, state shared fundamentals, distinguish outputs from controls, and name uncertainty.")
      ]
    ),

    module(
      "architecture",
      "2. Information architecture, page planning, and internal links",
      "Design a lean site where every page has a distinct customer and search purpose.",
      ["Create service and location architecture", "Prevent thin-page sprawl", "Build meaningful internal links"],
      [
        lesson("Page roles", "Core pages typically include home, services, priority service pages, service area, selected location pages, about/proof, projects, process, financing where applicable, resources, and contact.", ["Every page needs a distinct job.", "Do not create combinations merely because keywords exist.", "Plan ownership and update cadence."]),
        lesson("Services and locations", "Separate pages when intent, proof, copy, offer, or conversion path materially differs.", ["Replacement and emergency repair usually warrant distinct treatment.", "Location pages need local substance.", "A service-area hub can be better than dozens of weak pages."]),
        lesson("Navigation and hierarchy", "Priority pages should be easy for users and crawlers to reach.", ["Use descriptive navigation and breadcrumbs.", "Avoid orphan pages.", "Logical grouping helps understanding and maintenance."]),
        lesson("Internal links", "Links should connect relevant context, proof, and next steps using understandable anchor text.", ["Project pages can support services and locations.", "Guides can link to decisions, not only other guides.", "Do not hide or mechanically stuff links."])
      ],
      ["Create a 20-page roofing sitemap.", "Audit click depth and orphan pages.", "Consolidate a hypothetical set of 100 thin city-service pages."],
      "You can build the smallest architecture that fully represents the real business and customer journey.",
      [S.starter, S.links, S.spam],
      [
        q("When does a service deserve its own page?", "When it serves distinct intent and can provide unique, useful content, proof, and action.", "When the business materially offers and prioritizes it.", "Whenever a keyword tool lists it.", "Only after competitors create one.", "Page separation should improve customer and search understanding."),
        q("What is the main risk of 100 city pages with swapped names?", "Scaled, low-value doorway content that adds little unique help.", "Maintenance, duplication, and weak trust.", "The URLs are too short.", "Google requires at least 200 city pages.", "Mass templating without value can violate spam policies."),
        q("Which site structure is strongest?", "A clear service hub, distinct high-value services, focused area content, proof, resources, and conversion paths.", "A lean hierarchy aligned to real offerings.", "One giant homepage.", "One page per keyword variation.", "Architecture should map business and customer needs."),
        q("What makes a location page useful?", "Local service details, projects, conditions, process, proof, FAQs, and truthful coverage specific to that market.", "Evidence beyond changing the city name.", "A city keyword repeated fifty times.", "A fake office address.", "Local substance and real service capability matter."),
        q("How should internal links be chosen?", "By relevance and what the reader reasonably needs next.", "Use descriptive anchor text to connect related pages.", "Put every keyword in the footer.", "Link every page to every other page.", "Links communicate relationships and support journeys."),
        q("What is an orphan page?", "A page with no meaningful internal links pointing to it.", "A page crawlers and users may struggle to discover.", "A page with no images.", "A page outside WordPress.", "Internal discovery is a core technical and UX concern."),
        q("What should breadcrumbs do?", "Show hierarchy and help users navigate; structured data may clarify them to search engines.", "Reflect the actual site organization.", "Replace the main navigation.", "Stuff every service and city.", "Breadcrumbs are orientation, not a keyword dump."),
        q("A page targets repair and replacement equally. Main concern?", "Mixed intent may weaken message, proof, and CTA clarity if the needs differ.", "Assess whether one hub or distinct pages better serves customers.", "Google forbids two services on one page.", "Duplicate the page immediately.", "Intent and conversion clarity determine the architecture."),
        w("Design a sitemap for a roofing company serving residential replacement, repair, gutters, and commercial work in five markets.", "Explain hubs, service pages, location strategy, proof/projects, resources, navigation, URLs, internal links, and pages deliberately omitted."),
        w("Create rules for deciding whether to create, merge, redirect, noindex, or delete a page.", "Use unique purpose, demand, content value, performance, links, cannibalization, conversion role, replacement URL, technical status, and business need.")
      ]
    ),

    module(
      "ux-copy",
      "3. UX, conversion copy, trust, and mobile-first design",
      "Create pages that help anxious homeowners understand the offer, believe the proof, and act without friction.",
      ["Write intent-matched copy", "Design mobile conversion paths", "Build authentic trust"],
      [
        lesson("Message hierarchy", "The first screen should confirm service, relevance, outcome, proof, and next action.", ["Avoid generic “quality you can trust” language.", "Use plain English.", "Match the query and ad/profile promise."]),
        lesson("Trust system", "Licensing, insurance, warranties, reviews, projects, team, process, financing, manufacturers, and local experience can reduce uncertainty when truthful.", ["Proof should be relevant and specific.", "Do not fabricate first-customer evidence.", "Explain what happens after contact."]),
        lesson("Mobile conversion", "Most local-service journeys require fast, thumb-friendly calls and forms.", ["Test sticky elements and tap targets.", "Keep forms proportionate to the commitment.", "Make the page usable under weak mobile conditions."]),
        lesson("Ethical persuasion", "Use situation-based urgency, not fear or invented scarcity.", ["Explain choices and tradeoffs.", "Avoid guaranteed insurance outcomes.", "Give customers control over the next step."])
      ],
      ["Rewrite 20 generic roofing headlines.", "Wireframe a mobile replacement page.", "Run five-second and task-completion tests with non-marketers."],
      "A homeowner can identify fit, trust, and next step within seconds.",
      [S.helpful, S.pageExperience, S.accessibility],
      [
        q("What is weak about “Quality roofing services you can trust”?", "It is generic and unsupported, with no service fit, outcome, or proof.", "It needs specificity and evidence.", "It lacks enough keywords.", "Google penalizes the word trust.", "Trust should be earned through useful specifics."),
        q("What belongs near the top of a replacement page?", "Clear service/outcome, market context, relevant proof, CTA, and process expectation.", "The information needed to confirm fit and act.", "The full company history.", "Every service link.", "The first screen should orient the decision."),
        q("Which CTA is strongest?", "Schedule a roof inspection and get clear next-step options.", "Request a roof replacement estimate.", "Submit.", "Click here.", "A useful CTA names the action and expected value."),
        q("What form strategy is strongest?", "Ask only what is needed to begin a useful response, then qualify further in follow-up.", "Balance friction with operational needs.", "Require 20 fields from every visitor.", "Remove all alternatives to the form.", "Early trust and commitment should match form demands."),
        q("Which proof is most persuasive?", "A relevant local project with specifics, authentic review, credentials, and process evidence.", "Proof matching the page’s service and concern.", "A generic badge wall.", "A claim that every customer is satisfied.", "Specific corroborated proof reduces uncertainty."),
        q("A sticky call button covers content. Priority?", "Fix the obstruction while preserving an accessible, usable action.", "Test on real devices and screen sizes.", "Keep it because calls matter more than content.", "Hide content behind the button.", "Conversion elements must not make the page unusable."),
        q("How should financing be presented?", "Accurately, with eligibility and terms clearly framed and no misleading affordability promise.", "As one decision aid where genuinely available.", "Guaranteed approval for everyone.", "As the only reason to choose the roofer.", "Financial claims require precision."),
        q("What makes a five-second test useful?", "It reveals whether users grasp service, business, relevance, trust cue, and action quickly.", "Use it as one qualitative input.", "It predicts exact conversion rate.", "It replaces analytics.", "The test diagnoses first-impression clarity."),
        w("Write a hero, proof block, process summary, and CTA for a roof-replacement page.", "Score intent match, plain language, customer outcome, credible proof, anxiety reduction, process clarity, geographic truth, and action."),
        w("Audit a mobile roofing page that gets traffic but few calls.", "Inspect intent/message, load/usability, CTA visibility/function, trust, forms, phone tracking, accessibility, proof, response expectations, and traffic quality.")
      ]
    ),

    module(
      "technical",
      "4. Technical SEO, crawling, indexing, canonicals, and site launches",
      "Ensure search systems can discover, render, index, and consolidate the correct roofing pages.",
      ["Audit indexability", "Use robots, canonicals, redirects, and sitemaps correctly", "Launch and migrate safely"],
      [
        lesson("Eligibility for Search", "Pages generally need accessible content, a successful response, and indexable content to appear.", ["Robots.txt controls crawling, not reliable deindexing.", "Noindex requires crawler access to be seen.", "Login walls and blocked resources can prevent understanding."]),
        lesson("Canonicalization", "Duplicate or similar URLs need a preferred canonical selected through consistent signals.", ["Redirects and rel=canonical are strong signals.", "Sitemap inclusion is weaker.", "Do not canonicalize genuinely distinct local pages to one generic page."]),
        lesson("Sitemaps and links", "Sitemaps help discovery but do not guarantee indexing.", ["Include preferred, indexable URLs.", "Keep lastmod truthful.", "Internal links remain essential."]),
        lesson("Launch discipline", "A launch requires crawl/index QA, redirects, analytics, Search Console, backups, forms, speed, schema, and rollback planning.", ["Remove staging noindex carefully.", "Preserve high-value URLs where possible.", "Monitor errors and traffic after release."])
      ],
      ["Trace indexability for 30 URLs.", "Build a redirect map for a redesign.", "Run a prelaunch and postlaunch technical checklist."],
      "You can prevent a technically beautiful site from disappearing from search.",
      [S.crawl, S.sitemap, S.canonical, S.js],
      [
        q("A replacement page is absent from Google. What comes first?", "Check response, robots, noindex, canonical, rendering, internal links, sitemap, and URL Inspection.", "Verify crawlability and indexability before content promotion.", "Buy links.", "Repeat the keyword more often.", "Technical eligibility precedes ranking tactics."),
        q("Does robots.txt remove a page from the index?", "Not reliably; it blocks crawling, and the URL may still be indexed without content.", "Use noindex when removal from Search is the goal and crawling is allowed.", "Yes, immediately.", "Only on mobile.", "Crawl control and indexing control are different."),
        q("What happens if a noindex page is blocked by robots.txt?", "Google may not see the noindex directive.", "Allow crawling long enough for the directive to be processed.", "It is guaranteed to disappear.", "The canonical tag overrides everything.", "Robots blocking can hide page-level directives."),
        q("Which canonical signal is strongest?", "A redirect or rel=canonical used consistently with internal links and sitemaps.", "Multiple aligned signals.", "A sitemap alone.", "A canonical pointing in a chain.", "Canonicalization works best through consistency."),
        q("What belongs in the XML sitemap?", "Preferred, indexable, canonical URLs the business wants discovered.", "Accurate lastmod values where maintained.", "Every parameter and staging URL.", "Only the homepage.", "A sitemap should represent intended index inventory."),
        q("A redesign changes every URL unnecessarily. Main risk?", "Lost signals, broken links, redirect errors, and avoidable search disruption.", "Migration complexity and tracking gaps.", "Google rewards fresh URLs.", "No risk if the design is prettier.", "URL continuity reduces migration uncertainty."),
        q("Why can JavaScript cause SEO problems?", "Important content or links may fail to render, be blocked, delayed, or differ from user-visible content.", "Test rendered HTML and crawl paths.", "Google cannot process any JavaScript.", "All JavaScript sites rank poorly.", "JS is supported but must be implemented and tested."),
        q("What is the staging-site launch trap?", "Leaving noindex, robots blocks, authentication, canonicals, or asset URLs configured for staging.", "Failing to compare production output before and after launch.", "Using a staging environment.", "Testing forms before launch.", "Environment controls must be deliberately reversed."),
        w("Write a technical SEO launch checklist for a new roofing site.", "Cover DNS/HTTPS, response codes, index controls, canonicals, redirects, sitemaps, robots, rendering, internal links, schema, CWV, mobile, analytics, Search Console, forms, backups, and monitoring."),
        w("Diagnose a traffic collapse after a WordPress redesign.", "Compare dates and changes; inspect redirects, noindex/robots, canonicals, URLs, templates, rendering, analytics, GSC, server errors, internal links, content loss, and rollback options.")
      ]
    ),

    module(
      "onpage-local",
      "5. On-page SEO, local relevance, titles, snippets, and entities",
      "Make every important page understandable, distinct, and aligned with real roofing intent and markets.",
      ["Write useful titles and headings", "Build local relevance without doorway pages", "Align website and business identity"],
      [
        lesson("Page signals", "Titles, headings, body copy, links, images, and structured data should consistently describe the page’s real purpose.", ["Write for users first.", "Avoid repetitive keyword variants.", "Ensure important facts are textual."]),
        lesson("Titles and snippets", "Google may create title links and snippets from multiple page sources.", ["Use concise, descriptive, distinct titles.", "Meta descriptions can influence snippets but are not guaranteed.", "Avoid boilerplate and stuffing."]),
        lesson("Local relevance", "Use genuine service-area, project, climate, material, process, and customer evidence.", ["Do not invent offices.", "Location pages need distinct value.", "Connect GBP and website facts."]),
        lesson("Entity clarity", "Consistent name, phone, website, services, people, credentials, and profiles help machines and customers understand the business.", ["Link authoritative profiles where useful.", "Use organization/local business markup accurately.", "Entity clarity is not a magic knowledge-panel switch."])
      ],
      ["Write titles and descriptions for 20 pages.", "Build a location-page evidence template.", "Audit entity consistency across the site and GBP."],
      "You can create distinct pages that earn relevance through useful evidence rather than keyword density.",
      [S.titles, S.snippets, S.localSchema, S.starter],
      [
        q("What is the strongest title for a replacement page?", "Roof Replacement in Oceanside | Coastal Roofing", "Roof Replacement Options for Oceanside Homeowners | Coastal Roofing", "Roof Roof Replacement Best Roofer Near Me", "Home", "A useful title identifies page purpose and business without stuffing."),
        q("Does Google always use the title element?", "No; Google can generate title links from several page and link sources.", "The title element remains an important input.", "Yes, verbatim.", "Only if schema is absent.", "Title links are algorithmically generated."),
        q("What is a meta description’s role?", "Provide a useful summary Google may use as the snippet.", "Influence click understanding without guaranteeing display.", "Directly determine ranking position.", "Hide keywords from users.", "Descriptions support snippets and customer choice."),
        q("What makes local copy credible?", "Real projects, service conditions, areas, processes, proof, and customer questions.", "Specific local substance tied to the business.", "Repeating the city after every sentence.", "Claiming an office in every city.", "Local relevance comes from reality and usefulness."),
        q("Should every nearby city get a page?", "Only when the page has a distinct customer/search purpose and enough genuine value.", "Prioritize important markets and real evidence.", "Yes, every city within 100 miles.", "No location page can ever be useful.", "Page creation should follow value, not a city list."),
        q("What is the best H1?", "A clear human-readable statement of the page’s primary service or topic.", "One main heading aligned with intent.", "A list of 30 keywords.", "The domain name only.", "Headings organize understanding rather than satisfy a rigid formula."),
        q("How should the GBP and site relate?", "They should accurately corroborate business identity, services, location/service area, hours, and contact paths.", "Use consistent real-world facts.", "The site should claim more locations than GBP.", "They must use identical wording everywhere.", "Consistency means truth, not mechanical duplication."),
        q("What is keyword cannibalization?", "Multiple pages competing for the same purpose without distinct value, requiring evidence-based consolidation or differentiation.", "A possible architecture issue, not any keyword overlap.", "Two pages mentioning roofing.", "A Google penalty for synonyms.", "Intent and page role matter more than word overlap."),
        w("Create an on-page specification for a residential roof-replacement page.", "Include title, description, H1, intent, sections, entities, proof, media, internal links, FAQs, CTA, schema, local evidence, and exclusions."),
        w("Audit three city pages that differ only by city name.", "Assess purpose, uniqueness, performance, proof, serviceability, doorway risk, consolidation, redirect/canonical choices, and a better hub/location strategy.")
      ]
    ),

    module(
      "content",
      "6. Roofing expertise, helpful content, E-E-A-T, and editorial systems",
      "Publish first-hand, reliable roofing information that helps customers make decisions and can serve as a source.",
      ["Demonstrate experience and expertise", "Build answer-worthy content", "Use AI responsibly in production"],
      [
        lesson("People-first purpose", "Content should help an intended audience accomplish a roofing decision, not exist mainly to attract search visits.", ["Use first-hand experience.", "Answer the question fully enough for the user.", "Connect advice to service boundaries and safety."]),
        lesson("Trust and attribution", "Explain who created or reviewed important content, why they are qualified, and when it was updated.", ["Use real authors or reviewers.", "Cite authoritative sources for codes, manufacturers, insurance, and safety.", "Correct errors visibly."]),
        lesson("Roofing source content", "Useful content can include inspection methods, material comparisons, climate effects, project evidence, costs with assumptions, timelines, warranties, storm steps, and decision criteria.", ["Avoid universal pricing claims.", "Use original photos and examples.", "Separate education from sales claims."]),
        lesson("Generative AI", "AI can assist research, structure, and drafting, but scaled low-value output can violate spam policies.", ["Fact-check every claim.", "Add first-hand value and editorial responsibility.", "Do not fabricate projects, quotes, credentials, or local knowledge."])
      ],
      ["Create an editorial standard and author-review workflow.", "Turn one completed project into five useful content assets.", "Red-team ten AI-generated roofing claims."],
      "Your content shows real experience, reliable sourcing, and editorial accountability.",
      [S.helpful, S.genai, S.spam],
      [
        q("What is the strongest content idea?", "A documented local roof-replacement case explaining condition, options, decision, process, and outcome.", "A first-hand guide answering a recurring customer decision.", "A generic 2,000-word definition of roof.", "100 AI city articles with no field input.", "Original experience creates differentiated usefulness."),
        q("What does E-E-A-T stand for in practice?", "Experience, expertise, authoritativeness, and trust, with trust most central.", "Signals readers and systems use to assess reliability.", "A schema type that guarantees rank.", "A required numeric score.", "E-E-A-T is a quality framework, not a direct public metric."),
        q("When should an author or reviewer be shown?", "When it helps users understand who is responsible and qualified, especially for consequential guidance.", "Use genuine attribution and credentials.", "Only on the homepage.", "Invent an expert persona for every page.", "Clear authorship supports trust."),
        q("What is wrong with a roof-cost article giving one exact universal price?", "It ignores scope, market, material, tear-off, decking, code, access, and timing variables.", "Use ranges or examples with assumptions and dates.", "Google requires exact prices.", "Costs never belong in content.", "Reliable content communicates uncertainty."),
        q("How may generative AI be used responsibly?", "As an assistive tool inside a human-owned research, verification, experience, and editing process.", "For outlines or drafts that receive substantive review.", "To mass-publish without reading.", "To invent customer stories.", "Tool use is not the issue; scaled low-value or deceptive output is."),
        q("What makes content answer-worthy?", "A clear direct answer supported by specifics, evidence, context, and useful next steps.", "Structured writing that still serves humans.", "A one-sentence answer repeated many times.", "Special AEO markup.", "Answer quality and source credibility matter."),
        q("What should be cited?", "External facts where authority matters, such as codes, safety, manufacturer specs, and public data.", "Sources that let readers verify consequential claims.", "The company’s own opinion about itself.", "Nothing; external links leak authority.", "Citations support verifiability and trust."),
        q("When should old content be updated?", "When facts, services, pricing context, regulations, links, examples, or user needs materially change.", "Use real review dates and substantive improvements.", "Change the date monthly without edits.", "Never; age proves authority.", "Freshness should reflect genuine maintenance."),
        w("Design a roofing editorial standard for human and AI-assisted content.", "Include audience, intent, research, field input, sources, authorship, fact-checking, claims, media rights, review, disclosure where useful, updates, and no-scaled-content rules."),
        w("Outline an answer-worthy article: “Does hail damage mean I need a new roof?”", "Give a nuanced direct answer, safety/inspection context, damage variables, repair/replacement criteria, insurance caution, evidence, local relevance, expert review, and CTA without guarantees.")
      ]
    ),

    module(
      "structured-media",
      "7. Structured data, images, video, and machine-readable clarity",
      "Use valid markup and media metadata to describe visible roofing content accurately without treating schema as a ranking shortcut.",
      ["Implement accurate entity markup", "Optimize visual assets", "Validate and monitor structured data"],
      [
        lesson("Structured data role", "Schema provides explicit classification of visible page information and may enable eligible search features.", ["It does not guarantee rich results.", "Markup must match visible content.", "Choose the most specific supported type that is true."]),
        lesson("Roofing entities", "Schema.org defines RoofingContractor beneath HomeAndConstructionBusiness and LocalBusiness.", ["Use Organization or LocalBusiness identity thoughtfully.", "Mark real name, URL, phone, address where public/appropriate, areas, hours, images, and profiles.", "Do not create fake ratings or locations."]),
        lesson("Images and video", "Use descriptive filenames, relevant alt text, surrounding context, quality dimensions, and accessible delivery.", ["Alt text describes function/content, not keywords.", "Original project images are evidence.", "Video transcripts and textual summaries improve access and understanding."]),
        lesson("Validation", "Test markup, inspect rendered pages, monitor Search Console enhancements, and update it with visible facts.", ["Critical errors can break eligibility.", "Warnings are not always blockers.", "Plugins can emit conflicting graphs."])
      ],
      ["Build a JSON-LD graph for a roofing business and one service page.", "Audit 50 images for purpose, alt text, size, and rights.", "Run Rich Results Test and schema validation."],
      "Your markup and media clarify truthful visible information and survive validation.",
      [S.localSchema, S.generalSchema, S.schemaRoof, S.images],
      [
        q("What does structured data guarantee?", "Nothing; valid markup can establish eligibility but not display or ranking.", "It helps systems understand page entities and properties.", "Top-three ranking.", "AI Overview citation.", "Eligibility and serving remain algorithmic."),
        q("Which schema type is semantically relevant to a roofer?", "RoofingContractor where it accurately represents the business.", "A suitable LocalBusiness subtype.", "Restaurant.", "Product for the entire company.", "Schema.org provides a RoofingContractor type."),
        q("Can a service-area roofer mark a fake storefront address?", "No; structured data should match truthful visible and business information.", "Use only accurate appropriate location data.", "Yes, schema is hidden.", "Only if GBP hides it.", "Markup is not a place to invent eligibility."),
        q("What should aggregateRating represent?", "Genuine ratings displayed on the site and compliant with applicable structured-data rules.", "Visible, supportable rating data.", "The GBP rating copied invisibly onto every page.", "A desired five-star score.", "Structured data must match visible, legitimate content."),
        q("What is strong alt text?", "A concise description of the image’s meaningful content or function in context.", "Useful text for users who cannot see the image.", "A list of cities and services.", "The image filename repeated.", "Accessibility purpose comes first."),
        q("Why include video transcripts?", "They make spoken information accessible and available in textual form for users and systems.", "They support comprehension and discoverability.", "They guarantee video rankings.", "Google cannot understand any video.", "Text complements visual/audio content."),
        q("What should happen after markup deployment?", "Validate, inspect rendered output, monitor Search Console, and keep it synchronized with visible content.", "Fix critical errors and review warnings.", "Forget it permanently.", "Add more types until validation passes.", "Structured data is maintained code."),
        q("A plugin outputs three conflicting Organization entities. Best action?", "Consolidate to a coherent graph representing the actual entities and pages.", "Audit IDs, properties, and visible facts.", "Add a fourth entity.", "Hide the conflict with CSS.", "Entity duplication can create ambiguity."),
        w("Specify a structured-data graph for a roofing website.", "Include WebSite/Organization or LocalBusiness/RoofingContractor, stable IDs, contact/location truth, sameAs, services or page entities where useful, breadcrumbs, articles, visible alignment, and validation."),
        w("Create an image and video optimization SOP.", "Cover purpose, rights, capture, filenames, formats, dimensions, compression, responsive delivery, alt text, captions, transcripts, context, lazy loading, sitemaps where useful, and QA.")
      ]
    ),

    module(
      "performance",
      "8. Performance, Core Web Vitals, accessibility, security, and engineering quality",
      "Ship a fast, stable, accessible, secure site that works for customers and crawlers under real mobile conditions.",
      ["Interpret Core Web Vitals", "Build accessibility into components", "Manage WordPress and hosting risk"],
      [
        lesson("Core Web Vitals", "Current metrics are LCP for loading, INP for responsiveness, and CLS for visual stability.", ["Use field data where available.", "Good targets are assessed at the 75th percentile.", "CWV supports page experience but relevance remains essential."]),
        lesson("Performance engineering", "Optimize server response, images, fonts, CSS/JS, third parties, caching, and rendering.", ["Fix the largest bottlenecks first.", "Test representative templates.", "Do not chase a lab score while forms fail."]),
        lesson("Accessibility", "Use semantic HTML, keyboard access, labels, contrast, focus, headings, alt text, error messaging, and reduced-motion awareness.", ["Accessibility improves customer reach and usability.", "Automated tools catch only part of the problem.", "Forms and navigation deserve manual testing."]),
        lesson("Security and reliability", "Use HTTPS, updates, least privilege, backups, monitoring, spam protection, and tested recovery.", ["Plugin bloat expands risk.", "Security incidents can harm users and search visibility.", "Choose maintainable technology."])
      ],
      ["Profile three templates in PageSpeed Insights.", "Complete a keyboard and screen-reader smoke test.", "Create a WordPress maintenance and recovery plan."],
      "The site remains usable, stable, and maintainable under realistic devices, networks, and failures.",
      [S.cwv, S.pageExperience, S.accessibility],
      [
        q("What are the current Core Web Vitals?", "LCP, INP, and CLS.", "Loading, responsiveness, and visual stability metrics.", "FCP, FID, and bounce rate.", "PageSpeed score, word count, and HTTPS.", "FID was replaced by INP as a Core Web Vital."),
        q("What is a good LCP threshold?", "2.5 seconds or less at the 75th percentile.", "Use field data across relevant users when available.", "Exactly zero.", "Under ten seconds.", "Google’s good threshold is 2.5 seconds."),
        q("What does CLS measure?", "Unexpected visual layout shifts.", "Visual stability during the page lifecycle.", "Server response time.", "Link authority.", "CLS is a user-experience stability metric."),
        q("Lab score is 45 but field data is good. What next?", "Investigate lab bottlenecks and user segments without assuming the field experience is universally bad.", "Use both datasets and template-level evidence.", "Delete all images.", "Ignore all performance work.", "Lab and field data answer different questions."),
        q("Which image strategy is strongest?", "Serve appropriately sized modern formats with dimensions, compression, responsive sources, and thoughtful loading.", "Optimize hero and project assets by context.", "Upload full-resolution camera files everywhere.", "Lazy-load the LCP image blindly.", "Image delivery is a major performance lever."),
        q("What is an accessibility smoke test?", "Keyboard navigation, visible focus, labels, headings, contrast, zoom, errors, and basic assistive-technology checks.", "A manual complement to automated scanning.", "Running Lighthouse once.", "Adding an accessibility widget only.", "Accessibility requires component and task testing."),
        q("What is the biggest WordPress risk pattern?", "Outdated overlapping plugins, weak access control, poor backups, and unmaintained custom code.", "Complexity without ownership.", "Using WordPress itself.", "Having fewer than 20 plugins.", "Risk comes from maintenance and architecture."),
        q("A third-party chat widget delays interaction. Best response?", "Measure business value and performance cost, then defer, optimize, replace, or remove it.", "Load it conditionally if justified.", "Keep it because all competitors have one.", "Hide the delay from reports.", "Third parties must earn their cost."),
        w("Create a performance budget for a roofing site.", "Set template-specific targets for LCP/INP/CLS, assets, JS/CSS, fonts, third parties, server response, field monitoring, ownership, exceptions, and regression gates."),
        w("Audit the accessibility of a roofing lead form.", "Inspect labels, instructions, keyboard/focus, errors, contrast, input types, autocomplete, target size, screen-reader feedback, privacy, confirmation, and alternatives.")
      ]
    ),

    module(
      "authority",
      "9. Links, local prominence, digital PR, and off-site corroboration",
      "Earn discovery and authority through real relationships, useful assets, reputation, and consistent business evidence.",
      ["Evaluate links by relevance and trust", "Design local promotion", "Avoid link spam"],
      [
        lesson("Link discovery and authority", "Search systems use crawlable links to discover pages and understand relationships.", ["Anchor text should be descriptive.", "Relevant third-party links can corroborate expertise and prominence.", "No public domain metric is a Google ranking score."]),
        lesson("Earned promotion", "Projects, data, guides, community work, manufacturer relationships, associations, and expert commentary can attract mentions and links.", ["Promote useful assets to real audiences.", "Local sponsorships should have genuine business/community value.", "Digital PR is not a guaranteed-link vending machine."]),
        lesson("Local corroboration", "GBP, directories, associations, licenses, manufacturers, social profiles, and press should accurately reflect the business.", ["Fix meaningful identity errors.", "Prioritize sources customers use.", "Do not chase every low-quality directory."]),
        lesson("Spam boundaries", "Buying manipulative links, excessive exchanges, automated link creation, and scaled guest posts can violate policies.", ["Paid links need appropriate qualification.", "Audit toxic tactics without promising magical disavowal gains.", "Authority compounds through reputation."])
      ],
      ["Build a 50-prospect promotion list around one useful roofing asset.", "Audit links and local mentions for five competitors.", "Design a six-month local prominence plan."],
      "You can promote the roofing business without turning authority building into a link-count scheme.",
      [S.links, S.spam, S.helpful],
      [
        q("Which link is most valuable conceptually?", "A relevant editorial mention from a trusted local or industry source earned by useful work.", "A link real customers may encounter and trust.", "1,000 automated directory links.", "A hidden paid sitewide footer link.", "Relevance, trust, and editorial context beat raw count."),
        q("What makes anchor text useful?", "It describes the linked destination naturally in context.", "It helps users and crawlers anticipate the page.", "It repeats the exact keyword every time.", "It says click here everywhere.", "Descriptive links support understanding."),
        q("Which roofing asset is promotable?", "Original storm-impact data or a documented material-comparison guide with local expertise.", "A useful project or research resource.", "A generic AI article.", "A copied manufacturer brochure.", "Distinct evidence gives others a reason to cite."),
        q("Are sponsorship links always safe?", "No; sponsorship should be genuine, and paid link treatment should follow search policies.", "Evaluate audience value and link qualification.", "Yes, every paid link transfers authority.", "Only sports sponsorships count.", "Commercial relationships need policy-aware handling."),
        q("What should citation cleanup prioritize?", "Authoritative, customer-visible sources with materially incorrect business identity.", "Accuracy where it affects discovery and trust.", "Every obscure scraper.", "Changing all abbreviations to identical text.", "Not all mentions deserve equal effort."),
        q("A vendor guarantees 100 high-DA links. Main concern?", "The metric is third-party and the acquisition method may be irrelevant or manipulative.", "Ask for source, editorial process, audience, and policy risk.", "Google requires DA above 50.", "Guaranteed volume is proof of quality.", "Google does not use public DA as its ranking score."),
        q("What is digital PR’s business role?", "Earn attention, credibility, mentions, links, and brand demand from genuinely newsworthy or useful work.", "Support prominence beyond rankings.", "Manufacture fake news coverage.", "Replace customer service.", "Authority work should reach real audiences."),
        q("When should disavow be considered?", "In limited cases involving substantial unnatural links and manual-action risk, with expert caution.", "Not as routine cleanup for every weak link.", "Monthly for all sites.", "Whenever rankings fall.", "Google advises caution; most sites do not need routine disavowal."),
        w("Create an ethical link and local-prominence plan for a roofing company.", "Include linkable assets, partners, manufacturers, associations, projects, community work, PR targets, outreach value, paid-link treatment, tracking, and prohibited tactics."),
        w("Audit a competitor with far more links.", "Segment quality/relevance, local/industry sources, brand assets, linkable pages, history, spam, customer visibility, realistic opportunities, and what cannot be copied quickly.")
      ]
    ),

    module(
      "aeo",
      "10. Answer Engine Optimization, AI Overviews, and LLM discovery",
      "Make the roofing site usable as a reliable source while applying product-specific crawler and preview controls accurately.",
      ["Use Google’s AI-feature requirements correctly", "Create source-ready answers", "Separate search, training, and user-agent controls"],
      [
        lesson("Google AI features", "To be a supporting link in AI Overviews or AI Mode, a page must be indexed and snippet-eligible; Google says there are no additional technical requirements.", ["Existing SEO fundamentals remain worthwhile.", "Important content should be textual.", "No special AI file or schema is required."]),
        lesson("Source readiness", "Answer-first structure, explicit entities, first-hand evidence, citations, definitions, comparisons, constraints, dates, and clear page purpose make content easier to use and verify.", ["Do not sacrifice human readability.", "Avoid unsupported certainty.", "Use original media and examples."]),
        lesson("Google controls", "Googlebot governs Search crawling; snippet controls such as nosnippet, data-nosnippet, max-snippet, and noindex affect what Search can use or show.", ["Google-Extended concerns some other Gemini training/grounding uses.", "It does not replace Googlebot controls for Search.", "Recrawling takes time."]),
        lesson("OpenAI controls", "OAI-SearchBot is used for ChatGPT search; GPTBot concerns potential foundation-model training; ChatGPT-User is user-triggered.", ["The controls are independent.", "Allowing search does not require allowing training.", "Robots updates may take time to affect search systems."])
      ],
      ["Rewrite five pages into answer-first source sections.", "Audit robots rules for Google and OpenAI agents.", "Create an AI-citation observation log without claiming causality."],
      "You can improve source quality and configure crawlers without inventing AEO technology.",
      [S.ai, S.robots, S.openaiBots, S.helpful],
      [
        q("What extra technical requirement does Google impose for AI Overviews?", "None beyond being indexed, Search-eligible, and snippet-eligible.", "Existing SEO technical requirements apply.", "An llms.txt file.", "AIOverview schema.", "Google explicitly says there are no additional technical requirements."),
        q("Does Google require special AI structured data?", "No; accurate structured data matching visible content remains useful, but no special AI schema is required.", "Use normal supported markup appropriately.", "Yes, add AEO schema.", "Only FAQ schema enables AI Overviews.", "No special schema.org markup is required."),
        q("Where does Google report AI Overview and AI Mode traffic?", "Within Search Console’s overall Web performance reporting.", "Combine it with Analytics and conversion data.", "In a separate guaranteed AI report.", "Only in GBP Performance.", "Google incorporates AI features into Web search reporting."),
        q("Which control affects Google Search AI-feature snippets?", "Googlebot access plus noindex/nosnippet/data-nosnippet/max-snippet controls.", "Search preview controls processed by Googlebot.", "Google-Extended alone.", "GPTBot.", "Search controls and other AI-use controls are distinct."),
        q("What does Google-Extended control?", "Some Gemini model training and grounding uses outside the Google Search crawling control.", "A separate product control from Googlebot.", "Whether pages appear in AI Overviews.", "Whether Google indexes the site.", "Google’s documentation distinguishes Google-Extended from Search."),
        q("Which OpenAI bot supports ChatGPT search inclusion?", "OAI-SearchBot.", "It can be allowed independently from training.", "GPTBot only.", "ChatGPT-User only.", "OpenAI documents OAI-SearchBot as the search crawler."),
        q("What does disallowing GPTBot indicate?", "The content should not be used for training OpenAI’s generative AI foundation models.", "It is independent from OAI-SearchBot.", "The site must disappear from ChatGPT search.", "Users cannot open the page.", "OpenAI separates training and search controls."),
        q("Which answer format is strongest?", "A direct nuanced answer followed by evidence, conditions, examples, source attribution, and next steps.", "Clear scannable sections that remain useful to humans.", "A list of disconnected one-line answers.", "Hidden text written for LLMs.", "Source readiness comes from quality and clarity."),
        w("Create an AEO/source-readiness template for a roofing question page.", "Include concise answer, entity/topic clarity, conditions, evidence, firsthand experience, citations, tables/lists where useful, media, safety, date/reviewer, related links, CTA, and no unsupported guarantee."),
        w("Write a crawler-policy recommendation for a roofer that wants Search and ChatGPT discovery but does not want model training.", "Address Googlebot, Google Search preview controls, Google-Extended limits, OAI-SearchBot, GPTBot, ChatGPT-User nuance, CDN/firewall access, verification, monitoring, and business/legal choice.")
      ]
    ),

    module(
      "measurement-launch",
      "11. Search Console, analytics, rank tracking, QA, and continuous improvement",
      "Launch, measure, diagnose, and maintain the website using reproducible evidence.",
      ["Configure measurement", "Interpret search and local-rank data", "Run a disciplined improvement cadence"],
      [
        lesson("Search Console", "Verify ownership, inspect URLs, submit sitemaps, monitor indexing, performance, enhancements, links, manual actions, and security issues.", ["Search Console is sampled and delayed.", "Queries and pages need segmentation.", "Use annotations for launches and changes."]),
        lesson("Analytics and conversions", "Track calls, forms, qualified leads, appointments, customers, and revenue while respecting privacy and consent.", ["Test events and deduplication.", "Use UTMs consistently.", "Reconcile platform and CRM data."]),
        lesson("Rank diagnostics", "Track priority queries with stable geography and methodology, including local/organic grids where useful.", ["Rank is not traffic or revenue.", "Separate brand and non-brand.", "Use top-3/top-10 share, not only average."]),
        lesson("Improvement cycle", "Review technical health, queries, pages, CTR, conversions, content, links, local visibility, and business outcomes at the cadence each needs.", ["Change one major variable when testing.", "Account for seasonality and lag.", "Retire pages and features that do not earn their cost."])
      ],
      ["Build a launch measurement plan.", "Create a weekly SEO scorecard.", "Diagnose three hypothetical traffic drops."],
      "You can distinguish ranking, traffic, engagement, lead quality, and business value.",
      [S.searchConsole, S.analytics, S.ai, S.indexNow],
      [
        q("What should Search Console be used for first?", "Verifying how Google discovers, indexes, and displays the site, then monitoring search performance.", "Technical and query/page diagnosis.", "Exact revenue attribution.", "Daily rank guarantees.", "Search Console is a Search diagnostics system."),
        q("What does an impression mean?", "A result was shown or otherwise counted under Search Console’s feature rules, not that a person visited.", "A visibility event requiring click and conversion context.", "A website session.", "A qualified lead.", "Impression, click, and customer are different stages."),
        q("CTR falls while position and clicks rise. Best interpretation?", "More broad impressions or changed SERP context may lower rate while total traffic improves.", "Segment query/page/device/country and compare outcomes.", "The SEO failed.", "Rewrite every title immediately.", "Aggregate ratios can hide growth and mix changes."),
        q("How should AI-feature traffic be measured?", "Through overall Web Search Console data plus analytics and conversions, acknowledging limited feature separation.", "Observe query/page shifts and business quality.", "With a guaranteed AI citation counter.", "By asking one chatbot once.", "Current Google reporting is integrated rather than fully separated."),
        q("What should rank tracking control?", "Query, location, device/method, grid points, timing, competitor set, and not-found handling.", "Use the same protocol for trends.", "Only the color palette.", "Nothing; rankings are universal.", "Stable sampling improves interpretation."),
        q("What does IndexNow do?", "Notifies participating search engines of URL changes; it does not guarantee crawling or indexing.", "Can speed discovery for supported engines.", "Guarantees Google rankings.", "Replaces sitemaps and links everywhere.", "Submission is a notification, not an outcome."),
        q("What belongs in a post-launch review?", "Indexing, errors, redirects, analytics, conversions, CWV, forms, schema, rankings, traffic, security, and business outcomes.", "Compare against baseline and launch notes.", "Only homepage appearance.", "Wait six months before checking anything.", "Early detection prevents compounding issues."),
        q("When should a page be judged?", "After enough crawl, index, traffic, and conversion time for its purpose and market, unless a clear defect exists.", "Use leading and lagging indicators.", "The day after publication.", "Only after it ranks number one.", "Evaluation windows depend on evidence and urgency."),
        w("Build a measurement plan for a new roofing website.", "Include GSC, analytics, consent, calls/forms, qualified stages, CRM, UTMs, rank protocol, GBP, AI observation, dashboards, QA, alerts, baselines, owners, and reporting caveats."),
        w("Diagnose a 40% organic traffic decline.", "Validate tracking; segment date/query/page/device/market; check indexing, manual/security issues, releases, migrations, demand, SERP/AI changes, competitors, content, links, seasonality, and conversions.")
      ]
    ),

    module(
      "capstone",
      "12. Roofing website delivery, governance, client explanation, and capstone",
      "Integrate strategy, design, SEO, AEO, engineering, measurement, and ethical client delivery into one repeatable system.",
      ["Scope a roofing website", "Prioritize launch and growth work", "Deliver a defensible capstone"],
      [
        lesson("Delivery sequence", "Discovery → strategy → architecture → content/proof → design/prototype → build → technical/SEO QA → launch → measurement → improvement.", ["Dependencies matter.", "Do not design every page before content and proof are understood.", "Use approvals and change control."]),
        lesson("Governance", "The client should own domain, hosting, analytics, Search Console, content, and core accounts.", ["Use named access and backups.", "Document licenses, plugins, renewals, and vendors.", "Create an offboarding path."]),
        lesson("Consultative prioritization", "Fix blockers and high-value journeys before expanding content or experimenting with AI discovery.", ["Launch a coherent minimum, not an incomplete sprawl.", "Use evidence to sequence work.", "Say not yet when proof, tracking, or operations are missing."]),
        lesson("Mastery standard", "A master can plan, write, design, build, optimize, launch, measure, maintain, and explain—and knows which claims cannot be guaranteed.", ["Complete an inspectable capstone.", "Use current primary sources.", "Seek real-user and supervised project feedback."])
      ],
      ["Complete the roofing website capstone.", "Record a seven-minute client walkthrough.", "Run a launch-day and 30-day retrospective."],
      "You can deliver a useful, safe, measurable roofing website and defend every major decision.",
      [S.starter, S.ai, S.spam, S.searchConsole],
      [
        q("What should happen before visual design?", "Business discovery, customer/search strategy, architecture, content requirements, proof inventory, and technical constraints.", "Enough planning to define what the design must accomplish.", "Choose animations.", "Build the homepage immediately.", "Design quality depends on strategy and content inputs."),
        q("Who should own the domain?", "The client business under a durable authorized account.", "The client should control core digital assets.", "The freelance designer.", "The registrar’s support team.", "Ownership prevents lock-in and operational risk."),
        q("Which launch scope is strongest?", "A complete, measurable set of highest-value pages and systems that can be maintained.", "A coherent minimum with clear phase-two criteria.", "100 unfinished pages.", "A beautiful homepage with broken forms.", "Quality and operational completeness beat volume."),
        q("A client asks for guaranteed AI Overview citations. Best response?", "Explain eligibility and source-readiness work, but state that inclusion and citation are controlled by Google.", "Offer measurement and iteration without guarantee.", "Promise citations after adding schema.", "Create fake third-party sources.", "No consultant controls AI Overview selection."),
        q("What should the client receive at handoff?", "Ownership, credentials transfer, documentation, backups, source/content files, tracking, QA records, maintenance plan, and training.", "A reproducible operating system.", "Only the live URL.", "An agency-owned domain.", "Handoff should preserve continuity and control."),
        q("What is the first growth priority after launch?", "The highest-confidence constraint revealed by technical, search, conversion, and business data.", "Fix defects and learn from real behavior.", "Publish daily AI articles.", "Redesign again.", "Post-launch priorities should emerge from evidence."),
        q("What proves website mastery?", "A functioning site with sound strategy, useful content, technical integrity, conversion evidence, source readiness, and documented decisions.", "An inspectable capstone plus real-user testing.", "A perfect tool score.", "A first-place ranking.", "Mastery is a reliable delivery process under uncertainty."),
        q("When should Oside say “not yet”?", "When business identity, proof, content ownership, tracking, accessibility, security, or operations make delivery unsafe or misleading.", "When prerequisites must be repaired.", "Never.", "Only if the client lacks a logo.", "Responsible restraint protects the client."),
        w("Outline a complete roofing website capstone deliverable.", "Cover discovery, economics, query map, sitemap, wireframes, content/proof, design system, build, technical SEO, local/entity/schema, AEO/crawlers, accessibility, CWV, tracking, launch, rank grid, reporting, maintenance, and presentation."),
        w("Give a five-minute client recommendation after finding a slow duplicate-heavy site with generic copy and no qualified-lead tracking.", "Sequence measurement/function, architecture/consolidation, high-value page rewrite, performance, technical cleanup, proof, source content, launch/testing, owners, timeline, and no ranking guarantees.")
      ]
    )
  ];

  const total = window.WEB_MODULES.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.WEB_MODULES.length !== 12 || total !== 120) {
    console.error(`Web mastery content error: expected 12 modules and 120 questions; found ${window.WEB_MODULES.length} and ${total}.`);
  }
})();

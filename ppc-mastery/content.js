(() => {
  const S = {
    help: ["Google Ads Help Center", "https://support.google.com/google-ads/?hl=en"],
    search: ["Search campaigns", "https://support.google.com/google-ads/topic/10022492?hl=en"],
    network: ["Google Search Network", "https://support.google.com/google-ads/answer/1722047?hl=en"],
    structure: ["Account structure best practices", "https://support.google.com/google-ads/answer/14752782"],
    match: ["Keyword matching options", "https://support.google.com/google-ads/answer/7478529?hl=en"],
    negatives: ["Negative keywords", "https://support.google.com/google-ads/answer/2453972?hl=en"],
    rsa: ["Responsive Search Ads", "https://support.google.com/google-ads/answer/7684791?hl=en"],
    landing: ["Ads and landing pages", "https://support.google.com/google-ads/answer/6238826?hl=en"],
    quality: ["Quality Score", "https://support.google.com/google-ads/answer/6167118?hl=en"],
    adrank: ["Ad Rank", "https://support.google.com/google-ads/answer/1722122?hl=en"],
    smart: ["Smart Bidding", "https://support.google.com/google-ads/answer/7065882?hl=en"],
    budget: ["Average daily budgets", "https://support.google.com/google-ads/answer/6385083?hl=en"],
    learning: ["Smart Bidding learning period", "https://support.google.com/google-ads/answer/13020501?hl=en"],
    targets: ["Smart Bidding target adjustments", "https://support.google.com/google-ads/answer/10433846?hl=en"],
    conversions: ["Primary and secondary conversions", "https://support.google.com/google-ads/answer/11461796?hl=en"],
    ecl: ["Enhanced conversions for leads", "https://support.google.com/google-ads/answer/14274408?hl=en"],
    consent: ["Consent mode", "https://support.google.com/google-ads/answer/10000067?hl=en"],
    geo: ["Advanced location options", "https://support.google.com/google-ads/answer/1722038?hl=en"],
    aiMax: ["AI Max for Search", "https://support.google.com/google-ads/answer/15910366?hl=en"],
    aiMaxWorks: ["How AI Max works", "https://support.google.com/google-ads/answer/15910187?hl=en"],
    pmax: ["Performance Max", "https://support.google.com/google-ads/answer/10724817?hl=en"],
    experiments: ["Google Ads experiments", "https://support.google.com/google-ads/answer/7281575"],
    policy: ["Fix disapproved ads", "https://support.google.com/google-ads/answer/9338593?hl=en"],
    best: ["Google Ads best practices", "https://support.google.com/google-ads/answer/6154846?hl=en"]
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

  window.PPC_SOURCES = S;
  window.PPC_MODULES = [
    module(
      "fundamentals",
      "1. PPC foundations and business economics",
      "Understand the auction, channel roles, and the economics that determine whether paid traffic creates profitable growth.",
      ["Explain PPC without platform jargon", "Choose the correct campaign role", "Calculate viable acquisition economics"],
      [
        lesson("The operating model", "Google Ads buys access to auctions and audiences; it does not buy customers.", ["The account controls goals, inputs, budgets, assets, and constraints.", "Google controls auction-time matching, serving, and much automation.", "The business controls offer, landing experience, response, sales, and fulfillment."]),
        lesson("Clicks are inputs", "CTR and CPC describe traffic acquisition, not commercial success.", ["Follow the funnel through qualified lead, appointment, sale, revenue, and gross profit.", "A cheap click can be commercially useless.", "A costly click can be rational when intent and job value are high."]),
        lesson("Channel fit", "Search is strongest when people express existing demand. Performance Max and Demand Gen can expand beyond keyword-led Search.", ["Use Search for controllable intent capture.", "Use cross-channel automation only with trustworthy goals and creative.", "Do not make every campaign type compete for the same vague objective."]),
        lesson("Responsible promise", "Promise a measurable testing and improvement system, not guaranteed rankings, clicks, leads, or revenue.", ["State the budget at risk.", "Define the conversion and quality standard.", "Separate platform outcomes from sales outcomes."])
      ],
      ["Map a service-business funnel from impression to gross profit.", "Calculate break-even lead cost for three close-rate scenarios.", "Write a one-minute explanation of Google Ads for a skeptical owner."],
      "You can decide whether PPC fits the business and defend a test using economics rather than excitement.",
      [S.help, S.search, S.network],
      [
        q("What does a Google Ads budget buy?", "Participation in eligible auctions and the chance to earn customer actions.", "Paid exposure and traffic opportunities.", "A guaranteed number of leads.", "A guaranteed top position.", "Budget funds auction participation; conversion still depends on many systems."),
        q("Which metric is closest to business value for lead generation?", "Gross-profit contribution from attributable customers.", "Booked-customer acquisition cost.", "Cost per form submission.", "Click-through rate alone.", "The useful hierarchy moves from clicks toward customers and margin."),
        q("When is Search campaign fit strongest?", "When valuable prospects express clear, serviceable intent through searches.", "When the offer and landing path match existing demand.", "Whenever competitors advertise.", "When the business cannot answer calls.", "Search captures demand; it does not repair operations."),
        q("A $40 click seems expensive. What should determine whether it is?", "Conversion rate, qualified rate, close rate, customer value, and margin.", "Expected economic value per click.", "The industry’s average CPC only.", "Whether the owner dislikes the number.", "CPC has meaning only inside the complete economic model."),
        q("Which sales statement is responsible?", "We will build a measurable acquisition system; outcomes still depend on auction, offer, and sales execution.", "We can control targeting, measurement, and testing.", "Google will send ready-to-buy customers.", "We guarantee profitable leads in month one.", "Confidence should attach to the process and evidence, not uncontrollable outcomes."),
        q("A business has no call coverage and a broken form. What comes first?", "Repair the conversion and response path before scaling paid traffic.", "Use a tiny diagnostic test only after minimum tracking works.", "Launch broadly to collect clicks.", "Raise the budget so enough leads survive the leak.", "More traffic magnifies a broken funnel."),
        q("What is PPC’s role beside LSA and organic?", "A controllable paid layer that can capture and test demand alongside other surfaces.", "One component of search visibility.", "A replacement for every other channel.", "Proof the business no longer needs a website.", "Channels have different inventory, control, cost, and durability."),
        q("Which test budget is defensible?", "One with a defined downside, expected information value, capacity, and decision date.", "A budget large enough to produce decision-useful evidence.", "Whatever Google recommends without business review.", "A competitor’s estimated spend.", "A test budget needs both learning capacity and a loss limit."),
        w("Explain CPC, conversion rate, cost per lead, qualified CPL, and customer acquisition cost to a business owner.", "5 = accurate funnel definitions tied to decisions; 3 = mostly correct but misses quality or sales; 0 = treats clicks or platform conversions as customers."),
        w("Create a PPC go/no-go checklist for a local service business.", "Cover demand, offer, geography, economics, tracking, landing path, response, sales capacity, policy, budget risk, and a measurable decision threshold.")
      ]
    ),

    module(
      "measurement",
      "2. Conversion measurement, privacy, and first-party data",
      "Build durable measurement that gives bidding systems the right outcome and preserves the business truth beyond the platform.",
      ["Define conversion architecture", "Configure primary and secondary actions", "Plan privacy-aware online and offline measurement"],
      [
        lesson("Optimization inputs", "Primary conversion actions appear in the Conversions column and are used for bidding when their goal is selected. Secondary actions are usually observation-only in All conversions.", ["Do not make page views or every button click primary.", "Custom goals can cause included actions to bid even if marked secondary.", "Audit campaign-specific goals before launch."]),
        lesson("Lead-quality feedback", "For lead generation, the most valuable signal often happens after the form or call.", ["Import qualified leads, appointments, or sales.", "Google recommends enhanced conversions for leads over legacy offline import for new implementations.", "Use stable CRM definitions and upload cadence."]),
        lesson("Consent-aware measurement", "Consent mode communicates user choices to Google and works with—not instead of—a consent banner.", ["Basic mode blocks tags until consent.", "Advanced mode loads with denied defaults and can send cookieless pings.", "Legal implementation decisions require qualified privacy advice."]),
        lesson("Data integrity", "Tagging, deduplication, attribution, conversion windows, values, and diagnostics must agree with business records.", ["Use test conversions before spend.", "Reconcile Ads, analytics, call tracking, and CRM.", "Document what cannot be measured precisely."])
      ],
      ["Design a primary/secondary conversion map.", "Create an enhanced-conversions-for-leads implementation brief.", "Reconcile a sample week across Ads, call tracking, and CRM."],
      "You can give automation trustworthy signals and explain the limits of attribution.",
      [S.conversions, S.ecl, S.consent],
      [
        q("Which action should generally be primary for a mature roofing lead program?", "A qualified opportunity or booked estimate imported reliably.", "A verified lead submission while downstream import is being built.", "Every visit to the contact page.", "Any click on the phone number, even when tracking is broken.", "Primary actions should align bidding with the closest reliable business outcome."),
        q("What is a secondary conversion action?", "An observation action normally reported in All conversions and not used for bidding.", "A useful diagnostic event kept outside primary optimization.", "A lower-value conversion that always receives a smaller bid.", "An event Google deletes from reports.", "Secondary describes optimization treatment, not importance or deletion."),
        q("What is the custom-goal caveat?", "Actions included in a custom goal are used for bidding regardless of primary/secondary labels.", "Custom goals require extra care before campaign use.", "Secondary actions can never influence bidding.", "Custom goals automatically improve lead quality.", "The goal configuration can override the expected secondary behavior."),
        q("Why use enhanced conversions for leads?", "To improve durable attribution using hashed first-party data and offline outcomes.", "To supplement identifiers such as GCLID and improve matching.", "To upload private data without consent or policy review.", "To guarantee every sale is attributed.", "It improves matching and durability, not legal permission or perfect attribution."),
        q("What does consent mode provide?", "Consent signals that adapt tag behavior; it is not the consent banner.", "A way for Google tags to respect recorded choices.", "A substitute for legal review.", "Automatic consent from every visitor.", "The site still needs an appropriate consent interface and policy."),
        q("A campaign optimizes to calls lasting ten seconds. Main risk?", "The bidder may learn to find short or low-quality calls rather than viable customers.", "The conversion definition may be too weak.", "Long calls are always profitable.", "Call duration is identical to booked revenue.", "Automation optimizes the signal it receives."),
        q("Ads reports 70 leads; CRM shows 42. First response?", "Audit definitions, tag duplication, call/form coverage, import timing, and identifiers.", "Reconcile action by action before judging performance.", "Assume the CRM is wrong.", "Average the numbers and report 56.", "Discrepancy is a diagnostic problem, not permission to choose a preferred count."),
        q("When should conversion values be used for leads?", "When values reflect meaningful, consistently applied differences in business outcome.", "When qualified, booked, or sold stages can be assigned defensible relative value.", "Whenever the interface requests a number.", "By assigning every lead the final contract value.", "Values should steer toward economic quality without fabricating certainty."),
        w("Design conversion tracking for calls, forms, qualified leads, booked appointments, and sold jobs.", "Include source identifiers, primary/secondary status, deduplication, values, upload timing, owners, consent/privacy, diagnostics, and reconciliation."),
        w("Explain why “Google says we had 100 conversions” is not yet a business conclusion.", "Separate conversion definitions from leads, qualification, customers, attribution, lag, duplication, and profit; propose the next evidence needed.")
      ]
    ),

    module(
      "architecture",
      "3. Goals, campaign architecture, and account structure",
      "Organize the account around business objectives, budgets, geography, and creative themes without starving automation or hiding decisions.",
      ["Choose campaign boundaries", "Build themed ad groups", "Balance consolidation with necessary control"],
      [
        lesson("Structure follows decisions", "Separate campaigns when budgets, goals, geography, language, legal constraints, or economics require independent control.", ["Do not create a campaign for every keyword.", "Do not combine businesses with incompatible objectives.", "Use naming, labels, and ownership conventions."]),
        lesson("Consolidation", "Google’s current guidance favors simpler, goal-aligned structures and tightly themed ad groups.", ["Move beyond single-keyword ad groups.", "Avoid duplicate match-type sprawl.", "More data per objective can help Smart Bidding learn."]),
        lesson("Themed ad groups", "Keywords, ads, and landing pages should represent one coherent intent or offer.", ["A theme is not necessarily one keyword.", "Keep enough creative relevance without fragmenting every variation.", "Use search terms to refine meaning."]),
        lesson("Governance", "Account-level settings, conversion goals, negative lists, assets, brand controls, auto-apply recommendations, access, and change history can affect many campaigns.", ["Audit inheritance.", "Use client-owned access.", "Document launch settings and approval."])
      ],
      ["Build a campaign map for a roofer with replacement, repair, and commercial goals.", "Consolidate a mock SKAG account.", "Create a naming and change-control standard."],
      "You can make each structural split explainable in terms of control, economics, or learning.",
      [S.structure, S.search, S.best],
      [
        q("What is the strongest reason to separate two Search campaigns?", "They need independent budgets, goals, geographies, or economic targets.", "A material business-control difference.", "They use different keyword match types.", "Every ad group deserves its own campaign.", "Campaign boundaries should support decisions and optimization goals."),
        q("What is wrong with 300 single-keyword ad groups?", "They fragment management and data without guaranteeing useful relevance.", "The structure may create duplication and weak learning.", "Google forbids single-keyword ad groups.", "Every keyword must instead have its own account.", "SKAGs are not prohibited, but broad fragmentation conflicts with current best practice."),
        q("How should an ad group be themed?", "Around closely related user intent, message, and landing experience.", "Around a coherent service or decision need.", "Around identical CPCs only.", "By putting every service in one ad group.", "The theme connects query meaning to creative and page."),
        q("When is consolidation dangerous?", "When it removes needed budget, geo, legal, language, or goal control.", "When materially different economics are forced under one target.", "Whenever two keywords share a landing page.", "Consolidation is always harmful.", "Simple is useful only while necessary decisions remain visible."),
        q("Where should brand and non-brand usually be analyzed?", "Separately, because intent, incrementality, CPC, and conversion behavior differ.", "With explicit reporting or campaign control when material.", "As one undifferentiated result.", "By deleting brand traffic.", "Brand capture and new-demand acquisition answer different questions."),
        q("What does current Google guidance say about match-type duplication?", "Using multiple versions can segment data; broad match with Smart Bidding may replace redundant duplication.", "Avoid unnecessary duplicate keywords.", "Every keyword needs broad, phrase, and exact versions.", "Exact match no longer exists.", "The recommendation is simplification, not a denial that controls and tests matter."),
        q("Which launch artifact is most useful?", "A documented build sheet covering goals, settings, assets, tracking, exclusions, owners, and rationale.", "A QA checklist and baseline export.", "A screenshot of the dashboard only.", "The optimization score.", "A reproducible account requires decisions, not just a visual."),
        q("What should determine whether repair and replacement share a campaign?", "Budget control, values, targets, volume, geography, and landing/message needs.", "Whether shared learning outweighs economic differences.", "Whether both contain the word roof.", "The interface’s default suggestion.", "Structure is a tradeoff between signal volume and business control."),
        w("Design a modern account structure for one local service business with three services and two markets.", "Explain campaign boundaries, goals, budgets, ad-group themes, landing pages, brand handling, negatives, and why you did not fragment further."),
        w("Audit an inherited account with duplicates, SKAGs, device campaigns, and inconsistent goals.", "Inventory dependencies, preserve measurement, identify necessary controls, consolidate gradually, use experiments where possible, and maintain rollback evidence.")
      ]
    ),

    module(
      "keywords",
      "4. Search intent, keywords, match types, and negatives",
      "Translate business demand into controlled search coverage while understanding modern semantic matching and query review.",
      ["Classify intent", "Use match types deliberately", "Build negative-keyword and search-term discipline"],
      [
        lesson("Keyword versus search term", "A keyword is an advertiser input; a search term is what the person actually entered.", ["Manage performance from search-term evidence.", "Modern matching uses meaning and intent, not literal strings only.", "Exact match can include same meaning or intent."]),
        lesson("Match-type reach", "Exact offers the most steering, phrase covers searches including the meaning, and broad reaches related intent.", ["Broader match types include the reach of narrower equivalents.", "Google calls Smart Bidding critical with broad match.", "Use a business test—not ideology—to choose coverage."]),
        lesson("Negative behavior", "Negative match types do not behave like positive match types and do not expand to close variants.", ["Add singular/plural or synonym forms when needed.", "Avoid blocking profitable ambiguity without evidence.", "Use account lists for universal exclusions and campaign controls for local needs."]),
        lesson("Intent economics", "Classify queries by service, urgency, geography, commercial stage, customer fit, and likely value.", ["Search volume is not priority.", "A query can be relevant but economically weak.", "The search-terms report should feed copy, pages, offers, and product insight."])
      ],
      ["Classify 150 search terms.", "Create an account/campaign/ad-group negative map.", "Design a broad-match test with Smart Bidding and stop conditions."],
      "You can expand intelligently without surrendering query accountability.",
      [S.match, S.negatives, S.structure],
      [
        q("What does exact match mean today?", "Eligibility for searches with the same meaning or intent, not only identical text.", "The most steering among positive match types.", "Only the exact characters inside brackets.", "Guaranteed exclusive control of the query.", "Exact match is semantic and still auction-dependent."),
        q("Why pair broad match with Smart Bidding?", "Each query has different context, so auction-time bids can respond to predicted value.", "Broad reach creates more signals for a goal-based bidder.", "Broad match guarantees lower CPC.", "Manual bids cannot run with broad keywords.", "Google calls Smart Bidding critical, but the conversion signal still must be trustworthy."),
        q("A phrase keyword matches an unexpected but profitable term. Action?", "Judge intent and economics before adding a negative simply because wording differs.", "Keep or promote the term if evidence supports it.", "Block every nonliteral variation.", "Turn off phrase match immediately.", "Modern phrase match follows meaning; performance determines the decision."),
        q("Do negative keywords cover close variants?", "No; add relevant singular, plural, and synonym variants when exclusion is required.", "Misspellings and casing have special handling, but meaning variants need review.", "Yes, exactly like positive keywords.", "One negative blocks every related concept.", "Negative expansion is intentionally narrower."),
        q("Which term is the clearest negative for a residential roofer?", "roofing jobs hiring apprentice", "roofing careers", "roof repair estimate", "roof replacement contractor", "Employment intent is materially different from customer acquisition."),
        q("What is the danger of a giant pre-launch negative list?", "It can block unknown profitable demand and create false control.", "Use obvious exclusions first, then learn from search terms.", "Negatives never reduce reach.", "More negatives always improve Smart Bidding.", "Exclusions should be evidence-based and audited."),
        q("What should a search-term review produce?", "Actions across negatives, keywords/themes, ads, pages, offers, geo, and conversion quality.", "A documented intent and economic classification.", "Only a longer keyword list.", "A report of unusual wording with no action.", "Search terms are customer and performance evidence."),
        q("Why not duplicate every keyword across match types?", "Broader types already include narrower reach, and duplication can fragment data and management.", "Use duplication only for a clear test or control need.", "Google charges three times.", "Phrase and exact have been removed.", "Current guidance favors simpler themed structures."),
        w("Build a weekly search-term review SOP.", "Include sampling, spend/conversion thresholds, intent, geo, quality, match source, negative level, promotion, page/copy insight, owner, and follow-up."),
        w("Explain when you would test broad match and when you would hold back.", "Discuss trustworthy primary conversions, Smart Bidding, volume, economics, negatives, query review, risk, geography, landing coverage, and experiment design.")
      ]
    ),

    module(
      "creative",
      "5. Responsive Search Ads, assets, Ad Rank, and message strategy",
      "Create flexible, truthful ads that match intent and improve customer choice without optimizing blindly to Ad Strength.",
      ["Build strong RSAs", "Use assets strategically", "Distinguish Quality Score, Ad Strength, and Ad Rank"],
      [
        lesson("Responsive Search Ads", "An RSA can accept up to 15 headlines and four descriptions; Google tests combinations.", ["Google recommends one RSA per ad group with Good or Excellent Ad Strength.", "Each asset must make sense alone and in combination.", "Pin only when legal or message requirements justify reduced flexibility."]),
        lesson("Message architecture", "Cover intent, offer, differentiation, proof, risk reduction, and next action.", ["Avoid repetitive keyword stuffing.", "Use specific, supportable claims.", "Align the promise with the landing page."]),
        lesson("Assets", "Sitelinks, callouts, images, calls, locations, prices, promotions, and other assets can increase usefulness and estimated impact.", ["Assets can influence Ad Rank.", "Eligibility and serving vary by context.", "Audit account-, campaign-, and ad-group-level associations."]),
        lesson("Three different diagnostics", "Ad Strength guides RSA asset diversity; Quality Score is a keyword-level diagnostic; Ad Rank determines eligibility and position at auction time.", ["Quality Score is not an auction input or KPI.", "Ad Rank considers bid, quality, thresholds, competition, context, and expected asset impact.", "Use conversion results to judge commercial success."])
      ],
      ["Write one complete RSA asset set.", "Create an asset coverage matrix.", "Diagnose five weak ads without using CTR alone."],
      "You can create compliant message flexibility and diagnose quality without chasing vanity scores.",
      [S.rsa, S.quality, S.adrank, S.landing],
      [
        q("How many headlines can one RSA accept?", "Up to 15.", "Enough varied headlines to cover intent and proof.", "Exactly three.", "Unlimited headlines.", "An RSA supports up to 15 headlines and four descriptions."),
        q("When should a headline be pinned?", "When it must appear in a specific position for legal, brand, or essential-message reasons.", "Sparingly, after considering lost flexibility.", "Every time the keyword appears.", "To guarantee top position.", "Pinning constrains combinations and should earn that tradeoff."),
        q("What does Ad Strength measure?", "RSA asset relevance, quality, and diversity guidance—not business profitability.", "A creative setup diagnostic.", "Auction position.", "Final customer acquisition cost.", "Ad Strength is useful but not the campaign’s economic verdict."),
        q("Is Quality Score used directly in the auction?", "No; Google describes it as a diagnostic, not an auction input.", "Its components can reveal relevance and experience problems.", "Yes; the 1–10 number is multiplied by the bid.", "It is the only Ad Rank factor.", "Auction-time quality matters, but the displayed score itself is diagnostic."),
        q("What determines Ad Rank?", "Bid, auction-time quality, thresholds, competition, context, and expected asset impact.", "Multiple dynamic auction factors.", "Maximum CPC only.", "Quality Score alone.", "Ad Rank is recalculated per auction and placement."),
        q("Which RSA asset set is strongest?", "Distinct headlines covering service, outcome, proof, objection, and action in interchangeable language.", "Varied messages matched to the ad-group intent.", "Fifteen near-identical keyword headlines.", "Claims copied from competitors without evidence.", "Useful diversity gives the system meaningful combinations."),
        q("Why use sitelinks and other assets?", "To add useful paths and information while increasing potential visibility and performance.", "To help customers choose the right next step.", "To guarantee an absolute-top impression.", "To replace the landing page.", "Assets support the ad but remain context-dependent."),
        q("An ad has Excellent Ad Strength but poor qualified CPL. What now?", "Diagnose search terms, promise, landing page, conversion quality, and economics.", "Treat Ad Strength as setup guidance, not proof of success.", "Leave everything unchanged.", "Raise budget because the ad is excellent.", "Commercial outcome outranks the diagnostic label."),
        w("Create a message framework for a roof-replacement Search ad group.", "Include intent confirmation, differentiation, proof, risk reduction, process, CTA, truthful urgency, varied headlines, descriptions, and asset ideas."),
        w("Explain Quality Score, Ad Strength, and Ad Rank in plain English.", "Clearly separate keyword diagnostic, RSA guidance, and auction eligibility/position; connect each to the proper action without claiming direct formulas.")
      ]
    ),

    module(
      "landing-pages",
      "6. Landing pages and conversion-rate judgment",
      "Turn paid intent into qualified actions through message match, trust, usability, and measurement.",
      ["Audit message match", "Diagnose conversion friction", "Plan interpretable landing-page tests"],
      [
        lesson("The intent bridge", "The page should fulfill the query and ad promise immediately.", ["Match service, geography, offer, and CTA.", "Do not send every ad to the homepage.", "Final URL expansion requires careful site readiness."]),
        lesson("Trust and clarity", "State who the offer is for, what happens next, why the business is credible, and how to act.", ["Use real proof.", "Address cost/process objections.", "Avoid fabricated urgency and unsupported superlatives."]),
        lesson("Mobile and function", "Fast usability, working calls/forms, accessible navigation, and clear next actions are prerequisites.", ["Test forms and phone tracking.", "Inspect actual devices and network conditions.", "Do not optimize only to a lab score."]),
        lesson("CRO discipline", "A landing-page test needs one hypothesis, stable traffic, trustworthy conversions, and enough evidence.", ["Segment by intent and device where useful.", "Monitor lead quality, not only form rate.", "A higher conversion rate can still worsen profit."])
      ],
      ["Audit five paid-traffic landing paths.", "Wireframe one mobile-first service page.", "Write a single-variable CRO experiment."],
      "You can locate the post-click constraint and improve it without manipulating users.",
      [S.landing, S.quality, S.experiments],
      [
        q("Where should a “metal roof replacement” ad usually land?", "A relevant metal-roof replacement page with matching proof and CTA.", "A focused replacement page with a strong metal section.", "The homepage regardless of message.", "An unrelated roofing blog post.", "The page should fulfill the specific promise."),
        q("What is the first landing-page QA?", "Confirm URL, load, content, form, call path, tracking, and mobile usability.", "Test the complete action path.", "Count the words.", "Check whether the logo is large.", "Function and match precede aesthetic preferences."),
        q("A page converts 20% but leads are mostly unqualified. Best conclusion?", "The page may make the wrong action too easy or promise the wrong thing.", "Review targeting, copy, qualification, and disposition together.", "The page is unquestionably excellent.", "Remove all forms.", "Conversion rate without quality can reward bad demand."),
        q("How does landing experience relate to ads?", "It influences user outcomes and auction-time quality; Quality Score can diagnose it.", "Strong message match may improve performance.", "It guarantees cheap clicks.", "Only SEO cares about landing pages.", "Paid acquisition and landing usefulness are inseparable."),
        q("Which CTA is strongest for a high-intent service page?", "A specific next step with a credible expectation, such as Schedule an inspection.", "A clear action aligned to the offer.", "Submit.", "Click here for everything.", "Specificity reduces uncertainty and helps the click fulfill the promise made in the ad."),
        q("What makes a CRO test interpretable?", "One defined hypothesis, stable major variables, valid tracking, and a prechosen success metric.", "A controlled comparison.", "Changing page, ads, bid, and geography together.", "Declaring a winner after two leads.", "Testing isolates a decision rather than generating anecdotes."),
        q("When can Final URL expansion be risky?", "When site pages vary in quality, compliance, intent, tracking, or desired destination.", "When only approved URLs should receive paid traffic.", "Whenever the site has more than one page.", "It is never controllable.", "Automation needs a safe domain and URL exclusions where appropriate."),
        q("What belongs above the fold?", "Intent confirmation, credible value, relevant proof cue, and a usable primary action.", "The essentials needed to continue confidently.", "Every service and legal paragraph.", "A full company history.", "The first screen should orient and enable action."),
        w("Audit a landing page with high CTR and low booked-job rate.", "Trace query, ad promise, page, CTA, form/call, qualification, response, sales, tracking, and segments; separate page from traffic and intake causes."),
        w("Design a mobile-first page for emergency roof repair traffic.", "Include truthful urgency, location/service fit, immediate contact, safety language, proof, process, qualification, tracking, accessibility, and capacity honesty.")
      ]
    ),

    module(
      "bidding",
      "7. Smart Bidding, budgets, targets, and learning periods",
      "Choose bidding and budget systems from the business goal, data quality, conversion lag, and risk tolerance.",
      ["Choose the correct bid objective", "Interpret learning and delay", "Adjust targets without thrashing"],
      [
        lesson("June 2026 labels", "Google is changing Search labels: Maximize conversions with a target becomes Target CPA; Maximize conversion value with a target becomes Target ROAS. Underlying behavior is unchanged.", ["Maximize conversions and Maximize conversion value remain Smart Bidding strategies.", "Use current labels while recognizing transitional interfaces.", "Never infer a strategy change from the label alone."]),
        lesson("Objective fit", "Use conversion-count bidding when outcomes are similar; value-based bidding when reliable values distinguish outcomes.", ["Target CPA trades efficiency and volume.", "Target ROAS trades value efficiency and volume.", "Maximize clicks and impression share serve different objectives."]),
        lesson("Budget mechanics", "Average daily budgets can spend up to twice the daily amount on a day and generally up to 30.4 times it in a month.", ["Explain pacing before launch.", "Budget limits and targets interact.", "A restrictive target can suppress spending even with budget available."]),
        lesson("Learning and delay", "Calibration depends on conversions, conversion-cycle length, and strategy; Google notes up to roughly 50 conversions or three cycles in some cases.", ["Wait one to two conversion cycles after target changes before judgment.", "Major changes can affect volume similarly.", "Do not hide clear tracking or policy failures behind “learning.”"])
      ],
      ["Choose strategies for six scenarios.", "Build a target-adjustment decision log.", "Calculate monthly and daily budget exposure."],
      "You can steer automation without daily emotional edits or blind faith.",
      [S.smart, S.budget, S.learning, S.targets],
      [
        q("What changes in June 2026 Smart Bidding labels?", "Targeted Maximize strategies are relabeled Target CPA and Target ROAS; behavior stays the same.", "The names may transition without required account action.", "Smart Bidding is being removed.", "Every campaign resets its learning.", "Google explicitly says the underlying behavior is unchanged."),
        q("When is Maximize conversion value appropriate?", "When conversion values are trustworthy and the goal is total value within budget.", "When outcomes have meaningful value differences.", "Whenever revenue data is unavailable.", "To maximize click volume.", "Value bidding requires meaningful values."),
        q("What can a too-low Target CPA do?", "Suppress eligible traffic and total conversions.", "Trade volume for a tighter efficiency target.", "Guarantee cheaper customers.", "Increase bids in every auction.", "Targets constrain auction participation based on predicted ability to achieve them."),
        q("How much may most campaigns spend in one day?", "Up to two times the average daily budget, within the monthly limit.", "Daily spend can vary with opportunity.", "Never above the exact average daily budget.", "Unlimited if conversions rise.", "Google paces around an average, not a hard daily cap."),
        q("What is the general monthly spending limit?", "About 30.4 times the average daily budget for most campaigns.", "The daily budget multiplied by the average days per month.", "Exactly 28 times daily budget.", "No monthly limit exists.", "The standard calculation uses 30.4 average days and should be explained before launch."),
        q("After a target change, when should performance be assessed?", "After roughly one to two conversion cycles, accounting for reporting delay.", "Once enough post-change outcomes have matured.", "The next morning.", "Only after six months.", "The right window follows the business conversion cycle."),
        q("A strategy shows Learning. What should you inspect?", "Recent strategy, setting, or composition changes plus conversion volume and cycle.", "The stated learning reason and change history.", "Assume the campaign is broken.", "Reset the strategy daily.", "Learning status has specific triggers and does not stop all optimization."),
        q("When is Manual CPC defensible?", "When the objective, data scarcity, risk, or controlled diagnosis justifies manual click bidding.", "As a deliberate temporary or specialized strategy.", "Always, because humans see every auction signal.", "Never; the feature cannot be used.", "Automation is often strong, but strategy must fit the objective and evidence."),
        w("Choose bidding for a new local lead account with weak conversion history, then describe the migration path.", "Address measurement quality, initial objective, budget, volume, quality feedback, when to add targets or values, learning, and guardrails."),
        w("Explain why changing budget, target, goals, and match type in the same week is dangerous.", "Cover attribution of cause, learning/composition changes, conversion delay, conflicting bidder signals, documentation, and safer sequencing.")
      ]
    ),

    module(
      "targeting",
      "8. Geography, audiences, schedules, devices, networks, and brand control",
      "Apply targeting and observation settings that reflect business reality without mistaking broad defaults for universal best practice.",
      ["Choose location options", "Use audiences and schedules correctly", "Audit networks and brand overlap"],
      [
        lesson("Location options", "Search defaults to Presence or Interest. Presence limits toward people likely in or regularly in the location.", ["Local service businesses often need a deliberate presence decision.", "Google recommends broader geo for many campaigns, but business constraints decide.", "Location accuracy is best-effort, so analyze user-location reports and leads."]),
        lesson("Audiences", "Search audiences can be observed or used to narrow reach depending on the setting.", ["Observation adds data without restricting eligibility.", "Customer Match and first-party lists can guide value and exclusions.", "Do not confuse audience signals with deterministic identity."]),
        lesson("Schedules and devices", "Smart Bidding uses time and device signals, but business hours, call coverage, legal needs, or experience differences may still justify controls.", ["Avoid unnecessary device-split campaigns.", "Report performance by device and hour.", "Schedule around response capacity when leads require immediate action."]),
        lesson("Networks and brands", "Search partners are included by default and can add distinct inventory; evaluate performance and quality. Separate brand from non-brand and use exclusions where needed.", ["Search partner CTR does not affect Google Quality Score.", "Partner placement transparency differs by campaign type.", "Brand traffic can hide weak acquisition economics."])
      ],
      ["Audit geo settings and actual user locations.", "Build a network/brand reporting view.", "Create an ad-schedule recommendation from lead handling data."],
      "You can explain every reach control and identify when a default conflicts with the business.",
      [S.geo, S.network, S.conversions],
      [
        q("What is the default positive location option for Search?", "Presence or Interest.", "People in, regularly in, or interested in the target.", "Presence only.", "Exact GPS location only.", "The broader option is default and Google-recommended generally."),
        q("When is Presence especially sensible?", "When the business only serves people physically in the selected area.", "When out-of-area interest creates unusable leads.", "For every campaign without analysis.", "To guarantee perfect geo accuracy.", "Presence narrows intent but location remains best-effort."),
        q("What does Observation audience mode do?", "Collects performance data without narrowing search eligibility.", "Allows bid/value analysis while preserving reach.", "Restricts ads to the audience.", "Automatically uploads customer data.", "Observation informs; targeting narrows."),
        q("Should Smart Bidding campaigns be split by device?", "Usually not without a material control need; Smart Bidding already uses device signals.", "Use device reports and fix experience issues first.", "Always, one campaign per device.", "Devices can no longer be reported.", "Current structure guidance discourages unnecessary device fragmentation."),
        q("Search partners are…", "Included by default and should be evaluated against campaign goals and lead quality.", "Additional search-related inventory that can be opted out.", "Guaranteed low-quality fraud.", "The same as Display Expansion.", "Partner performance is empirical, not ideological."),
        q("Does partner CTR affect Quality Score on Google?", "No.", "Google states it does not.", "Yes, it is the largest factor.", "Only when CPC is high.", "The official Search Network guidance states it does not."),
        q("Why separate brand reporting?", "Brand searches often have different intent, incrementality, CPC, and conversion rates.", "To prevent brand capture from masking non-brand acquisition.", "Because brand clicks never convert.", "Because Google bans mixed reports.", "Brand and non-brand answer different growth questions."),
        q("A call-driven campaign runs overnight with no staff. Best action?", "Align schedule or call path with real response coverage, then measure lost opportunity.", "Create genuine after-hours handling if valuable.", "Leave it because Smart Bidding answers calls.", "Mark every missed call as invalid.", "Traffic controls should reflect operational capacity."),
        w("Recommend geo settings for a roofer serving one county but attracting searches mentioning that county from elsewhere.", "Compare Presence vs Presence or Interest, business/customer scenarios, user-location data, search intent, lead quality, exclusions, and a test."),
        w("Create a targeting audit covering networks, geo, language, audiences, schedule, device, demographics, brand, and exclusions.", "For each, record current setting, inheritance, business rationale, performance/quality evidence, risk, and proposed test.")
      ]
    ),

    module(
      "ai-max",
      "9. AI Max for Search and automation controls",
      "Use AI Max’s expanded matching and creative features with URL, brand, geographic-intent, reporting, and measurement guardrails.",
      ["Understand AI Max components", "Decide when to test it", "Audit generated reach and destinations"],
      [
        lesson("Two feature groups", "AI Max combines search-term matching with asset optimization.", ["Search-term matching uses broad match and keywordless technology.", "Asset optimization includes text customization and Final URL expansion.", "Components can be adjusted in campaign or ad-group settings."]),
        lesson("Controls", "AI Max adds brand controls, locations of interest at ad-group level, URL controls, and more reporting into match source, headline, and URL.", ["Final URL expansion requires text customization.", "Remove generated assets that fail the business standard.", "Inform API/Editor workflows because support can lag interface features."]),
        lesson("Readiness", "AI Max should learn from a coherent account, safe website, trustworthy conversions, strong assets, and enough budget.", ["Do not use expansion to compensate for broken architecture.", "Use URL exclusions for inappropriate destinations.", "Protect brand and regulated claims."]),
        lesson("Testing", "Measure incremental qualified conversions or value at comparable efficiency—not only more traffic.", ["Use experiments where available.", "Review search terms, match source, URLs, assets, and downstream quality.", "Allow conversion delay before judging."])
      ],
      ["Build an AI Max readiness checklist.", "Create URL and brand control rules.", "Design an incremental-value experiment."],
      "You can activate automation intentionally and inspect what it adds.",
      [S.aiMax, S.aiMaxWorks, S.experiments],
      [
        q("What are AI Max’s two main feature groups?", "Search-term matching and asset optimization.", "Expanded targeting plus creative/destination optimization.", "Manual CPC and impression share.", "Display audiences and Shopping feeds only.", "Google defines the suite around matching and asset optimization."),
        q("What powers AI Max search-term matching?", "Broad match plus keywordless technology informed by keywords, creatives, and URLs.", "Expanded intent matching beyond the existing keyword list.", "Exact match only.", "A manually uploaded search-term list.", "The feature seeks incremental relevant queries."),
        q("What does asset optimization include?", "Text customization and Final URL expansion.", "Generated or tailored messaging and destination selection.", "Only image resizing.", "Automatic budget increases.", "These settings alter creative and landing destinations."),
        q("Can Final URL expansion run without text customization?", "No; Google states text customization must be on so copy matches the page.", "The settings are linked.", "Yes, always.", "Only on Manual CPC.", "The copy/destination relationship is a requirement."),
        q("What is a key precondition for Final URL expansion?", "A safe, relevant, compliant, trackable website with URL exclusions where necessary.", "Confidence that eligible pages can receive paid traffic.", "A one-page website.", "No conversion tracking.", "Automation can expose weak or inappropriate pages."),
        q("How should AI Max success be judged?", "Incremental qualified conversions or value at acceptable economics.", "Against a defined control and matured conversion data.", "More impressions alone.", "The recommendation score.", "Expansion is useful only when it adds commercial value."),
        q("What new transparency is useful?", "Match-source values plus headline and URL reporting in search-term journeys.", "Better evidence about why and where ads served.", "Perfect disclosure of every auction signal.", "A guarantee no query is hidden.", "Reporting improves, but automation remains probabilistic."),
        q("What workflow risk exists in 2026?", "AI Max changes may not yet be available in API and Editor, so teams must coordinate.", "Interface and bulk-management support may differ.", "The feature cannot be turned off.", "AI Max deletes all keywords.", "Google explicitly warns API/Editor users."),
        w("Decide whether a mature Search campaign is ready for AI Max.", "Assess conversion quality, structure, page safety, assets, brand/URL controls, policy, budget, query review, API workflow, experiment, and success metric."),
        w("Write an AI Max post-launch review.", "Include incremental results, search terms/source, URLs, generated assets, brand/geo controls, quality, lag, exclusions, and keep/adjust/stop decision.")
      ]
    ),

    module(
      "pmax",
      "10. Performance Max and cross-channel campaign judgment",
      "Use Performance Max as a goal-based complement to Search while steering goals, creative, brand, URLs, search themes, and reporting.",
      ["Understand channel role", "Build asset and data inputs", "Manage overlap and transparency"],
      [
        lesson("The product", "Performance Max can access Search, YouTube, Display, Discover, Gmail, Maps, and other eligible inventory from one goal-based campaign.", ["It is designed to complement keyword Search.", "Smart Bidding optimizes across channels.", "It requires meaningful conversion goals and creative/data inputs."]),
        lesson("Inputs and controls", "Provide budget, goals, values, assets, audience signals, search themes, feeds, brand exclusions, negatives, and URL controls as appropriate.", ["Audience signals guide rather than hard-target all reach.", "Asset groups should reflect coherent themes.", "Consolidate campaigns unless a real control difference exists."]),
        lesson("Search interaction", "An identical eligible exact-match Search keyword is prioritized; phrase/broad and search themes share later priority rules.", ["Search can lose eligibility due to budget, status, targeting, or disapproval.", "Brand overlap can occur.", "Use exclusions and reporting rather than assuming zero overlap."]),
        lesson("Transparency and incrementality", "Review asset, asset-group, channel-performance, placement, search-category/theme, and conversion-quality reports.", ["Channel reporting is now part of the available reporting set.", "Do not judge PMax only by aggregate ROAS.", "Test whether it adds value beyond existing campaigns."])
      ],
      ["Design a lead-gen PMax asset group.", "Build a brand/URL/negative control plan.", "Create an incrementality experiment."],
      "You can use cross-channel automation without surrendering business goals or pretending aggregate reporting is enough.",
      [S.pmax, S.match, S.experiments],
      [
        q("What is Performance Max designed to do?", "Optimize toward specified conversion goals across Google inventory as a complement to Search.", "Access multiple channels with Smart Bidding.", "Replace every Search campaign.", "Guarantee incremental customers.", "PMax is goal-based and cross-channel, not universal replacement."),
        q("Which Search query is prioritized over PMax?", "A query identical to an eligible exact-match Search keyword.", "Eligible exact match has the highest stated priority.", "Every phrase keyword.", "Every brand query automatically.", "Eligibility still matters; exact-identical has stated priority."),
        q("What is an audience signal?", "An input that helps automation learn, not necessarily a strict audience boundary.", "A directional seed based on useful data.", "A guaranteed targeting restriction.", "A replacement for conversion tracking.", "Signals guide expansion rather than fully define eligibility."),
        q("Why can PMax show on brand terms?", "Search may be ineligible or PMax may enter under prioritization rules; use brand exclusions/negatives if needed.", "Overlap needs explicit management.", "PMax always ignores Search.", "Brand traffic is free.", "Brand capture is possible and should be reported separately."),
        q("What should asset groups represent?", "Coherent creative, product/service, and landing-page themes.", "A meaningful customer or offer theme.", "One asset group per headline.", "Every audience list separately.", "Asset groups need enough cohesion for relevant ads."),
        q("What does Final URL expansion do in PMax?", "It may select a more relevant page and generate matching text assets.", "It broadens eligible customer journeys within controls.", "It changes the website permanently.", "It guarantees conversion-rate improvement.", "Destination automation requires page and exclusion readiness."),
        q("Which report helps expose channel mix?", "Channel performance reporting.", "Use it with asset, placement, and conversion-quality evidence.", "Quality Score.", "Keyword position.", "PMax now lists channel performance among available reports."),
        q("When should PMax be postponed for lead gen?", "When primary conversions are weak, offline quality is invisible, creative is poor, or the site is unsafe for expansion.", "Until minimum measurement and assets are credible.", "Whenever Search exists.", "Until every competitor uses it.", "Cross-channel automation amplifies bad signals."),
        w("Design a PMax test for a local service business already running Search.", "Define incremental goal, conversion quality, exclusions, assets, audience signals, search themes, budget, Search overlap, experiment, lag, and stop criteria."),
        w("Audit a PMax campaign with strong platform CPA but poor CRM sales.", "Inspect goal selection, spam/lead form sources, channels, assets, URLs, brand, geo, placements, intake, offline imports, values, and whether aggregate CPA masks quality.")
      ]
    ),

    module(
      "analysis",
      "11. Reporting, experiments, optimization, and troubleshooting",
      "Diagnose performance changes, design valid tests, and produce decisions from reports rather than react to dashboard noise.",
      ["Build decision-grade reports", "Run controlled experiments", "Troubleshoot in the correct order"],
      [
        lesson("Performance tree", "Spend = eligible demand × auction participation × clicks × cost; outcomes depend on conversion and sales stages.", ["Locate which stage changed.", "Use segments, comparison windows, annotations, and change history.", "Account for seasonality and conversion lag."]),
        lesson("Experiments", "Start with a business hypothesis, test one material variable, preselect one or two success metrics, and keep the base stable.", ["Use the Experiments page when supported.", "Record every test.", "Do not declare winners from random fluctuation."]),
        lesson("Optimization cadence", "Review budget, goals, search terms, quality, assets, pages, bidding, geo/network, and downstream outcomes at the cadence each needs.", ["Not every setting needs weekly edits.", "Use thresholds and owners.", "Recommendations are inputs, not commands."]),
        lesson("Troubleshooting order", "Check status, policy, billing, goals/tracking, targeting, budget/bid, demand, auction, creative/page, and post-lead operations.", ["Avoid raising spend before verifying measurement.", "Use explanations and change history.", "Make one controlled correction where possible."])
      ],
      ["Build a weekly PPC scorecard.", "Write three experiment briefs.", "Diagnose five simulated performance drops."],
      "You can identify causality carefully, make fewer better changes, and explain uncertainty.",
      [S.experiments, S.learning, S.best],
      [
        q("A campaign’s CPA doubled this week. First move?", "Decompose volume, CPC, conversion rate, mix, tracking, lag, and recent changes before editing.", "Verify data and locate the changed funnel stage.", "Cut every bid in half.", "Replace all ads immediately.", "A top-line symptom has many possible causes, so locate the changed stage before prescribing."),
        q("What is a good experiment hypothesis?", "Changing one defined input should improve a named business metric for a stated reason.", "A falsifiable claim tied to the goal.", "Let’s try AI.", "Change everything and see what wins.", "Hypotheses create interpretable decisions."),
        q("How many variables should a standard experiment change?", "One material variable at a time.", "Enough to test the hypothesis cleanly.", "At least five.", "All recommendations together.", "Google’s experiment guidance explicitly favors one variable."),
        q("When should success metrics be selected?", "Before the test starts.", "During planning, with one or two primary decision metrics.", "After seeing which metric improved.", "Only if the result is negative.", "Preselection reduces cherry-picking."),
        q("Why consider conversion delay?", "Recent clicks may not yet have produced or reported their outcomes.", "Mature cohorts before comparing.", "It makes all reports useless.", "Google backdates spend.", "Lag biases recent CPA/ROAS if ignored."),
        q("What is the role of optimization score?", "A recommendation framework to review—not an independent business objective.", "A source of hypotheses and setup alerts.", "The final KPI.", "A guarantee of best practice.", "Recommendations must pass business and evidence review."),
        q("A campaign has zero impressions. Correct order?", "Status/policy/billing → targeting/keywords → bid/budget → demand/eligibility.", "Verify eligibility before creative optimization.", "Rewrite landing-page copy first.", "Add more conversions.", "No impressions is primarily an eligibility/demand problem."),
        q("What should a change log include?", "Date, owner, hypothesis, setting, before state, expected result, review date, and outcome.", "Enough context to connect edits to results.", "Only the date.", "A screenshot with no explanation.", "Decision memory prevents repeated mistakes."),
        w("Design a weekly operating review for a lead-generation account.", "Include spend, goals, conversions, quality stages, search terms, network/geo/device, bidding, budget, assets/pages, policy, lag, changes, decisions, owners, and next review."),
        w("Diagnose a 30% conversion drop after a site release.", "Validate tags and forms, compare landing/device/browser, use change history, preserve evidence, fix measurement/function first, consider data exclusions where appropriate, and avoid bid panic.")
      ]
    ),

    module(
      "governance",
      "12. Policy, account safety, client strategy, and capstone",
      "Operate client accounts safely, communicate truthfully, and integrate every mastery domain into a defensible growth plan.",
      ["Protect ownership and access", "Handle policy and recommendations correctly", "Deliver a complete account audit"],
      [
        lesson("Client ownership", "The client should own the account, billing relationship, data, and core conversion assets while granting named agency access.", ["Use manager accounts and least privilege.", "Require multi-factor security.", "Review stale users and change history."]),
        lesson("Policy operations", "Read the exact disapproval, inspect Policy details, correct the ad/page/account, and appeal truthfully.", ["A disapproved ad cannot run until fixed and reviewed.", "Do not clone ads to evade enforcement.", "Keep evidence and appeal status records."]),
        lesson("Consultative management", "Connect platform recommendations to business goals, unit economics, capacity, and risk.", ["Say no to premature scaling.", "Separate Google’s published recommendation from your client-specific judgment.", "Report failures and uncertainty directly."]),
        lesson("Mastery standard", "A PPC master can measure, build, write, launch, diagnose, optimize, protect, and explain—and knows when not to spend.", ["Use official sources and live account evidence.", "Complete a capstone with inspectable artifacts.", "Seek supervised real-account practice."])
      ],
      ["Create an access and security checklist.", "Write a policy-disapproval response SOP.", "Complete the capstone account audit and client walkthrough."],
      "You can take responsibility for spend without sacrificing truth, safety, or decision quality.",
      [S.policy, S.help, S.best],
      [
        q("Who should retain primary ownership of a client account?", "The client business, with documented named access for partners.", "An authorized client administrator.", "The agency forever.", "A shared anonymous login.", "Ownership and continuity belong with the advertiser."),
        q("First step for a disapproved ad?", "Read the exact policy reason and Policy details before changing anything.", "Identify the affected ad, asset, page, or account issue.", "Duplicate the ad repeatedly.", "Appeal without reading the policy.", "Diagnosis must follow the actual enforcement reason."),
        q("When should a policy decision be appealed?", "When evidence supports compliance or after the issue is genuinely corrected.", "With a truthful, documented case.", "Every day until approved.", "Using altered documents.", "Repeated unsupported appeals and circumvention create risk."),
        q("How should Google recommendations be handled?", "Review each against goals, measurement, economics, risk, and evidence.", "Use them as hypotheses or setup prompts.", "Auto-apply all recommendations.", "Reject every automated suggestion.", "Good governance is neither obedience nor reflexive rejection."),
        q("A client demands double spend despite weak qualified economics. Best response?", "Show the evidence, identify the constraint, and define what must improve before scaling.", "Offer a controlled test only if downside and learning justify it.", "Double spend to preserve the relationship.", "Hide lead-quality data.", "Budget stewardship is part of the service."),
        q("What is the safest account-access practice?", "Named users, manager-account access, least privilege, MFA, and periodic review.", "Client-controlled ownership with an offboarding plan.", "One password shared in chat.", "Agency-created personal accounts for clients.", "Security and continuity require attributable access."),
        q("What proves PPC mastery?", "Consistent decisions across economics, measurement, structure, creative, automation, analysis, policy, and communication.", "A documented capstone and real supervised practice.", "A high optimization score.", "Memorizing interface menus.", "Mastery is applied judgment under changing conditions."),
        q("When should you recommend not launching?", "When measurement, economics, offer, policy, landing path, or operations make spend unsafe or uninterpretable.", "When prerequisites cannot support a responsible test.", "Never; spend creates data.", "Only when Google rejects payment.", "Restraint protects the client and the learning system."),
        w("Outline a complete PPC account audit for a local service client.", "Cover goals/economics, conversions/privacy, structure, queries/negatives, ads/assets, pages, bidding/budgets, targeting/networks, AI/PMax controls, lead quality, experiments, policy/access, priorities, and evidence."),
        w("Give a five-minute client recommendation after finding bad tracking, broad low-quality traffic, and weak call handling.", "Sequence measurement and intake repair before scale, preserve useful traffic, state budget risk, define a controlled next step, assign owners, and avoid blame or guarantees.")
      ]
    )
  ];

  const total = window.PPC_MODULES.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.PPC_MODULES.length !== 12 || total !== 120) {
    console.error(`PPC content error: expected 12 modules and 120 questions; found ${window.PPC_MODULES.length} and ${total}.`);
  }
})();

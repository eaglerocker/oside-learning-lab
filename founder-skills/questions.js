/* Full question bank: 20 domains × 6 questions = 120 questions. */
(() => {
  const o = (score, text) => ({ score, text });
  const mcq = (type, prompt, options, explanation) => ({ type: "choice", format: type, prompt, options, explanation });
  const written = (type, prompt, guidance) => ({ type: "written", format: type, prompt, guidance });
  const domain = (id, name, description, importance, roadmap, questions) => ({
    id, name, description, importance, roadmap,
    questions: questions.map((question, index) => ({ ...question, id: `${id}-${index + 1}` }))
  });

  window.OSIDE_DOMAINS = [
    domain(
      "serp-pattern",
      "SERP pattern recognition",
      "Ability to inspect a Google results page and identify every meaningful surface: Local Services Ads, Local Pack, GBP, organic results, review sites, directories, competitor pages, People Also Ask, AI answers, and paid placements.",
      "customer-one",
      {
        meaning: "You may miss where attention and trust are actually being won on the results page.",
        why: "The audit's credibility starts with seeing the whole market, not reporting one ranking.",
        study: "Modern local SERP anatomy, ownership types, intent shifts, and device/location variation.",
        practice: "Label real roofing SERPs before interpreting them.",
        proof: "You can inventory a SERP quickly, distinguish owned from rented visibility, and explain the business implication.",
        drills: ["Analyze 10 roofing SERPs in different cities.", "Label every SERP surface and who owns it.", "Write a five-sentence diagnosis for each market."]
      },
      [
        mcq("Diagnostic case", "A roofer ranks #3 organically for “roof replacement near me” but does not appear in the Local Pack. What is the best first diagnostic question?", [
          o(1, "Can we add the phrase “near me” to the homepage title?"),
          o(5, "Is the business eligible, verified, properly categorized, and geographically competitive for the searcher’s location?"),
          o(0, "How much should we bid on that keyword?"),
          o(3, "How many Google reviews does the business have compared with pack competitors?")
        ], "Organic position does not explain map eligibility or proximity. Start with the GBP and local-pack conditions; review strength is useful after the basic conditions are established."),
        written("Visual inventory", "You are looking at a roofing SERP containing two LSAs, three text ads, a Local Pack, an AI answer, four organic results, People Also Ask, and two directories. Describe how you would label the page for an audit screenshot.", "A strong answer inventories every surface, marks brand ownership, separates paid/owned/third-party visibility, notes position and likely intent, and avoids calling the page simply an “SEO ranking.”"),
        mcq("Client explanation", "A competitor appears in LSA, the Local Pack, organic results, and a top review-site listicle. Which explanation is most useful to the roofer?", [
          o(5, "They repeatedly appear at different trust and intent moments, so a searcher has several chances to choose them before reaching your site."),
          o(3, "They have stronger search visibility across paid, local, organic, and third-party surfaces."),
          o(0, "Google has decided they are the best roofer in town."),
          o(1, "They rank four times, so they probably receive exactly four times the leads.")
        ], "Search ownership is repeated opportunity and trust—not a guaranteed lead multiplier or a declaration from Google that the company is best."),
        mcq("Prioritization", "Which sequence best reflects how a careful audit should scan a roofing SERP?", [
          o(0, "Open the first organic result, ignore the rest, and run a backlink tool."),
          o(3, "Record rankings, then check the website and reviews."),
          o(1, "Count ads, count maps, count organic results, and total the numbers."),
          o(5, "Confirm query/location/device → inventory surfaces top to bottom → identify owners → inspect destination paths → state the likely opportunity.")
        ], "A defensible SERP diagnosis preserves the search context, maps the visible market, and follows important paths before recommending a fix."),
        mcq("Red-flag identification", "People Also Ask is dominated by questions about insurance claims after a hailstorm. What is the strongest inference?", [
          o(3, "The market has informational demand worth addressing in supporting content."),
          o(0, "The roofer should replace every service page with a blog."),
          o(5, "Storm and insurance uncertainty is part of the buyer journey; inspect whether competitors bridge those questions to inspection or replacement offers."),
          o(1, "People Also Ask never produces leads and can be ignored.")
        ], "The SERP is signaling a pre-conversion need. The useful move is to connect education to an appropriate next step, not mistake all research traffic for low value."),
        written("Timed diagnosis", "Write the five sentences you would use to diagnose a SERP where the client owns one organic result, while competitors dominate LSAs, maps, directories, and review pages.", "A client-ready response names the visibility gap, explains repeated competitor exposure, distinguishes surfaces, avoids promising rankings, and recommends one evidence-based next diagnostic step.")
      ]
    ),

    domain(
      "diagnostic-thinking",
      "Diagnostic thinking",
      "Ability to separate symptoms from causes, avoid jumping straight to tactics, and identify the highest-value constraint.",
      "customer-one",
      {
        meaning: "You may prescribe a familiar tactic before understanding why jobs are leaking.",
        why: "Customer #1 needs a useful diagnosis, not a menu of agency services.",
        study: "Constraint analysis, evidence ladders, hypothesis testing, and symptom-versus-cause framing.",
        practice: "Force every recommendation to name the observed evidence and rejected alternatives.",
        proof: "Your top recommendation changes when the evidence changes, and you can explain why.",
        drills: ["Turn 10 marketing complaints into testable hypotheses.", "For five sites, trace symptom → possible causes → confirming evidence.", "Write one recommendation and three reasons not to make it yet."]
      },
      [
        mcq("Diagnostic case", "Google Ads is generating clicks but no recorded calls. What should you do first?", [
          o(0, "Increase bids so more people see the ads."),
          o(5, "Verify call/form tracking, inspect search terms, and test the ad-to-page-to-contact path before judging demand."),
          o(1, "Pause every keyword with no conversion immediately."),
          o(3, "Review the landing page message and mobile call experience.")
        ], "A no-call report may be a tracking, traffic-quality, or conversion-path problem. Verify the measurement and the path before changing spend."),
        mcq("Symptom vs. cause", "A roofer says, “Our SEO is bad because traffic fell 25%.” Which response shows the best diagnostic discipline?", [
          o(3, "Compare branded and non-branded traffic and check seasonality."),
          o(1, "Publish more content to replace the lost visits."),
          o(5, "Clarify which queries, pages, locations, devices, and lead outcomes changed before deciding whether the decline is harmful."),
          o(0, "Agree and recommend a six-month SEO retainer.")
        ], "Traffic is an aggregate symptom. The business impact depends on what declined and whether qualified calls or forms changed."),
        written("Constraint analysis", "A roofer has strong reviews, a fast website, and top-five organic rankings but weak lead volume. Walk through the next diagnostic steps before recommending a service.", "Strong answers test SERP click opportunity, query intent, local-pack presence, snippets, page-message match, calls/forms, tracking, and close-rate handoff in a sensible order."),
        mcq("What next?", "A client is absent from the Local Pack. You find a verified GBP with the correct primary category. What is the best next move?", [
          o(1, "Add 20 service keywords to the business name."),
          o(3, "Compare review volume and freshness against competitors."),
          o(0, "Create a second listing at a virtual office."),
          o(5, "Test rankings from relevant points in the service area, then compare proximity, prominence, categories, reviews, and linked-page strength.")
        ], "Local visibility is geographic and multi-factor. A grid and competitor comparison reveal whether the constraint is proximity, prominence, relevance, or site support."),
        mcq("Red flag", "Which audit statement most clearly jumps from observation to unsupported prescription?", [
          o(5, "“You have fewer referring domains than the top result, so you need our 50-link package.”"),
          o(0, "“Your site has no schema, so Google cannot index it.”"),
          o(3, "“The replacement page receives visits but few calls; we should inspect intent, trust, and the call path.”"),
          o(1, "“Competitors have more reviews, which may contribute to their map advantage.”")
        ], "A metric difference alone does not prove the prescribed package is the binding constraint. The schema claim is also wrong, but the link-package leap is the clearest sales-led diagnosis."),
        written("Client explanation", "A prospect asks, “So what’s the one thing wrong with our Google presence?” You do not yet have enough evidence. Answer without sounding evasive.", "A strong answer is candid, names the leading hypotheses, explains what the audit will inspect, and promises a prioritized finding—not a predetermined tactic.")
      ]
    ),

    domain(
      "local-search",
      "Local search strategy",
      "Ability to understand GBP, map pack visibility, reviews, service areas, local organic pages, and local intent.",
      "core",
      {
        meaning: "You may confuse website rankings with local visibility or recommend risky GBP tactics.",
        why: "Roofing discovery is heavily local, and map visibility can determine whether the roofer enters the consideration set.",
        study: "GBP eligibility, categories, proximity, prominence, reviews, landing-page support, and local rank tracking.",
        practice: "Compare map results from multiple points rather than one desktop search.",
        proof: "You can explain why map visibility varies and propose compliant, evidence-based improvements.",
        drills: ["Run a manual local-grid review for three roofing terms.", "Compare five competitor GBPs field by field.", "Audit review velocity, responses, categories, services, and linked pages."]
      },
      [
        mcq("Scenario", "A service-area roofer hides its address and serves a 40-mile radius. Which claim is safest?", [
          o(0, "Setting a 40-mile service area makes the business rank throughout that radius."),
          o(3, "The service-area settings help describe coverage to customers."),
          o(5, "The listed service area does not override proximity; visibility still varies by searcher location and competition."),
          o(1, "The business should add dozens of nearby cities to the name.")
        ], "GBP service areas do not create a ranking radius. Proximity and local competition still matter."),
        mcq("Prioritization", "A GBP has the wrong primary category, 12 old reviews, and no recent photos. What is the best first fix?", [
          o(3, "Start a compliant process for earning new reviews."),
          o(1, "Upload 100 stock roofing photos."),
          o(0, "Put keywords in every GBP field."),
          o(5, "Correct the primary category, then build a steady review and profile-maintenance process.")
        ], "Primary category is foundational relevance. Reviews and fresh assets matter, but profile basics come first."),
        written("Local diagnosis", "The roofer ranks in maps near the office but disappears eight miles away in two valuable suburbs. Explain what you would investigate.", "Look for proximity patterns, competitor locations/prominence, legitimate physical-market limits, suburb demand, organic local pages, review distribution, and whether expansion expectations are realistic."),
        mcq("Review judgment", "A competitor has fewer reviews but outranks the client in the Local Pack. What should you conclude?", [
          o(1, "Reviews do not matter."),
          o(0, "The competitor must be buying reviews."),
          o(5, "Review count is only one factor; compare proximity, category relevance, rating, freshness, prominence, and linked-site signals."),
          o(3, "The client should improve review velocity and quality while investigating other factors.")
        ], "Local rankings cannot be reduced to review count. The comparison should widen the diagnosis, not dismiss reviews."),
        mcq("Risk identification", "Which city-page strategy presents the greatest local-search risk?", [
          o(3, "Creating pages only for priority markets with unique proof and services."),
          o(5, "Generating 80 pages that swap city names while using identical claims, photos, and body copy."),
          o(1, "Linking service-area pages from a regional hub."),
          o(0, "Mentioning nearby cities truthfully on a service-area page.")
        ], "Near-duplicate doorway-style pages create weak user value and indexing risk. Fewer substantiated pages are safer and more persuasive."),
        written("Client explanation", "Explain why a roofer can rank organically but still be nearly invisible to a mobile searcher looking for a nearby contractor.", "A strong explanation describes the vertical order of ads/LSAs/maps, screen space, proximity, and how organic visibility may sit below several higher-attention surfaces.")
      ]
    ),

    domain(
      "roofing-intent",
      "Roofing-market search judgment",
      "Ability to distinguish high-value roof replacement intent from lower-value repair or research intent.",
      "customer-one",
      {
        meaning: "You may treat all roofing keywords and leads as equally valuable.",
        why: "The first audit must connect search visibility to job economics, urgency, and service fit.",
        study: "Replacement, repair, emergency, storm, insurance, material, and commercial-versus-residential intent.",
        practice: "Classify queries by likely job type, urgency, ambiguity, and next page.",
        proof: "You can prioritize terms by business value without pretending every search becomes a job.",
        drills: ["Classify 100 roofing queries into intent buckets.", "Map each bucket to the right offer and page.", "Interview a roofer about margin, seasonality, qualification, and bad leads."]
      },
      [
        mcq("Intent judgment", "Which query most clearly signals a high-value residential replacement opportunity?", [
          o(1, "how long do shingles last"),
          o(3, "roofing company near me"),
          o(5, "full roof replacement estimate in Oceanside"),
          o(0, "free roofing calculator template")
        ], "The replacement estimate query combines service, transaction, and location intent. “Roofing company” is valuable but less specific."),
        mcq("Scenario", "Search volume is high for “roof leak repair,” but the roofer prefers full replacements. What should the audit recommend?", [
          o(0, "Ignore every repair query because repairs have no value."),
          o(5, "Assess whether repair demand can qualify replacement opportunities, then separate messaging, budgets, and conversion paths."),
          o(3, "Create a repair page with clear service fit and qualification."),
          o(1, "Send all repair traffic to the replacement page.")
        ], "Repair intent may be valuable, distracting, or a bridge to replacement. The answer depends on business fit and qualification, not volume alone."),
        written("Search classification", "Classify these queries and explain the likely next step: “roof replacement cost,” “hail damage insurance roof,” “emergency tarp service,” and “best metal roof color.”", "Strong answers distinguish commercial investigation, urgent service, insurance/storm uncertainty, and early research, then map each to an appropriate page and CTA."),
        mcq("Paid-search judgment", "Which keyword is most dangerous to bid broadly without negatives and qualification?", [
          o(3, "roof replacement contractor"),
          o(0, "residential roofer [city]"),
          o(5, "roof"),
          o(1, "emergency roof repair near me")
        ], "A single broad term like “roof” can match products, jobs, DIY, definitions, and unrelated intent, leaking budget quickly."),
        mcq("Market signal", "After a hailstorm, impressions spike for insurance and inspection terms. What is the best response?", [
          o(1, "Publish generic storm blogs every day."),
          o(5, "Align a truthful storm/insurance information path with inspection capacity, service area, and compliant claims."),
          o(3, "Update pages and GBP messaging to clarify storm inspection availability."),
          o(0, "Promise every homeowner a free roof through insurance.")
        ], "Storm demand requires speed and relevance, but claims must remain truthful and operational capacity matters."),
        written("Client explanation", "A roofer wants to chase the keyword with the highest search volume. Explain why that may be the wrong priority.", "Tie search intent, geographic fit, job value, conversion probability, capacity, and cost-to-acquire to the decision. Avoid saying volume is irrelevant.")
      ]
    ),

    domain(
      "offer-funnel",
      "Offer and funnel analysis",
      "Ability to evaluate whether the search result connects to a page, CTA, form, call path, and conversion mechanism that can turn interest into a booked job.",
      "core",
      {
        meaning: "You may diagnose visibility while overlooking the path that turns attention into a booked inspection.",
        why: "More traffic cannot rescue a broken offer, confusing page, or dead call path.",
        study: "Message match, offer clarity, friction, qualification, calls/forms, follow-up, and lead handoff.",
        practice: "Trace complete journeys from query to contact and test them on mobile.",
        proof: "You can identify the exact step where a qualified prospect is most likely to drop.",
        drills: ["Mystery-shop five roofing funnels on mobile.", "Diagram query → SERP → page → CTA → response for three offers.", "Rewrite one weak offer around risk, value, and next step."]
      },
      [
        mcq("Funnel case", "A roofer has strong visibility and healthy click-through rates but very few leads. Where should you look next?", [
          o(5, "Message match, trust, offer clarity, mobile CTA, form/call function, and tracking."),
          o(3, "The landing page and contact experience."),
          o(1, "More backlinks."),
          o(0, "A larger ad budget.")
        ], "The leak appears after the click. Inspect the experience and measurement before buying more traffic."),
        mcq("Offer judgment", "Which CTA is strongest for a homeowner considering a roof replacement?", [
          o(1, "Submit"),
          o(3, "Contact our roofing team"),
          o(0, "Learn everything about roofing"),
          o(5, "Schedule a roof inspection and get clear next-step options")
        ], "The best CTA names the action and expected value without making an unsupported promise."),
        written("Journey audit", "Trace the ideal journey for someone searching “roof replacement estimate near me,” from SERP impression to a qualified appointment.", "Include surface/message match, page relevance, proof, clear CTA, minimal friction, call/form tracking, speed-to-lead, qualification, and appointment confirmation."),
        mcq("Red flag", "The contact form asks for 14 required fields, including budget and preferred shingle brand. What is the best audit note?", [
          o(0, "Long forms always produce higher-quality leads, so keep it."),
          o(3, "Test reducing fields and move some qualification to follow-up."),
          o(5, "The form may create avoidable friction before trust exists; retain only what is needed to begin a useful response."),
          o(1, "Remove the form and accept calls only.")
        ], "Qualification matters, but excessive early friction can suppress valid inquiries. The answer is a measured redesign, not a universal form rule."),
        mcq("Diagnostic sequence", "Calls are being answered, but few become appointments. What should the audit do?", [
          o(1, "Increase website traffic."),
          o(5, "Separate marketing lead quality from call handling by reviewing source, recordings, response, qualification, and disposition."),
          o(0, "Declare SEO a failure."),
          o(3, "Inspect call recordings and lead-source quality.")
        ], "The funnel continues beyond the form or phone ring. Marketing and operational handoff both require evidence."),
        written("Offer critique", "A homepage offers “Free estimates, free inspections, free consultations, and free reports.” Diagnose the offer problem and propose a clearer first step.", "Strong answers identify commodity language, choice overload, weak differentiation, and unclear outcome; then propose one low-risk, credible action tied to homeowner value.")
      ]
    ),

    domain(
      "conversion-copy",
      "Website conversion copywriting",
      "Ability to write clear, persuasive page copy that matches buyer intent and encourages calls or form fills.",
      "supporting",
      {
        meaning: "Your pages may sound polished but fail to answer why this roofer, for this job, now.",
        why: "Clear copy turns the audit's diagnosis into a credible conversion improvement.",
        study: "Intent-led headlines, specificity, proof, objection handling, hierarchy, and CTA language.",
        practice: "Replace generic claims with concrete buyer-relevant statements.",
        proof: "A homeowner can identify service, area, reason to trust, and next step within seconds.",
        drills: ["Rewrite 20 generic roofing headlines.", "Build a proof inventory from one roofer interview.", "Create replacement, repair, and storm page message hierarchies."]
      },
      [
        mcq("Copy critique", "A roofer’s homepage says, “Quality roofing services you can trust.” What is the main weakness?", [
          o(3, "It lacks a location reference."),
          o(5, "It is generic: it does not clarify the service fit, evidence, buyer outcome, or why this roofer is different."),
          o(1, "It contains too few keywords."),
          o(0, "The word “trust” causes a ranking penalty.")
        ], "The line is interchangeable with thousands of businesses. Useful copy earns trust through specificity and proof."),
        mcq("Headline choice", "Which replacement-page headline best matches high-intent homeowners without overpromising?", [
          o(0, "Guaranteed Lowest Roofing Price in America"),
          o(1, "Roof Replacement"),
          o(3, "Roof replacement options built for coastal homes"),
          o(5, "Know what your roof needs, what it will cost, and what happens next")
        ], "The best headline addresses uncertainty and the decision process. A service/location line is solid but less outcome-focused."),
        written("Rewrite", "Rewrite this hero section: “Welcome to ABC Roofing. We provide quality solutions. Contact us today.” Include a headline, supporting line, proof cue, and CTA.", "Score for intent match, concrete value, credible proof, plain language, and a low-friction next step—not cleverness or keyword density."),
        mcq("Proof judgment", "Which proof belongs closest to a roof-replacement CTA?", [
          o(1, "A generic manufacturer logo carousel with no context"),
          o(5, "A relevant local project, review excerpt, licensing/warranty facts, and what happens after the click"),
          o(0, "A claim that every customer is 100% satisfied"),
          o(3, "A short review from a nearby replacement customer")
        ], "Specific, relevant proof and process clarity reduce uncertainty at the decision point."),
        mcq("Red flag", "Which copy recommendation is most likely to reduce trust?", [
          o(3, "Explain financing availability accurately."),
          o(0, "Use short paragraphs and descriptive headings."),
          o(5, "Add urgency such as “Your roof may fail tonight” to every page regardless of condition."),
          o(1, "Mention limited storm-response capacity when true.")
        ], "Manufactured fear is especially harmful in high-trust home services. Urgency should come from the situation, not manipulation."),
        written("Objection handling", "Write a short section for a homeowner who worries that requesting an inspection will trigger a high-pressure sales pitch.", "A strong answer acknowledges the concern, explains the process and boundaries, gives the homeowner control, and avoids promises the roofer cannot operationally keep.")
      ]
    ),

    domain(
      "competitive-analysis",
      "Competitive analysis",
      "Ability to understand why competitors are winning and what assets they have that the client lacks.",
      "core",
      {
        meaning: "You may copy visible tactics without understanding the competitor's underlying advantage.",
        why: "A useful audit explains the gap and chooses a realistic path to close it.",
        study: "SERP presence, GBP strength, page quality, authority, offers, proof, paid coverage, and operational fit.",
        practice: "Compare competitors using the same evidence framework.",
        proof: "You can separate correlation from likely advantage and identify an achievable counter-move.",
        drills: ["Build a five-competitor evidence matrix.", "Separate assets, tactics, and inferred advantages.", "Write one “do not copy” note for each competitor."]
      },
      [
        mcq("Competitor case", "The top organic competitor has 600 pages. What is the best conclusion?", [
          o(0, "The client needs 601 pages."),
          o(1, "More pages always cause higher rankings."),
          o(5, "Determine which pages earn visibility, links, and leads before treating site size as an advantage."),
          o(3, "Their broader topical and location coverage may contribute to visibility.")
        ], "Page count is not a strategy. Identify productive assets and quality before recommending expansion."),
        mcq("Asset analysis", "A competitor wins maps with fewer reviews but has a prominent local brand, years of citations, sponsorships, and strong branded search. What does this suggest?", [
          o(3, "Offline prominence may reinforce local visibility."),
          o(0, "Citations are the only local ranking factor."),
          o(1, "Reviews should be ignored."),
          o(5, "Prominence is broader than review count; the competitor has accumulated local signals the client cannot copy overnight.")
        ], "Competitive strength can be compounding and brand-based. The plan should acknowledge time and avoid a simplistic review race."),
        written("Comparison", "Compare two roofers: one dominates ads and has a weak site; the other dominates organic and maps but runs no ads. What questions determine which is the more dangerous competitor?", "Consider query coverage, impression share, destinations, conversion experience, reviews, brand demand, service fit, lead economics, and durability."),
        mcq("Red flag", "Which competitive recommendation is least defensible?", [
          o(5, "“Competitor X uses 47 city pages, so we should clone their structure and wording.”"),
          o(3, "“Competitor X has dedicated pages for high-value services we currently bury.”"),
          o(1, "“Competitor X's review recency may improve trust and local prominence.”"),
          o(0, "“Competitor X ranks, therefore every element of their site is best practice.”")
        ], "Cloning pages is a concrete, risky prescription based only on observed correlation. Ranking sites often succeed despite weak elements."),
        mcq("Prioritization", "A competitor gap report finds weaker reviews, fewer links, worse pages, no LSAs, and slower response time. What should happen next?", [
          o(1, "Sell five services at once."),
          o(5, "Rank gaps by likely lead impact, confidence, effort, dependencies, and the roofer’s operational capacity."),
          o(3, "Choose the clearest high-impact gap and validate it."),
          o(0, "Tell the client the competitor is unbeatable.")
        ], "A gap list becomes strategy only after prioritization and constraint checks."),
        written("Client explanation", "Explain a competitor’s advantage without making the client feel belittled or promising to copy it immediately.", "Use neutral evidence, distinguish accumulated assets from fixable gaps, identify one achievable move, and keep the focus on business opportunity.")
      ]
    ),

    domain(
      "search-ownership",
      "Search ownership mapping",
      "Ability to map who owns each part of the Google results page and translate that into a business opportunity.",
      "core",
      {
        meaning: "You may report positions without showing how much of the buyer journey the client actually controls.",
        why: "Ownership mapping is the signature lens of the Oside audit.",
        study: "Owned, paid, earned, third-party, and competitor-controlled surfaces across priority queries.",
        practice: "Create simple visual maps that connect surfaces to likely buyer decisions.",
        proof: "You can quantify coverage carefully and convert the map into one prioritized opportunity.",
        drills: ["Map five high-value queries into ownership tables.", "Mark destination, owner, cost model, and controllability.", "Explain one map to a non-marketer in 90 seconds."]
      },
      [
        mcq("Definition", "Which definition of Google Search Ownership is most accurate?", [
          o(1, "Owning the trademark for a search phrase."),
          o(5, "Building credible presence across the search surfaces that influence a buyer, while recognizing some are paid, earned, or third-party."),
          o(3, "Showing up in more than one place on Google."),
          o(0, "Controlling what Google displays.")
        ], "Ownership is a strategic shorthand for coverage and influence, not literal control of Google."),
        mcq("Mapping case", "A directory listicle ranks above the client and names three competitors. How should it be classified?", [
          o(3, "A third-party earned-media opportunity."),
          o(0, "An organic result the client owns because it mentions roofers."),
          o(5, "A third-party surface currently transferring consideration to competitors; inspect inclusion criteria and referral value."),
          o(1, "A result to remove from Google.")
        ], "The surface is neither owned nor automatically obtainable. Map its influence, owners, and realistic access path."),
        written("Ownership map", "Create the fields you would include in a search-ownership map for 10 priority queries.", "Strong answers include query, intent, location/device, SERP surface, position, current owner, destination, control type, client presence, competitor presence, likely impact, and evidence/date."),
        mcq("Metric judgment", "The client appears on 7 of 10 tracked queries. Why is “70% search ownership” potentially misleading?", [
          o(1, "Percentages cannot be used in SEO."),
          o(5, "Queries and surfaces differ in value; one low organic result is not equivalent to an LSA, map, or top result on replacement intent."),
          o(3, "The score needs weighting by intent and visibility."),
          o(0, "Only paid placements count as ownership.")
        ], "Coverage metrics need transparent weighting. Presence alone can overstate meaningful visibility."),
        mcq("Opportunity", "The client owns maps and organic for branded searches but little for non-branded replacement searches. What is the key message?", [
          o(0, "Brand searches prove acquisition is solved."),
          o(3, "Existing customers can find the company, but new-demand visibility is weaker."),
          o(5, "The brand is findable when already known; the growth gap is entering consideration before the homeowner chooses a roofer."),
          o(1, "Change the company name to include “roof replacement.”")
        ], "Branded ownership is valuable but does not show that the company captures category demand."),
        written("Plain-English explanation", "Explain “Google Search Ownership” in one plain-English sentence, then add one sentence that prevents overpromising.", "The first sentence should connect repeated useful visibility to buyer choice. The second should state that Google cannot be controlled and outcomes are not guaranteed.")
      ]
    ),

    domain(
      "prioritization",
      "Strategic prioritization",
      "Ability to recommend the right first move rather than selling every tactic at once.",
      "customer-one",
      {
        meaning: "Your audit may become an overwhelming backlog instead of a decision.",
        why: "A first customer buys confidence in the next move, not every possible marketing activity.",
        study: "Impact, confidence, effort, dependency, reversibility, time-to-value, and capacity.",
        practice: "Limit every mock audit to one first move and two sequenced follow-ups.",
        proof: "The recommendation is specific, evidence-backed, feasible, and changes when constraints change.",
        drills: ["Score 20 recommendations using impact/confidence/effort.", "Turn five audit backlogs into 30/60/90-day sequences.", "Defend one thing you intentionally deprioritized."]
      },
      [
        mcq("First move", "A roofer has no replacement page, weak call tracking, and wants Google Ads next week. What should come first?", [
          o(0, "Launch broad-match ads to collect data."),
          o(5, "Fix minimum viable measurement and a credible replacement landing path before scaling traffic."),
          o(3, "Build the replacement page first, with tracking included."),
          o(1, "Start a blog because organic traffic is cheaper.")
        ], "Traffic should not be sent into an unmeasured, mismatched path. Measurement and landing experience are dependencies."),
        mcq("Tradeoff", "Which item usually deserves the lowest priority for customer #1?", [
          o(3, "Correcting a broken mobile call button."),
          o(0, "Clarifying the primary offer."),
          o(5, "Perfecting a 12-month content calendar before validating the first acquisition constraint."),
          o(1, "Verifying whether forms are recorded as leads.")
        ], "Long-range planning can wait when immediate conversion and diagnostic basics are unresolved."),
        written("Prioritization case", "You find 18 issues in an audit. Describe how you would choose and present the top three.", "Use business impact, evidence confidence, dependency, effort, speed, risk, and operational capacity. Present a sequence, owner, success signal, and what is deferred."),
        mcq("Client pressure", "The client insists on a tactic that your evidence ranks fourth. What is the best response?", [
          o(1, "Refuse to discuss it."),
          o(3, "Explain your ranking and ask what constraint or context you may be missing."),
          o(5, "Acknowledge the goal, show the evidence and tradeoffs, surface hidden constraints, and agree on a measurable decision."),
          o(0, "Say yes and hide your concern.")
        ], "Consultative prioritization is collaborative and explicit about tradeoffs; new business context can legitimately change the order."),
        mcq("Sequencing", "Which sequence is most coherent?", [
          o(5, "Verify tracking → fix high-intent path → test acquisition → measure lead quality → expand."),
          o(1, "Publish 50 pages → redesign logo → add tracking → ask about leads."),
          o(3, "Fix landing page → launch a small test → improve based on measured calls."),
          o(0, "Run ads, SEO, LSAs, email, and social simultaneously so something works.")
        ], "The best sequence establishes observability, fixes the path, tests demand, and expands from evidence."),
        written("Client explanation", "A roofer asks why the audit does not recommend fixing everything at once. Give a concise answer.", "Explain focus, dependencies, capacity, measurement, and learning. Avoid using scarcity as a sales tactic.")
      ]
    ),

    domain(
      "paid-search",
      "Google Ads / paid search judgment",
      "Ability to understand when paid search helps, when it leaks money, and when the landing page or tracking must be fixed first.",
      "supporting",
      {
        meaning: "You may recommend spend before the business can target, convert, or measure it safely.",
        why: "Paid search can accelerate customer #1 value—or expose weak judgment quickly.",
        study: "Search terms, match types, negatives, geography, conversion tracking, landing pages, bidding, and lead quality.",
        practice: "Audit account logic from query through booked-job outcome.",
        proof: "You can identify whether the next dollar should go to traffic, the page, tracking, or nowhere yet.",
        drills: ["Review three sample search-term reports.", "Build a negative-keyword list for a replacement campaign.", "Design a small-budget test with stop conditions."]
      },
      [
        mcq("Client objection", "A client asks, “Can’t we just run Google Ads?” What should you check before agreeing?", [
          o(0, "Only whether the credit card works."),
          o(3, "Keyword demand and budget."),
          o(5, "Offer fit, economics, geography, search terms, landing path, call/form tracking, response capacity, and a test threshold."),
          o(1, "Whether competitors are running ads.")
        ], "Competitor activity and demand are context, but safe paid search needs a measurable path and viable economics."),
        mcq("No-call case", "A campaign gets clicks but no calls. Which first-three checklist is strongest?", [
          o(5, "Tracking/functionality, search-term and geo quality, landing-page/mobile CTA match."),
          o(3, "Search terms, landing page, bids."),
          o(1, "Ad colors, social followers, backlinks."),
          o(0, "Raise budget, broaden match types, remove negatives.")
        ], "First establish whether leads are measured, whether the clicks are qualified, and whether the page can convert them."),
        written("Campaign triage", "A $2,000 campaign generated 80 clicks, four calls, one qualified inspection, and no booked job yet. Explain what you would and would not conclude.", "Calculate cautiously, inspect tracking and call quality, account for sales lag/sample size, compare job economics, and avoid declaring success or failure prematurely."),
        mcq("Search terms", "Which search term most clearly belongs on a negative list for a residential replacement campaign?", [
          o(3, "roof repair jobs near me"),
          o(5, "roofing jobs hiring apprentice"),
          o(1, "roof replacement financing"),
          o(0, "residential reroof estimate")
        ], "Employment intent is clearly irrelevant. “Roof repair jobs” is ambiguous and needs context, making it an acceptable but less certain negative candidate."),
        mcq("Budget judgment", "A roofer’s budget can generate only a handful of clicks in a very expensive market. What is the best advice?", [
          o(1, "Use broad match to stretch the budget."),
          o(5, "Narrow geography/intent, define a learning goal and stop condition, or defer ads if the test cannot produce useful evidence."),
          o(3, "Run a tightly scoped exact/phrase test."),
          o(0, "Guarantee one replacement job from the first month.")
        ], "A tiny budget must buy learning or a realistic opportunity. Sometimes the responsible recommendation is not to launch."),
        written("Client explanation", "Explain why Google Ads can produce immediate visibility but not automatically produce profitable roofing jobs.", "Mention auction cost, query quality, offer/page conversion, tracking, call handling, qualification, close rate, job value, and learning time in plain English.")
      ]
    ),

    domain(
      "landing-pages",
      "Landing page strategy",
      "Ability to design pages that match search intent, build trust, and convert high-value roofing leads.",
      "supporting",
      {
        meaning: "You may send valuable traffic to a generic page that does not resolve the searcher's uncertainty.",
        why: "A focused landing path is often the bridge between the audit finding and measurable value.",
        study: "Message match, page hierarchy, local proof, objection handling, mobile UX, CTA, and testing.",
        practice: "Wireframe pages around one intent and one primary action.",
        proof: "The page answers who it is for, why trust it, what happens next, and how to act.",
        drills: ["Wireframe three high-intent roofing pages.", "Run five-second tests with non-marketers.", "Compare mobile CTA and proof placement across 10 competitors."]
      },
      [
        mcq("Page choice", "A search ad targets “metal roof replacement.” Where should it land?", [
          o(1, "The homepage because it has the most authority."),
          o(5, "A credible metal-roof replacement page matching the ad, location, proof, decision questions, and CTA."),
          o(3, "A dedicated roof-replacement page with a strong metal-roof section."),
          o(0, "A generic blog post about metal colors.")
        ], "Specific message match is best; a well-designed broader replacement page can be acceptable when volume or assets do not justify a separate page."),
        mcq("Page hierarchy", "What belongs near the top of a high-intent replacement page?", [
          o(5, "Clear service/outcome, service area, relevant proof, primary CTA, and concise expectation-setting."),
          o(3, "A clear headline, proof, and call button."),
          o(1, "The founder’s complete life story."),
          o(0, "A full sitemap and every service link.")
        ], "The top of page should confirm relevance, reduce risk, and make the next step obvious."),
        written("Wireframe", "Outline a mobile-first landing page for storm-damage roof inspections. Name each section and its purpose.", "Look for truthful urgency, service-area fit, insurance-process clarity without guarantees, proof, process, FAQs, repeated CTA, and minimal mobile friction."),
        mcq("Test judgment", "Which A/B test is most interpretable?", [
          o(0, "Change headline, offer, form, images, traffic source, and pricing simultaneously."),
          o(3, "Test a shorter form while keeping traffic and message stable."),
          o(5, "Choose one meaningful hypothesis, keep other major variables stable, verify tracking, and run until the result is decision-useful."),
          o(1, "Declare the version with two early conversions the winner.")
        ], "A test needs a clear hypothesis, stable conditions, valid measurement, and enough evidence for the business decision."),
        mcq("Red flag", "What is the most serious mobile landing-page issue?", [
          o(3, "The page uses a long testimonial below the fold."),
          o(1, "The hero image is not a drone shot."),
          o(5, "The call button is obscured, the form fails, and the page takes eight seconds to become usable."),
          o(0, "The page contains fewer than 1,000 words.")
        ], "Function and speed can block conversion entirely. Word count and image style are not universal requirements."),
        written("Page recommendation", "A roofer appears in maps, but competitors dominate organic service pages. What landing-page fix might come before ads, and how would you justify it?", "Recommend an intent-matched service page only if the gap is real; connect organic opportunity, ad readiness, message match, proof, and measurement without promising rank.")
      ]
    ),

    domain(
      "measurement",
      "Tracking and measurement thinking",
      "Ability to distinguish traffic from leads, understand calls/forms as conversions, and identify measurement gaps.",
      "core",
      {
        meaning: "You may optimize reports instead of booked jobs, or call a channel broken when tracking is broken.",
        why: "The first customer must be able to see what changed and whether it mattered.",
        study: "Calls, forms, source attribution, qualified leads, booked appointments, close rate, revenue, and data limitations.",
        practice: "Create a measurement plan before recommending acquisition spend.",
        proof: "You can trace a lead from source to outcome and state what the data cannot prove.",
        drills: ["Test every call and form path on a sample site.", "Design a simple lead-status taxonomy.", "Reconcile ad, analytics, call-tracking, and CRM counts."]
      },
      [
        mcq("Metric judgment", "Which metric is most useful for deciding whether replacement marketing is creating business value?", [
          o(1, "Total pageviews"),
          o(3, "Tracked calls and forms"),
          o(5, "Qualified replacement opportunities and booked jobs by source, interpreted with cost and revenue."),
          o(0, "Average keyword position alone")
        ], "Calls/forms are closer than traffic, but qualification and booked-job outcomes are needed for business value."),
        mcq("Tracking case", "Analytics shows zero form submissions, but the office reports receiving forms. What is the first conclusion?", [
          o(5, "Measurement is incomplete or misconfigured; test the form and event flow before judging performance."),
          o(3, "The analytics implementation likely needs investigation."),
          o(1, "The office is probably wrong."),
          o(0, "Forms do not need tracking if email works.")
        ], "Contradictory evidence means the tracking system is not trustworthy yet."),
        written("Measurement plan", "Design a minimum viable measurement plan for Oside’s first roofing audit and follow-on test.", "Include calls/forms, source, qualified status, appointment, estimate, booked job, cost, owner, cadence, privacy/consent considerations, and known attribution limits."),
        mcq("Attribution", "A homeowner clicks an organic result, returns through a branded ad, then calls from GBP. Which statement is most accurate?", [
          o(0, "The branded ad deserves 100% credit."),
          o(1, "GBP deserves 100% credit."),
          o(5, "Multiple surfaces influenced the journey; use available attribution consistently and avoid false precision."),
          o(3, "Record the final source while noting assisted touchpoints when available.")
        ], "Local journeys cross surfaces. Operational consistency matters, but single-touch reports should not be mistaken for full causality."),
        mcq("Call quality", "Call volume rises 40%, but booked inspections are flat. What should you inspect?", [
          o(3, "Call recordings and source quality."),
          o(5, "Tracking changes, spam/wrong numbers, query/source mix, answer rate, qualification, call handling, and appointment disposition."),
          o(1, "Organic rankings only."),
          o(0, "Celebrate the 40% increase and stop measuring.")
        ], "More rings are not automatically more opportunity. Diagnose both acquisition quality and operational handling."),
        written("Client explanation", "Explain the difference between traffic, a lead, a qualified lead, and a booked job to a roofer who says, “Google says we got 50 conversions.”", "Use simple funnel definitions, show why platform conversions can include weak actions, and propose a shared definition without dismissing the platform data.")
      ]
    ),

    domain(
      "information-architecture",
      "Information architecture",
      "Ability to organize a local business site around services, locations, hubs, and internal links.",
      "supporting",
      {
        meaning: "The site may bury valuable services or generate a sprawl of thin, disconnected pages.",
        why: "Clear architecture helps users, search engines, and future campaign landing paths.",
        study: "Service hubs, location strategy, navigation, URL patterns, internal links, and page uniqueness.",
        practice: "Map the smallest site structure that fully represents real services and markets.",
        proof: "Users and crawlers can reach priority pages quickly, and every page has a distinct job.",
        drills: ["Create a sitemap for a 15-page roofing site.", "Audit click depth and orphan pages.", "Consolidate a hypothetical set of 50 thin city pages."]
      },
      [
        mcq("Structure", "Which structure is clearest for a roofer offering replacement, repair, and commercial roofing in three priority markets?", [
          o(5, "A service hub with distinct service pages, a focused service-area hub, and substantiated location pages only where useful."),
          o(3, "Dedicated service pages linked clearly from navigation and relevant location content."),
          o(1, "One homepage containing every service and city."),
          o(0, "A separate near-duplicate page for every service-city combination.")
        ], "Architecture should reflect real offerings and demand without exploding into thin combinations."),
        mcq("Internal links", "What is the best internal-link opportunity?", [
          o(1, "Add “click here” 100 times in the footer."),
          o(5, "Link relevant guides, project pages, and location pages contextually to the matching service and next step."),
          o(3, "Ensure priority service pages are linked from navigation and related content."),
          o(0, "Hide keyword links in white text.")
        ], "Contextual links clarify relationships and help users continue their journey; manipulation is not a strategy."),
        written("Site map", "Sketch a lean information architecture for a new roofing company site with no case studies yet. Explain what you would not create.", "Include core services, areas, about/proof, process, contact, and useful support content. Avoid fabricated proof, thin city-service permutations, and empty blog categories."),
        mcq("Cannibalization case", "Three pages target “roof replacement [city]” with minor wording differences. What is the best response?", [
          o(3, "Compare intent, performance, links, and uniqueness before deciding."),
          o(0, "Create three more pages to increase coverage."),
          o(5, "Determine whether they serve distinct intents; consolidate or differentiate if they compete without unique value."),
          o(1, "No two pages may mention the same keyword.")
        ], "Overlap is not automatically harmful, but near-duplicate pages with the same purpose often need consolidation or clearer roles."),
        mcq("Navigation", "Which page should generally be easiest to reach?", [
          o(5, "A high-value roof-replacement service page."),
          o(3, "The primary services hub."),
          o(1, "A 2018 company picnic post."),
          o(0, "The XML sitemap.")
        ], "Priority user and business paths deserve shallow, obvious navigation."),
        written("Client explanation", "Explain why adding 100 city pages is not automatically a local growth strategy.", "Connect uniqueness, real service capability, user value, crawl/index quality, maintenance, proof, and prioritization. Offer a narrower alternative.")
      ]
    ),

    domain(
      "technical-seo",
      "Technical SEO judgment",
      "Ability to recognize crawlability, indexability, speed, mobile performance, schema, and WordPress bloat issues.",
      "supporting",
      {
        meaning: "You may overreact to tool warnings or miss a technical issue that blocks every other improvement.",
        why: "The audit needs enough technical judgment to identify true blockers without turning into a 100-item score chase.",
        study: "Crawl/index controls, canonicals, rendering, Core Web Vitals, mobile usability, schema, and CMS/plugin risk.",
        practice: "Separate blocking, material, and cosmetic findings.",
        proof: "You can verify an issue manually, explain impact, and avoid claims a tool alone cannot support.",
        drills: ["Triage 50 audit-tool warnings by business impact.", "Trace indexability for 10 URLs.", "Test one WordPress site for mobile speed and plugin bloat."]
      },
      [
        mcq("Indexing", "A key replacement page is not in Google. What should you check first?", [
          o(5, "URL status, robots/noindex, canonical, sitemap/internal links, rendering, duplication, and Search Console evidence."),
          o(3, "Whether it is crawlable, indexable, and internally linked."),
          o(1, "Add more keywords to the page."),
          o(0, "Buy backlinks before verifying the page can be indexed.")
        ], "Basic discoverability and indexability precede authority tactics."),
        mcq("Schema judgment", "Which statement about schema is most accurate?", [
          o(0, "LocalBusiness schema guarantees Local Pack rankings."),
          o(1, "Without schema, Google cannot understand any page."),
          o(5, "Valid schema can clarify entities and eligibility for some enhancements, but it does not replace content, eligibility, or prominence."),
          o(3, "Use accurate, supported schema and validate it.")
        ], "Schema is useful structured context, not a ranking guarantee or a substitute for fundamentals."),
        written("Technical triage", "An audit tool reports 900 issues, including missing alt text, redirect chains, duplicate titles, slow templates, and a noindexed service hub. Explain your triage.", "Prioritize blockers and high-value templates, verify findings, quantify affected priority pages, identify dependencies, and avoid treating every warning equally."),
        mcq("Speed case", "A mobile page scores 42 in a lab test but loads acceptably on your laptop. What is the best next step?", [
          o(1, "Ignore the lab result."),
          o(5, "Review field data when available, test real mobile conditions, identify bottlenecks, and connect them to usability/conversion impact."),
          o(3, "Test multiple tools and devices before prioritizing fixes."),
          o(0, "Delete all images immediately.")
        ], "One score is a clue. Combine field evidence, realistic testing, and business impact."),
        mcq("WordPress risk", "Which finding most deserves attention?", [
          o(3, "Several inactive plugins remain installed."),
          o(5, "An outdated page builder and overlapping optimization plugins cause errors, slow mobile rendering, and difficult updates."),
          o(1, "The site uses WordPress."),
          o(0, "The theme name is not optimized for SEO.")
        ], "The material issue is the observed reliability, speed, and maintenance cost—not the CMS label."),
        written("Client explanation", "Explain a technical SEO issue without using “crawl budget,” “canonicalization,” or other jargon.", "Describe what Google or the user cannot reliably access, the practical consequence, the fix order, and uncertainty in plain language.")
      ]
    ),

    domain(
      "ai-aeo",
      "AI / AEO search awareness",
      "Ability to understand AI answers as another visibility surface without overhyping them.",
      "supporting",
      {
        meaning: "You may ignore a changing surface or sell speculative “AI optimization” as a guaranteed channel.",
        why: "Oside should sound current and grounded, especially when clients hear inflated AI claims.",
        study: "AI answer surfaces, source citation, entity clarity, first-party expertise, structured content, and measurement limits.",
        practice: "Observe where AI answers appear and whether they change the click path.",
        proof: "You can recommend durable content and entity improvements without promising inclusion.",
        drills: ["Track AI answer presence for 20 roofing queries.", "Record cited source types and intent patterns.", "Rewrite five FAQs to be clear, specific, and evidence-based."]
      },
      [
        mcq("Framing", "How should AI answers be treated in a search-ownership audit?", [
          o(5, "As another query-dependent surface to observe, map, and evaluate alongside ads, maps, organic, and third parties."),
          o(3, "As an emerging surface that may affect click behavior."),
          o(1, "As the only SEO channel that will matter next year."),
          o(0, "As a surface the agency can guarantee placement in.")
        ], "AI answers matter unevenly by query and change over time. They should expand the map, not erase established channels."),
        mcq("Recommendation", "Which “AEO” recommendation is most defensible?", [
          o(0, "Publish 1,000 AI-written FAQs to dominate every answer."),
          o(5, "Create accurate, well-structured, first-hand content that resolves real questions, clarifies the business entity, and is useful even without an AI citation."),
          o(3, "Use clear question-and-answer sections where they help users."),
          o(1, "Add “best roofer” to schema markup.")
        ], "Durable recommendations improve clarity and usefulness. Mass content and self-serving markup create risk."),
        written("Surface analysis", "An AI answer summarizes roof-replacement costs and cites national publishers, while local companies appear below. What does that mean for the roofer’s strategy?", "Discuss informational versus local transaction intent, citation difficulty, useful local expertise, brand visibility, and the continued role of maps/organic/ads."),
        mcq("Measurement", "How should you report AI-answer visibility?", [
          o(1, "As guaranteed leads."),
          o(5, "With dated query samples, observed presence/citations, limitations, and any measurable referral or brand effects."),
          o(3, "As a directional visibility observation."),
          o(0, "Using a permanent “AI rank” that never varies.")
        ], "AI surfaces are volatile and personalized. Reporting must be dated, sampled, and modest about causality."),
        mcq("Red flag", "Which claim should immediately reduce trust?", [
          o(3, "“AI answers may reduce clicks on some informational queries.”"),
          o(5, "“We can guarantee ChatGPT and Google AI recommend your roofing company in 30 days.”"),
          o(1, "“Clear expertise and entity information can help machines understand a business.”"),
          o(0, "“AI visibility should be observed alongside normal lead metrics.”")
        ], "No responsible consultant can guarantee recommendation across changing AI products and outputs."),
        written("Client explanation", "A roofer asks, “Is SEO dead because of AI?” Give a 60-second answer.", "A strong answer acknowledges change, distinguishes research from local hiring intent, explains enduring surfaces and fundamentals, and proposes observation rather than panic.")
      ]
    ),

    domain(
      "founder-explanation",
      "Founder-led explanation",
      "Ability to explain the audit clearly in plain English and build trust through insight.",
      "customer-one",
      {
        meaning: "You may understand the analysis but fail to make the client feel oriented and capable of deciding.",
        why: "Before case studies, the founder's clarity and honesty are major trust assets.",
        study: "Plain-language framing, evidence storytelling, analogy, concision, expectation setting, and teach-back.",
        practice: "Record short explanations and remove every unnecessary term.",
        proof: "A roofer can repeat the problem, why it matters, and the next step after hearing you once.",
        drills: ["Record a two-minute Loom audit explanation.", "Explain LSA, Local Pack, organic, and reviews without jargon.", "Re-record until a non-marketer can summarize it accurately."]
      },
      [
        mcq("Audit objection", "A prospect asks whether the audit is just a sales call. What is the best answer?", [
          o(1, "“Every audit leads to a proposal, but you can say no.”"),
          o(5, "“The audit stands on its own: you’ll see the evidence, priorities, and what I would do first. If I can help with a next step, I’ll separate that option clearly.”"),
          o(3, "“No—the deliverable includes findings you can use with or without us.”"),
          o(0, "“Absolutely not,” while hiding that every recommendation is your service.")
        ], "Trust comes from a useful standalone deliverable and transparent separation between diagnosis and implementation."),
        mcq("Plain language", "Which explanation of the Local Pack is clearest?", [
          o(5, "“It’s the map section where Google shows a few nearby businesses, their reviews, and ways to call or get directions.”"),
          o(3, "“It is the local map result above many organic links.”"),
          o(1, "“It’s the GBP three-pack driven by proximity, relevance, and prominence.”"),
          o(0, "“It’s your organic geospatial entity carousel.”")
        ], "The best explanation uses what the client can see and do, without losing accuracy."),
        written("Loom opening", "Write the first 60 seconds of a Loom walkthrough for a prospect whose competitors appear across four SERP surfaces.", "Orient the viewer to the query/context, show the evidence, connect repeated visibility to homeowner choice, avoid alarmism, and preview one useful priority."),
        mcq("Handling uncertainty", "You are unsure why one competitor outranks the client. What should you say?", [
          o(0, "Invent a confident explanation so the audit feels valuable."),
          o(3, "Say the likely factors and note that more evidence is needed."),
          o(5, "Separate what the SERP proves, what the evidence suggests, and what you would test next."),
          o(1, "Avoid mentioning the competitor.")
        ], "Calibrated uncertainty increases trust and teaches the client how the diagnosis works."),
        mcq("Presentation focus", "Which audit slide is most useful?", [
          o(1, "A dense export of 200 keyword rows."),
          o(5, "One annotated SERP showing the missed surface, business implication, supporting evidence, and next action."),
          o(3, "A concise before/after opportunity map."),
          o(0, "A slide filled with unexplained acronyms.")
        ], "The visual should help the client understand and decide, not prove the analyst used tools."),
        written("Teach-back", "Explain the audit’s value in a way that invites the roofer to correct your understanding of their business.", "Combine a clear value statement with a check-back question about job mix, service area, economics, or capacity. Avoid a rehearsed one-way pitch.")
      ]
    ),

    domain(
      "consultative-sales",
      "Consultative sales judgment",
      "Ability to diagnose before prescribing, avoid pressure, and recommend the next step responsibly.",
      "customer-one",
      {
        meaning: "You may rush to close, give away strategy without discovery, or recommend work that is not yet justified.",
        why: "The first sale depends on trust, fit, and a low-risk promise you can keep.",
        study: "Discovery, qualification, problem framing, scope, objections, next-step agreements, and ethical recommendations.",
        practice: "Run discovery calls that produce a better diagnosis even when no sale follows.",
        proof: "You can disqualify poor fit, define scope, and earn a clear next decision without pressure.",
        drills: ["Role-play five roofing discovery calls.", "Write responses to 10 common objections.", "Practice saying “I would not recommend that yet” with evidence."]
      },
      [
        mcq("Discovery", "What is the strongest opening discovery question?", [
          o(3, "“What made you look at Google visibility now?”"),
          o(5, "“Which jobs and service areas matter most, how do leads arrive today, and where do you think good opportunities are being lost?”"),
          o(1, "“How much can you spend each month?”"),
          o(0, "“Would you like SEO, ads, or a new website?”")
        ], "Good discovery starts with business value, current flow, and perceived constraint before selecting a service."),
        mcq("Fit judgment", "A roofer misses half of incoming calls and has no follow-up process. What should you do?", [
          o(1, "Sell more traffic because volume will compensate."),
          o(5, "Make response capacity part of the diagnosis and avoid scaling acquisition until the leakage has an owner and plan."),
          o(3, "Recommend fixing call handling alongside a limited marketing test."),
          o(0, "Ignore operations because it is outside marketing.")
        ], "A consultant connects marketing to the lead-handling reality. More demand can magnify the leak."),
        written("Objection handling", "The prospect says, “I tried SEO before and it didn’t work.” Respond as a consultant, not a defender of SEO.", "Acknowledge the experience, ask what was done and measured, clarify business outcomes and constraints, avoid blaming the prior vendor, and determine whether an audit is useful."),
        mcq("Scope", "Which promise is safest for a first-customer audit?", [
          o(0, "“You will get five new roof jobs in 30 days.”"),
          o(5, "“You will get an evidence-backed map of priority search gaps, the likely highest-value leak, and a practical first-action plan.”"),
          o(3, "“You will understand where visibility and conversion gaps appear.”"),
          o(1, "“We will fix your Google presence.”")
        ], "The audit can promise analysis and decision quality, not an outcome controlled by the market and client."),
        mcq("Recommendation ethics", "The audit finds that the client mainly needs GBP cleanup and call tracking, not a new website. What should you recommend?", [
          o(5, "The smaller fixes, with clear reasons and a condition for revisiting the website."),
          o(3, "Fix the GBP and tracking first."),
          o(1, "Bundle the website anyway to increase contract value."),
          o(0, "Hide the finding because it reduces the sale.")
        ], "Responsible restraint is part of the product and can create the trust needed for later work."),
        written("Closing next step", "End an audit conversation where the client has one clear priority but is not ready to hire implementation.", "Summarize the decision, give a usable next action, clarify what help is optional, agree on a low-pressure follow-up or leave-behind, and avoid manufactured urgency.")
      ]
    ),

    domain(
      "visual-communication",
      "Visual communication",
      "Ability to make complex SERP data understandable through screenshots, labels, audit maps, and Loom walkthroughs.",
      "core",
      {
        meaning: "The client may receive correct analysis in a format too dense to use.",
        why: "Visible evidence substitutes for some of the trust a new agency has not yet earned through case studies.",
        study: "Annotation, hierarchy, comparison, chart choice, progressive disclosure, and narration.",
        practice: "Turn raw audit evidence into one-decision visuals.",
        proof: "A screenshot or slide communicates the finding without requiring a long verbal rescue.",
        drills: ["Annotate 10 SERP screenshots with one message each.", "Reduce a 30-row table to a decision-ready visual.", "Record a five-minute walkthrough and cut it to three."]
      },
      [
        mcq("Screenshot design", "What makes an annotated SERP screenshot effective?", [
          o(5, "The query/location/date are visible, key surfaces are labeled consistently, the client and competitors are distinct, and one takeaway is emphasized."),
          o(3, "Clear labels and a short takeaway."),
          o(1, "As many arrows and colors as possible."),
          o(0, "Cropping out the query and context.")
        ], "Evidence needs context and hierarchy. Decoration without a message makes the audit harder to trust."),
        mcq("Chart choice", "You need to compare client presence with four competitors across eight SERP surfaces. Which format is clearest?", [
          o(1, "A 3D pie chart."),
          o(5, "A simple matrix or heatmap with surfaces as rows, brands as columns, and a clear legend."),
          o(3, "A table using consistent yes/no or position markers."),
          o(0, "Eight separate unlabeled screenshots.")
        ], "A matrix exposes repeated coverage patterns while preserving exact mappings."),
        written("Slide design", "Describe a single audit slide showing that the client ranks organically but is absent from maps and LSAs.", "Include contextual screenshot/evidence, restrained labels, a one-sentence implication, confidence/limitation, and one next diagnostic or action."),
        mcq("Loom pacing", "What is the best structure for a five-minute audit Loom?", [
          o(0, "Spend four minutes introducing your agency."),
          o(3, "Problem, evidence, recommendation, next step."),
          o(5, "Orient to goal → show 2–3 decisive pieces of evidence → explain impact → give prioritized next step → state limits/options."),
          o(1, "Scroll silently through every tool export.")
        ], "The walkthrough should move from the client's goal to evidence and a decision, not perform the analyst's process."),
        mcq("Red flag", "Which visual practice most undermines credibility?", [
          o(3, "Using a small number of brand-consistent colors."),
          o(5, "Using a chart with a truncated axis to make a minor difference look dramatic."),
          o(1, "Highlighting the client in one consistent color."),
          o(0, "Adding the date and search location.")
        ], "Visuals must not exaggerate the finding. Honest scale matters more than drama."),
        written("Visual explanation", "Turn a spreadsheet of 50 keyword positions into a founder-friendly summary. What would you show and hide?", "Group by intent/surface/opportunity, show decisive examples and weighted patterns, retain access to evidence, hide noise from the main story, and state sampling limits.")
      ]
    ),

    domain(
      "business-model",
      "Business model discipline",
      "Ability to sequence audit → fix → build → monitor without scattering effort.",
      "supporting",
      {
        meaning: "You may overbuild services, customize endlessly, or sell a recurring relationship before proving a useful wedge.",
        why: "Customer #1 requires a narrow promise, repeatable delivery, and clean separation between diagnosis and implementation.",
        study: "Productized scope, delivery time, margins, handoffs, change control, and expansion triggers.",
        practice: "Time-box mock audits and document exactly what is included.",
        proof: "You can deliver the audit profitably, say no to scope creep, and define the next offer from evidence.",
        drills: ["Write a one-page audit scope and exclusions.", "Time two full mock deliveries.", "Design audit → fix → build → monitor entry and exit criteria."]
      },
      [
        mcq("Offer sequence", "Which sequence best protects trust and focus?", [
          o(5, "Diagnose with a scoped audit → fix the binding leak → build only justified assets → monitor meaningful outcomes."),
          o(3, "Audit first, then propose the highest-priority implementation."),
          o(1, "Sell a full retainer before discovery."),
          o(0, "Bundle every service so the client cannot compare decisions.")
        ], "A staged model lets evidence determine scope and creates clear decision points."),
        mcq("Scope creep", "A client asks the audit to include a full website rewrite at no extra cost. What should you do?", [
          o(0, "Agree because it is the first customer."),
          o(5, "Re-anchor the agreed outcome, explain the additional work, and offer a separate scoped option or tradeoff."),
          o(3, "Clarify what is included and quote the rewrite separately."),
          o(1, "Ignore the request and deliver late.")
        ], "Customer #1 still needs boundaries. Clear change control protects the relationship and delivery quality."),
        written("Product design", "Define the inputs, deliverables, exclusions, timeline, and success criteria for the Oside Search Ownership Audit.", "A strong answer is narrow, evidence-based, feasible for one founder, explicit about access and limitations, and valuable without mandatory follow-on work."),
        mcq("Recurring work", "When is monitoring most justified?", [
          o(1, "Immediately, because all clients should pay monthly."),
          o(5, "When priority surfaces/actions are defined, measurement exists, change is expected, and recurring review leads to decisions."),
          o(3, "After implementation when rankings, leads, and competitor movement need review."),
          o(0, "When there is no plan but recurring revenue is desirable.")
        ], "Monitoring is a decision system, not a passive report subscription."),
        mcq("First-customer pricing", "Which pricing logic is strongest?", [
          o(3, "Price the defined outcome and effort, with a transparent founder-stage discount if used."),
          o(0, "Charge almost nothing and include unlimited revisions."),
          o(5, "Set a price that reflects a useful standalone decision product, bounded delivery effort, and learning value without pretending mature-agency proof."),
          o(1, "Copy a large agency's retainer.")
        ], "The price should support good work and honest positioning. Founder-stage does not require unsustainable scope."),
        written("Expansion decision", "The audit finds a landing-page problem, weak tracking, and a long-term organic gap. Describe the follow-on offer sequence.", "Sequence measurement and conversion dependencies before scaled acquisition/build work; define separate scopes, decision gates, and proof required to continue.")
      ]
    ),

    domain(
      "home-services-empathy",
      "Home-services empathy",
      "Ability to speak to roofers in terms of booked jobs, replacement leads, wasted spend, reviews, trust, and service area competition.",
      "customer-one",
      {
        meaning: "You may speak in marketing abstractions that ignore weather, crews, margins, homeowners, and phone handling.",
        why: "Roofers trust advisors who understand the business consequences behind the metrics.",
        study: "Job economics, seasonality, lead qualification, service radius, financing, insurance, capacity, reputation, and homeowner anxiety.",
        practice: "Translate every metric into an operational question without pretending to be a roofer.",
        proof: "Your discovery and recommendations change based on job mix, capacity, margin, and service reality.",
        drills: ["Interview three home-service operators.", "Translate 20 SEO metrics into business questions.", "Mystery-shop the homeowner journey from urgent search to appointment."]
      },
      [
        mcq("Business framing", "Which audit statement will resonate most with a roofing owner?", [
          o(1, "“Your domain authority is six points below the median.”"),
          o(5, "“Competitors appear before you for replacement searches in the two suburbs where you want more crews working.”"),
          o(3, "“You are missing visibility on high-value replacement searches.”"),
          o(0, "“Your semantic entity salience is weak.”")
        ], "The strongest framing connects evidence to job type, geography, and operational goals."),
        mcq("Capacity", "A roofer is booked out six weeks. What should change in your recommendation?", [
          o(0, "Nothing; maximum lead volume is always the goal."),
          o(5, "Clarify which jobs remain desirable, adjust targeting/offer/urgency, protect reputation, and avoid creating demand the team cannot handle."),
          o(3, "Shift toward higher-value or future-scheduled work."),
          o(1, "Hide response delays from prospects.")
        ], "Marketing should align with capacity and customer experience, not blindly maximize inquiries."),
        written("Empathy case", "A homeowner calls after a storm, is anxious about leaks, and does not understand insurance. How should the roofer’s search and landing experience respond?", "Prioritize clarity, truthful urgency, safe immediate steps, process expectations, human contact, service-area/capacity honesty, and no manipulative insurance promises."),
        mcq("Lead quality", "The owner says, “We get lots of leads, but they’re all small repairs outside our area.” What is the best response?", [
          o(5, "Inspect query/geo targeting, page promises, source attribution, qualification, and whether the desired job mix is clearly communicated."),
          o(3, "Segment leads by service, geography, and source before changing spend."),
          o(1, "Tell the owner all leads are valuable."),
          o(0, "Optimize for even more form fills.")
        ], "The complaint is about fit, not lead count. Translate it into targeting, messaging, and measurement changes."),
        mcq("Trust", "Which review strategy best respects the roofer and customer?", [
          o(1, "Ask only customers likely to leave five stars."),
          o(5, "Build a consistent, compliant request process after real service moments, make feedback easy, and respond professionally."),
          o(3, "Ask completed customers for honest feedback using a repeatable process."),
          o(0, "Offer cash only for five-star reviews.")
        ], "Trust compounds through authentic, compliant feedback—not gating or incentives tied to rating."),
        written("Founder conversation", "A roofing owner says, “I don’t care about rankings. I care about keeping my crews busy with good jobs.” Respond.", "Agree with the business goal, connect only relevant visibility to qualified jobs, ask about capacity/margins/areas, and explain how the audit will trace that path.")
      ]
    )
  ];

  // Guard against accidental bank drift.
  const total = window.OSIDE_DOMAINS.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.OSIDE_DOMAINS.length !== 20 || total !== 120) {
    console.error(`Question bank configuration error: expected 20 domains and 120 questions; found ${window.OSIDE_DOMAINS.length} and ${total}.`);
  }
})();

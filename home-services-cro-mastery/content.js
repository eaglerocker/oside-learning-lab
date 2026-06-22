(() => {
  const S = {
    landingPages: ["Google Ads: evaluate landing pages", "https://support.google.com/google-ads/answer/7543502?hl=en"],
    qualityScore: ["Google Ads: Quality Score", "https://support.google.com/google-ads/answer/6167118?hl=en"],
    adRank: ["Google Ads: Ad Rank", "https://support.google.com/google-ads/answer/1722122?hl=en"],
    experiments: ["Google Ads: custom experiments", "https://support.google.com/google-ads/answer/6261395?hl=en"],
    recommendedEvents: ["GA4 recommended lead events", "https://support.google.com/analytics/answer/9267735?hl=en"],
    eventReference: ["GA4 recommended-event reference", "https://developers.google.com/analytics/devguides/collection/ga4/reference/events"],
    keyEvents: ["GA4 key events", "https://support.google.com/analytics/answer/13128484?hl=en"],
    attribution: ["GA4 attribution overview", "https://support.google.com/analytics/answer/10596866?hl=en"],
    channels: ["GA4 default channel group", "https://support.google.com/analytics/answer/9756891?hl=en"],
    autoTagging: ["Google Ads auto-tagging", "https://support.google.com/google-ads/answer/3095550?hl=en"],
    enhancedLeads: ["Enhanced conversions for leads", "https://support.google.com/google-ads/answer/11021502?hl=en"],
    callTracking: ["Google Ads call conversion tracking", "https://support.google.com/google-ads/answer/6100664?hl=en"],
    callImports: ["Google Ads call conversion imports", "https://support.google.com/google-ads/answer/6275629?hl=en"],
    consent: ["Google consent mode", "https://developers.google.com/tag-platform/security/guides/consent"],
    serverTagging: ["Server-side Tag Manager", "https://developers.google.com/tag-platform/tag-manager/server-side"],
    dataLayer: ["Tag Manager data layer", "https://developers.google.com/tag-platform/tag-manager/datalayer"],
    clarity: ["Microsoft Clarity setup", "https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-setup"],
    vitals: ["Google Web Vitals", "https://web.dev/articles/vitals"],
    accessibility: ["WCAG 2.2", "https://www.w3.org/TR/WCAG22/"],
    forms: ["W3C accessible forms tutorial", "https://www.w3.org/WAI/tutorials/forms/"],
    targetSize: ["WCAG target size guidance", "https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"],
    ftcAds: ["FTC advertising and marketing guidance", "https://www.ftc.gov/business-guidance/advertising-marketing"],
    ftcReviews: ["FTC guide to reviews", "https://www.ftc.gov/business-guidance/resources/soliciting-paying-online-reviews-guide-marketers"],
    localRank: ["Google local ranking factors", "https://support.google.com/business/answer/7091?hl=en"],
    nistTesting: ["NIST hypothesis testing", "https://www.itl.nist.gov/div898/handbook/prc/section3/prc31.htm"]
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
    storageKey: "osideHomeServicesCROAttributionMastery.v1",
    heroEyebrow: "Oside Digital · Conversion systems",
    heroTitle: "Master home-services landing pages, conversion optimization, and trustworthy attribution.",
    heroLede: "Learn conversion economics, research, message match, page creation, forms, calls, measurement, attribution, experimentation, local visibility, and responsible client delivery.",
    foundationNote: "Primary-source foundation reviewed June 22, 2026. Beginners should start with Module 1; the full baseline is optional.",
    modulesSummary: "Current Google Ads, GA4, Tag Platform, accessibility, privacy, experimentation, and local-search guidance translated into delivery.",
    labsSummary: "Economics, research, page prototyping, form/call QA, instrumentation, experiments, rank grids, and a roofing capstone.",
    reportEyebrow: "Home Services Landing Page CRO & Attribution mastery report",
    reportTitle: "Oside Home Services Landing Page CRO & Attribution Mastery Report",
    reportFilename: "oside-home-services-cro-attribution-mastery",
    sourceReminder: "Recheck current Google Ads, Google Analytics, Tag Platform, accessibility, privacy, and applicable legal guidance before changing a live measurement system.",
    resetPrompt: "Clear all landing-page, CRO, attribution, lab, and diagnostic progress?",
    integrationPractice: "Complete a landing-page critique, instrumentation QA, rank-grid diagnosis, and one controlled experiment brief.",
    readinessGroups: [
      { key: "build", title: "Ready to build landing pages?", ids: ["economics", "research", "message", "architecture", "trust", "experience"] },
      { key: "measure", title: "Ready to operate attribution?", ids: ["measurement", "calls-crm", "attribution", "experimentation"] },
      { key: "advise", title: "Ready to advise clients?", ids: ["economics", "trust", "attribution", "experimentation", "local", "capstone"] }
    ],
    labs: [
      {
        id: "economics-brief",
        title: "Conversion economics and measurement contract",
        description: "Define the business outcome before choosing a layout or conversion rate target.",
        task: "Document allowable acquisition cost, qualified-lead rate, close rate, job value, gross profit, capacity, lead definitions, response expectations, channels, attribution limits, and decision thresholds. Use the calculator to derive a maximum raw-lead cost.",
        proof: "A client can explain how page performance connects to qualified opportunities and profit.",
        calculator: "economics"
      },
      {
        id: "research-map",
        title: "Voice-of-customer and intent map",
        description: "Turn real customer language and traffic context into a page hypothesis.",
        task: "Analyze calls, forms, reviews, search terms, CRM dispositions, competitors, and sales interviews. Produce segments, jobs-to-be-done, objections, proof needs, traffic promises, exclusions, and a prioritized message map.",
        proof: "Every major page claim traces to observed customer or business evidence."
      },
      {
        id: "page-prototype",
        title: "Mobile landing-page prototype",
        description: "Build a focused page that continues the visitor's journey without trapping them.",
        task: "Create a mobile-first prototype with message match, service fit, offer, proof, process, objections, form/call paths, consent language, accessibility states, performance budget, thank-you state, and source-specific variants.",
        proof: "A target customer can identify fit, credibility, next step, and what happens after contact."
      },
      {
        id: "form-call-qa",
        title: "Form, call, and lead-routing QA",
        description: "Prove that conversion paths work end to end.",
        task: "Test required fields, validation, keyboard use, error recovery, spam controls, click-to-call, number replacement, source persistence, duplicate prevention, notifications, CRM creation, ownership, response SLA, after-hours behavior, and confirmation messaging.",
        proof: "A test lead reaches the correct owner with accurate source data and no silent failure."
      },
      {
        id: "instrumentation",
        title: "Attribution instrumentation plan",
        description: "Create a durable event and identity system before trusting reports.",
        task: "Specify GTM/data-layer events, GA4 recommended lead stages, key-event choices, Google Ads conversions, consent states, auto-tagging, UTMs, click IDs, call tracking, CRM IDs, enhanced conversions for leads, values, deduplication, QA, governance, and data retention.",
        proof: "Each important metric has a trigger, payload, owner, destination, validation method, and known limitation."
      },
      {
        id: "experiment",
        title: "CRO experiment design",
        description: "Turn a diagnosed constraint into a controlled learning plan.",
        task: "Write a hypothesis, primary metric, guardrails, eligible audience, randomization unit, minimum detectable effect, sample estimate, duration, stopping rules, QA plan, contamination risks, analysis plan, and rollout or rollback criteria.",
        proof: "Another analyst can run and interpret the test without inventing rules after seeing results."
      },
      {
        id: "rank-grid",
        title: "Local-rank and landing-page diagnostic",
        description: "Measure a consistent 5×5 local visibility pattern while separating rank from conversion.",
        task: "Enter 25 ranks left-to-right, top-to-bottom; use 21 for not found beyond rank 20. Interpret average, median, top-3 share, top-10 share, and not-found share beside GBP relevance, distance, prominence, page message, traffic, lead quality, and attribution.",
        proof: "The diagnosis distinguishes visibility, click-through, landing-page conversion, lead quality, and sales handling.",
        calculator: "rank"
      },
      {
        id: "capstone",
        title: "Roofing landing-page and attribution capstone",
        description: "Integrate the complete operating system for a real roofing acquisition scenario.",
        task: "Create and defend a roof-replacement campaign system: economics, research, message map, ad/GBP/organic promise, mobile page, proof, form and phone paths, consent, GTM/GA4/Ads/CRM design, call tracking, offline qualified and sold stages, CRO test, local rank grid, QA, dashboard, 30-day plan, and client walkthrough.",
        proof: "The system is usable, measurable, privacy-aware, honest about uncertainty, and optimized toward profitable roofing customers."
      }
    ]
  };

  window.MASTERY_MODULES = [
    module(
      "economics",
      "1. Conversion economics, funnel definitions, and operating constraints",
      "Define what a valuable conversion is and what the business can afford before optimizing a page.",
      ["Translate job economics into lead targets", "Define funnel stages consistently", "Set a measurement contract"],
      [
        lesson("The economic chain", "A landing page creates business value only through the chain from visitor to raw lead, qualified opportunity, appointment, sale, revenue, and gross profit.", ["A higher form rate can reduce value if lead quality collapses.", "Capacity and response speed constrain usable demand.", "Targets should reflect service and market economics."]),
        lesson("Lead definitions", "Raw, valid, serviceable, qualified, booked, sold, and completed are different states.", ["Write objective criteria.", "Track disqualification reasons.", "Do not let platforms optimize equally toward accidental clicks and sold jobs."]),
        lesson("Allowable cost", "Start from acceptable acquisition cost per customer and work backward through qualification and close rates.", ["Use ranges and sensitivity analysis.", "Include sales cost and cancellation where material.", "Do not mistake revenue for contribution."]),
        lesson("Measurement contract", "Before launch, document events, owners, systems, reporting windows, attribution models, exclusions, and what decisions the data will support.", ["Define source-of-truth fields.", "Name expected discrepancies.", "Record assumptions and baselines."])
      ],
      ["Build a unit-economics model for three home-service jobs.", "Write a lead-stage dictionary with rejection reasons.", "Create a one-page measurement contract."],
      "You can reject a superficially impressive conversion rate that produces unprofitable work.",
      [S.recommendedEvents, S.attribution],
      [
        q("Which landing-page goal is strongest?", "Maximize profitable, serviceable customer acquisition within capacity and experience constraints.", "Increase qualified leads at an acceptable cost.", "Maximize form submissions.", "Reduce cost per click regardless of lead outcomes.", "Conversion work must connect page behavior to downstream business value."),
        q("A page converts at 18%, but 80% of leads are outside the service area. What is the primary diagnosis?", "The page or targeting is creating high raw conversion but poor serviceability; optimize the full funnel.", "Add service-area qualification and inspect traffic sources.", "Celebrate the conversion rate.", "Hide the bad leads from the CRM.", "Raw conversion rate can improve while economic performance worsens."),
        q("How is maximum raw-lead cost estimated from allowable customer acquisition cost?", "Multiply allowable customer cost by qualification rate and qualified-lead close rate.", "Work backward through observed funnel probabilities.", "Divide revenue by pageviews.", "Set it equal to the average CPC.", "Each raw lead has expected value based on its chance of becoming a customer."),
        q("Which is the best primary optimization event for mature paid search?", "A qualified or sold lead imported with appropriate values when volume and data quality support it.", "A validated lead while offline stages are being built.", "Any form-start event.", "Page scroll depth.", "Optimization should move toward the deepest reliable outcome."),
        q("Why define disqualification reasons?", "They reveal targeting, message, offer, geography, operations, and data-quality constraints.", "They help separate bad traffic from sales handling.", "They make total lead count larger.", "They are only useful for call-center punishment.", "Reason codes turn rejected leads into diagnostic evidence."),
        q("A roofer can handle only 20 inspections weekly. What should CRO account for?", "Capacity, scheduling, urgency, geographic fit, and lead value—not just demand volume.", "Use qualification and appointment availability thoughtfully.", "Drive unlimited leads and let the phone ring.", "Pause measurement when capacity fills.", "Conversion systems must respect operational reality."),
        q("What is a source of truth?", "The defined system and field trusted for a specific business fact, with ownership and reconciliation rules.", "Often the CRM for qualified and sold stages.", "Whichever dashboard has the highest number.", "Google Ads for every revenue fact.", "Different facts may have different authoritative systems."),
        q("Why use sensitivity analysis?", "Qualification, close rate, margin, and value are uncertain; ranges show which assumptions change the decision.", "It prevents false precision.", "It guarantees the target.", "It replaces tracking.", "Economic targets should survive plausible variation."),
        w("Build a conversion economics brief for an HVAC replacement landing page.", "Include job value and margin, allowable acquisition cost, raw-to-qualified rate, close rate, capacity, seasonality, response, lead stages, values, source systems, assumptions, sensitivity, and stop/go thresholds."),
        w("Explain why a lower landing-page conversion rate might still be better.", "Use examples involving qualification, job mix, fraud, geography, appointment rate, sold rate, margin, customer experience, and statistical uncertainty.")
      ]
    ),

    module(
      "research",
      "2. Customer research, traffic intent, and problem diagnosis",
      "Use behavioral and qualitative evidence to understand the visitor before proposing page changes.",
      ["Segment traffic and intent", "Conduct voice-of-customer research", "Separate symptoms from constraints"],
      [
        lesson("Traffic context", "Paid search, LSA, GBP, organic local, referrals, email, social, and AI assistants create different expectations and metadata.", ["Inspect the exact upstream promise.", "Segment brand and non-brand.", "Mobile urgency differs by service and source."]),
        lesson("Voice of customer", "Calls, forms, reviews, sales notes, site searches, and interviews reveal language, anxieties, decision criteria, and objections.", ["Use authentic phrases without copying private data.", "Sample wins and losses.", "Separate customer language from company slogans."]),
        lesson("Behavioral evidence", "Analytics, recordings, heatmaps, error logs, and form funnels show what happened, not automatically why.", ["Mask sensitive information.", "Use evidence to form hypotheses.", "Do not overgeneralize from a dramatic recording."]),
        lesson("Constraint diagnosis", "Low conversion may originate in traffic quality, message mismatch, trust, usability, offer, tracking, response, capacity, or price.", ["Validate the instrumentation first.", "Segment before redesigning.", "Prioritize high-impact uncertainty."])
      ],
      ["Review 30 redacted calls and code objections.", "Map six traffic sources to expectations and page variants.", "Triangulate one analytics pattern with qualitative evidence."],
      "You can write a page hypothesis using multiple evidence types rather than personal taste.",
      [S.clarity, S.channels, S.landingPages],
      [
        q("Paid traffic converts poorly after a new broad-match campaign launches. First move?", "Segment by campaign, query intent, device, geography, and page while validating tracking before redesigning.", "Compare pre/post traffic mix and lead quality.", "Replace the hero image.", "Assume the page suddenly became bad.", "Traffic composition can create a conversion-rate change without a page defect."),
        q("What is the best use of session recordings?", "Identify recurring behaviors and friction patterns that can be triangulated with quantitative and customer evidence.", "Generate hypotheses while masking sensitive data.", "Prove why every user left.", "Watch one failed visit and redesign the site.", "Recordings are rich samples, not causal proof."),
        q("Which research sample is strongest?", "A deliberate mix of qualified wins, losses, disqualified leads, devices, sources, and service types.", "Recent calls plus CRM outcomes.", "Only five-star reviews.", "Only the sales manager's memory.", "Balanced sampling reduces survivorship and confirmation bias."),
        q("What does a heatmap reliably show?", "Aggregated interaction or attention proxies under the tool's methodology, requiring context.", "Where sampled users clicked or moved.", "What copy caused a sale.", "Exact eye tracking for every visitor.", "Heatmaps describe behavior, not causation or motivation."),
        q("A page has many form starts but few submits. Best next investigation?", "Field-level errors, requirements, mobile input behavior, trust, privacy, technical failures, and lead intent.", "Replay and instrument the form funnel.", "Add more fields immediately.", "Count starts as sales.", "The drop may be friction, confusion, or faulty tracking."),
        q("Why analyze lost sales calls?", "They reveal mismatch, objections, process failures, pricing expectations, and qualification gaps.", "They help distinguish page promises from operational delivery.", "Only winners matter for CRO.", "Use them to hide prices.", "Conversion improvement spans acquisition and handoff."),
        q("What is strongest evidence for a new headline?", "Repeated customer language connected to the target intent, offer, and observed decision barrier.", "A research-backed message hypothesis.", "The designer's favorite phrase.", "The longest keyword string.", "Headlines should continue the user's problem-solving context."),
        q("GA4 shows high engagement but few qualified leads. What is possible?", "Visitors may consume useful information without finding fit, the traffic may be early-stage, or downstream tracking may be incomplete.", "Inspect intent, CTA, qualification, and CRM linkage.", "Engagement proves the page converts.", "Remove all content.", "Engagement is not equivalent to business conversion."),
        w("Create a research plan for an emergency-plumbing landing page.", "Include source segmentation, call/form sampling, reviews, interviews, recordings, privacy, questions, coding scheme, behavioral data, operational constraints, and decision outputs."),
        w("Diagnose a 35% landing-page conversion decline without assuming a cause.", "Validate tracking; segment source, query, campaign, device, location, browser, page, offer, time, and lead quality; inspect releases, performance, forms, calls, consent, capacity, competitors, and seasonality.")
      ]
    ),

    module(
      "message",
      "3. Message match, offers, positioning, and service qualification",
      "Continue the promise that earned the visit while making service fit and value clear.",
      ["Create message continuity", "Design credible offers", "Qualify without needless friction"],
      [
        lesson("Message match", "The page should visibly continue the user's query, ad, listing, referral, or campaign promise.", ["Confirm service and geography quickly.", "Match urgency and stage.", "Avoid sending every campaign to one generic page."]),
        lesson("Positioning", "Useful differentiation is specific, relevant, supportable, and meaningful to the target customer.", ["Process can differentiate.", "Proof must substantiate claims.", "Generic superlatives are not positioning."]),
        lesson("Offer design", "An offer defines the next step, expected value, effort, timing, eligibility, and risk.", ["An inspection is not automatically free or comprehensive.", "Explain what happens next.", "Urgency must be truthful."]),
        lesson("Qualification", "Use copy, choices, fields, routing, and follow-up to balance volume with fit.", ["Do not deceive low-fit visitors.", "Ask sensitive questions only when necessary.", "Provide alternatives for unsupported needs."])
      ],
      ["Create message maps for repair, replacement, and emergency intents.", "Audit ad-to-page continuity for 20 campaigns.", "Write three offers with explicit terms and next steps."],
      "A visitor immediately understands whether the service, market, problem, and next step fit.",
      [S.qualityScore, S.adRank, S.ftcAds],
      [
        q("An ad promises 'same-day drain clearing' but the page says 'full-service plumbing.' Best fix?", "Create clear same-day drain message continuity with availability terms, proof, and the correct action.", "Prominently confirm the promised service.", "Repeat 'plumbing' more often.", "Keep the mismatch and raise the bid.", "Landing-page usefulness includes relevance to the expectation created by the ad."),
        q("Which differentiator is strongest?", "A documented same-team inspection-to-install process with named accountability and evidence.", "A specific process advantage customers value.", "Best quality and service.", "We care more than competitors.", "A differentiator must be concrete and supportable."),
        q("What makes an offer credible?", "Clear scope, eligibility, timing, exclusions, next steps, and truthful evidence.", "A customer can understand what they receive.", "A countdown timer that resets.", "Guaranteed savings without conditions.", "Credibility depends on precision and substantiation."),
        q("How should a service-area limitation appear?", "Early enough to prevent wasted effort, with clear covered areas and an honest alternative where possible.", "Near the CTA and qualification path.", "Only after form submission.", "Claim statewide service to increase leads.", "Transparent fit improves experience and lead quality."),
        q("When should separate landing pages be used?", "When traffic promises, intent, service, audience, offer, or required proof materially differ.", "When a focused variant improves continuity.", "For every keyword spelling.", "Never; one homepage is always enough.", "Page variants should reflect meaningful journey differences."),
        q("What is wrong with 'Act now—only two appointments left' if inventory is not real?", "It is deceptive scarcity and can damage trust and compliance.", "Use truthful scheduling information instead.", "Nothing; urgency always converts.", "Hide the claim below the fold.", "Persuasion claims must be supportable."),
        q("A form asks roof type before explaining the service. Best judgment?", "Ask only if it enables useful routing and label why; otherwise defer it until value and trust are established.", "Test its necessity and completion effect.", "Every extra field improves lead quality.", "Make every field required.", "Qualification should earn its friction."),
        q("What should the hero accomplish?", "Confirm relevance, articulate a valued outcome, provide credible proof, and present an appropriate next step.", "Answer service, fit, and action quickly.", "Show the largest possible stock photo.", "Include every company award.", "The first screen should orient rather than overwhelm."),
        w("Create a message map for a roof-replacement estimate page receiving non-brand paid-search traffic.", "Include audience, trigger, query/ad promise, desired outcome, anxieties, service fit, offer, differentiators, proof, objections, exclusions, CTA, next-step expectation, and claims requiring substantiation."),
        w("Design qualification for a home-service business that receives many renters, DIY requests, and out-of-area leads.", "Use transparent copy, service area, ownership/permission questions where appropriate, service categories, alternatives, progressive fields, routing, privacy, and measurement of quality versus abandonment.")
      ]
    ),

    module(
      "architecture",
      "4. Landing-page architecture, conversion copy, and decision support",
      "Organize a focused argument that helps the visitor make the next appropriate decision.",
      ["Structure pages around customer questions", "Write clear conversion copy", "Design strong call-to-action hierarchy"],
      [
        lesson("Decision sequence", "A useful page typically establishes relevance, value, proof, process, risk reduction, objections, and action in an order appropriate to intent.", ["There is no universal section template.", "Urgent and considered purchases differ.", "Repeat CTAs at natural decision points."]),
        lesson("Conversion copy", "Specific nouns, verbs, numbers, boundaries, and evidence outperform vague praise.", ["Write for comprehension.", "Explain technical terms.", "Do not manufacture certainty."]),
        lesson("Choice architecture", "Use one primary next step with clear alternatives such as call, form, scheduling, or service navigation.", ["Avoid competing promotional banners.", "Do not remove necessary escape paths.", "Confirmation states are part of the page."]),
        lesson("Objection handling", "Answer cost, timing, disruption, trust, warranty, financing, process, and fit concerns with appropriate depth.", ["Use FAQs for genuine questions.", "Surface critical constraints earlier.", "Support claims with proof."])
      ],
      ["Outline three pages for urgent, planned, and research-stage intent.", "Rewrite 25 vague claims into supportable specifics.", "Run a five-second and task-completion test."],
      "A target user can accurately explain the offer, evidence, process, and next step after scanning the page.",
      [S.landingPages, S.qualityScore, S.ftcAds],
      [
        q("What determines section order?", "The visitor's intent, awareness, risk, objections, traffic promise, and evidence needed for the next decision.", "A tested customer decision sequence.", "A universal CRO template.", "Whatever the page builder defaults to.", "Architecture should reflect the decision, not design fashion."),
        q("Which statement is strongest?", "Your project manager sends a written schedule before installation and a photo update at deck inspection.", "We communicate throughout the project.", "World-class service.", "The best team in town.", "Specific observable process claims are more credible."),
        q("How often should a CTA appear?", "At meaningful decision points where the visitor has enough context, with a consistent action and accessible alternatives.", "More than once on a long page when useful.", "Exactly every 300 pixels.", "Only at the bottom.", "CTA placement depends on journey and page length."),
        q("What is the best role for FAQs?", "Resolve real remaining objections or questions not better handled in the main narrative.", "Provide concise decision support.", "Stuff search keywords.", "Hide essential terms.", "FAQs support decisions; they should not become a dumping ground."),
        q("A long page converts well on high-consideration replacements. Should it be shortened?", "Not without evidence; diagnose which content supports decisions and test a specific change.", "Use behavior and outcome data.", "Yes, all landing pages must be short.", "No page should ever change.", "Length is a consequence of useful content, not a target."),
        q("Which CTA label is clearest?", "Schedule a roof inspection.", "Get started.", "Submit.", "Click here now!!!", "Action labels should state what happens next."),
        q("A phone CTA and form CTA compete. Best approach?", "Establish a primary path by context while keeping a clear accessible alternative and tracking both.", "Use urgency, device, and operating hours to guide hierarchy.", "Remove phone calls entirely.", "Show six equal CTAs.", "Multiple paths can coexist without equal visual weight."),
        q("What belongs on the thank-you state?", "Confirmation, expected response time, next steps, contact fallback, relevant preparation, and accurate tracking.", "A clear completion state.", "Only 'Thanks.'", "An automatic false appointment promise.", "Post-conversion experience affects trust and operations."),
        w("Outline a landing page for whole-home HVAC replacement.", "Cover message match, hero, service fit, outcomes, proof, options, process, technical education, cost/financing context, objections, CTA sequence, form/call paths, accessibility, and confirmation."),
        w("Critique a page with a strong hero but weak conversion.", "Assess traffic match, offer, proof, sequence, objection coverage, CTA hierarchy, form/call function, mobile behavior, speed, accessibility, tracking, qualification, and downstream response.")
      ]
    ),

    module(
      "trust",
      "5. Trust, proof, reviews, claims, and ethical persuasion",
      "Reduce perceived risk using truthful, relevant, and verifiable evidence.",
      ["Build a proof system", "Use reviews responsibly", "Recognize deceptive conversion tactics"],
      [
        lesson("Proof hierarchy", "Relevant projects, authentic reviews, licenses, insurance, warranties, team, process, manufacturers, response records, and guarantees can support different concerns.", ["Match proof to the service.", "Explain badges and credentials.", "Verify expiration and scope."]),
        lesson("Reviews", "Reviews should be genuine, representative enough for the claim, and handled under platform and applicable legal rules.", ["Do not condition incentives on positive sentiment.", "Disclose material connections.", "Do not suppress only negative feedback."]),
        lesson("Claims", "Objective claims need substantiation; qualifications and disclosures should be clear and proximate.", ["Avoid universal savings claims.", "Do not guarantee insurance approval.", "Use dated context for numbers."]),
        lesson("Ethical persuasion", "Do not use fake scarcity, disguised ads, preselected consent, obstructive interfaces, or fear unsupported by the situation.", ["Make choices understandable.", "Let users recover from errors.", "Optimize trust beyond the immediate click."])
      ],
      ["Create a proof inventory by service and objection.", "Verify 30 page claims and badges.", "Red-team a landing page for dark patterns."],
      "You can improve persuasion without creating deceptive or unsupported claims.",
      [S.ftcAds, S.ftcReviews],
      [
        q("Which review block is strongest?", "Recent authentic reviews relevant to the service, with accurate sourcing and no misleading selection claim.", "A varied set of verified customer experiences.", "Anonymous quotes written by marketing.", "Only incentivized five-star reviews with no disclosure.", "Review evidence must be genuine and represented honestly."),
        q("Can a company offer an incentive for reviews?", "It requires careful platform and legal compliance, clear disclosure, and must not be conditioned on positive sentiment.", "Use neutral requests and review current rules.", "Yes, but only for five stars.", "Hide the incentive.", "Incentives and material connections create disclosure and policy concerns."),
        q("What is the main issue with 'Save 50% on every roof'?", "The universal quantified claim requires strong substantiation and may be misleading if conditions are hidden.", "State truthful eligibility and comparison basis.", "The percentage is too small.", "Put an asterisk in the footer and keep it.", "Qualifications must not contradict the headline claim."),
        q("Which warranty presentation is strongest?", "Accurate scope, provider, duration, exclusions, transferability, maintenance duties, and access to terms.", "A concise summary linked to full terms.", "Lifetime warranty with no explanation.", "A badge copied from a competitor.", "Warranty language should reduce risk without hiding conditions."),
        q("A testimonial says insurance 'paid for everything.' Best use?", "Do not generalize the outcome; add truthful context and avoid implying guaranteed coverage.", "Review the claim and permissions carefully.", "Use it as the hero guarantee.", "Remove all insurance caveats.", "Individual outcomes do not establish a universal insurance promise."),
        q("What makes a license badge useful?", "It is current, applicable, identifiable, and connected to verifiable business information.", "Explain what the credential means.", "It is colorful.", "Any badge from an image search.", "Credentials persuade only when authentic and relevant."),
        q("What is a dark pattern?", "An interface that manipulates or obstructs users into choices they might not otherwise make.", "Deceptive or coercive choice design.", "Any prominent CTA.", "A short form.", "CRO should not depend on tricking visitors."),
        q("A project photo is from another contractor. What should happen?", "Do not present it as the client's work; use licensed representative media with clear context or obtain real project evidence.", "Replace it with truthful proof.", "Crop out the watermark.", "Call it a local project anyway.", "Fabricated proof undermines trust and can deceive."),
        w("Design a proof system for a roofing replacement page.", "Map each objection to authentic evidence: local projects, reviews, team, licenses, insurance, process, manufacturer status, warranties, financing terms, safety, communication, dates, permissions, and verification owners."),
        w("Audit a landing page for deceptive persuasion.", "Review scarcity, timers, defaults, disclosures, reviews, price/savings, insurance, warranties, badges, consent, privacy, hidden fees, form language, accessibility, cancellation expectations, and unsupported superlatives.")
      ]
    ),

    module(
      "experience",
      "6. Mobile UX, forms, calls, accessibility, speed, and reliability",
      "Make the conversion path fast, usable, accessible, and dependable on real devices.",
      ["Design usable mobile interactions", "Build accessible forms and calls", "Protect performance and reliability"],
      [
        lesson("Mobile task design", "Users need readable content, stable layouts, reachable actions, adequate targets, and minimal interruption.", ["Test thumb reach and zoom.", "Do not cover content with sticky elements.", "Respect browser and assistive behavior."]),
        lesson("Forms", "Use labels, suitable input types, autocomplete, clear requirements, specific errors, preserved values, and confirmation.", ["Ask only necessary information.", "Support keyboard and screen readers.", "Never rely on placeholder text as the label."]),
        lesson("Calls", "Click-to-call, business hours, routing, fallback numbers, number replacement, and call reporting require end-to-end testing.", ["Do not strand after-hours callers.", "Track calls without breaking the visible business identity.", "Handle consent for recording where applicable."]),
        lesson("Performance and reliability", "Optimize LCP, INP, CLS, third parties, server response, images, fonts, scripts, and form dependencies.", ["Use field and lab evidence.", "Prevent duplicate submissions.", "Monitor failures after launch."])
      ],
      ["Complete keyboard and screen-reader form testing.", "Test call and form flows across five devices.", "Create a performance and reliability budget."],
      "A visitor can complete the intended task despite a small screen, weak connection, disability, or recoverable error.",
      [S.vitals, S.accessibility, S.forms, S.targetSize, S.landingPages],
      [
        q("What are the current Core Web Vitals?", "LCP, INP, and CLS.", "Metrics for loading, responsiveness, and visual stability.", "FCP, FID, and bounce rate.", "PageSpeed score, sessions, and CPC.", "Google's current Core Web Vitals are LCP, INP, and CLS."),
        q("A sticky call bar covers the form submit button. Best response?", "Fix the collision across relevant viewports while preserving accessible call and form paths.", "Test responsive states and safe spacing.", "Keep it because phone calls are valuable.", "Hide the submit button.", "Conversion controls must not block other valid tasks."),
        q("Why are visible form labels important?", "They persist, clarify purpose, support assistive technology, and reduce memory burden.", "Use labels plus instructions where needed.", "They add keywords.", "Placeholders are always equivalent.", "Placeholders can disappear and are not a complete labeling strategy."),
        q("What is the best error message?", "Identify the field and problem, explain how to correct it, preserve other entries, and move focus appropriately.", "Use specific inline and summary feedback.", "Something went wrong.", "Clear the entire form.", "Error recovery is part of conversion usability."),
        q("A third-party scheduler adds four seconds to interaction. Best decision?", "Measure its business value and performance cost, then optimize, defer, replace, or remove it.", "Load it only when needed if feasible.", "Keep it because it looks modern.", "Exclude it from speed tests.", "Third parties should earn their user-experience cost."),
        q("What is a strong call-tracking QA test?", "Verify correct number replacement, click action, source capture, routing, duration, recording notice where applicable, CRM linkage, and fallback.", "Test paid and non-paid sessions separately.", "Check that any number appears.", "Call only from the office Wi-Fi.", "Dynamic numbers can fail in subtle source- and device-specific ways."),
        q("How should target size guidance be used?", "Provide sufficiently large or spaced interactive targets while accounting for WCAG exceptions and context.", "Test actual tap usability.", "Make every element 100 pixels tall.", "Ignore links because only buttons matter.", "Accessible target design reduces accidental activation."),
        q("Lab performance is poor but field data is good. What next?", "Investigate template, device, geography, and interaction differences using both datasets rather than declaring victory or failure.", "Use lab data to diagnose and field data to understand real users.", "Delete all scripts.", "Ignore all lab findings.", "Lab and field evidence answer different questions."),
        w("Write an end-to-end QA plan for a home-services lead form.", "Include labels, keyboard, screen reader, zoom, mobile input, validation, privacy, consent, spam, duplicate submission, analytics, CRM, routing, alerts, confirmation, error fallback, cross-browser, and monitoring."),
        w("Create a mobile performance budget for a paid landing page.", "Set targets for LCP/INP/CLS, server response, images, fonts, CSS/JS, third parties, tag loading, form readiness, representative devices/networks, field monitoring, exceptions, and regression ownership.")
      ]
    ),

    module(
      "measurement",
      "7. Event architecture, GA4, Tag Manager, and data quality",
      "Instrument the customer journey with consistent events, parameters, identities, and QA.",
      ["Design a lead-event taxonomy", "Implement data-layer measurement", "Prevent duplication and silent failure"],
      [
        lesson("Event taxonomy", "GA4 recommends lead-generation stages including generate_lead, qualify_lead, disqualify_lead, working_lead, close_convert_lead, and close_unconvert_lead.", ["Use prescribed names and parameters where appropriate.", "Define triggers precisely.", "Do not promote every micro-event to a key event."]),
        lesson("Data layer", "A documented data layer separates business events from page selectors and gives tags consistent values.", ["Include stable IDs.", "Version the specification.", "Avoid scraping button text where a real event exists."]),
        lesson("Key events and conversions", "A GA4 key event marks an important action; Google Ads conversion actions have their own optimization and reporting configuration.", ["Align without blindly duplicating.", "Choose primary versus observation uses deliberately.", "Assign defensible values."]),
        lesson("Quality assurance", "Preview, DebugView, network inspection, platform diagnostics, synthetic tests, reconciliation, and alerts are all required.", ["Test consent states.", "Test duplicate paths.", "Annotate releases."])
      ],
      ["Create an event and parameter dictionary.", "Implement a mock data layer for form and call events.", "Reconcile browser, GA4, Ads, and CRM counts."],
      "You can trace every reported lead back to a defined trigger and identify why systems disagree.",
      [S.recommendedEvents, S.eventReference, S.keyEvents, S.dataLayer],
      [
        q("Which GA4 event is recommended when a user submits a lead form?", "generate_lead.", "Use the prescribed event and relevant parameters.", "purchase.", "scroll.", "GA4 documents generate_lead for lead submissions."),
        q("Why use qualify_lead and disqualify_lead?", "They measure downstream lead quality and reasons rather than treating every submission as equal.", "They support full-funnel analysis.", "They replace the CRM.", "They should fire when a user views the form.", "Lead-stage events connect acquisition to operational outcomes."),
        q("What is the strongest event trigger?", "A confirmed business state, such as server-accepted unique lead creation, with an ID for deduplication.", "A reliable success callback.", "A submit-button click only.", "Any visit to the contact page.", "Clicks and pageviews can occur without successful lead creation."),
        q("What should a data-layer specification include?", "Event name, business definition, trigger, parameters, types, examples, privacy rules, owner, destinations, and QA.", "A versioned contract between implementation and reporting.", "Only a list of tag names.", "CSS selectors copied from the page.", "Measurement needs a durable semantic contract."),
        q("Should form_start be a primary bidding conversion?", "Usually not; it is a diagnostic micro-event unless the business has a justified strategy and protects optimization from low-value signals.", "Keep it secondary or analytical in many setups.", "Always, because it has volume.", "Mark every event primary.", "High-volume shallow actions can misdirect automated optimization."),
        q("GA4 counts twice the CRM leads. First suspects?", "Duplicate events, success-page reloads, click triggers, cross-domain issues, spam, missing IDs, or differing definitions/windows.", "Reconcile at lead-ID level.", "The CRM must be wrong.", "Average the two counts.", "Count discrepancies require definition and implementation tracing."),
        q("What is a key event in GA4?", "An event marked as especially important to business success for reporting and downstream use.", "A configured important event.", "Any automatically collected event.", "A guaranteed sale.", "Importance is configured; correctness still depends on the event."),
        q("What should happen after a tag release?", "Run consent-aware test cases, inspect payloads, verify destinations, reconcile counts, monitor diagnostics, and annotate the change.", "Use a release checklist and rollback plan.", "Wait for the monthly report.", "Assume preview mode proves production.", "Production environments and user states can differ from preview."),
        w("Design an event taxonomy for a roofing replacement funnel.", "Include page/offer context, call clicks, form starts, validation, generate_lead, appointment, qualify/disqualify reasons, working lead, estimate, sold/lost, value, IDs, timestamps, consent, privacy, destinations, and owners."),
        w("Diagnose why Google Ads shows 120 conversions, GA4 shows 92 key events, and the CRM shows 70 leads.", "Compare definitions, sources, attribution, time zones, windows, modeled data, duplicates, cross-device, call actions, imported stages, consent, spam, click IDs, lead IDs, cancellations, and expected platform differences.")
      ]
    ),

    module(
      "calls-crm",
      "8. Call tracking, CRM lifecycle, offline conversions, and values",
      "Connect calls and forms to qualified, sold, and revenue outcomes without losing identity or context.",
      ["Implement call attribution", "Preserve lead identity into the CRM", "Return offline outcomes to ad platforms"],
      [
        lesson("Call measurement", "Google Ads supports calls from ads, calls to website numbers after ad clicks, and other call conversion paths.", ["Minimum duration is a proxy, not quality.", "Dynamic replacement requires QA.", "Track business outcomes after the call."]),
        lesson("CRM identity", "Persist click IDs, UTMs, landing page, first and current source, call/form IDs, timestamps, consent, and lead-stage history.", ["Do not overwrite original acquisition blindly.", "Deduplicate people and opportunities thoughtfully.", "Restrict sensitive data."]),
        lesson("Offline outcomes", "Enhanced conversions for leads and offline imports can connect hashed first-party lead data or identifiers to downstream conversions.", ["Accept applicable terms.", "Use qualified values.", "Upload promptly and monitor diagnostics."]),
        lesson("Value and feedback", "Feed stages that are reliable, sufficiently frequent, and aligned with bidding goals.", ["Use values when differences matter.", "Do not import fabricated revenue.", "Maintain correction and retraction processes."])
      ],
      ["Trace ten test leads from click to CRM outcome.", "Build a call disposition dictionary.", "Design an offline-conversion upload and monitoring SOP."],
      "A qualified or sold customer can be connected back to acquisition without counting one person multiple times.",
      [S.callTracking, S.callImports, S.enhancedLeads, S.autoTagging],
      [
        q("What does a 60-second call conversion prove?", "Only that the tracked call met the duration rule; quality and sale still require downstream evidence.", "It is a useful proxy requiring validation.", "It proves a booked job.", "It proves the landing page caused revenue.", "Duration is not the same as qualification or value."),
        q("Why use dynamic number replacement?", "Attribute website calls to eligible sessions or campaigns while preserving a functional fallback number.", "Connect calls to acquisition context.", "Show a different number to every pageview with no record.", "Hide the real business number permanently.", "Number replacement is an attribution mechanism that requires resilience."),
        q("Which fields should reach the CRM with a web lead?", "Unique lead ID, timestamps, landing page, source/campaign identifiers, click IDs where permitted, service, geography, consent, and form context.", "Enough acquisition and routing context to reconcile the lead.", "Only the name.", "Passwords and unrelated browsing history.", "Identity and source fields enable lifecycle measurement while data minimization still applies."),
        q("What is enhanced conversions for leads intended to improve?", "Durable matching of online leads to imported offline outcomes using permitted first-party data and platform processes.", "Offline conversion reporting and optimization.", "Landing-page design automatically.", "Organic rank tracking.", "It connects lead capture with downstream conversion data."),
        q("When is a qualified-lead import dangerous?", "When qualification is inconsistent, delayed beyond usefulness, duplicated, biased, or disconnected from economic value.", "When the CRM process is not governed.", "Never; more data is always better.", "Only when volume is high.", "Automated systems amplify the quality of the feedback they receive."),
        q("How should repeat callers be counted?", "According to documented business rules that distinguish calls, leads, opportunities, and customers using stable identities.", "Deduplicate at the appropriate stage.", "Every call is a new customer.", "Delete all repeat activity.", "Counting units must match the question being answered."),
        q("A call-tracking number fails when JavaScript is blocked. Best design?", "Keep a visible functional fallback number and monitor replacement failures.", "Progressively enhance attribution without breaking contact.", "Hide the phone number until scripts load.", "Count the failed session as a call.", "Measurement must not disable the customer path."),
        q("Why import conversion values?", "To distinguish outcomes with materially different expected or realized business value when data quality supports it.", "Help reporting and bidding reflect economics.", "To make every lead look more valuable.", "Use identical arbitrary values forever.", "Value signals should encode real differences."),
        w("Design a call and CRM attribution system for a roofing company.", "Cover visible/DNI numbers, provider IDs, click IDs, UTMs, landing page, caller identity, recording consent where applicable, dispositions, qualification, appointment, estimate, sale, revenue/value, deduplication, offline uploads, corrections, QA, access, and retention."),
        w("Create a troubleshooting plan for missing offline conversions.", "Inspect tagging, consent, customer-data terms, identifiers/hashing, capture timing, upload schema, time zones, conversion names, windows, duplicate IDs, match rate, CRM exports, diagnostics, permissions, and delayed outcomes.")
      ]
    ),

    module(
      "attribution",
      "9. Attribution models, channel taxonomy, UTMs, consent, and privacy",
      "Interpret acquisition credit responsibly across paid, organic, local, referral, and AI-assisted journeys.",
      ["Distinguish attribution scopes and models", "Maintain channel taxonomy", "Design consent-aware measurement"],
      [
        lesson("Attribution is a model", "Attribution assigns credit under chosen rules or algorithms; it does not directly reveal the counterfactual cause of a sale.", ["Compare models thoughtfully.", "Understand lookback windows.", "Use experiments for incrementality where possible."]),
        lesson("GA4 scopes", "First-user, session, and event-scoped acquisition dimensions answer different questions.", ["Do not mix them casually.", "Direct traffic is handled specially in attribution.", "Platform and CRM models will differ."]),
        lesson("Current channel taxonomy", "GA4 now includes an AI Assistants channel for referrals from tools such as ChatGPT, Gemini, Deepseek, Copilot, and Grok; Google AI Overviews and AI Mode remain Organic Search.", ["Preserve referrers and UTMs.", "Document custom groups.", "Do not relabel every unknown referral as AI."]),
        lesson("Consent and privacy", "Consent mode requires default states and updates based on user choices; legal requirements and policy vary by context.", ["Get qualified legal guidance.", "Collect only necessary data.", "Server-side tagging adds control but does not create consent."])
      ],
      ["Map first-user, session, and event-scoped reports.", "Create a UTM and channel-governance standard.", "Test every consent state and preference change."],
      "You can explain why two attribution reports disagree without declaring either one universally true.",
      [S.attribution, S.channels, S.autoTagging, S.consent, S.serverTagging],
      [
        q("What is attribution?", "A method for assigning credit to touchpoints under a defined model, scope, window, and available data.", "A reporting framework for customer paths.", "Proof that the credited channel caused the conversion.", "A perfect reconstruction of every influence.", "Credit assignment is not the same as causal incrementality."),
        q("What models are currently available in GA4 attribution reports?", "Data-driven, paid and organic last click, and Google paid channels last click.", "A limited current model set documented by Google.", "Linear, time decay, and position based only.", "First click only.", "Google removed first-click, linear, time-decay, and position-based models from these reports in 2023."),
        q("How does GA4 classify referrals from ChatGPT and similar tools now?", "In the AI Assistants channel when the source matches Google's rules.", "As a distinct current default channel category.", "Always as Organic Search.", "Always as Direct.", "GA4's current default channel documentation includes AI Assistants."),
        q("How are clicks from Google AI Overviews and AI Mode classified in GA4 default channels?", "Organic Search.", "They remain within Google's organic-search classification.", "AI Assistants.", "Paid Search.", "Google distinguishes its Search AI features from external AI-assistant referrals."),
        q("Why preserve GCLID and related identifiers?", "They can connect eligible ad interactions to downstream conversions and platform reporting when handled correctly.", "They support auto-tagged attribution.", "They replace consent requirements.", "They identify the person's full browsing history.", "Click identifiers support ad measurement but remain subject to implementation and policy."),
        q("What is wrong with inconsistent UTM capitalization?", "It can fragment source, medium, and campaign reporting into separate values.", "Govern naming and validation.", "GA4 always fixes it.", "UTMs only affect SEO rankings.", "Manual campaign parameters require controlled taxonomy."),
        q("What must consent mode implementation do?", "Set appropriate default consent states before measurement and update states based on the user's choices.", "Persist and honor preference changes under the organization's requirements.", "Fire all tags first and ask later.", "Treat consent mode as legal advice.", "Consent mode is a technical behavior control, not a substitute for legal analysis."),
        q("Does server-side tagging eliminate privacy obligations?", "No; it can improve control, performance, and data quality, but governance, consent, minimization, security, and policy still apply.", "Treat it as infrastructure, not permission.", "Yes, because data is first party.", "Yes, if the server is in the same country.", "Architecture does not erase obligations."),
        w("Explain attribution to a roofing owner comparing Google Ads, GA4, call tracking, and CRM reports.", "Define each system's unit, scope, model, time zone, window, consent/data coverage, duplicate rules, calls, offline stages, expected discrepancies, source of truth, and why attribution is not causation."),
        w("Write a channel and UTM governance standard for home-services campaigns.", "Cover auto-tagging, source/medium/campaign conventions, case, spaces, IDs, paid social, email, SMS, affiliates, QR/offline, AI assistants, Google AI Search classification, redirects, ownership, QA, custom groups, and change logs.")
      ]
    ),

    module(
      "experimentation",
      "10. CRO analysis, hypotheses, controlled experiments, and decision rules",
      "Improve conversion using disciplined diagnosis and tests rather than random redesigns.",
      ["Prioritize hypotheses", "Design trustworthy experiments", "Interpret noisy results"],
      [
        lesson("Hypothesis quality", "A hypothesis links evidence, a proposed mechanism, a specific change, an audience, and a measurable outcome.", ["Name the constraint.", "Predict direction and guardrails.", "Do not test a color without a reason."]),
        lesson("Experiment design", "Define randomization, allocation, sample, duration, primary metric, guardrails, exclusions, and analysis before launch.", ["Use a stable control.", "Avoid changing variants mid-test.", "Account for weekday and seasonality."]),
        lesson("Statistical judgment", "Significance, confidence intervals, power, practical effect, novelty, peeking, and multiple testing affect interpretation.", ["A non-significant result is not proof of equality.", "Large samples can detect trivial effects.", "Do not stop at the first favorable fluctuation."]),
        lesson("When not to A/B test", "Fix clear bugs, compliance failures, broken tracking, and obvious accessibility defects directly.", ["Low traffic may require larger changes or sequential learning.", "Use qualitative prototypes.", "Document before/after evidence cautiously."])
      ],
      ["Write a backlog of 20 evidence-linked hypotheses.", "Pre-register one experiment plan.", "Analyze simulated winning, losing, and inconclusive tests."],
      "You can say win, loss, inconclusive, or invalid using rules written before seeing the result.",
      [S.experiments, S.nistTesting, S.clarity],
      [
        q("Which hypothesis is strongest?", "Because paid repair visitors fear hidden fees, showing a specific diagnostic process and fee terms will increase qualified bookings without raising cancellations.", "Adding process clarity may improve bookings.", "Make the button orange to boost conversions.", "Redesign everything.", "A strong hypothesis connects evidence, mechanism, change, outcome, and guardrail."),
        q("Why use a 50/50 split when practical?", "It usually provides an efficient comparison and balanced exposure under similar conditions.", "It maximizes information for a fixed total sample in many two-variant tests.", "It guarantees significance.", "It makes the variant win.", "Allocation affects statistical efficiency but not certainty."),
        q("What is peeking?", "Repeatedly checking results and stopping opportunistically when they look favorable without an appropriate sequential method.", "A practice that can inflate false positives.", "Reviewing QA logs.", "Looking at the page before launch.", "Decision rules must account for repeated examination."),
        q("A result is statistically significant but adds 0.05% conversion at high implementation cost. Best judgment?", "Assess practical value, confidence interval, downstream quality, cost, and durability before rollout.", "Statistical detection alone does not establish business value.", "Ship every significant result.", "Round it to a 5% lift.", "Practical significance and economics matter."),
        q("A test is flat after one week with 300 visits. Conclusion?", "Likely inconclusive until evaluated against the planned sample, duration, detectable effect, variance, and data quality.", "Follow the pre-specified plan.", "The variants are identical.", "Stop and declare the control winner.", "Low sample and short duration often cannot rule out meaningful effects."),
        q("When should a defect be fixed without a test?", "When the form is broken, inaccessible, deceptive, insecure, or violates a clear requirement.", "Repair obvious failure and monitor the outcome.", "Never; every bug needs an A/B test.", "Only if a competitor fixes it.", "Experiments are not required to justify basic correctness."),
        q("Why track guardrail metrics?", "A primary lift may hide harm to lead quality, cancellations, page speed, accessibility, calls, or revenue.", "They protect the broader system.", "They make significance easier.", "They replace the primary metric.", "Optimization can shift harm to another stage."),
        q("What is sample ratio mismatch?", "Observed allocation differs unexpectedly from the designed split, suggesting implementation, targeting, or logging problems.", "A validity warning requiring investigation.", "The variant has a higher conversion rate.", "A normal reason to ignore data.", "Randomized experiments should receive expected allocation within plausible variation."),
        w("Design a CRO experiment for a roofing page that gets many calls but few qualified inspections.", "Include evidence, mechanism, variant, population, randomization, primary qualified-inspection metric, call-quality guardrails, sample/MDE, duration, QA, SRM, contamination, stopping, analysis, rollout, and rollback."),
        w("Interpret a test with +12% raw leads, -18% qualification, unchanged sold jobs, and slower LCP.", "Assess net economic value, confidence and sample, guardrail failure, funnel shifts, segment effects, tracking, novelty, implementation cost, and likely reject or redesign rather than calling it a win.")
      ]
    ),

    module(
      "local",
      "11. Local visibility, rank grids, landing-page alignment, and reporting",
      "Diagnose local discovery and conversion as connected but distinct systems.",
      ["Interpret local ranking factors", "Run reproducible rank diagnostics", "Connect visibility to page and lead outcomes"],
      [
        lesson("Local ranking", "Google describes local results as mainly based on relevance, distance, and prominence.", ["Distance cannot be optimized away.", "Complete truthful profile information supports relevance.", "Reviews and links can support prominence."]),
        lesson("Rank grids", "A geographic grid samples a query from fixed points and should document query, date, device/method, grid spacing, competitors, and not-found handling.", ["Use medians and shares, not only averages.", "Do not treat one scan as a trend.", "Respect tool and platform rules."]),
        lesson("Journey alignment", "GBP, ads, organic results, and landing pages should agree on service, geography, offer, identity, and next step.", ["A rank increase does not prove page lift.", "Track GBP actions separately where available.", "Use dedicated, truthful landing experiences."]),
        lesson("Reporting", "Separate visibility, impressions, clicks, sessions, calls/forms, qualified leads, appointments, sales, and revenue.", ["Annotate profile and page changes.", "Account for seasonality and demand.", "Report uncertainty."])
      ],
      ["Run and document a 5×5 grid protocol.", "Audit GBP-to-page continuity.", "Build a local visibility-to-revenue scorecard."],
      "You can distinguish a local-ranking problem from a landing-page, tracking, lead-quality, or sales-response problem.",
      [S.localRank, S.channels, S.recommendedEvents],
      [
        q("What are Google's main stated local-ranking factors?", "Relevance, distance, and prominence.", "Business match, searcher proximity, and how well known the business is.", "Keyword density, domain age, and ad spend.", "Posting daily, geotagging photos, and buying citations.", "Google explicitly names relevance, distance, and prominence."),
        q("A business ranks well near its office but poorly 20 miles away. Best interpretation?", "Distance may be a major constraint; inspect real service demand, competition, relevance, prominence, and grid method before prescribing.", "Geographic decay is expected in many markets.", "Add the distant city 100 times to the page.", "Create a fake office.", "Distance is a stated factor and should not be countered deceptively."),
        q("Why report median rank and top-3 share with average?", "They reduce distortion and reveal distribution shape and valuable visibility thresholds.", "Multiple summaries describe the grid better.", "Average is never useful.", "Top-3 share equals conversion rate.", "A single average can hide clustered wins and severe gaps."),
        q("Rank improves but qualified leads fall. What next?", "Inspect query mix, seasonality, GBP actions, landing-page continuity, tracking, lead quality, competition, and response operations.", "Do not assume ranking caused the decline.", "Reverse all SEO changes.", "Hide the lead-quality data.", "Visibility is one stage of a larger funnel."),
        q("What should a rank-grid protocol hold stable?", "Query, coordinates, spacing, date/time cadence, device or method, not-found rule, and competitor set where possible.", "Use a reproducible method.", "Only the color scale.", "Nothing; local rank is universal.", "Stable sampling supports trend interpretation."),
        q("Which landing page best supports a GBP roof-replacement journey?", "A truthful local roof-replacement page aligned to the profile, service, proof, offer, identity, and conversion path.", "A focused relevant service page.", "An unrelated generic homepage.", "A fake city office page.", "Journey continuity improves comprehension and measurement."),
        q("Can a business pay Google for better local organic ranking?", "No; Google says there is no way to request or pay for a better local ranking.", "Ads and organic local ranking are distinct.", "Yes, through a secret support package.", "Only through review purchases.", "Google explicitly rejects paid local-ranking requests."),
        q("What does a not-found rank of 21 mean in this diagnostic?", "The business was not found within positions 1–20 under the documented scan, encoded consistently for summary calculations.", "A censored observation requiring context.", "The true rank is exactly 21.", "The business is suspended.", "The sentinel value supports comparison but does not reveal the exact deeper position."),
        w("Diagnose a roofing company with strong local rankings, high GBP calls, and low sold-job volume.", "Investigate query/service fit, call attribution, spam, routing, answer rate, dispositions, qualification, appointments, estimates, price, sales process, capacity, duplicate leads, page continuity, tracking, and seasonality."),
        w("Design a monthly local visibility and conversion report.", "Include grid protocol, relevance/distance/prominence context, GBP actions, landing sessions, calls/forms, qualified leads, appointments, sold jobs, revenue/value, channel scope, attribution caveats, changes, confidence, and next tests.")
      ]
    ),

    module(
      "capstone",
      "12. Delivery governance, client communication, and roofing capstone",
      "Integrate research, page creation, measurement, experimentation, and client ownership into a repeatable service.",
      ["Scope and sequence delivery", "Govern accounts and data", "Defend a roofing-specific capstone"],
      [
        lesson("Delivery sequence", "Economics → research → measurement contract → message map → prototype → build → instrumentation → QA → launch → observe → experiment → report.", ["Dependencies matter.", "Do not wait until launch to discuss tracking.", "Use approvals and change control."]),
        lesson("Ownership and governance", "The client should control domain, ad, analytics, tag, call-tracking, CRM, consent, and core data access under durable accounts.", ["Use named permissions and least privilege.", "Document vendors and costs.", "Plan offboarding and retention."]),
        lesson("Client communication", "Explain conclusions, evidence, uncertainty, tradeoffs, and next actions without hiding behind conversion jargon.", ["Separate facts from inference.", "Do not promise a conversion rate.", "Use teach-back."]),
        lesson("Mastery standard", "Mastery means building an inspectable system that produces trustworthy learning and protects the customer experience.", ["Complete the capstone.", "Use current sources.", "Seek supervised real-world feedback."])
      ],
      ["Complete the roofing capstone.", "Record a seven-minute client walkthrough.", "Run launch-day and 30-day retrospectives."],
      "You can deliver a measurable roofing landing-page system and explain exactly what is known, assumed, and still being tested.",
      [S.landingPages, S.recommendedEvents, S.enhancedLeads, S.consent, S.experiments, S.localRank],
      [
        q("What should happen before page design?", "Economics, audience and traffic research, measurement definitions, offer, message, proof inventory, constraints, and technical requirements.", "Enough discovery to define the page's job.", "Choose button colors.", "Install every analytics tag.", "Design must solve a defined business and customer problem."),
        q("Who should own the analytics and ad accounts?", "The client business under durable authorized ownership with appropriate partner access.", "The client should retain control of core assets.", "The freelancer's personal account.", "Whichever vendor refuses exports.", "Ownership reduces lock-in and continuity risk."),
        q("What is the strongest launch scope?", "A complete high-value journey with working measurement, routing, consent, accessibility, performance, and rollback.", "A coherent minimum that can be operated and learned from.", "Ten untested page variants.", "A beautiful page with no CRM linkage.", "Operational completeness is more valuable than unfinished breadth."),
        q("A client asks for a guaranteed 20% conversion rate. Best response?", "Explain that outcomes depend on traffic, offer, market, operations, measurement, and uncertainty; commit to a disciplined process and thresholds instead.", "Provide scenario ranges without a guarantee.", "Guarantee 25% to win the work.", "Exclude low results from reports.", "No provider controls every variable in a conversion rate."),
        q("What belongs in handoff?", "Account ownership, access matrix, page/source files, event specification, tags, CRM fields, call setup, consent design, QA evidence, dashboards, baselines, experiment log, maintenance, and training.", "A reproducible operating system.", "Only the live URL.", "Agency-owned tracking numbers with no transfer plan.", "Handoff should preserve client continuity and understanding."),
        q("Which issue is highest priority after launch?", "A broken form or call route that loses leads and corrupts measurement.", "Critical customer and data integrity defects first.", "A minor headline preference.", "Publishing another variant immediately.", "Function and trustworthy data precede optimization."),
        q("What proves CRO mastery?", "An inspectable system linking evidence, customer experience, measurement, qualified outcomes, experiments, and documented decisions.", "A capstone that another operator can reproduce.", "One winning button-color test.", "A platform-reported conversion count.", "Mastery is reliable judgment under uncertainty."),
        q("When should Oside say 'not yet'?", "When claims, consent, tracking, ownership, routing, accessibility, security, or operations make launch unsafe or misleading.", "When prerequisites require repair.", "Never.", "Only when traffic is low.", "Responsible delivery includes refusing premature optimization."),
        w("Outline the complete roofing capstone.", "Include economics, research, traffic map, offer/message, prototype, proof, mobile/accessibility/performance, forms/calls, consent, GTM/data layer, GA4 events, Ads conversions, CRM IDs/stages, enhanced conversions, values, attribution, local grid, experiment, QA, dashboard, governance, and walkthrough."),
        w("Give a five-minute recommendation after finding a high-converting roofing page with duplicate leads, fake urgency, poor mobile performance, and no qualified-stage tracking.", "Prioritize deceptive claim removal, deduplication and routing, mobile/function repair, measurement contract, CRM lifecycle, source capture, qualified outcomes, baseline, research-led page improvements, controlled tests, owners, timeline, and no unsupported promise.")
      ]
    )
  ];

  const total = window.MASTERY_MODULES.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.MASTERY_MODULES.length !== 12 || total !== 120) {
    console.error(`Landing-page mastery content error: expected 12 modules and 120 questions; found ${window.MASTERY_MODULES.length} and ${total}.`);
  }
})();

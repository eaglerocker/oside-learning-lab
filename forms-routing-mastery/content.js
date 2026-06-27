(() => {
  const S = {
    callrailApi: ["CallRail API documentation", "https://apidocs.callrail.com/"],
    callrailSupport: ["CallRail support center", "https://support.callrail.com/hc/en-us"],
    hubspotFormsApi: ["HubSpot Forms API", "https://developers.hubspot.com/docs/api/marketing/forms"],
    hubspotFormsKb: ["HubSpot forms knowledge base", "https://knowledge.hubspot.com/forms"],
    gravity: ["Gravity Forms documentation", "https://docs.gravityforms.com/"],
    gravityWebhooks: ["Gravity Forms Webhooks Add-On", "https://docs.gravityforms.com/webhooks-add-on/"],
    wpforms: ["WPForms documentation", "https://wpforms.com/docs/"],
    wsform: ["WS Form knowledge base", "https://wsform.com/knowledgebase/"],
    formidable: ["Formidable Forms knowledge base", "https://formidableforms.com/knowledgebase/"],
    fluent: ["Fluent Forms documentation", "https://wpmanageninja.com/docs/fluent-form/"],
    ninja: ["Ninja Forms developer documentation", "https://developer.ninjaforms.com/"],
    cf7: ["Contact Form 7 documentation", "https://contactform7.com/docs/"],
    elementor: ["Elementor Form widget", "https://elementor.com/help/form-widget/"],
    jotformApi: ["Jotform API documentation", "https://api.jotform.com/docs/"],
    jotformWebhooks: ["Jotform webhooks", "https://www.jotform.com/help/430-how-to-setup-webhooks/"],
    typeform: ["Typeform developer platform", "https://www.typeform.com/developers/"],
    typeformWebhooks: ["Typeform webhooks", "https://www.typeform.com/developers/webhooks/"],
    highlevelApi: ["HighLevel integrations API documentation", "https://highlevel.stoplight.io/docs/integrations/"],
    zapierHooks: ["Zapier webhooks help", "https://help.zapier.com/hc/en-us/articles/8496288813453-Get-started-with-webhooks-in-Zaps"],
    makeHooks: ["Make webhooks help", "https://www.make.com/en/help/tools/webhooks"],
    gtmDataLayer: ["Google Tag Manager data layer", "https://developers.google.com/tag-platform/tag-manager/datalayer"],
    ga4Events: ["GA4 recommended events", "https://support.google.com/analytics/answer/9267735?hl=en"],
    ga4Protocol: ["GA4 Measurement Protocol", "https://developers.google.com/analytics/devguides/collection/protocol/ga4"],
    ga4Key: ["GA4 key events", "https://support.google.com/analytics/answer/13128484?hl=en"],
    ga4Attribution: ["GA4 attribution overview", "https://support.google.com/analytics/answer/10596866?hl=en"],
    adsConversions: ["Google Ads conversion goals", "https://support.google.com/google-ads/answer/11461796?hl=en"],
    enhancedLeads: ["Enhanced conversions for leads", "https://support.google.com/google-ads/answer/11021502?hl=en"],
    offlineConversions: ["Import offline conversions", "https://support.google.com/google-ads/answer/7012522?hl=en"],
    gbpLinks: ["Business Profile local business links", "https://support.google.com/business/answer/6218037?hl=en"],
    gbpRanking: ["Improve local ranking", "https://support.google.com/business/answer/7091?hl=en"],
    wcag: ["WCAG 2.2", "https://www.w3.org/TR/WCAG22/"],
    waiForms: ["W3C accessible forms tutorial", "https://www.w3.org/WAI/tutorials/forms/"],
    wordpressPlugins: ["WordPress plugin handbook", "https://developer.wordpress.org/plugins/"],
    ftcAds: ["FTC advertising and marketing guidance", "https://www.ftc.gov/business-guidance/advertising-marketing"]
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
    storageKey: "osideFormsRoutingAttributionMastery.v1",
    heroEyebrow: "Oside Digital · Form fills, routing, and attribution",
    heroTitle: "Master form stacks, routing logic, CRM handoff, and attribution for roofing lead systems.",
    heroLede: "Learn when to use CallRail Forms, HubSpot Forms, Gravity Forms, WS Form, WPForms, Fluent Forms, Jotform, Typeform, GoHighLevel, Zapier, Make, and custom webhook/API routing.",
    foundationNote: "Primary-source foundation reviewed June 27, 2026. Vendor products change quickly; recheck docs before implementing a live stack.",
    modulesSummary: "Named form tools, WordPress plugins, hosted forms, CRM-native forms, routers, webhooks, GA4, Google Ads, GBP, privacy, QA, and roofing operations.",
    labsSummary: "Stack selection, source capture, CallRail/CRM routing, WordPress plugin comparison, webhook router design, Google Ads imports, local-rank diagnosis, and roofing capstone.",
    reportEyebrow: "Forms, Routing & Attribution mastery report",
    reportTitle: "Oside Forms, Routing & Attribution Mastery Report",
    reportFilename: "oside-forms-routing-attribution-mastery",
    sourceReminder: "Recheck vendor docs for form tools, routers, CRMs, Google Ads, GA4, consent, accessibility, and privacy before changing a live lead system.",
    resetPrompt: "Clear all forms, routing, attribution, lab, and diagnostic progress?",
    integrationPractice: "Complete a stack decision matrix, webhook workflow, GA4/GAds event map, CRM reconciliation, and local-rank-to-lead leakage diagnosis.",
    readinessGroups: [
      { key: "stack", title: "Ready to choose a form stack?", ids: ["stack-architecture", "source-capture", "wordpress-premium", "wordpress-lightweight", "local-gbp"] },
      { key: "operate", title: "Ready to operate form attribution?", ids: ["source-capture", "callrail", "hubspot", "routers", "google-integrations"] },
      { key: "advise", title: "Ready to advise roofing clients?", ids: ["stack-architecture", "callrail", "highlevel", "google-integrations", "local-gbp", "capstone"] }
    ],
    labs: [
      {
        id: "stack-matrix",
        title: "Form-stack decision matrix",
        description: "Choose a stack by business need instead of tool preference.",
        task: "Compare CallRail Forms, HubSpot Forms, Gravity Forms, WS Form, WPForms, Fluent Forms, Formidable, Ninja Forms, Contact Form 7, Elementor Forms, Jotform, Typeform, GoHighLevel, Zapier, Make, and custom API routing across ownership, speed, integrations, source capture, CRM fit, spam controls, accessibility, cost, maintainability, and roofing lead quality.",
        proof: "You can defend why one stack is preferable for a given roofing client and why another attractive stack is wrong."
      },
      {
        id: "source-capture-spec",
        title: "Hidden-field and event capture specification",
        description: "Define exactly what every form fill must capture before it reaches reports.",
        task: "Specify field names for original source, current source, UTMs, GCLID/GBRAID/WBRAID where permitted, landing page, referrer, campaign, keyword/query where available, form ID, lead ID, consent state, service, geography, and duplicate handling. Map each field to GA4, Google Ads, CRM, and router destinations.",
        proof: "A developer or no-code builder can implement the same source capture without guessing."
      },
      {
        id: "callrail-routing",
        title: "CallRail Forms and call/form attribution workflow",
        description: "Design a CallRail-centered system that treats calls and forms as related but different lead objects.",
        task: "Create a CallRail-oriented plan for form tracking, DNI/call tracking, form IDs, call IDs, tags, qualified dispositions, recording consent, source capture, CRM sync, GA4 key events, Ads conversion imports, and reconciliation against website and CRM data.",
        proof: "The system can explain why CallRail, GA4, Google Ads, and the CRM disagree without declaring one report universally true."
      },
      {
        id: "wordpress-plugin-comparison",
        title: "WordPress form plugin implementation lab",
        description: "Compare popular WordPress form plugins under real service-business constraints.",
        task: "Build a decision brief for Gravity Forms, WS Form, WPForms, Fluent Forms, Formidable Forms, Ninja Forms, Contact Form 7, and Elementor Forms. Include hidden fields, webhook/API support, CRM add-ons, spam controls, conditional logic, accessibility, performance, exportability, logging, and failure monitoring.",
        proof: "The chosen plugin can route a roofing lead reliably without trapping the client in an unmaintainable setup."
      },
      {
        id: "webhook-router",
        title: "Zapier/Make webhook routing blueprint",
        description: "Turn form submissions into governed automation rather than fragile spaghetti.",
        task: "Design a webhook router with payload schema, authentication or secret validation, filters, deduplication, retries, error handling, logging, enrichment, CRM create/update, lead owner notifications, GA4/Ads handoff, Slack/email alerts, and rollback.",
        proof: "A failed form submission can be detected, replayed, and corrected without losing the lead."
      },
      {
        id: "google-imports",
        title: "Google Ads, GA4, and CRM conversion import plan",
        description: "Connect web leads to qualified and sold roofing outcomes without optimizing to junk.",
        task: "Map generate_lead, qualify_lead, disqualify_lead, appointment, estimate, sold, lost, and revenue/value stages to GA4 key events, Google Ads primary/secondary conversions, enhanced conversions for leads, offline imports, consent behavior, and CRM source-of-truth fields.",
        proof: "Automated bidding receives the deepest reliable signal the business can govern."
      },
      {
        id: "local-rank",
        title: "Local-rank-to-form-fill diagnostic",
        description: "Separate local visibility problems from form, routing, attribution, and sales leaks.",
        task: "Enter 25 ranks left-to-right, top-to-bottom; use 21 for not found beyond rank 20. Interpret average, median, top-3 share, top-10 share, and not-found share beside GBP links, website form path, UTM/source capture, call path, CRM lead quality, and sold jobs.",
        proof: "The diagnosis distinguishes local visibility, click-through, form conversion, routing, qualification, and close-rate problems.",
        calculator: "rank"
      },
      {
        id: "capstone",
        title: "Roofing form-stack attribution capstone",
        description: "Integrate the full operating system for a roofing client.",
        task: "Choose a roofing lead scenario and produce the stack decision, form design, WordPress or hosted form choice, CallRail/call tracking role, CRM mapping, Zapier/Make/API routing, GA4/GTM event spec, Google Ads import plan, GBP link tracking, QA protocol, privacy/accessibility review, dashboard, failure response, and 30-day optimization plan.",
        proof: "The client can receive, qualify, attribute, and act on roofing form fills without losing leads or trusting false numbers."
      }
    ]
  };

  window.MASTERY_MODULES = [
    module(
      "stack-architecture",
      "1. Form-stack architecture and decision strategy",
      "Choose the right form stack for the client’s operating model instead of defaulting to whichever form builder is familiar.",
      ["Compare native, plugin, hosted, and routed forms", "Identify when stacks are preferable", "Avoid brittle over-integration"],
      [
        lesson("Stack families", "Form systems usually fall into CRM-native forms, WordPress-native plugins, hosted/conversational forms, call-attribution forms, agency CRM forms, and custom webhook/API builds.", ["Each family optimizes for different control points.", "The form is only one piece of the lead system.", "Stack choice affects attribution, ownership, speed, cost, and maintainability."]),
        lesson("Prefer native when the system of record matters", "HubSpot Forms or GoHighLevel forms can be preferable when the CRM owns lifecycle, automation, contact records, and sales follow-up.", ["Native forms reduce sync friction.", "They may limit design or website control.", "CRM-native does not remove the need for source governance."]),
        lesson("Prefer WordPress-native when site control matters", "Gravity Forms, WS Form, WPForms, Fluent Forms, Formidable, Ninja Forms, Contact Form 7, and Elementor Forms can be preferable when the website is the build surface.", ["Plugin quality differs sharply.", "Add-ons and hooks can create power or fragility.", "Performance, spam, updates, and ownership matter."]),
        lesson("Prefer routers only when routing complexity justifies them", "Zapier, Make, and custom webhooks are useful for multi-system workflows, but every router adds failure points.", ["Routers need logging and retries.", "A direct integration is often better when it is reliable.", "Critical lead flows deserve monitoring."])
      ],
      ["Create a stack-choice scorecard.", "Interview a roofing owner about sales follow-up and CRM usage.", "Map direct versus routed integrations for one lead path."],
      "You can explain why a form stack is suitable for a roofing client’s real operations.",
      [S.callrailSupport, S.hubspotFormsKb, S.gravity, S.wsform, S.zapierHooks, S.makeHooks],
      [
        q("What is the strongest first question when choosing a form stack?", "Which system must become the source of truth for the lead lifecycle and sales follow-up?", "Start with ownership, routing, and reporting needs.", "Which form looks nicest?", "Which plugin is cheapest today?", "Stack choice should serve business operations, not visual preference."),
        q("When are HubSpot Forms often preferable?", "When HubSpot is the CRM source of truth and contact lifecycle automation matters more than maximum website-level customization.", "When the business already operates in HubSpot.", "Whenever the website is WordPress.", "Whenever the client wants the lowest-cost tool.", "CRM-native forms reduce lifecycle sync friction but are not always best for web control."),
        q("When are WordPress form plugins often preferable?", "When the website experience, custom fields, conditional logic, styling, and local site ownership are central to the lead path.", "When the site team can maintain plugins responsibly.", "When the CRM is irrelevant.", "When tracking does not matter.", "WordPress-native forms can be powerful but require governance."),
        q("When is Zapier or Make a bad default?", "When a direct native integration can reliably create the right CRM object with less latency and fewer failure points.", "When routing complexity does not justify middleware.", "Never; routers always simplify systems.", "Only when the client dislikes automation.", "Routers add moving parts and need monitoring."),
        q("Why might CallRail Forms be preferable?", "When call and form attribution need to be analyzed together around source, campaign, recording/disposition, and lead quality.", "When the client already uses CallRail for call attribution.", "When the CRM should be bypassed.", "When forms do not need QA.", "CallRail can unify call/form attribution but still needs CRM handoff."),
        q("What is the danger of a beautiful hosted form with weak CRM mapping?", "It may create a polished front end while losing source, lead status, ownership, and downstream conversion quality.", "Design can hide operational weakness.", "Hosted forms always rank poorly.", "The color scheme affects GA4 attribution.", "Lead systems fail in handoff, not only on-page."),
        q("Which stack is best by default?", "None; the right stack depends on ownership, CRM, website, attribution depth, routing complexity, cost, reliability, and maintainability.", "Use a decision matrix.", "Always HubSpot.", "Always Gravity Forms.", "Tool preference without context creates fragile systems."),
        q("What should a founder document before implementation?", "Stack owner, source-of-truth fields, routing map, failure handling, access, costs, data retention, QA, and handoff.", "A complete operating spec.", "Only the form URL.", "Only the plugin license key.", "Documentation is what makes the stack operable."),
        w("Create a decision matrix for choosing between HubSpot Forms, Gravity Forms, CallRail Forms, and Jotform for a roofer.", "Cover source of truth, website control, CRM fit, call attribution, hidden fields, webhooks, accessibility, spam, cost, reporting, maintainability, and failure risk."),
        w("Explain to a roofing owner why the cheapest form plugin may be the most expensive choice.", "Discuss lost leads, broken routing, attribution gaps, spam, updates, security, CRM mismatch, manual labor, and bad bidding signals.")
      ]
    ),

    module(
      "source-capture",
      "2. Source capture, hidden fields, data layer, and event taxonomy",
      "Capture enough context to reconcile form fills across website, GA4, Google Ads, CRM, routers, and call-tracking systems.",
      ["Design hidden-field strategy", "Use data-layer events correctly", "Prevent duplicate and shallow conversion signals"],
      [
        lesson("Hidden fields", "Useful form fills often carry UTMs, click IDs, landing page, referrer, form ID, lead ID, service, geography, and consent state.", ["Do not collect unnecessary sensitive data.", "Use consistent names.", "Preserve original and current source when needed."]),
        lesson("Data layer", "A data-layer event can pass structured lead context to GTM, GA4, Google Ads, and other tools after successful lead creation.", ["A button click is not a lead.", "A success callback is stronger.", "Server acceptance with an ID is stronger still."]),
        lesson("Event taxonomy", "GA4 recommended lead events include generate_lead and downstream lead-stage events that can describe qualification and close outcomes.", ["Do not make every micro-event primary.", "Use key events intentionally.", "Align event names with CRM stages."]),
        lesson("Deduplication", "Every important lead should have a stable ID so systems can reconcile duplicates, reloads, retries, and offline imports.", ["IDs are better than averages.", "Router retries can duplicate records.", "CRM and ad-platform windows differ."])
      ],
      ["Write a hidden-field naming standard.", "Create a data-layer event specification.", "Reconcile a mock lead across GA4, Ads, and CRM."],
      "You can trace a form fill from submit through reports without guessing what the numbers mean.",
      [S.gtmDataLayer, S.ga4Events, S.ga4Key, S.ga4Protocol, S.adsConversions],
      [
        q("What is the strongest trigger for generate_lead?", "A confirmed unique lead creation event with a lead ID after the server or platform accepts the submission.", "A reliable form success callback.", "A submit-button click.", "A pageview of the contact page.", "Clicks and pageviews can occur without a real lead."),
        q("Why capture both original source and current source?", "They answer different questions: first acquisition touch versus the source of the converting session.", "They help reconcile long buying journeys.", "They are always identical.", "They replace CRM stages.", "Source scope matters in attribution."),
        q("What is the most dangerous hidden-field habit?", "Dumping unnecessary sensitive data into every destination without consent, purpose, or retention control.", "Collecting minimal source context.", "Using stable field names.", "Documenting data flow.", "Source capture must respect privacy and minimization."),
        q("A form fires two GA4 leads for one CRM record. First suspects?", "Duplicate success events, thank-you-page reloads, click triggers, retries, missing lead IDs, or multiple tags.", "Investigate at lead-ID level.", "The CRM is always wrong.", "Average the reports.", "Deduplication needs object-level evidence."),
        q("Which event should usually stay secondary or diagnostic?", "form_start, unless there is a specific governed reason to optimize to it.", "Micro-events before business value.", "Qualified lead.", "Sold job.", "Shallow signals can train platforms toward low-value behavior."),
        q("Why preserve GCLID or related click IDs where permitted?", "They can connect eligible ad interactions to downstream conversions and imports.", "They support ad measurement and bidding when handled correctly.", "They identify the user’s full browsing history.", "They remove consent obligations.", "Click IDs are useful but governed identifiers."),
        q("What belongs in a data-layer lead payload?", "Event name, lead ID, form ID, service, geography, source fields, consent state, value where appropriate, and non-sensitive routing context.", "Enough context to report and route.", "Passwords and unrelated notes.", "Only the button label.", "Payloads should be useful and minimal."),
        q("When should a form lead be considered untrusted for reporting?", "When definitions, triggers, consent behavior, duplicates, spam controls, or CRM mapping are undocumented.", "When it cannot be reconciled.", "When it came from mobile.", "When it has a UTM.", "Data quality depends on implementation and definitions."),
        w("Write a hidden-field and data-layer spec for a roofing estimate form.", "Include field names, values, owner, source, consent handling, destinations, event timing, lead ID, deduplication, QA tests, and privacy exclusions."),
        w("Diagnose why GA4, Google Ads, and the CRM report different form-fill counts.", "Cover definitions, attribution windows, modeled data, key events, primary conversions, click IDs, duplicates, time zones, spam, offline stages, consent, and lead IDs.")
      ]
    ),

    module(
      "callrail",
      "3. CallRail Forms, call tracking, and lead attribution",
      "Use CallRail-style form and call attribution without letting call-tracking reports become the only truth.",
      ["Combine call and form context", "Design CallRail-to-CRM handoff", "Troubleshoot attribution discrepancies"],
      [
        lesson("Call and form objects", "Calls and forms are different lead objects but should share source, campaign, landing page, qualification, and outcome context.", ["A call duration is not a sale.", "A form submission is not a qualified opportunity.", "Dispositions matter."]),
        lesson("CallRail’s role", "CallRail can be useful when a client needs call tracking, form tracking, source analysis, lead tags, recordings where lawful, and integrations.", ["Do not strand users if scripts fail.", "Keep visible fallback numbers.", "Sync outcomes to the CRM."]),
        lesson("DNI and form tracking", "Dynamic number insertion and form tracking should preserve a functional customer path while adding attribution context.", ["Test paid and organic sessions.", "Test JavaScript-disabled or blocked conditions where possible.", "Monitor replacement failures."]),
        lesson("Report reconciliation", "CallRail, GA4, Ads, and CRM reports differ by object, attribution model, time zone, duplicate rules, and qualification stage.", ["Use a source-of-truth map.", "Document expected discrepancies.", "Do not optimize to unqualified calls."])
      ],
      ["Draft a CallRail field map.", "Create a call/form disposition dictionary.", "QA paid and organic calls/forms from click to CRM."],
      "You can use CallRail as a call/form attribution layer without confusing it with the CRM source of truth.",
      [S.callrailApi, S.callrailSupport, S.ga4Events, S.offlineConversions],
      [
        q("When is CallRail most valuable in a roofing stack?", "When phone calls are commercially important and need source, campaign, recording/disposition, and quality context alongside forms.", "When call attribution and lead quality both matter.", "When the business has no need for CRM.", "When every call should be counted as revenue.", "Call attribution becomes useful when connected to quality outcomes."),
        q("What is the biggest risk of treating CallRail as the only truth?", "It may know call/form attribution but not full sales lifecycle, revenue, close status, and CRM corrections.", "It is one layer in the measurement stack.", "It always undercounts leads.", "It replaces all reporting.", "Each platform sees a different slice."),
        q("What should happen when DNI fails?", "A visible fallback phone number should still work, and the failure should be monitored.", "Attribution should degrade without losing the lead.", "Hide the phone number until scripts load.", "Count it as a qualified call.", "Measurement must not break contact paths."),
        q("Which CallRail-to-CRM mapping is strongest?", "Call/form ID, source, campaign, landing page, caller/contact, tags, disposition, recording link where appropriate, consent, and outcome fields.", "Enough identity and quality context to reconcile.", "Only caller name.", "Only duration.", "Duration alone is a weak proxy."),
        q("A 90-second call is marked conversion but sales says it was spam. Best action?", "Use dispositions/qualification to separate raw calls from qualified opportunities and adjust conversion strategy.", "Reconcile quality before bidding.", "Ignore sales.", "Make duration threshold the only rule forever.", "Duration is not lead quality."),
        q("Why test CallRail forms and calls from different sources?", "DNI, hidden fields, UTMs, click IDs, and integrations can behave differently by traffic source and device.", "Source-specific QA catches subtle failures.", "All sessions are identical.", "Only desktop tests matter.", "Attribution logic depends on session context."),
        q("What should be documented for call recording?", "Jurisdictional consent requirements, notice language, storage, access, retention, and client policy.", "Consent and governance.", "Nothing because vendors handle it automatically.", "Only the salesperson’s preference.", "Call recording can carry legal and trust obligations."),
        q("When might CallRail Forms be inferior to HubSpot Forms?", "When HubSpot lifecycle automation and CRM-native form records are more important than unifying calls/forms in CallRail.", "When CRM-native flow reduces complexity.", "Never.", "When the website is slow.", "Stack preference depends on source-of-truth needs."),
        w("Design a CallRail-centered call and form attribution workflow for a roofing company.", "Cover DNI, visible fallback, forms, IDs, UTMs, click IDs, tags, dispositions, recordings/consent, CRM sync, GA4, Google Ads imports, QA, ownership, and reconciliation."),
        w("Explain why CallRail, GA4, Google Ads, and the CRM disagree on lead totals.", "Discuss object definitions, attribution models, time zones, windows, duplicates, spam, duration thresholds, qualification, imports, consent, and corrections.")
      ]
    ),

    module(
      "hubspot",
      "4. HubSpot Forms and CRM-native lifecycle design",
      "Use HubSpot forms when CRM-native identity, lifecycle automation, and sales operations matter more than plugin-level control.",
      ["Build HubSpot-native lead flows", "Use hidden fields and tracking responsibly", "Connect forms to lifecycle stages"],
      [
        lesson("CRM-native advantage", "HubSpot Forms can create or update contacts directly, trigger workflows, and support lifecycle reporting inside the CRM.", ["Native identity can reduce sync loss.", "Fields must be governed.", "Marketing and sales definitions still matter."]),
        lesson("Hidden fields and context", "HubSpot forms can carry hidden values such as campaign, service, page context, or source fields when implemented carefully.", ["Do not overwrite original source blindly.", "Respect consent and subscription logic.", "Avoid field sprawl."]),
        lesson("Embedded versus external", "Embedded HubSpot forms can be easier to operate, while custom forms posting to HubSpot APIs can preserve more website control.", ["APIs require developer governance.", "Embeds can affect UX/performance.", "Choose by risk and ownership."]),
        lesson("Lifecycle reporting", "The power of HubSpot is not the form itself; it is the ability to connect submission to contact, deal, owner, activity, qualified status, and revenue.", ["Define stages.", "Train users.", "Audit duplicates."])
      ],
      ["Map HubSpot properties for a roofing lead.", "Design a HubSpot workflow after form submission.", "Compare embed versus API submission."],
      "You can decide when HubSpot Forms should be the core form layer and how to keep source data trustworthy.",
      [S.hubspotFormsApi, S.hubspotFormsKb, S.ga4Events, S.enhancedLeads],
      [
        q("When is a HubSpot-native form usually preferable?", "When HubSpot is the CRM source of truth and workflow/lifecycle automation are central to sales follow-up.", "When contact and deal continuity matter.", "Whenever any client asks for a form.", "Only when the website is not WordPress.", "CRM-native forms shine when the CRM owns the lifecycle."),
        q("What is the main risk of custom forms posting to HubSpot?", "Developer errors can lose context, create duplicates, bypass consent logic, or mishandle required properties.", "APIs require governance and QA.", "They always rank worse.", "They cannot be tracked.", "Custom control increases responsibility."),
        q("Which property strategy is strongest?", "A small governed set of source, service, geography, qualification, and lifecycle properties with clear owners.", "Map only fields that support routing and decisions.", "Create a new property for every campaign whim.", "Store raw debug blobs in contact fields forever.", "Property sprawl makes reporting fragile."),
        q("What should a HubSpot workflow do after a roofing estimate form?", "Assign owner, create task/deal when appropriate, notify sales, set SLA, preserve source, and avoid duplicate chaos.", "Move the lead into a defined lifecycle path.", "Send only a generic email.", "Mark every lead sold.", "Automation should support sales operations."),
        q("Why not overwrite original source with every new form fill?", "It destroys first-touch history and can confuse acquisition reporting.", "Use separate current-source or latest-conversion fields.", "Original source is never useful.", "Google Ads requires overwriting it.", "Different source fields answer different questions."),
        q("What must happen before sending HubSpot lead data to Google Ads?", "Consent, data quality, identifiers, conversion definitions, customer data terms, and offline-stage consistency must be governed.", "Only meaningful stages should be uploaded.", "Upload every contact immediately.", "Hashing removes all obligations.", "Enhanced/offline conversions need policy-aware implementation."),
        q("A HubSpot form has high submission volume but no deals. First diagnosis?", "Check qualification, routing, sales response, duplicate handling, source mix, offer fit, and whether deals are being created correctly.", "Audit lifecycle handoff.", "Redesign the thank-you message first.", "Assume form volume is success.", "CRM-native data is only valuable if sales process is used."),
        q("What makes HubSpot inferior for some landing pages?", "If design/performance/control requirements exceed the embed’s practical flexibility, a custom or WordPress form with robust HubSpot sync may be better.", "Website constraints can justify another form layer.", "HubSpot is always inferior.", "HubSpot cannot store leads.", "Tool fit depends on constraints."),
        w("Design a HubSpot property map for roofing form fills.", "Include contact fields, deal fields, source fields, service/geography, consent, lead status, owner, value, IDs, deduplication, workflows, and reporting use."),
        w("Compare embedded HubSpot Forms versus custom website forms posting to HubSpot APIs.", "Score control, speed, reliability, consent, performance, tracking, developer risk, CRM continuity, and maintenance.")
      ]
    ),

    module(
      "wordpress-premium",
      "5. Gravity Forms, WS Form, WPForms, Fluent Forms, and Formidable",
      "Evaluate feature-rich WordPress form plugins for serious lead routing and attribution work.",
      ["Compare premium WordPress form plugins", "Use hooks, webhooks, and add-ons safely", "Protect performance and maintainability"],
      [
        lesson("Gravity Forms", "Gravity Forms is often chosen for mature WordPress builds because of add-ons, developer hooks, conditional logic, notifications, entries, and ecosystem depth.", ["Power increases configuration risk.", "Entry storage needs privacy decisions.", "Webhooks and CRM add-ons require QA."]),
        lesson("WS Form", "WS Form can be attractive when advanced conditional logic, integrations, developer extensibility, and modern form-building controls matter.", ["Power users benefit most.", "Document complex logic.", "Test accessibility and performance."]),
        lesson("WPForms and Fluent Forms", "WPForms often emphasizes ease of use; Fluent Forms often appeals for speed, features, and integrations. Either can be right if maintained well.", ["Ease is valuable for clients.", "Feature checklists are not enough.", "Export, logging, and routing matter."]),
        lesson("Formidable Forms", "Formidable can be strong when forms become data applications with views, calculations, directories, or more complex on-site workflows.", ["Complexity should be justified.", "Avoid turning WordPress into an unmanaged CRM.", "Govern stored entries."])
      ],
      ["Score five plugins against a roofing use case.", "Design webhook payloads from Gravity or WS Form.", "Document update and rollback procedures."],
      "You can choose and operate a WordPress form plugin for attribution-heavy lead generation.",
      [S.gravity, S.gravityWebhooks, S.wsform, S.wpforms, S.fluent, S.formidable, S.wordpressPlugins],
      [
        q("When is Gravity Forms often a strong choice?", "When a WordPress site needs mature add-ons, hooks, conditional logic, entries, notifications, and webhook/CRM flexibility.", "When developer ecosystem depth matters.", "When no one will maintain plugins.", "When CRM lifecycle is irrelevant.", "Gravity’s strength is power plus ecosystem, not automatic governance."),
        q("When might WS Form be preferable?", "When advanced logic, integrations, and developer-friendly controls are important and the implementer can document complexity.", "When power and flexibility matter.", "When the client wants the simplest possible interface only.", "When no QA is planned.", "Advanced builders need disciplined implementation."),
        q("When is WPForms preferable?", "When client usability and simple reliable forms matter more than deeply custom workflows.", "When maintainability for non-technical users is central.", "When every submission needs custom API code.", "When hidden fields are forbidden.", "Ease can be a valid architectural advantage."),
        q("When is Formidable Forms attractive?", "When forms act like data applications with calculations, views, directories, or complex on-site workflows.", "When the form is more than a contact form.", "When the business needs no reporting.", "When no one will govern stored data.", "Formidable’s power should match the use case."),
        q("What is the main risk of WordPress plugin stacks?", "Plugin updates, conflicts, spam, performance, security, and unmonitored integrations can silently break lead flow.", "Website-native forms require operations.", "They cannot route leads.", "They are always slower than hosted forms.", "WordPress lead systems need maintenance."),
        q("Which feature matters most for attribution-heavy forms?", "Reliable submission confirmation with IDs, hidden fields, webhooks/API, logging, spam controls, and CRM reconciliation.", "End-to-end traceability.", "A drag-and-drop editor only.", "A pretty template.", "Attribution requires durable payloads and logs."),
        q("Why store form entries cautiously?", "Entries may contain personal data; retention, access, export, deletion, and security must be governed.", "Local backup can help but creates responsibility.", "Store everything forever.", "Never store anything under any condition.", "Data storage requires policy."),
        q("A plugin has a native HubSpot add-on and webhook support. Best decision?", "Prefer the simpler reliable path after testing field mapping, duplicates, errors, and lifecycle behavior.", "Native may be better, webhooks may be needed for custom logic.", "Use both to be safe.", "Avoid all integrations.", "Duplicate integrations can create duplicate leads."),
        w("Compare Gravity Forms, WS Form, WPForms, Fluent Forms, and Formidable for a roofing replacement site.", "Score hidden fields, webhooks, CRM add-ons, conditional logic, spam, entries, exports, accessibility, performance, client usability, update risk, and cost."),
        w("Write a WordPress form plugin QA and maintenance plan.", "Include staging, backups, plugin updates, form tests, webhook tests, spam review, logs, notifications, CRM reconciliation, rollback, access, and data retention.")
      ]
    ),

    module(
      "wordpress-lightweight",
      "6. Ninja Forms, Contact Form 7, Elementor Forms, and lightweight WordPress stacks",
      "Understand when lightweight or builder-native WordPress forms are enough—and when they become operational risk.",
      ["Evaluate lightweight form stacks", "Protect accessibility and spam control", "Know when to upgrade"],
      [
        lesson("Contact Form 7", "Contact Form 7 is widely used and lightweight, but serious routing often requires add-ons, hooks, or custom development.", ["Lightweight can be good.", "Add-on sprawl can be risky.", "Logging may need extra planning."]),
        lesson("Ninja Forms", "Ninja Forms can support common WordPress form needs with extensions and developer options.", ["Evaluate extension dependencies.", "Test notifications and integrations.", "Document required licenses."]),
        lesson("Elementor Forms", "Elementor Forms may be convenient when the site is already built in Elementor and the form needs are moderate.", ["Builder convenience is not always system reliability.", "Watch performance and lock-in.", "Confirm webhooks and CRM handoff."]),
        lesson("Upgrade triggers", "Move beyond lightweight forms when the client needs serious attribution, conditional routing, CRM lifecycle, retries, logging, or offline conversion feedback.", ["Do not overbuild simple forms.", "Do not underbuild revenue-critical forms.", "Choose by risk."])
      ],
      ["Audit a lightweight form for hidden fields and webhooks.", "Write upgrade criteria.", "Test a form for keyboard, spam, and notification reliability."],
      "You can use lightweight WordPress forms responsibly without pretending they are enterprise routing systems.",
      [S.cf7, S.ninja, S.elementor, S.waiForms, S.wcag],
      [
        q("When is Contact Form 7 reasonable?", "When form needs are simple, the site team understands add-ons/custom hooks, and lead routing can be monitored.", "When lightweight footprint matters.", "When the client needs complex lifecycle automation with no add-ons.", "When nobody will test submissions.", "Simple tools can be fine for simple, governed needs."),
        q("What is the danger of add-on sprawl?", "Multiple add-ons can create update, security, performance, compatibility, and ownership risk.", "Extensions need governance.", "Add-ons always improve reliability.", "Add-ons remove QA needs.", "Complexity accumulates quietly."),
        q("When are Elementor Forms attractive?", "When an Elementor-built site needs convenient moderate forms and the team can verify routing, webhooks, and performance.", "When builder-native workflow saves time.", "When the form is the CRM source of truth.", "When no analytics are needed.", "Builder convenience must still be tested."),
        q("What is an upgrade trigger from lightweight to robust form stack?", "Need for reliable logs, retries, conditional routing, CRM lifecycle, deduplication, offline imports, or governed attribution.", "Revenue-critical complexity.", "A new button color.", "A preference for expensive software.", "Risk and requirements justify upgrades."),
        q("Which missing feature is most dangerous?", "No reliable way to know whether submissions reached the CRM or owner.", "No monitoring/logging for lead delivery.", "No animation.", "No multi-step design.", "Lost leads are more expensive than missing polish."),
        q("How should spam controls be evaluated?", "By their effect on spam reduction, user friction, accessibility, false positives, and routing reliability.", "Balance protection and conversion.", "Use the harshest CAPTCHA everywhere.", "Ignore spam because CRM can filter it later.", "Spam and friction both affect lead quality."),
        q("Why are accessible labels and errors still strategic?", "They directly affect whether homeowners can submit leads and whether forms work on real devices and assistive technologies.", "Accessibility is conversion infrastructure.", "They only matter for large companies.", "Placeholders are always enough.", "Usability is not decorative."),
        q("What is the right way to use a lightweight form for paid traffic?", "Only after proving source capture, conversion events, CRM delivery, spam controls, and failure monitoring are reliable.", "Treat it like a production system.", "Launch first and test if complaints happen.", "Skip CRM linkage.", "Paid traffic magnifies form-stack flaws."),
        w("Write upgrade criteria for moving from Contact Form 7 to Gravity Forms, WS Form, or HubSpot Forms.", "Include lead volume, paid spend, CRM needs, hidden fields, webhooks, logging, retries, spam, accessibility, maintenance, cost, and owner skill."),
        w("Audit an Elementor Forms implementation for a roofing landing page.", "Cover page-builder dependency, form actions, hidden fields, webhooks, notifications, GA4/GAds events, CRM mapping, spam, mobile UX, accessibility, performance, and failure monitoring.")
      ]
    ),

    module(
      "hosted-forms",
      "7. Jotform, Typeform, and hosted/conversational form builders",
      "Use hosted forms when speed, conditional UX, surveys, or embedded experiences matter—without losing attribution and CRM control.",
      ["Evaluate hosted forms", "Design embed and redirect tracking", "Route hosted submissions safely"],
      [
        lesson("Hosted form strengths", "Jotform and Typeform can be fast to deploy, polished, conditional, and useful for surveys, qualification, intake, and non-WordPress contexts.", ["Speed can be a strength.", "Embed behavior affects tracking.", "Vendor data storage matters."]),
        lesson("Hosted form weaknesses", "Hosted forms can complicate source capture, cross-domain attribution, styling consistency, accessibility checks, and CRM source-of-truth rules.", ["Embeds need QA.", "Redirects need UTMs and IDs.", "Do not lose landing-page context."]),
        lesson("Webhooks and APIs", "Hosted forms often support webhooks and APIs that can send submissions to routers, CRMs, sheets, or custom endpoints.", ["Validate payload schema.", "Handle retries and failures.", "Avoid duplicate automations."]),
        lesson("Conversational fit", "Typeform-style experiences can improve qualification for some flows but can also add friction for urgent roofing demand.", ["Match format to intent.", "Emergency users may prefer phone.", "Long intake may fit estimates or financing."])
      ],
      ["Compare hosted versus native forms for three roofing intents.", "Design a Jotform webhook payload.", "Map Typeform answers to CRM fields."],
      "You can decide when hosted form builders accelerate work and when they weaken attribution or conversion.",
      [S.jotformApi, S.jotformWebhooks, S.typeform, S.typeformWebhooks, S.ga4Attribution],
      [
        q("When is Jotform or Typeform a strong fit?", "When speed, conditional intake, surveys, or standalone qualification matter and routing/attribution can be governed.", "When hosted UX supports the use case.", "Whenever the website form is hard.", "When CRM mapping is optional.", "Hosted convenience must still connect to operations."),
        q("What is the biggest hosted-form attribution risk?", "Losing landing-page, source, click ID, referrer, or session context across embeds, redirects, or external domains.", "Context loss breaks reporting.", "Hosted forms cannot collect any data.", "Hosted forms always improve attribution.", "Cross-domain and embed behavior needs QA."),
        q("When might Typeform be poor for roofing emergency leads?", "When conversational steps delay urgent contact or obscure the phone path.", "Emergency intent may require direct call/form options.", "Never; conversational is always better.", "Only if the colors are wrong.", "Format must match user urgency."),
        q("What should a hosted-form webhook include?", "Submission ID, form ID, answers, source context, lead ID, timestamps, consent, service/geography, and deduplication keys.", "A stable payload schema.", "Only raw text answers.", "No identifiers.", "Webhooks need enough context to reconcile."),
        q("Why inspect vendor data storage and export?", "The form builder may store personal data; ownership, retention, deletion, access, and offboarding matter.", "Data governance applies outside the CRM.", "Exports are never needed.", "Hosted vendors erase all risk.", "Every data store is part of the system."),
        q("Which use case fits hosted forms best?", "Roofing inspection intake with conditional questions and CRM routing, if source capture is preserved.", "Structured qualification beyond a simple contact form.", "Emergency leak call-only path.", "A hidden form with no confirmation.", "Hosted forms are useful when structure matters."),
        q("What is the best way to connect hosted forms to CRM?", "Use native integration or webhook/API routing with mapped fields, deduplication, error handling, and QA.", "Pick the least fragile path.", "Email notifications only.", "Copy-paste weekly.", "Email-only routing is fragile for production lead ops."),
        q("What should be tested after embedding Typeform or Jotform?", "Mobile UX, load speed, source capture, submit event, webhook delivery, CRM record, confirmation, consent, and duplicate behavior.", "The full lead path.", "Only visual appearance.", "Only desktop completion.", "Embeds can fail in subtle ways."),
        w("Create a decision brief for using Typeform versus HubSpot Forms on a roofing qualification funnel.", "Cover urgency, UX, CRM lifecycle, hidden fields, attribution, embed tracking, data ownership, cost, accessibility, conversion friction, and routing."),
        w("Design a hosted-form webhook workflow for Jotform to CRM to Google Ads offline conversion.", "Include payload, router, dedupe, CRM stages, click IDs, consent, qualified event, value, upload timing, errors, logs, and reconciliation.")
      ]
    ),

    module(
      "highlevel",
      "8. GoHighLevel forms, funnels, calendars, and agency CRM routing",
      "Evaluate GoHighLevel as an agency-style CRM and funnel stack for local-service lead capture and follow-up.",
      ["Use HighLevel forms intentionally", "Connect forms to workflows and pipelines", "Avoid agency-account lock-in"],
      [
        lesson("HighLevel’s role", "GoHighLevel can combine forms, funnels, calendars, conversations, workflows, pipelines, and client subaccounts.", ["It can be efficient for agencies.", "It can become lock-in if ownership is unclear.", "Configuration quality varies."]),
        lesson("Forms and workflows", "HighLevel forms are strongest when follow-up, pipeline movement, SMS/email, calendars, and attribution fields are governed together.", ["Workflows can create speed-to-lead.", "Automation can spam or duplicate.", "Pipeline stages need definitions."]),
        lesson("Website versus funnel", "HighLevel funnels may be fast for campaign pages, while the main website may remain in WordPress or another CMS.", ["Keep promises consistent.", "Track cross-domain journeys.", "Plan canonical ownership of assets."]),
        lesson("Account stewardship", "Clients need durable access, data export, phone number governance, workflow documentation, and offboarding plans.", ["Agency-owned infrastructure can create risk.", "Named permissions matter.", "Document automations."])
      ],
      ["Map a HighLevel form to pipeline stages.", "Audit agency ownership risk.", "Design speed-to-lead workflow safeguards."],
      "You can use GoHighLevel when it fits operations and avoid creating opaque agency infrastructure.",
      [S.highlevelApi, S.zapierHooks, S.ga4Events, S.ftcAds],
      [
        q("When is GoHighLevel attractive for roofing leads?", "When forms, funnels, calendars, conversations, workflows, and pipeline follow-up can be operated in one agency-style system.", "When speed-to-lead and automation matter.", "When the client must never access data.", "When tracking definitions do not matter.", "HighLevel can unify operations but needs governance."),
        q("What is the biggest HighLevel risk?", "Opaque agency ownership, undocumented workflows, data export friction, duplicated automations, or client lock-in.", "Stewardship and documentation risk.", "It cannot capture forms.", "It cannot send notifications.", "Platform power does not eliminate governance."),
        q("When might WordPress plus HubSpot beat HighLevel?", "When the client already runs sales in HubSpot and needs website control plus CRM-native lifecycle reporting.", "When existing operations favor that stack.", "Never.", "Only if the client dislikes SMS.", "Existing source-of-truth systems should influence choice."),
        q("What should a HighLevel workflow avoid?", "Repeated or non-consensual SMS/email, duplicate records, unclear ownership, and automation that hides lead quality.", "Automation without guardrails.", "Fast owner notification.", "Pipeline stage updates.", "Automation must respect users and operations."),
        q("What should be mapped from a HighLevel form?", "Contact, opportunity, source, campaign, service, geography, consent, owner, pipeline stage, appointment, sold/lost, and value.", "Fields needed for lifecycle and attribution.", "Only name and phone.", "Everything into one notes field.", "Structured fields support reporting."),
        q("Why document calendars with forms?", "Scheduling changes lead status, routing, attribution, capacity, and customer expectations.", "Appointments are downstream conversion events.", "Calendars are unrelated to forms.", "Only paid ads use calendars.", "Scheduling is part of lead lifecycle."),
        q("What is the safest HighLevel client setup?", "Clear account ownership, permissions, export plan, workflow documentation, tracking spec, and offboarding process.", "Make infrastructure durable.", "Agency-only login.", "No documentation until cancellation.", "Stewardship protects the client and founder."),
        q("When is HighLevel a bad fit?", "When the client’s real CRM, sales process, or data governance cannot be reconciled with HighLevel workflows.", "When it adds a parallel system without ownership.", "When forms are needed.", "When there is paid traffic.", "Parallel CRMs create data fragmentation."),
        w("Design a GoHighLevel form-to-pipeline workflow for a roofing estimate request.", "Include fields, source capture, owner assignment, notifications, SMS/email consent, calendar, opportunity stages, qualification, sold/lost value, GA4/GAds handoff, and QA."),
        w("Create an account-stewardship checklist for agency-managed HighLevel subaccounts.", "Cover ownership, access, phone numbers, forms, funnels, workflows, data export, automations, billing, privacy, offboarding, and client training.")
      ]
    ),

    module(
      "routers",
      "9. Zapier, Make, webhooks, APIs, and routing middleware",
      "Build routing systems that are observable, recoverable, and boring in production.",
      ["Design webhook payloads", "Use routers safely", "Know when to write custom API integrations"],
      [
        lesson("Router role", "Zapier and Make can move form data between systems, enrich leads, notify teams, create CRM records, and trigger uploads.", ["Routers are not magic.", "They need logs and error handling.", "Avoid hidden business logic."]),
        lesson("Webhook design", "A webhook should have a schema, authentication or secret validation, IDs, timestamps, retries, dedupe, and error handling.", ["Never trust anonymous payloads blindly.", "Validate required fields.", "Log enough to replay safely."]),
        lesson("Custom API role", "Custom integrations can reduce router cost and fragility when volume, security, latency, or business logic justifies development.", ["Custom code needs maintenance.", "Routers are faster to change.", "Critical workflows may deserve code."]),
        lesson("Failure operations", "Every production route needs alerts, replay, dead-letter handling, owner, and periodic reconciliation.", ["Silent failure is the enemy.", "Test expired auth.", "Document who fixes what."])
      ],
      ["Draw a webhook sequence diagram.", "Create a router failure runbook.", "Decide router versus direct API for five cases."],
      "You can build or specify form routing that survives real-world failures.",
      [S.zapierHooks, S.makeHooks, S.hubspotFormsApi, S.callrailApi, S.jotformApi, S.typeform],
      [
        q("When is Zapier or Make most appropriate?", "When the workflow is moderate complexity, native integrations are insufficient, and observability/error handling can be governed.", "When speed and flexibility are useful.", "For every critical lead path by default.", "When nobody will monitor failures.", "Routers are useful but operational."),
        q("What is a dead-letter queue conceptually?", "A place or process for failed payloads so they can be reviewed, fixed, and replayed instead of lost.", "A failure-handling pattern.", "A spam folder.", "A way to delete bad leads automatically.", "Failure handling protects revenue."),
        q("Which webhook payload is strongest?", "A versioned schema with lead ID, form ID, source context, timestamps, consent, service/geography, dedupe key, and required fields.", "Structured and replayable.", "Unstructured email text.", "Only name and phone.", "Routers need structured payloads."),
        q("What is the risk of email-only routing?", "Emails can be filtered, missed, duplicated, unstructured, hard to reconcile, and disconnected from CRM stages.", "Email may be useful as notification, not source of truth.", "Email always syncs to CRM.", "Email creates Google Ads conversions automatically.", "Notifications are not durable data operations."),
        q("When does custom API integration beat no-code routing?", "When volume, latency, security, complex logic, reliability, or cost justifies maintained code.", "When the route is business-critical and stable.", "Always.", "Never.", "Build versus buy depends on operating burden."),
        q("What should router authentication protect?", "The endpoint from spoofed submissions and unauthorized payload injection.", "Lead data integrity.", "Only the UI.", "Nothing because webhook URLs are secret forever.", "Webhook URLs leak; validation matters."),
        q("What is the biggest no-code routing smell?", "Business-critical rules buried in unnamed steps with no owner, logs, tests, or documentation.", "Invisible logic.", "A short workflow.", "Using filters at all.", "Unowned automations become traps."),
        q("How should router changes be deployed?", "With staging or test payloads, documented change notes, owner approval, monitoring, and rollback.", "Treat routes like production systems.", "Edit live during peak call volume.", "Trust the green check once.", "Lead routing deserves release discipline."),
        w("Design a Zapier or Make route for a roofing lead form.", "Include trigger, payload schema, validation, dedupe, enrichment, CRM create/update, owner notification, GA4/GAds handoff, error path, logs, replay, and reconciliation."),
        w("Decide direct API versus router for HubSpot, CallRail, and Google Ads integration.", "Compare speed, reliability, authentication, cost, maintenance, error handling, auditability, volume, data sensitivity, and founder capability.")
      ]
    ),

    module(
      "google-integrations",
      "10. Google Ads, GA4, GTM, website, GBP, and CRM integrations",
      "Programmatically connect form fills to the systems that influence bidding, reporting, local visibility, and client decisions.",
      ["Connect form fills to Google systems", "Track GBP and website lead paths", "Prevent bad bidding signals"],
      [
        lesson("Website integration", "Website forms should emit reliable success events, preserve source context, and maintain accessible fallback behavior.", ["GTM data-layer events should be structured.", "Form design and tracking must agree.", "Thank-you pages can duplicate events if mishandled."]),
        lesson("GA4 and Google Ads", "GA4 can report lead events and Google Ads can optimize to primary conversions, enhanced conversions for leads, or imported offline stages when quality supports it.", ["Do not bid to junk leads.", "Qualified stages are more valuable than raw submits.", "Consent and identifiers matter."]),
        lesson("GBP integration", "Business Profile links can point to website, appointment, menu/service, or booking URLs where applicable; use UTMs and context carefully.", ["GBP traffic is not the same as organic website traffic.", "Local rank gains must be tied to lead quality.", "Avoid misleading links."]),
        lesson("CRM integration", "The CRM should hold lifecycle stages, owner, disposition, appointment, estimate, sold/lost, value, and correction history.", ["Reports need source-of-truth rules.", "Sales teams must actually use stages.", "Imports should follow definitions."])
      ],
      ["Map form events to GA4 and Ads conversions.", "Add GBP UTM governance.", "Create a CRM stage import plan."],
      "You can connect form fills to Google systems without training algorithms on low-quality signals.",
      [S.gtmDataLayer, S.ga4Events, S.ga4Attribution, S.adsConversions, S.enhancedLeads, S.offlineConversions, S.gbpLinks, S.gbpRanking],
      [
        q("What should Google Ads optimize toward in a mature roofing lead system?", "The deepest reliable business outcome available at enough volume, such as qualified lead, estimate, sold job, or value-based stage.", "Move beyond raw form submits when data quality supports it.", "Every form_start.", "Every pageview.", "Bidding signals should approximate value."),
        q("How should GBP form traffic be tracked?", "Use appropriate tracked website or appointment links, preserve source context, and reconcile against GBP performance, website, and CRM data.", "Use UTM governance carefully.", "Treat it as Direct forever.", "Hide the destination from users.", "GBP journeys need source clarity."),
        q("What is a bad Google Ads import?", "Inconsistent, duplicated, biased, delayed, or shallow conversion data that trains bidding toward poor leads.", "Low-governance feedback.", "Qualified leads with stable IDs.", "Sold jobs with values.", "Automation amplifies data quality."),
        q("Why might GA4 and Google Ads report different conversions?", "Different attribution models, windows, scopes, modeled data, import rules, conversion settings, consent, and duplicate handling.", "Expected platform differences.", "One is always wrong.", "They use the same rules by default.", "Different systems answer different questions."),
        q("What should a GTM lead event avoid?", "Firing before the lead is accepted or firing multiple times from click and thank-you-page reloads.", "Premature or duplicate events.", "Using a lead ID.", "Using parameters.", "Event timing determines trust."),
        q("Why include service and geography in lead events or CRM fields?", "They help qualify value, route owners, evaluate demand, and avoid optimizing toward out-of-area or wrong-service leads.", "They improve business interpretation.", "They replace user consent.", "They identify ranking position.", "Lead context affects value."),
        q("When should enhanced conversions for leads be considered?", "When first-party lead data, consent, terms, identifiers, and offline outcome governance are ready.", "When matching online leads to offline outcomes matters.", "Before any CRM process exists.", "For anonymous pageviews.", "Enhanced conversions require governed first-party data."),
        q("What is the correct view of GBP ranking versus form attribution?", "Ranking can influence visibility, but form fills, call paths, CRM qualification, and sales outcomes determine business value.", "Connect local visibility to funnel outcomes.", "Rankings alone prove revenue.", "Forms alone prove ranking success.", "Local marketing is multi-stage."),
        w("Create a GA4, Google Ads, GBP, and CRM integration map for a roofing estimate form.", "Include events, key events, primary/secondary conversions, UTMs, click IDs, GBP links, CRM fields, offline stages, values, consent, QA, and reporting caveats."),
        w("Diagnose a case where local rank improves, forms rise, but sold jobs fall.", "Inspect query mix, GBP link/source, form qualification, service/geography, spam, routing, sales response, pricing, capacity, attribution, and bidding feedback.")
      ]
    ),

    module(
      "local-gbp",
      "11. Local-rank, GBP links, form paths, QA, privacy, and governance",
      "Operate the stack safely once visibility, forms, routers, CRMs, and ad platforms touch the same lead data.",
      ["Diagnose local visibility versus form leaks", "Build QA and privacy governance", "Protect ownership and offboarding"],
      [
        lesson("Local-rank context", "A local rank grid can show visibility patterns, but it cannot explain form fills without click-through, page, form, routing, CRM, and sales context.", ["Rank is not revenue.", "Grid protocols need documentation.", "Lead quality can fall while rankings rise."]),
        lesson("QA layers", "Test visual UX, keyboard/screen reader access, mobile, hidden fields, events, CRM records, router logs, notifications, spam, duplicate handling, and fallback states.", ["Synthetic leads are required.", "Test after every release.", "Monitor real failures."]),
        lesson("Privacy and security", "Forms collect personal data. Consent, minimization, retention, access, encryption, vendor ownership, and deletion processes should be explicit.", ["Do not send sensitive data everywhere.", "Least privilege matters.", "Recording and SMS may need extra care."]),
        lesson("Governance and offboarding", "The client should understand who owns domains, forms, tracking numbers, CRMs, routers, API keys, automations, and dashboards.", ["No black boxes.", "Document costs.", "Plan exit before conflict."])
      ],
      ["Run a full synthetic lead QA script.", "Create a privacy and access matrix.", "Interpret a rank grid against form outcomes."],
      "You can keep a form attribution stack reliable after launch instead of only setting it up once.",
      [S.gbpRanking, S.gbpLinks, S.wcag, S.waiForms, S.ftcAds],
      [
        q("What is the wrong conclusion from a local rank grid alone?", "That rankings caused revenue changes without checking clicks, form fills, routing, qualification, and sales outcomes.", "Rank data is only one input.", "That visibility has no value.", "That forms cannot break.", "Local rank needs funnel context."),
        q("What is the highest-priority QA failure?", "A form or route that loses real leads or sends them to the wrong owner without alerting anyone.", "Lead-loss failure.", "A small spacing issue.", "A dashboard color mismatch.", "Lost leads and silent failure are urgent."),
        q("Which privacy principle is most important for routing?", "Send only the data each destination needs for a defined purpose, with appropriate consent and access control.", "Data minimization.", "Copy every field to every tool.", "Store recordings forever.", "More data creates more responsibility."),
        q("Why maintain an access matrix?", "To know who controls forms, routers, CRMs, APIs, domains, tracking numbers, data exports, and billing.", "Ownership prevents chaos.", "It is only for enterprise clients.", "It replaces passwords.", "Lead systems depend on account stewardship."),
        q("What should synthetic lead tests cover?", "Submission, hidden fields, events, CRM record, owner notification, router logs, consent, spam, duplicate behavior, and reporting.", "End-to-end verification.", "Only whether the form says thank you.", "Only desktop Chrome.", "Lead systems cross many tools."),
        q("What makes a form inaccessible?", "Missing labels, poor errors, keyboard traps, low contrast, broken focus, or controls that assistive tech cannot understand.", "Barriers to completion.", "Too few animations.", "A simple layout.", "Accessibility is conversion infrastructure."),
        q("When should a stack be simplified?", "When complexity adds more failure risk than decision value, or native integrations can do the job reliably.", "Reduce moving parts when possible.", "Never; complexity proves expertise.", "Only after a catastrophe.", "Elegant systems are often boring."),
        q("What belongs in offboarding?", "Account transfer, API keys revoked/rotated, exports, documentation, tracking number plan, router ownership, CRM access, dashboards, and retention/deletion steps.", "Continuity and safety.", "Only a goodbye email.", "Deleting all records immediately.", "Offboarding is part of stewardship."),
        w("Create an end-to-end QA script for a roofing form stack.", "Include browser/device, accessibility, source fields, form success, data layer, GA4, Ads, router, CRM, notifications, spam, duplicate submission, failure alerts, and reconciliation."),
        w("Interpret a rank grid alongside form, CallRail, GA4, and CRM data.", "Separate local visibility, click-through, landing page, form UX, routing, attribution, qualification, sales response, and seasonality.")
      ]
    ),

    module(
      "capstone",
      "12. Roofing-specific form stack capstone",
      "Prove you can design, defend, implement, and troubleshoot a complete roofing form-fill and attribution system.",
      ["Synthesize stack selection", "Build an integration plan", "Present a client-ready recommendation"],
      [
        lesson("Capstone scenario", "A roofing client has paid traffic, GBP visibility, WordPress pages, phone calls, form fills, and inconsistent reports across CallRail, GA4, Google Ads, and the CRM.", ["This is normal.", "The capstone tests judgment, not vendor fandom.", "The answer should be operable."]),
        lesson("Stack recommendation", "The best stack may combine a WordPress plugin, CallRail, HubSpot or HighLevel, Zapier/Make, and Google imports—or it may deliberately avoid some of them.", ["Prefer fewer moving parts when possible.", "Choose direct integration when reliable.", "Use routers for justified complexity."]),
        lesson("Implementation package", "A client-ready package includes form design, hidden fields, event spec, CRM mapping, router blueprint, QA, privacy, access, failure runbook, dashboard, and 30-day review.", ["Artifacts matter.", "Every field needs a purpose.", "Every automation needs an owner."]),
        lesson("Founder-level judgment", "Mastery is knowing when to say 'use HubSpot native,' 'use Gravity plus webhooks,' 'use CallRail for calls/forms,' 'use Make,' or 'do not build this yet.'", ["Right stack beats fashionable stack.", "Lead quality beats raw volume.", "Trust beats false precision."])
      ],
      ["Complete the full roofing capstone.", "Record a five-minute walkthrough.", "Retest weak domains after revising the design."],
      "You can build a roofing form system that captures leads, routes them, reports them, and tells the truth.",
      [S.callrailApi, S.hubspotFormsApi, S.gravity, S.wsform, S.highlevelApi, S.zapierHooks, S.makeHooks, S.ga4Events, S.enhancedLeads, S.gbpLinks],
      [
        q("What is the capstone’s main success criterion?", "A roofing lead system that reliably captures, routes, attributes, qualifies, and reports form fills without false precision.", "An operable end-to-end system.", "The most expensive tools.", "A beautiful form only.", "Capstone mastery is operational truth."),
        q("A client already uses HubSpot well. What stack bias should you consider?", "Prefer HubSpot-native forms or a tightly governed HubSpot API sync unless website/control needs justify another form layer.", "Respect the existing CRM source of truth.", "Replace HubSpot with every new tool.", "Use email notifications only.", "Existing operations matter."),
        q("A client uses CallRail for calls but HubSpot for sales. Best posture?", "Use CallRail for call/form attribution where useful, but keep HubSpot or the CRM as lifecycle source of truth.", "Define system roles.", "Let both create unrelated records.", "Ignore CallRail data.", "Clear roles prevent report fights."),
        q("A WordPress form plugin cannot log webhook failures. Best decision?", "Add monitoring/logging, choose a stronger plugin, route through governed middleware, or avoid using it for critical paid leads.", "Do not accept silent failure.", "Launch and hope.", "Disable CRM integration.", "Production lead paths need observability."),
        q("What should the 30-day post-launch review inspect?", "Lead volume, qualified rate, routing failures, spam, source mix, form UX, local visibility, Ads signals, CRM usage, sold jobs, and discrepancies.", "Operational and business quality.", "Only conversion rate.", "Only rank grid.", "Forms are part of a larger funnel."),
        q("What is the most dangerous capstone recommendation?", "Optimize Google Ads to every raw form submit before source capture, dedupe, qualification, consent, and CRM stages are governed.", "Bad signals at scale.", "Use qualified stages after governance.", "QA form routing first.", "Ad algorithms amplify bad conversion data."),
        q("What makes a stack preferable?", "It best fits the client’s CRM, website, attribution needs, lead urgency, team skill, cost, reliability, governance, and exit path.", "Contextual fit.", "Popularity alone.", "The tool with most integrations.", "Preference should be reasoned."),
        q("What should the walkthrough emphasize?", "Why the stack was chosen, how data flows, what can fail, who owns each step, how reports differ, and what decision comes next.", "Client decision clarity.", "Every API detail only.", "Tool screenshots without logic.", "A client needs the operating story."),
        w("Complete the roofing form-stack capstone.", "Include stack decision, form UX, hidden fields, CallRail/call role, CRM map, router/API design, GA4/GAds events/imports, GBP links, QA, privacy, ownership, dashboard, failure runbook, and 30-day plan."),
        w("Give the executive recommendation for a roofing client choosing between HubSpot Forms, Gravity Forms, CallRail Forms, and GoHighLevel.", "Score business fit, existing systems, lead urgency, attribution, CRM lifecycle, integration reliability, cost, maintainability, ownership, and risks.")
      ]
    )
  ];
})();

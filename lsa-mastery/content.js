(() => {
  const S = {
    help: ["Local Services Help Center", "https://support.google.com/localservices/?hl=en"],
    start: ["Getting started", "https://support.google.com/localservices/answer/6224841?hl=en"],
    verify: ["Screening and verification", "https://support.google.com/localservices/answer/6226575?hl=en"],
    rank: ["Ad rankings", "https://support.google.com/localservices/answer/7527305?hl=en"],
    bid: ["How bidding works", "https://support.google.com/localservices/answer/10125017?hl=en"],
    tcpl: ["Target CPL bidding", "https://support.google.com/localservices/answer/15406075?hl=en"],
    leads: ["How leads work", "https://support.google.com/localservices/answer/7195435?hl=en"],
    manage: ["Manage leads and jobs", "https://support.google.com/localservices/answer/6224859?hl=en"],
    credits: ["Automated lead credits", "https://support.google.com/localservices/answer/15100654?hl=en"],
    reports: ["View reports", "https://support.google.com/localservices/answer/6226265?hl=en"],
    improve: ["Improve performance", "https://support.google.com/localservices/answer/12492201?hl=en"],
    target: ["Industries, areas, and job types", "https://support.google.com/localservices/answer/12491364?hl=en"],
    reviews: ["Reviews and ratings", "https://support.google.com/localservices/answer/7496631?hl=en"],
    direct: ["Direct business search", "https://support.google.com/localservices/answer/14545473?hl=en"],
    running: ["Ads not running", "https://support.google.com/localservices/answer/12491365?hl=en"],
    suspension: ["Account suspensions", "https://support.google.com/localservices/answer/13361214?hl=en"]
  };

  const option = (score, text) => ({ score, text });
  const choice = (prompt, best, acceptable, weak, dangerous, explanation) => ({
    type: "choice",
    prompt,
    options: [option(5, best), option(3, acceptable), option(1, weak), option(0, dangerous)],
    explanation
  });
  const written = (prompt, rubric) => ({ type: "written", prompt, rubric });
  const lesson = (title, body, bullets) => ({ title, body, bullets });
  const module = (id, title, purpose, objectives, lessons, fieldwork, proof, sources, questions) => ({
    id, title, purpose, objectives, lessons, fieldwork, proof, sources,
    questions: questions.map((question, index) => ({ ...question, id: `${id}-${index + 1}` }))
  });

  window.LSA_SOURCES = S;
  window.LSA_MODULES = [
    module(
      "fundamentals",
      "1. LSA fundamentals and channel fit",
      "Understand what Local Services Ads are, where they sit in the search journey, and when they are—or are not—the right acquisition tool.",
      ["Explain LSA in plain English", "Distinguish LSA from Search Ads, GBP, and organic", "Identify viable channel fit"],
      [
        lesson("The product", "LSA is a lead-generation unit in Google Search for eligible local service categories. A customer chooses a provider profile, then calls, messages, or sometimes books.", ["Advertisers pay for valid leads, not ordinary clicks.", "Availability, features, and checks vary by category and location.", "The lead still has to be answered, qualified, and sold."]),
        lesson("The SERP role", "LSA can appear prominently, but it is one surface in a larger search market.", ["LSA captures high-intent category and job-type demand.", "GBP/Local Pack, Search Ads, organic pages, directories, and brand demand still matter.", "Do not describe LSA as ownership or guaranteed top placement."]),
        lesson("Channel fit", "A business needs eligible services, viable economics, reliable lead handling, and enough demand to learn.", ["Strong fit: high-value local jobs and fast phone response.", "Weak fit: poor service-area discipline, low close rate, or no capacity.", "A campaign cannot repair an unanswerable phone or incoherent offer."]),
        lesson("Responsible promise", "Sell the setup and management system, not a guaranteed number of jobs.", ["Promise accurate setup, disciplined operations, measurement, and recommendations.", "Separate platform leads from qualified leads and booked jobs.", "Name uncertainty: auctions, competitors, customer choice, and seasonality."])
      ],
      ["Map where LSA appears for five roofing searches.", "Write a one-minute LSA explanation for a roofer.", "List three conditions that would make you postpone launch."],
      "You can decide whether LSA fits a roofing business and explain the decision without hype.",
      [S.start, S.help],
      [
        choice("What is the most accurate description of Local Services Ads?", "A pay-per-valid-lead search product for eligible local providers.", "A prominent local lead channel connected to provider profiles.", "A cheaper version of every Google Ads campaign.", "A guaranteed top-of-Google placement.", "LSA charges around lead events and remains an auction; it is not guaranteed placement."),
        choice("A roofer asks whether LSA replaces local SEO. Best answer?", "No. LSA captures one paid surface; maps, organic, brand, and conversion still matter.", "It may produce leads sooner, while other surfaces remain useful.", "Yes, if the budget is large enough.", "Yes—organic work becomes unnecessary.", "Channel coverage and durability differ; one does not erase the others."),
        choice("Which condition most strongly supports an LSA launch?", "Eligible services, strong unit economics, fast response, and clear service coverage.", "A verified business with some review strength.", "Competitors appear in LSA.", "The owner wants immediate jobs regardless of operations.", "A viable operating system matters more than competitor presence alone."),
        choice("Which statement is safest on a sales call?", "LSA can create qualified opportunities; booked jobs depend on targeting, response, sales, and market conditions.", "You pay for leads rather than ordinary clicks.", "Google sends ready-to-buy customers.", "The Google badge guarantees customer quality.", "The consultant controls setup and operations, not every customer outcome."),
        choice("A company misses 45% of calls. What comes first?", "Fix call coverage or constrain scheduling before scaling lead volume.", "Launch narrowly while assigning a response owner.", "Run LSA because missed calls can be returned later.", "Maximize the budget to overwhelm the miss rate.", "Missed calls can affect outcomes and responsiveness; more volume can magnify leakage."),
        choice("Which metric is closest to business value?", "Booked profitable jobs by source.", "Qualified leads by source.", "Total LSA leads.", "Profile impressions alone.", "The measurement ladder should move from platform activity toward revenue."),
        choice("When should LSA be postponed?", "The business cannot verify eligibility, answer leads, or serve selected job types.", "The owner has fewer reviews than the top competitor.", "The business also runs Search Ads.", "Organic rankings are already strong.", "Operational and eligibility blockers are more important than channel overlap."),
        choice("What does the customer do in the LSA journey?", "Chooses a provider profile and initiates contact.", "Selects among displayed providers.", "Clicks an ad and always lands on the website.", "Receives an automatic job quote from Google.", "The interaction is profile- and lead-oriented; a site click is not the core path."),
        written("Explain LSA to a roofing owner in three sentences, including one limitation.", "5 = clear pay-per-lead explanation, SERP role, and honest limitation; 3 = basically accurate but generic; 0 = promises placement or jobs."),
        written("Describe a go/no-go checklist for a first roofing LSA account.", "Cover eligibility, verification readiness, job economics, service areas/types, reviews/profile, lead handling, measurement, capacity, and owner expectations.")
      ]
    ),

    module(
      "eligibility",
      "2. Eligibility, screening, and verification",
      "Prepare a business for onboarding and diagnose verification friction without improvising policy.",
      ["Identify common verification components", "Prevent document mismatches", "Set realistic onboarding expectations"],
      [
        lesson("Variable requirements", "Every business must pass screening, but the exact checks depend on category, location, and risk signals.", ["Possible checks include business registration, license, insurance, identity, background, GBP affiliation, and reviews.", "The dashboard is the authoritative requirement list for that account.", "Re-verification can occur after launch."]),
        lesson("Identity consistency", "Legal name, DBA, address, representative, licenses, insurance, D-U-N-S information, and GBP should reconcile.", ["Mismatches create delays and may require supporting documents.", "The person completing checks may need GBP owner/manager access.", "Use current, legible, non-edited documents."]),
        lesson("Risk-based verification", "Selected US advertisers may receive accelerated verification and later requests, or additional identity/business review.", ["A 14-day completion window may apply after accelerated approval.", "Ignoring follow-up checks can pause ads or remove the badge.", "Never advise creating replacement accounts to evade review."]),
        lesson("Verification operations", "Treat onboarding as a project with an owner, document inventory, status log, and renewal calendar.", ["Confirm expiration dates before upload.", "Record exactly which entity and location each document supports.", "Escalate through official support when the dashboard conflicts with valid records."])
      ],
      ["Build a verification document checklist for a California roofer.", "Create a name/address consistency matrix.", "Draft a client onboarding email that avoids guarantees."],
      "You can predict likely blockers, gather clean evidence, and guide the client through the dashboard without inventing workarounds.",
      [S.verify, S.start],
      [
        choice("Which statement about screening is correct?", "Requirements vary by category, location, and account risk.", "Most businesses should expect some business verification.", "Every roofer completes exactly the same checks nationwide.", "A GBP verification automatically completes all LSA checks.", "The live account dashboard controls the exact requirement set."),
        choice("An insurance certificate uses the legal entity; the ad uses a DBA. Best move?", "Provide valid DBA affiliation evidence and ensure all account details reconcile.", "Ask support which supporting document is accepted.", "Edit the PDF name to match the ad.", "Create a new account under a different identity.", "Documentary consistency must be proven, never fabricated."),
        choice("Who should complete the GBP affiliation step?", "An authorized person who is also an owner or manager of the matched GBP.", "The account owner after obtaining appropriate GBP access.", "Any agency employee using a personal email.", "A reviewer hired only to leave Google reviews.", "The signed-in representative must have legitimate profile authority."),
        choice("A client receives a follow-up verification request after launch. What now?", "Treat it as time-sensitive and complete the dashboard request with current evidence.", "Confirm the deadline and gather exact documents.", "Ignore it because the badge was already earned.", "Open a duplicate LSA account before the first pauses.", "Verification is ongoing; failure to respond can affect serving."),
        choice("What is the safest source for the account’s exact insurance minimum?", "The requirement displayed in the account’s verification dashboard.", "Current official help plus the live dashboard.", "A competitor’s certificate.", "A universal amount remembered from an old course.", "Requirements vary; the live workflow is authoritative."),
        choice("A representative’s name is missing from business records. Best first step?", "Gather accepted proof connecting the representative to the legal business.", "Correct legitimate business records if they are outdated.", "Submit another person’s ID.", "Alter the registration image.", "The solution is authentic evidence or legitimate record correction."),
        choice("What can happen if required follow-up checks are not completed?", "Badge loss, ad pause, or suspension.", "Serving may be interrupted.", "Nothing after the first approval.", "Google converts the account to ordinary Search Ads.", "Ongoing participation depends on maintaining verification."),
        choice("Which onboarding promise is responsible?", "We will prepare the evidence and manage the process; Google determines approval and timing.", "We can reduce avoidable mismatches.", "We guarantee badge approval within seven days.", "We can bypass background or identity checks.", "Approval is Google's decision and can depend on third parties."),
        written("Create a verification triage for a roofer whose legal name, DBA, GBP name, and insurance name differ.", "Inventory every name/address, identify legitimate relationships, collect DBA or registration proof, avoid edits, assign owners, and use official support where needed."),
        written("Explain accelerated or risk-based verification without frightening the client.", "Describe it as variable trust screening, note possible follow-up deadlines, emphasize accurate documents and responsiveness, and avoid implying wrongdoing.")
      ]
    ),

    module(
      "profile-targeting",
      "3. Profile, services, areas, and search intent",
      "Configure a truthful, relevant profile that attracts jobs the roofer can actually serve.",
      ["Choose job types responsibly", "Design service-area coverage", "Understand broad and direct business search"],
      [
        lesson("Job types and industries", "Select only work the business genuinely performs and can respond to.", ["Adding an industry can trigger additional verification.", "General or broad category search may be enabled by default.", "Wrong job-type configuration is an upstream quality problem."]),
        lesson("Service areas", "Areas can be included or excluded by supported geography. Broad coverage can create volume but also travel and lead-quality costs.", ["Coverage must match operations and licensing.", "Do not select areas merely to manufacture impressions.", "Review lead outcomes by geography, not only totals."]),
        lesson("Broad search", "Broad search allows general category queries that may not name a specific job type.", ["It can increase lead volume.", "It can also produce ambiguous needs.", "The setting applies across industries in a multi-vertical account."]),
        lesson("Direct business search", "Brand-name searches can produce an LSA lead classified separately from category demand.", ["The LSA may be the only Local Services ad shown.", "Returning customers who identify themselves are not charged.", "Report brand/direct demand separately from new category acquisition."])
      ],
      ["Design roofing job-type inclusion rules.", "Build a service-area profitability map.", "Write a broad-search test plan with success and stop conditions."],
      "You can configure targeting from business reality and diagnose unwanted leads without depending on credits.",
      [S.target, S.direct, S.leads],
      [
        choice("A roofer never performs small repairs. What should job-type setup reflect?", "Only services it can reliably fulfill, with clear intake qualification.", "Remove unsupported job types and monitor remaining lead mix.", "Keep every roofing job type for maximum volume.", "Select services competitors offer even if the client cannot.", "Configuration should match real capability because unsupported categories may still create chargeable leads."),
        choice("Why analyze leads by geography?", "To compare qualification, travel, capacity, close rate, and job value by area.", "To refine coverage based on outcomes.", "To find the ZIP with the most calls only.", "To claim every surrounding county regardless of service ability.", "Area value is operational and economic, not just volume."),
        choice("What does broad search do?", "Makes the account eligible for general category queries without a specific service.", "Expands beyond selected job-type wording.", "Matches every possible Google query.", "Automatically adds unlicensed industries.", "It broadens category intent, not unlimited eligibility."),
        choice("When might disabling broad search be reasonable?", "When general-category leads are persistently poor and specific intent is more valuable.", "After a measured review of lead mix.", "Whenever one bad lead arrives.", "To guarantee a lower CPL.", "Use outcomes and sufficient evidence; volume will likely fall."),
        choice("A direct business lead appears. How should it be reported?", "Separate brand/direct intent from category acquisition.", "Use the Search intent filter to analyze it.", "Count it as proof the campaign created all brand demand.", "Hide it because brand leads never cost money.", "Direct business search is a distinct intent and can be charged for new customers."),
        choice("Can LSA target a competitor’s brand through direct business search?", "No; LSA direct business search is for the advertiser’s own brand.", "Other Google campaign types may target branded queries subject to policy.", "Yes, by adding the competitor as a job type.", "Yes, if the weekly budget is high.", "The feature is not a competitor-brand targeting mechanism."),
        choice("A client gets out-of-area leads. Best first diagnosis?", "Check configured areas, category/job types, broad search, and the actual lead context.", "Map the pattern before changing settings.", "Assume every lead will be credited.", "Expand the area further to average it out.", "Google no longer supports credits merely because geo is not serviced; prevent mismatch through settings."),
        choice("What happens when adding a new industry?", "Additional verification requirements may be triggered.", "At least one job type must be selected.", "The badge automatically covers it.", "All existing bid history transfers perfectly.", "New service claims can require new checks."),
        written("Build a service-area recommendation for a roofer serving three profitable cities and two low-close-rate distant counties.", "Use job value, travel, close rate, licensing, capacity, lead volume, and a test/control plan; do not optimize only for reach."),
        written("Explain category search versus direct business search to a client.", "Define new-demand/general service intent versus explicit brand intent, charging nuance for new/returning customers, and separate reporting.")
      ]
    ),

    module(
      "auction-ranking",
      "4. Auction and ad ranking",
      "Understand why an eligible account may not appear and how bid, relevance, responsiveness, and profile quality interact.",
      ["Explain the auction", "Diagnose ranking without superstition", "Prioritize controllable quality signals"],
      [
        lesson("Auction, not a fixed rank", "Eligible provider listings are ordered through an auction for each search.", ["Bid matters.", "Likelihood of generating a lead matters.", "Google also considers ecosystem health and diversity."]),
        lesson("Search context and relevance", "The service, time, location, and other query characteristics affect eligibility and order.", ["Selected services and business information matter.", "The same advertiser will not appear identically for every user.", "One self-search is weak evidence."]),
        lesson("Responsiveness", "Missed calls and slow message handling can affect the system’s view of lead likelihood.", ["Enable only contact modes the business can manage.", "Set truthful hours and schedules.", "Response time can become visible on the profile."]),
        lesson("Profile quality", "Ratings, review volume, images, completed checks, response time, and other preference signals contribute.", ["Quality can improve rank and may reduce lead cost.", "No single factor guarantees placement.", "Multiple overlapping locations may not all show for the same geography."])
      ],
      ["Create a ranking-factor evidence matrix.", "Diagnose five reasons an ad might not appear for one search.", "Design a 30-day quality-improvement sequence."],
      "You can explain rank as a dynamic system and recommend improvements without claiming a secret formula.",
      [S.rank, S.manage, S.reviews],
      [
        choice("What determines LSA order?", "An auction combining bid with predicted lead likelihood and profile quality.", "Bid plus several quality and context signals.", "Highest budget only.", "Review count only.", "Ranking is multi-factor and query-specific."),
        choice("A roofer cannot see its own ad once. Best response?", "Check account status and sample multiple relevant contexts before concluding underdelivery.", "Review budget, schedule, targeting, and auction conditions.", "Raise bids immediately.", "Create duplicate locations to force visibility.", "One search is not a reliable rank report."),
        choice("Which action most directly improves responsiveness?", "Assign live call coverage and message-response ownership.", "Use schedules that match actual availability.", "Add more service areas.", "Ask staff to call back whenever convenient.", "Fast, consistent response is operational, not a profile decoration."),
        choice("Why can images matter?", "They contribute to profile quality and customer preference.", "They help customers understand the business.", "They guarantee a lower CPL.", "They replace reviews and verification.", "Images are one quality signal, not a standalone ranking switch."),
        choice("Two locations serve the same area. What may Google do?", "Show only the highest-ranking ad for that search.", "Avoid showing both overlapping locations.", "Always display both to double coverage.", "Merge their lead inboxes automatically.", "Google notes that overlapping locations may yield one displayed ad."),
        choice("Which ranking claim is indefensible?", "Adding exactly ten reviews guarantees position one.", "Reviews can influence quality and customer choice.", "Responsiveness may affect lead likelihood.", "Bid can affect auction position.", "No single count guarantees rank."),
        choice("What does enabling messages potentially change?", "It adds a contact path and can improve lead likelihood if managed well.", "It may help nights/weekends and show response time.", "It automatically lowers every phone lead price.", "It removes the need to answer calls.", "More contact modes help only when response operations support them."),
        choice("A profile has strong reviews but weak visibility. Best diagnosis?", "Inspect bid, budget, search relevance, status, targeting, responsiveness, and context.", "Treat reviews as one quality input.", "Conclude reviews do not matter.", "Buy reviews until rank changes.", "Ranking requires a full-system diagnosis."),
        written("Explain why LSA rank changes across searches without using the phrase “Google is random.”", "Cover per-search auction, bid, context, relevance, response likelihood, profile quality, competition, and experiments."),
        written("Create a ranking-improvement plan that does not begin with raising the bid.", "Audit eligibility/status, service relevance, response operations, review process, photos, hours, contact modes, and measurement before controlled bid changes.")
      ]
    ),

    module(
      "bidding-budget",
      "5. Bidding, budgets, and learning",
      "Choose a bid mode and budget that can produce useful evidence without confusing lead volume with profitability.",
      ["Compare bid modes", "Set an economically coherent budget", "Respect learning and sample size"],
      [
        lesson("Bid modes", "Google currently offers Maximize Leads, an optional target CPL within automated bidding, and manual maximum-per-lead control.", ["Google recommends Maximize Leads without a target for many advertisers.", "A target influences the average sought, not every lead price.", "Manual limits can constrain eligibility."]),
        lesson("Budget mechanics", "The account uses an average lead budget and a monthly charging ceiling.", ["Weekly or daily presentation can vary by interface context.", "Spend can fluctuate inside the period.", "Once the monthly max is reached, serving stops unless budget changes."]),
        lesson("Learning", "Automated bidding needs time and data; Google advises roughly two weeks before expecting stable interpretation.", ["Frequent changes can destroy comparability.", "Google suggests enough budget for about ten leads per week for optimal Maximize Leads learning.", "That recommendation may exceed what a small business can responsibly spend."]),
        lesson("Economics first", "A feasible CPL comes from qualified rate, close rate, gross profit, capacity, and risk tolerance.", ["Platform CPL is not customer acquisition cost.", "A low CPL can still be poor if jobs are wrong.", "A high CPL can be rational for profitable replacement work."])
      ],
      ["Calculate break-even CPL for three roofing scenarios.", "Write a two-week learning-period client update.", "Design a controlled test with a monthly loss limit."],
      "You can select a bid approach, defend the budget, and avoid overreacting to small samples.",
      [S.bid, S.tcpl, S.leads],
      [
        choice("What is Google’s current default recommendation?", "Maximize Leads automated bidding without a target.", "Automated bidding, then evaluate with enough data.", "Manual maximum-per-lead in every case.", "Change bids daily until leads arrive.", "Google positions Maximize Leads as the preferred starting approach."),
        choice("What does a $150 target CPL mean?", "The system aims for about that average; individual leads can cost more or less.", "It guides automated bidding toward an average.", "No lead can cost above $150.", "Every lead will cost exactly $150.", "A target is an average objective, not a hard per-lead cap."),
        choice("A new campaign has three leads in four days. Best action?", "Avoid a major conclusion; verify operations and allow learning unless there is clear harm.", "Monitor quality and settings.", "Switch bid mode immediately.", "Double the budget because one lead booked.", "Small early samples are volatile."),
        choice("Which budget is responsible?", "One tied to acceptable downside, expected lead cost, capacity, and enough data to decide.", "A budget that can fund a defined test.", "The maximum Google recommends regardless of economics.", "A competitor’s estimated spend.", "A learning budget still needs business constraints."),
        choice("The monthly max is reached early. What happens?", "The ad stops appearing for the rest of the period unless budget changes.", "Serving is budget-limited.", "Google continues for free.", "The unused next-month budget is borrowed automatically.", "The charging ceiling constrains further serving."),
        choice("Why can a manual bid suppress volume?", "The maximum may be below competitive lead value.", "It can reduce auction eligibility.", "Manual bids always improve efficiency.", "It disables profile quality signals.", "A low cap can prevent participation in valuable auctions."),
        choice("Which is the best reason to use an optional tCPL?", "There is enough history and a defensible average target tied to economics.", "The account needs controlled automated bidding.", "The owner dislikes variable lead prices.", "A competitor uses it.", "The target should be evidence-based, not emotional."),
        choice("Platform CPL falls 20%, but qualified CPL rises. What matters?", "Lead mix worsened; optimize toward qualified and booked outcomes.", "Investigate sources and settings.", "Celebrate because Google’s CPL is lower.", "Increase budget before reviewing calls.", "Cheap unqualified leads are not efficiency."),
        written("Calculate a maximum tolerable lead cost when 60% of leads qualify, 30% of qualified leads close, and allowable acquisition cost per booked job is $900.", "Expected answer: $900 × .60 × .30 = $162 per raw lead, then discuss margin of safety and sample uncertainty."),
        written("Write the rules for a four-week bid test.", "Define baseline, one change, budget ceiling, learning window, quality metrics, booked outcomes, minimum evidence, stop conditions, and decision date.")
      ]
    ),

    module(
      "lead-operations",
      "6. Lead intake, response, and booking operations",
      "Turn platform contacts into handled, qualified opportunities through disciplined call and message operations.",
      ["Understand lead paths", "Improve response systems", "Track the post-lead funnel"],
      [
        lesson("Lead paths", "Customers can call through a dynamic Google forwarding number, message, or use booking when available.", ["US calls may be recorded and customers are notified.", "The forwarding number can change.", "VoIP or forwarding may affect the audible Google call announcement."]),
        lesson("Message operations", "Message leads include customer details and route communication through an anonymized alias.", ["Notifications can use email and, in the US, SMS.", "Decline requests explicitly when needed.", "Recent weighted response time may appear after enough message leads."]),
        lesson("Availability", "Pause or schedule ads when the business cannot responsibly accept leads.", ["A free listing may still appear outside paid schedule.", "Truthful business hours affect response-time calculation.", "Do not run 24/7 if nobody owns the response."]),
        lesson("Funnel discipline", "A lead must be dispositioned through qualified, appointment, estimate, booked, lost, and reason codes.", ["Listen to recordings where available.", "Separate lead quality from call handling.", "Speed-to-lead and sales behavior affect ROI."])
      ],
      ["Write a five-minute response SLA.", "Create a roofing call-disposition taxonomy.", "Score ten mock lead recordings."],
      "You can design the operating system that converts LSA contacts into measurable roofing opportunities.",
      [S.manage, S.reports, S.rank],
      [
        choice("What number appears in the LSA ad?", "A dynamic Google forwarding number connected to the business line.", "A Google-controlled tracking number that may change.", "Always the company’s published GBP number.", "A number the agency can choose.", "Google uses forwarding to attribute and manage calls."),
        choice("A message lead arrives after hours. Best setup?", "An assigned responder follows a realistic SLA or the schedule/contact mode is constrained.", "Use truthful hours and notification ownership.", "Leave messages enabled with no response plan.", "Send an automatic promise of immediate service.", "Contact modes should match actual operations."),
        choice("What can message response time affect?", "Customer engagement and predicted lead likelihood.", "It may be displayed on the ad.", "Only internal reporting.", "It guarantees rank one when under five minutes.", "Responsiveness is useful but not a guarantee."),
        choice("A call was answered but not booked. What should be reviewed?", "Customer need, qualification, handling, objections, next step, and disposition.", "The recording and source context.", "Only the bid.", "Mark it invalid because no job resulted.", "A valid lead need not become a job."),
        choice("When should ads be paused?", "When the business cannot accept or respond to leads responsibly.", "During known capacity gaps or vacation.", "Whenever a bad lead arrives.", "Only after the monthly max is spent.", "Capacity and response quality justify pausing."),
        choice("What makes a lead “active” in the inbox?", "A recent call or message interaction.", "Responding to the lead.", "Paying the invoice.", "Receiving any impression.", "Inbox status follows interaction, not business outcome."),
        choice("Which handoff metric is most useful?", "Time to first response plus qualification and booking outcome.", "Answered-call rate.", "Total phone rings.", "Number of staff with inbox access.", "Response speed matters, but outcome completes the picture."),
        choice("The office blames bad leads; recordings show weak discovery. Best conclusion?", "Both acquisition quality and intake performance must be measured separately.", "Coach call handling before scaling.", "Every lead is good.", "Turn off LSA immediately.", "Recordings prevent the channel from absorbing operational blame."),
        written("Design a lead intake SOP from notification through booked estimate.", "Include ownership, SLA, greeting, source recognition, qualification, scheduling, notes, disposition, follow-up, privacy, and review cadence."),
        written("Write a scorecard for reviewing an LSA roofing call.", "Score answer speed, empathy, service/area fit, urgency, discovery, trust, appointment ask, next step, notes, and final disposition.")
      ]
    ),

    module(
      "lead-quality",
      "7. Lead validity, feedback, and automated credits",
      "Interpret charges correctly, prevent avoidable mismatch, and use feedback without building the business model around disputes.",
      ["Distinguish valid from profitable", "Understand automated credit behavior", "Prevent recurring poor-fit leads"],
      [
        lesson("Valid is not profitable", "Google’s charge logic asks whether the contact is a valid service-related lead, not whether it closes or fits your preferred margin.", ["Research and price-shopping can remain valid.", "Cancellation or non-response does not automatically earn a credit.", "Temporary unwillingness to take a service is not platform invalidity."]),
        lesson("Automated assessment", "Google assesses leads at contact and may reassess charged leads later.", ["Some are never charged.", "Some enter review or receive later credit.", "Credits often appear within 30 days while the original invoice charge remains visible."]),
        lesson("No geo/job-type safety net", "Google no longer supports credits solely because the advertiser did not service the job type or geography.", ["Settings are the primary control.", "A broad service selection signals willingness.", "Lead feedback still helps preference models."]),
        lesson("Quality review", "Categorize every lead by validity, qualification, reason, geography, job type, and sales outcome.", ["Use the Lead Feedback Survey.", "Look for patterns before changing targeting.", "Never promise a client that all undesirable leads will be refunded."])
      ],
      ["Classify 20 lead scenarios.", "Build a monthly charge/credit reconciliation.", "Write a prevention plan for wrong-service leads."],
      "You can explain charges, audit lead quality, and reduce mismatch through configuration and operations.",
      [S.leads, S.credits, S.target],
      [
        choice("A valid lead asks only for a price range, then disappears. Credit expectation?", "Usually no credit merely because the customer researched or did not continue.", "Treat it as a valid but unconverted lead.", "It must be refunded.", "Mark it as fraud without evidence.", "Research and non-response are listed examples that may remain chargeable."),
        choice("A lead requests a selected service the roofer temporarily cannot take. Best interpretation?", "Usually valid; temporary capacity does not make the lead invalid.", "Pause or adjust operations to prevent recurrence.", "Guaranteed credit.", "Google must know the crew schedule automatically.", "Advertiser availability is an operational responsibility."),
        choice("What happens to some poor-quality leads?", "They may be uncharged initially or credited automatically after reassessment.", "They can show as in review.", "Every complaint is manually refunded.", "The invoice charge disappears immediately.", "Automated states and timing vary."),
        choice("Where should unwanted-lead prevention begin?", "Service areas, job types, categories, broad search, and business operations.", "Lead-pattern analysis and settings.", "A dispute script.", "Selecting every service, then requesting credits.", "Configuration is the durable control."),
        choice("How should a credited lead appear financially?", "The original charge can remain on the invoice while an account credit is applied.", "Reconcile charge and credit separately.", "The charge is always deleted from history.", "The customer pays the advertiser back.", "Credits affect the balance, not necessarily the historic invoice line."),
        choice("What is Lead Feedback primarily for?", "Teaching Google preferences and documenting lead quality; occasional credit may occur.", "Improving future matching through structured feedback.", "Guaranteeing a refund.", "Replacing internal lead tracking.", "Feedback is useful but not a guaranteed dispute channel."),
        choice("A customer cancels a booked appointment. Is that automatically invalid?", "No; cancellation does not erase a valid initial lead.", "Track it as a funnel loss.", "Yes, always.", "Only if the job value was high.", "Platform validity and eventual customer behavior differ."),
        choice("A roofing lead is from an excluded city. Best response?", "Document it, confirm settings and source, submit accurate feedback, and monitor pattern.", "Check whether the configuration was active at lead time.", "Promise the client a credit.", "Expand to the city so the lead looks valid.", "Investigate factually and prevent recurrence; credit is not guaranteed for geo mismatch."),
        written("Create a lead-quality taxonomy that separates platform validity from business desirability.", "Include charge status, service/geo relevance, intent, qualification, job value, duplicate/spam, response, appointment, booking, loss reason, and feedback."),
        written("Explain to a client why “bad lead” does not always mean “refundable lead.”", "Distinguish valid contact from preferred or closed job, give examples, explain automated credits, and emphasize preventive settings and intake.")
      ]
    ),

    module(
      "profile-quality",
      "8. Reviews, photos, trust, and profile quality",
      "Build a profile that improves customer choice and auction quality through authentic evidence.",
      ["Understand review influence", "Create compliant review operations", "Use useful, truthful photos"],
      [
        lesson("Review value", "Rating and review volume influence ranking and customer choice.", ["Google recommends five or more reviews, while category requirements can vary.", "Reviews are managed through GBP.", "Quality, recency, relevance, and response all matter to people."]),
        lesson("Compliant acquisition", "Ask real customers consistently after meaningful service moments.", ["Do not gate by expected rating.", "Do not buy or condition incentives on positive reviews.", "Use the business’s legitimate review link."]),
        lesson("Photos", "High-quality images can help the profile stand out and contribute to quality.", ["Show real team, work, and equipment.", "Follow photo review guidelines.", "Avoid personally identifying imagery without proper basis."]),
        lesson("Trust system", "The badge, reviews, images, responsiveness, and complete business information reduce uncertainty together.", ["The badge does not guarantee workmanship.", "Never fabricate proof for a new advertiser.", "Profile quality cannot rescue unsupported targeting."])
      ],
      ["Design a post-job review request sequence.", "Create a 20-photo shot list.", "Audit five roofer LSA profiles for trust gaps."],
      "You can improve profile quality through compliant, operationally sustainable evidence.",
      [S.reviews, S.improve, S.rank],
      [
        choice("How do reviews affect LSA?", "Rating and volume contribute to ranking and customer choice.", "They are an important profile-quality signal.", "They are cosmetic only.", "Five reviews guarantee eligibility and rank everywhere.", "Reviews matter, but requirements and outcomes are not universal guarantees."),
        choice("Where are LSA customer reviews managed?", "Google Business Profile Manager.", "Through the connected GBP review system.", "Only inside the LSA lead inbox.", "In the website CMS.", "Google points advertisers to GBP for review management."),
        choice("Which review process is safest?", "Ask all appropriate completed customers for honest feedback consistently.", "Use a repeatable post-service request.", "Ask only delighted customers.", "Pay for five-star reviews.", "Consistency and authenticity avoid gating and manipulation."),
        choice("Which photo set is strongest?", "Current real team, equipment, and representative completed work.", "Clear images that set customer expectations.", "Stock roof images from a marketplace.", "Customer faces and addresses without permission.", "Real operational proof is more useful and safer."),
        choice("A profile has no photos. Best claim?", "Adding quality images may improve trust, engagement, and profile quality.", "It is a worthwhile optimization.", "Photos guarantee cheaper leads.", "The account cannot serve without exactly ten photos.", "Google says images can help; precise outcome guarantees are unsupported."),
        choice("What does the Google Verified badge mean?", "The provider passed the applicable Google screening process shown on the profile.", "It is a trust signal tied to completed checks.", "Google guarantees every job.", "It certifies the roofer as the best in the city.", "The badge signals screening, not outcome or superiority."),
        choice("A new roofer has little proof. Best approach?", "Use truthful licenses, process, team, equipment, and early customer feedback—never fabricate.", "Build evidence steadily.", "Copy competitor project photos.", "Invent reviews until real ones arrive.", "Founder-stage trust must remain authentic."),
        choice("What should a review response accomplish?", "Show professionalism, acknowledge specifics, and protect privacy.", "Demonstrate active customer care.", "Insert every target keyword.", "Argue publicly until the customer deletes criticism.", "Responses are public trust signals, not keyword containers."),
        written("Design a compliant review program for a roofing company completing 20 jobs per month.", "Define trigger, channel, timing, owner, honest language, reminders, response process, policy safeguards, and monthly review."),
        written("Create a profile-quality audit checklist.", "Include verification, business accuracy, services, areas, hours, reviews, photos, bio/relevance, contact modes, responsiveness, and visible inconsistencies.")
      ]
    ),

    module(
      "measurement",
      "9. Reporting, attribution, and roofing economics",
      "Convert LSA reports into decisions using qualified lead and booked-job economics.",
      ["Read platform reports", "Build a complete funnel", "Calculate decision-grade KPIs"],
      [
        lesson("Platform reporting", "Reports show charged leads, spend, lead type, search intent, lead lists, and credits.", ["Filter category versus direct business search.", "Break out calls, messages, and bookings.", "Mark booked leads where the feature is available."]),
        lesson("The missing middle", "Platform reports do not automatically explain qualification, estimate, close, revenue, or gross profit.", ["Create internal disposition fields.", "Reconcile the inbox with CRM or a simple sheet.", "Use call recordings to validate quality."]),
        lesson("Core economics", "Track raw CPL, qualified CPL, cost per appointment, cost per booked job, close rate, revenue, and gross-profit contribution.", ["Segment by geography, job type, lead mode, and intent.", "Use cohorts because roofing sales can lag.", "Avoid false precision with tiny samples."]),
        lesson("Attribution limits", "LSA can create and influence demand, but direct brand, repeat customers, referrals, and cross-channel journeys complicate credit.", ["Separate new from returning where possible.", "Do not assign all branded demand to campaign causality.", "Use consistent operational attribution rules."])
      ],
      ["Build a weekly LSA scorecard.", "Calculate qualified CPL and booked-job CAC from a sample month.", "Reconcile five ambiguous lead-source journeys."],
      "You can tell whether the program creates profitable opportunity and state what the data cannot prove.",
      [S.reports, S.direct, S.leads],
      [
        choice("Which report split is essential?", "Category demand versus direct business search.", "Lead type and search intent.", "Desktop versus tablet impressions only.", "All leads combined forever.", "Brand/direct and category acquisition answer different questions."),
        choice("What does platform CPL omit?", "Qualification, booking, close rate, job value, and margin.", "Post-lead business outcomes.", "The amount charged.", "The count of charged leads.", "Platform CPL is only the top of the economic funnel."),
        choice("Which KPI best compares service areas?", "Qualified or booked-job economics by area, with enough volume.", "Lead quality, close rate, and job value by area.", "Raw lead count.", "Lowest individual lead price.", "Volume without outcome can misallocate coverage."),
        choice("Ten leads produce six qualified opportunities and two jobs at $2,000 spend. What is booked-job CAC?", "$1,000.", "$333 qualified CPL.", "$200.", "$2,000.", "Spend divided by two booked jobs equals $1,000."),
        choice("Why mark leads as booked?", "It connects platform leads to appointments/jobs and improves reporting discipline.", "It supports outcome tracking.", "It automatically refunds unbooked leads.", "It guarantees better ranking.", "Booking status is measurement, not a credit or rank switch."),
        choice("Direct business leads rise after a radio campaign. Best interpretation?", "Brand demand may be driven by multiple channels; separate intent and avoid sole-credit claims.", "Analyze as branded capture.", "LSA created every brand search.", "Turn off all other marketing.", "Cross-channel demand requires modest attribution."),
        choice("What is a useful weekly review cadence?", "Lead-by-lead quality and handling review plus trend metrics and one controlled decision.", "Reconcile charges, credits, outcomes, and operations.", "Change bids every Monday regardless of data.", "Review only total spend.", "Good management joins granular evidence with stable testing."),
        choice("A replacement lead closes 45 days later. Reporting should?", "Use cohorts and update outcomes after the initial lead month.", "Preserve the original source and later revenue.", "Count it as organic because the close occurred later.", "Ignore it after 30 days.", "Sales lag should not erase source or distort recent cohorts."),
        written("Build the formulas for raw CPL, qualified CPL, booking rate, close rate, and booked-job CAC.", "Spend/leads; spend/qualified; booked appointments/qualified or leads with definition; jobs/opportunities; spend/jobs. State denominators clearly."),
        written("Write a monthly client summary for weak raw CPL but strong booked-job economics.", "Explain lead cost honestly, show qualification/close/job value, note sample size and lag, identify operational insights, and recommend a measured next step.")
      ]
    ),

    module(
      "troubleshooting",
      "10. Troubleshooting underdelivery and poor performance",
      "Diagnose why an ad is not serving or not producing useful leads before changing budget blindly.",
      ["Run a status-first diagnosis", "Separate serving from conversion problems", "Use controlled interventions"],
      [
        lesson("Status before strategy", "Check whether the ad is active, approved, scheduled, inside business hours, accepting customers, and correctly targeted.", ["Look for account notifications.", "Check billing and Google Ads suspension dependencies.", "Review change history for unexpected edits."]),
        lesson("Budget and bid", "An account may be budget-capped or insufficiently competitive.", ["Check budget spent and monthly ceiling.", "A restrictive manual bid or target can suppress delivery.", "Do not raise budget before confirming lead quality and capacity."]),
        lesson("Auction context", "The ad will not show on every self-search.", ["Competition and search context change.", "Use reports and sampled searches, not obsessional refreshing.", "Differentiate no eligibility, low impression share, and poor customer selection."]),
        lesson("Performance tree", "No leads can mean no serving, weak profile choice, inaccessible contact modes, or demand mismatch.", ["Confirm each funnel stage.", "Make one material change at a time.", "Record hypothesis, expected effect, and review date."])
      ],
      ["Build an underdelivery decision tree.", "Diagnose three simulated inactive accounts.", "Create a change log template."],
      "You can find the likely constraint without treating every performance problem as a bid problem.",
      [S.running, S.rank, S.bid],
      [
        choice("First step when an ad appears inactive?", "Check status, approval, schedule, hours, customer availability, and targeting.", "Confirm the account is actually eligible to serve.", "Raise budget.", "Create a new account.", "Foundational status checks precede auction optimization."),
        choice("A campaign stopped mid-month. What should you inspect?", "Monthly budget ceiling, billing alerts, status, and recent changes.", "Budget spent and account notifications.", "Review count only.", "Keyword quality score.", "LSA has its own budget/status mechanics."),
        choice("The ad is active but receives few impressions. Best next diagnosis?", "Review targeting, demand, bid mode/constraints, budget, profile relevance, and auction context.", "Check whether settings are too narrow.", "Add every county.", "Assume a suspension with no notice.", "Low delivery has several plausible constraints."),
        choice("Unexpected budget changes appear. What helps?", "Google Ads change history and account access review.", "Identify who changed what and when.", "Guess which employee did it.", "Delete the account.", "Change history is a concrete audit trail."),
        choice("No leads despite impressions. What layer comes next?", "Profile competitiveness, customer preference, contact modes, relevance, and pricing/auction context.", "Compare visible profile quality and lead paths.", "Only budget.", "Technical website SEO.", "Impressions indicate serving; diagnose selection and contact."),
        choice("Which intervention is easiest to interpret?", "One documented change with a hypothesis and review window.", "A controlled adjustment while holding other major variables steady.", "Bid, budget, areas, services, and hours changed together.", "Daily random edits.", "Controlled changes produce learning."),
        choice("A self-search never shows the ad. What does that prove?", "Very little by itself; use account data and varied relevant contexts.", "It is a diagnostic clue, not a conclusion.", "The account is definitely broken.", "Google has permanently banned the business.", "Personal searches are not a complete delivery report."),
        choice("When is increasing budget appropriate?", "When demand/quality are viable, capacity exists, and budget is the observed constraint.", "After confirming the monthly ceiling is limiting delivery.", "Whenever leads slow for two days.", "Before reviewing booked-job economics.", "Scale a proven constraint, not a hunch."),
        written("Write a no-leads troubleshooting tree in the correct order.", "Status/verification → schedule/hours → billing/suspension → targeting/demand → budget/bid → auction/profile → contact function → lead handling/reporting."),
        written("Diagnose: active badge, budget remaining, broad areas, many impressions, almost no contacts.", "Focus on relevance, profile trust/quality, reviews/photos, competitors, contact modes, customer choice, and query fit—not basic serving.")
      ]
    ),

    module(
      "policy-risk",
      "11. Policy, access, suspensions, and account safety",
      "Manage accounts conservatively so short-term lead pressure does not create long-term eligibility risk.",
      ["Recognize high-risk behavior", "Maintain access and documentation", "Respond correctly to suspension or disapproval"],
      [
        lesson("Shared policy stack", "LSA participation depends on Local Services policies, provider terms, Google Ads policies, and legal requirements.", ["A Google Ads suspension can also stop LSA.", "Related accounts can be affected.", "Creating new accounts is not an acceptable bypass."]),
        lesson("Access control", "Use authorized users, least-necessary access, and a documented owner.", ["The client should retain ownership.", "Review change history and remove stale access.", "Do not share passwords."]),
        lesson("Suspension response", "Read the in-account notice and Policy Manager, preserve evidence, correct legitimate violations, and appeal truthfully.", ["Suspended accounts can still access reports.", "Avoid repeated speculative appeals.", "Do not alter business identity to escape review."]),
        lesson("Truthful representation", "Services, locations, licenses, photos, reviews, names, and business relationships must be authentic.", ["No virtual-location games.", "No edited verification documents.", "No fabricated reviews or qualifications."])
      ],
      ["Write an account-access policy.", "Create a suspension evidence checklist.", "Identify ten risky agency shortcuts."],
      "You can protect the client account, identify unsafe advice, and manage escalations through official channels.",
      [S.suspension, S.verify, S.running],
      [
        choice("A Google Ads account is suspended. LSA impact?", "LSA can also be suspended because billing and policy systems are connected.", "Treat the Ads suspension as an LSA blocker.", "No impact at all.", "Create a second LSA login.", "Google states an Ads suspension can suspend LSA."),
        choice("What is the correct response to suspension?", "Review Policy Manager/notices, correct evidence-based issues, and submit a truthful appeal.", "Preserve access to reports and document actions.", "Open replacement accounts.", "Change the legal name to avoid detection.", "Circumvention can deepen account risk."),
        choice("Who should own the business account?", "The client business, with documented authorized access for the agency.", "An authorized client representative.", "A freelancer’s personal identity.", "Whoever can pass verification fastest.", "Ownership should survive agency relationships."),
        choice("Which action is highest risk?", "Editing an insurance certificate to match the desired business name.", "Asking support about a legitimate mismatch.", "Using a valid DBA document.", "Updating expired insurance before submission.", "Document alteration is fraudulent and unsafe."),
        choice("Can related accounts be affected by a suspension?", "Yes; related Local Services accounts may also be suspended.", "Google can associate account risk.", "Never.", "Only if they share the same bid.", "The official suspension guidance warns of related-account impact."),
        choice("A client asks for a virtual office to enter a city. Best response?", "Do not misrepresent location; use truthful eligibility and service-area settings.", "Explain policy and account risk.", "Create the listing quietly.", "Use a coworker’s home address without permission.", "False location tactics threaten profiles and ads."),
        choice("What access habit is safest?", "Named users, minimum needed permissions, 2-step security, and periodic review.", "Keep a client-owned primary administrator.", "One shared password across the team.", "Agency-only ownership.", "Account hygiene reduces mistakes and lockout risk."),
        choice("A disapproval has vague wording. Best next step?", "Read account details, compare the profile to policy/evidence, and contact official support if needed.", "Document the exact notice and affected entity.", "Make random edits until it clears.", "Delete all business information.", "Diagnosis should follow the actual notice and records."),
        written("Write a suspension-response checklist for an agency.", "Include notice capture, access freeze, policy mapping, evidence preservation, client communication, correction, truthful appeal, support log, and no circumvention."),
        written("Explain why aggressive shortcuts are especially dangerous for customer #1.", "Connect trust, account linkage, scarce proof, long-term eligibility, legal/business identity, and reputation.")
      ]
    ),

    module(
      "roofing-consulting",
      "12. Roofing strategy, client communication, and capstone",
      "Integrate platform knowledge with roofing economics, operations, and responsible consulting.",
      ["Audit a roofing account", "Prioritize the right intervention", "Explain recommendations confidently"],
      [
        lesson("Roofing lead mix", "Replacement, repair, emergency, storm, commercial, material, and insurance-related needs have different value and operational fit.", ["Do not optimize every lead as equal.", "Use job-type and geography evidence.", "Capacity and weather can change the ideal mix."]),
        lesson("Consulting sequence", "Diagnose verification, targeting, auction quality, budget, lead operations, and economics before prescribing.", ["Fix dependencies first.", "Separate platform issues from intake issues.", "Recommend the smallest useful next move."]),
        lesson("Client communication", "Explain in booked-job language while preserving technical accuracy.", ["Use recordings and lead examples.", "State what Google controls and what the roofer controls.", "Avoid refund, ranking, or job guarantees."]),
        lesson("Mastery standard", "A master can build, audit, optimize, measure, and explain an account—and knows when not to launch.", ["Use current official sources.", "Keep a change and decision log.", "Re-certify after meaningful platform changes."])
      ],
      ["Complete the capstone audit in the Labs area.", "Record a five-minute client walkthrough.", "Defend a 30-day plan against three objections."],
      "You can safely advise a roofing client from onboarding through profitable operation and explain uncertainty without losing confidence.",
      [S.help, S.rank, S.leads, S.reports],
      [
        choice("A roofer gets many repair leads but wants replacements. Best first move?", "Analyze selected job types, broad search, geography, recordings, and actual replacement economics.", "Narrow settings through a measured test.", "Call every repair lead invalid.", "Double budget to find more replacements.", "Lead mix requires targeting and business analysis."),
        choice("LSA CPL is $180; one in five leads closes; average allowable CAC is $1,200. Initial view?", "Raw math implies $900 CAC, potentially viable before qualification/margin and sample review.", "Investigate lead mix and sales lag.", "It is automatically unprofitable.", "It is guaranteed profitable.", "Economics are promising but require full-funnel validation."),
        choice("What should an audit prioritize first?", "The highest-confidence constraint that blocks safe learning or profitable jobs.", "Dependencies such as verification, response, or measurement.", "The longest list of minor optimizations.", "Whatever service the agency sells most.", "A decision product prioritizes constraints, not inventory."),
        choice("The owner wants 24/7 ads but has no night coverage. Best advice?", "Match schedule/contact modes to response capacity or establish genuine coverage.", "Test only when someone can respond.", "Run 24/7 because clicks are not charged.", "Promise next-morning callbacks will not affect rank.", "LSA leads and responsiveness require operational alignment."),
        choice("Which client statement is strongest?", "We can improve the system and economics; Google and customers still determine auction and purchase outcomes.", "We will track from charged lead to booked job.", "We guarantee top placement after verification.", "Every poor-fit call will be credited.", "Confidence comes from process and evidence, not impossible control."),
        choice("A client has excellent LSA results but weak maps/organic. Recommendation?", "Protect the working channel while evaluating broader search dependence and incremental opportunity.", "Diversify based on business goals and evidence.", "Turn off LSA to force SEO growth.", "Declare all other channels irrelevant.", "Channel success should not trigger reckless replacement or complacency."),
        choice("What proves consultant mastery?", "Correct decisions across setup, operations, economics, policy, and explanation.", "A documented capstone using current sources.", "Memorizing the help center.", "Knowing a secret ranking factor.", "Mastery is applied judgment under constraints."),
        choice("When should Oside say “not yet”?", "When eligibility, response, measurement, capacity, or economics make launch unsafe or uninterpretable.", "When prerequisites cannot support responsible testing.", "Whenever the client asks hard questions.", "Never—the first sale matters most.", "Restraint is a core consulting skill."),
        written("Capstone: outline a complete audit for a roofing LSA account with high spend, low booked jobs, and owner complaints about bad leads.", "Cover verification/status, settings, search intent, bidding/budget, profile quality, recordings, response, validity/credits, dispositions, economics, hypotheses, priorities, and client explanation."),
        written("Give a two-minute recommendation to a roofer who is eligible but operationally unready.", "Be direct and empathetic; explain leakage and rank risk, define minimum readiness work, give a timeline/checklist, and avoid turning postponement into fear.")
      ]
    )
  ];

  const total = window.LSA_MODULES.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.LSA_MODULES.length !== 12 || total !== 120) {
    console.error(`LSA content error: expected 12 modules and 120 questions; found ${window.LSA_MODULES.length} and ${total}.`);
  }
})();

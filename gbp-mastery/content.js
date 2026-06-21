(() => {
  const S = {
    help: ["Business Profile Help Center", "https://support.google.com/business/?hl=en"],
    guidelines: ["Business representation guidelines", "https://support.google.com/business/answer/3038177?hl=en"],
    ranking: ["Improve local ranking", "https://support.google.com/business/answer/7091?hl=en"],
    verification: ["Verify your business", "https://support.google.com/business/answer/7107242?hl=en"],
    access: ["Owners and managers", "https://support.google.com/business/answer/3403100?hl=en"],
    serviceAreas: ["Manage service areas", "https://support.google.com/business/answer/9157481?hl=en"],
    categories: ["Manage business category", "https://support.google.com/business/answer/7249669?hl=en"],
    services: ["Manage services", "https://support.google.com/business/answer/9455399?hl=en"],
    links: ["Manage local business links", "https://support.google.com/business/answer/6218037?hl=en"],
    description: ["Manage business description", "https://support.google.com/business/answer/13682007?hl=en"],
    social: ["Manage social media links", "https://support.google.com/business/answer/13580646?hl=en"],
    reviews: ["Get more reviews", "https://support.google.com/business/answer/3474122?hl=en"],
    manageReviews: ["Manage customer reviews", "https://support.google.com/business/answer/3474050?hl=en"],
    reportReviews: ["Report inappropriate reviews", "https://support.google.com/business/answer/4596773?hl=en"],
    photos: ["Manage photos and videos", "https://support.google.com/business/answer/6103862?hl=en"],
    posts: ["Create and manage posts", "https://support.google.com/business/answer/7342169?hl=en"],
    performance: ["Performance and insights", "https://support.google.com/business/answer/9918094?hl=en"],
    duplicates: ["Duplicates and ownership issues", "https://support.google.com/business/answer/12756178?hl=en"],
    suspension: ["Fix suspended or disabled profiles", "https://support.google.com/business/answer/4569145?hl=en"],
    specialHours: ["Set special hours", "https://support.google.com/business/answer/6303076?hl=en"]
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

  window.GBP_MODULES = [
    module(
      "fundamentals",
      "1. GBP fundamentals and the local-search system",
      "Understand what a Business Profile controls, where it appears, and how local ranking and customer choice differ.",
      ["Explain GBP in plain English", "Distinguish ranking from conversion", "Use relevance, distance, and prominence correctly"],
      [
        lesson("The product", "A Business Profile is Google’s representation of an eligible local business across Search and Maps.", ["It can display identity, category, location or service area, hours, services, reviews, media, posts, and actions.", "The business influences the profile but Google also uses public and third-party information.", "A profile is not a replacement for the website or operations."]),
        lesson("Three ranking foundations", "Google says local results are primarily based on relevance, distance, and prominence.", ["Relevance is how well the profile matches the search.", "Distance depends on the searcher and business location context.", "Prominence includes how well known the business is online and offline."]),
        lesson("Rank versus choice", "Appearing in the Local Pack does not guarantee a call.", ["Customers compare rating, review content, photos, service fit, hours, brand, and actions.", "Profile optimization should improve accuracy and customer confidence.", "Calls and booked jobs remain downstream outcomes."]),
        lesson("Control boundary", "Businesses cannot request or pay Google for better organic local ranking.", ["Distance cannot be edited away with service areas.", "No single field guarantees placement.", "Mastery means better inputs, evidence, and decisions—not a secret formula."])
      ],
      ["Map every GBP-controlled and Google-controlled element on five roofer profiles.", "Explain relevance, distance, and prominence in 90 seconds.", "Trace a customer from local search to booked inspection."],
      "You can explain what GBP can influence without implying control over Google’s ranking system.",
      [S.ranking, S.help],
      [
        q("What primarily determines local results?", "Relevance, distance, and prominence working together.", "Query match, location context, and business prominence.", "Review count alone.", "A monthly payment to Google.", "Google explicitly identifies relevance, distance, and prominence."),
        q("What does setting a large service area do?", "Describes where the business serves customers; it does not create a ranking radius.", "Helps customers understand coverage.", "Makes the business rank everywhere selected.", "Overrides the business location.", "Service-area configuration is not a proximity control."),
        q("Which result is closest to business value?", "Qualified, booked jobs attributable to local discovery.", "Calls and website visits interpreted with quality.", "Profile views alone.", "The number of completed fields.", "Profile metrics are useful only when connected to customer outcomes."),
        q("What is GBP optimization?", "Maintaining an accurate, complete, persuasive, policy-safe profile aligned with the wider local presence.", "Improving relevance and customer confidence while measuring outcomes.", "Adding every possible keyword to every field.", "Manipulating Maps to force top-three placement.", "Optimization is an operating system, not field stuffing."),
        q("A roofer ranks well near its base but poorly 15 miles away. Best first interpretation?", "Distance and local competition likely change across search locations.", "Compare grids, competitors, relevance, and prominence by area.", "The profile is broken.", "Add the distant city to the business name.", "Local rank is geographically variable."),
        q("Can Google Ads improve organic Local Pack rank?", "No direct purchase of better organic local rank is available.", "Ads and organic profile interactions may coexist in reports.", "Yes, enough spend guarantees Pack rank.", "Only LSA spend affects it.", "Paid visibility is not a ranking purchase."),
        q("Why keep the website strong if GBP is performing?", "The website supports trust, conversion, entity understanding, and broader prominence.", "It provides service and location depth beyond the profile.", "Websites no longer matter locally.", "Only because GBP requires one.", "The profile and website are connected parts of the customer journey."),
        q("What does a complete profile guarantee?", "Nothing by itself; completeness improves information and relevance but not fixed rank.", "A stronger customer experience and better inputs.", "Top-three ranking.", "A specific number of calls.", "Google recommends complete information without promising placement."),
        w("Explain GBP to a roofing owner in four sentences, including one limitation.", "Define the Search/Maps profile, customer actions, ranking foundations, and honest lack of guaranteed placement."),
        w("Create a local-search funnel from query to profitable roofing job.", "Include query/location, SERP surfaces, profile selection, trust, call/site action, qualification, estimate, close, value, and measurement limits.")
      ]
    ),

    module(
      "eligibility",
      "2. Eligibility, storefronts, service-area businesses, and policy",
      "Determine whether a business and location qualify before creating or editing a profile.",
      ["Classify business type", "Apply real-world representation rules", "Recognize unsafe location strategies"],
      [
        lesson("Eligible businesses", "An eligible business generally makes in-person contact with customers during stated hours, either at a real location or where customers are.", ["Online-only businesses are not normally eligible.", "Lead-generation agents are not the underlying local business.", "The profile must represent a real operating entity."]),
        lesson("Storefront standards", "A displayed address must be a genuine, staffed customer-facing location with permanent signage.", ["P.O. boxes and remote mailboxes are not eligible.", "Virtual offices are not eligible.", "Coworking offices need signage, staff, and customer access during business hours."]),
        lesson("Service-area businesses", "A business that travels to customers and does not receive them at its base should hide its address.", ["Use one profile for the central operating location.", "The service area should generally stay within about two hours’ driving time.", "Multiple legitimate staffed locations may support separate profiles."]),
        lesson("One business, one profile", "Duplicate or invented profiles can damage display, ownership, and eligibility.", ["Choose the fewest categories needed for the core business.", "Do not create city profiles without real separately staffed locations.", "Real-world truth is the safest optimization principle."])
      ],
      ["Classify 20 businesses as storefront, SAB, hybrid, or ineligible.", "Audit a roofing office against storefront evidence.", "Write a no-virtual-office client explanation."],
      "You can stop an unsafe profile strategy before it threatens the business.",
      [S.guidelines, S.serviceAreas],
      [
        q("A roofer operates from home and never receives customers there. Correct setup?", "One service-area profile with the residential address hidden.", "Use the real base for verification but do not display it.", "Show the home address to improve rank.", "Create a profile for every city served.", "A pure SAB should hide the address."),
        q("When can a coworking office be eligible?", "When the business has permanent signage, receives customers, and its own staff are present during stated hours.", "When it operates as a genuine storefront.", "Whenever mail is delivered there.", "When a receptionist can forward calls for many tenants.", "Google requires actual business presence, not rented address access."),
        q("A roofer rents a virtual office in a target city. Best advice?", "Do not create a profile there; use truthful service-area and marketing strategies.", "Explain suspension and trust risk.", "Create it and hide the address.", "Use a stock photo as signage.", "A virtual office is not a real eligible location."),
        q("What distinguishes a hybrid business?", "It receives customers at a staffed storefront and also serves them elsewhere.", "It can show its address and service area.", "It uses both phone and email.", "It has two profiles at one address.", "Hybrid describes customer service at and away from the location."),
        q("How many service areas can a profile currently list?", "Up to 20.", "Use precise cities, postal codes, or supported areas.", "Unlimited.", "Exactly one county.", "Google’s service-area editor supports up to 20."),
        q("How should service-area boundaries generally be scoped?", "Accurately, usually within about two hours’ drive from the base.", "To the territory the business can genuinely serve.", "Every state the website mentions.", "As a radius around the pin.", "Google no longer uses editable radius service areas."),
        q("Can an online-only marketing agency create a local profile?", "Not merely for providing services online without in-person customer contact.", "Only if it has an eligible real-world customer-facing operation.", "Yes, every website qualifies.", "Yes, if it buys local ads.", "GBP is for eligible local customer interaction."),
        q("A roofer has two crews but one central office. How many profiles?", "Usually one, unless each additional location is real, separately staffed, and eligible.", "One profile for the actual operating location.", "One per crew.", "One per service area.", "Crews and territories do not automatically create eligible locations."),
        w("Create an eligibility checklist for a roofing storefront, SAB, and hybrid business.", "Cover customer contact, signage, staffing, address display, service area, separate locations, hours, documents, and ineligible arrangements."),
        w("Explain why city-specific fake profiles are not a local growth strategy.", "Connect real-world representation, duplicates, suspension risk, proximity limits, customer deception, and compliant alternatives.")
      ]
    ),

    module(
      "ownership-verification",
      "3. Ownership, access, claiming, and verification",
      "Secure the profile, preserve client ownership, and prepare evidence for Google-selected verification methods.",
      ["Use owner and manager roles safely", "Resolve access correctly", "Build verification readiness"],
      [
        lesson("Client ownership", "The business should retain primary ownership while agencies receive named access.", ["Never share passwords.", "Owners can manage users; managers cannot.", "New owners and managers face seven-day limits on some ownership actions."]),
        lesson("Claiming and duplicates", "A profile may already exist, be managed by someone else, or be marked duplicate.", ["Request access rather than creating a replacement.", "Check prior agencies, employees, and account emails.", "Resolve the authoritative profile before optimization."]),
        lesson("Verification methods", "Google chooses available methods automatically and may require video, phone/text, email, live video, mail, or more than one method.", ["Methods cannot simply be demanded.", "Changes can trigger re-verification.", "Prepare evidence before starting time-sensitive workflows."]),
        lesson("Video evidence", "Video should prove location, business existence, and management authority in one continuous recording when requested.", ["Show street/location context or service equipment.", "Show branded tools, vehicle, signage, or workspace.", "Show access to business-only areas, documents, or systems without exposing private data."])
      ],
      ["Create an account-access matrix.", "Write a verification-video shot list for a roofing SAB.", "Diagnose three lost-access scenarios."],
      "You can establish secure access and guide verification without workarounds or fabricated evidence.",
      [S.access, S.verification, S.duplicates],
      [
        q("Who should be primary owner of a client profile?", "The client business through an authorized account.", "A durable client-controlled Google Account.", "The agency owner forever.", "A shared password used by everyone.", "Client ownership protects continuity and authority."),
        q("What can managers not do?", "Add or remove users or remove the profile.", "They have most daily management capabilities.", "Reply to reviews.", "Edit hours.", "User governance remains an owner capability."),
        q("A former agency controls the profile. First move?", "Request legitimate access and contact existing owners before creating anything new.", "Audit all known accounts and ownership paths.", "Create a duplicate profile.", "Report the real profile as closed.", "Resolve ownership around the authoritative listing."),
        q("Can you choose any verification method you prefer?", "No; Google determines available methods for the profile.", "Use the methods presented and prepare accordingly.", "Yes, every business can demand postcard.", "An agency can bypass verification.", "Verification options are system-selected."),
        q("What can trigger re-verification?", "Material profile changes or Google’s ongoing trust checks.", "Changes such as name, category, address, or ownership may trigger review.", "Only a new phone number.", "Nothing after initial verification.", "Verification is not always permanent."),
        q("What should a SAB verification video show?", "Operating location context, service equipment or branded vehicle, and proof of management access.", "Real-world business existence without showing the hidden address publicly.", "A slideshow of website screenshots.", "Another roofer’s truck.", "Video evidence should connect the operator to the real business."),
        q("Why avoid shared passwords?", "They obscure accountability and create security and offboarding risk.", "Named users preserve ownership and auditability.", "Google charges for users.", "Managers cannot use individual accounts.", "Access should be attributable and revocable."),
        q("What happens during a new owner’s first seven days?", "Some actions such as removing users or transferring primary ownership are restricted.", "Daily profile management can still be available.", "The profile cannot appear in Search.", "All reviews disappear.", "Google applies temporary ownership safeguards."),
        w("Design a secure agency onboarding and offboarding process for GBP.", "Include client primary ownership, named accounts, role choice, MFA, inventory, approvals, access review, transfer, records, and no password sharing."),
        w("Write a one-take verification video plan for a home-based roofing SAB.", "Cover outside context, vehicle/equipment, branded materials, business documents or management access, continuity, privacy, and authentic evidence.")
      ]
    ),

    module(
      "core-information",
      "4. Name, address, phone, website, hours, and business identity",
      "Maintain accurate identity fields that customers and Google can trust.",
      ["Apply name policy", "Audit NAP and destination integrity", "Manage hours and edits responsibly"],
      [
        lesson("Business name", "Use the real-world name consistently shown on signage, website, stationery, and branding.", ["Do not add services, cities, taglines, phone numbers, or hours unless genuinely part of the name.", "Keyword stuffing can trigger edits or suspension.", "Legal terms and special characters need real-world proof when used."]),
        lesson("Address and phone", "Use a precise eligible address and a phone controlled by the individual business location.", ["Prefer a local number when possible.", "Do not use redirecting lead-gen numbers that misrepresent the business.", "Hide addresses for pure SABs."]),
        lesson("Website", "Link to a page representing the actual business and location, with consistent identity and useful next steps.", ["Do not redirect to unrelated destinations.", "Use tracking carefully without breaking URLs.", "The site should support services, proof, and local entity understanding."]),
        lesson("Hours and edits", "Publish genuine customer-facing hours and use special hours for holidays or events.", ["Do not claim 24/7 unless the business genuinely serves customers 24/7.", "Review Google-suggested updates.", "Important edits can take time or trigger verification."])
      ],
      ["Run a complete identity consistency audit.", "Create a holiday-hours calendar.", "Rewrite five keyword-stuffed business names compliantly."],
      "You can protect profile identity while improving customer clarity and measurement.",
      [S.guidelines, S.specialHours, S.description],
      [
        q("The real business name is “Coastal Roofing.” Which profile name is safest?", "Coastal Roofing.", "The name customers see consistently in the real world.", "Coastal Roofing – Roof Repair & Replacement Oceanside.", "Best Roofer Near Me 24/7.", "Services and locations belong in other fields."),
        q("When may LLC appear in the profile name?", "When real-world evidence consistently shows it as part of the recognized name.", "When signage and branding support it.", "Whenever it is on tax documents only.", "To make the profile look official.", "Google asks for real-world name consistency."),
        q("What phone number is preferred?", "A number under direct business control that reaches the specific location.", "A local business number when possible.", "A lead seller’s shared tracking line.", "Any number that forwards somewhere.", "The number should represent the actual business."),
        q("A pure SAB has its home address visible. What should happen?", "Remove the public address and keep accurate service areas.", "Preserve the address privately as required for management or verification.", "Leave it visible for ranking.", "Replace it with a P.O. box.", "Google instructs SABs not receiving customers to hide the address."),
        q("Which website destination is strongest?", "A real business page matching profile identity, service, location context, and action.", "The business homepage or relevant location page.", "A generic lead-generation directory.", "A competitor comparison page pretending to be the business.", "The website should represent the individual business."),
        q("What should regular hours represent?", "Actual customer-facing availability.", "The times customers can reliably receive service or contact.", "Times someone might check voicemail.", "24/7 for ranking purposes.", "Hours are customer information, not a keyword signal."),
        q("How should holidays be handled?", "Use special hours and confirm them before the holiday.", "Keep regular hours intact and add date-specific exceptions.", "Change the business name to Closed Christmas.", "Ignore them.", "Special hours prevent misleading customers."),
        q("Google suggests an incorrect edit. Best response?", "Review evidence and correct or reject it through the profile workflow.", "Check website, signage, and public consistency.", "Ignore all Google updates forever.", "Create a duplicate with the right data.", "Profile data can come from multiple sources and requires governance."),
        w("Create a GBP identity audit checklist.", "Cover name proof, business type, address visibility, pin, phone control, website, hours, special hours, description, consistency, suggested edits, and evidence."),
        w("Explain why keyword stuffing the business name may improve visibility temporarily yet remain a bad recommendation.", "Discuss policy, edits, suspension, competitor reporting, brand inconsistency, customer trust, and compliant relevance alternatives.")
      ]
    ),

    module(
      "profile-optimization",
      "5. Categories, services, service areas, attributes, links, and completeness",
      "Choose profile fields from business truth and customer utility rather than maximum-field superstition.",
      ["Select categories strategically", "Build useful service architecture", "Configure service areas and links correctly"],
      [
        lesson("Categories", "Choose the most specific primary category describing what the business is, then the fewest additional categories needed.", ["Categories describe the business, not every service or keyword.", "Primary category can affect available features.", "Category changes can trigger review or re-verification."]),
        lesson("Services", "Add real services under appropriate categories, using accurate descriptions and prices where useful.", ["Suggested and custom services may appear.", "Services can be highlighted for relevant searches.", "Do not insert phone numbers, gibberish, or unsupported offerings."]),
        lesson("Service areas and attributes", "Use precise supported areas and truthful attributes.", ["Up to 20 service areas can be set.", "Attributes vary by category and region.", "Availability of profile features is not universal."]),
        lesson("Links and completeness", "Use website, service, booking, social, and other available links to move customers toward the right action.", ["Some link types allow a preferred link.", "Third-party links may appear.", "Completeness is useful, but irrelevant fields do not create mastery."])
      ],
      ["Choose categories for ten roofing scenarios.", "Build a complete services catalog.", "Create a service-area and link strategy for three priority markets."],
      "You can make every field accurate, useful, and defensible.",
      [S.categories, S.services, S.serviceAreas, S.links],
      [
        q("How should the primary category be chosen?", "The most specific available category describing the core business.", "The category that completes “this business IS a.”", "The highest-volume keyword.", "Every service the business might offer.", "Google frames categories around business identity."),
        q("How many categories should be used?", "The fewest needed to describe the overall core business accurately.", "A focused primary plus justified secondary categories.", "Every vaguely related category.", "Only one, regardless of actual operations.", "More categories are not automatically better."),
        q("A roofer occasionally cleans gutters. Should “Gutter cleaning service” be added?", "Only if it is a real, material service that helps describe the business and is supported operationally.", "Assess customer demand and actual offering before adding it.", "Always add it for more rankings.", "Add categories for competitors’ services too.", "Categories should represent the business, not opportunistic keywords."),
        q("What can the services editor include?", "Suggested or custom services, grouped by category, with descriptions and prices where available.", "A real service catalog customers can review.", "Hidden keywords only.", "Competitor names.", "Google provides a structured service editor."),
        q("What is wrong with listing 20 distant service areas solely for rank?", "Service areas should reflect real coverage and do not overcome distance.", "Broad coverage may confuse customers and operations.", "Nothing; each city adds ranking power.", "It creates a new pin in each city.", "The setting describes service, not location."),
        q("Can social links always be added?", "No; availability varies by region and profile.", "Use them when the field is available and valid.", "Yes, every profile has every feature.", "Only paid profiles receive them.", "Feature availability is category- and region-dependent."),
        q("What should a preferred booking link do?", "Send customers to the most appropriate first-party or approved action path.", "Represent the business and complete the intended action.", "Redirect through unrelated lead sellers.", "Open a generic social feed.", "Links should reduce friction and preserve attribution."),
        q("Does Profile Strength equal local ranking strength?", "No; it is a completeness prompt, not a ranking or business-outcome score.", "Use it to find missing information, then apply judgment.", "Yes, 100% guarantees top three.", "It replaces performance reporting.", "Completeness and rank are different concepts."),
        w("Build a category and services recommendation for a roofer offering replacement, repair, gutters, and commercial work.", "Choose a defensible primary, justified secondaries, service groups/descriptions, evidence, feature impact, and what not to add."),
        w("Design a profile-completeness QA sheet without turning it into a checkbox contest.", "Include identity, category, services, areas, attributes, description, hours, links, media, reviews, actions, policy, customer utility, and outcome relevance.")
      ]
    ),

    module(
      "reviews",
      "6. Reviews, reputation, responses, and policy safety",
      "Build a consistent review system, respond professionally, and distinguish removable policy violations from criticism.",
      ["Acquire reviews compliantly", "Write useful replies", "Manage fraud, extortion, and removal expectations"],
      [
        lesson("Authentic acquisition", "Ask real customers for honest reviews after genuine experiences.", ["Google provides a review link or QR code.", "Do not incentivize reviews, changes, or removals.", "Do not gate requests based on expected rating."]),
        lesson("Review quality", "Volume, rating, content, recency, and service references influence customer choice and can contribute to prominence.", ["A natural mix can feel more trustworthy.", "Service-business reviews may identify the service received.", "Reviews do not erase distance."]),
        lesson("Responses", "Replies are public evidence of professionalism.", ["Be concise, specific, and conversational.", "Protect privacy and move complex issues offline.", "Do not turn replies into keyword advertisements."]),
        lesson("Removal and abuse", "Only policy-violating reviews are eligible for removal; disagreement is not a violation.", ["Use the Reviews Management Tool.", "A one-time appeal may be available.", "Document extortion and never pay scammers."])
      ],
      ["Create a compliant review-request sequence.", "Write responses to ten difficult reviews.", "Classify 20 reviews as respond, report, appeal, or document."],
      "You can grow authentic reputation and handle negative events without manipulation.",
      [S.reviews, S.manageReviews, S.reportReviews],
      [
        q("Which review request is compliant?", "A consistent request for honest feedback from genuine customers.", "A post-job link or QR code offered without rating conditions.", "A discount only for five-star reviews.", "Ask happy customers but hide the link from unhappy ones.", "Google prohibits incentives and rating manipulation."),
        q("What is review gating?", "Filtering customers so only likely positive reviewers receive the public review request.", "A manipulative selection practice to avoid.", "Asking every customer the same way.", "Replying to negative reviews.", "Balanced authentic feedback should not be selectively suppressed."),
        q("A truthful one-star review is harsh but policy-compliant. Best action?", "Respond professionally and address the operational issue.", "Take the conversation offline where appropriate.", "Report it until Google removes it.", "Publish the customer’s private details.", "Negative sentiment alone is not grounds for removal."),
        q("When should a review be reported?", "When evidence suggests it violates Google content policy.", "For spam, profanity, conflicts, impersonation, or other policy reasons.", "Whenever the rating is below four.", "When the customer refuses to edit it.", "Removal is policy-based, not preference-based."),
        q("What should a negative-review reply avoid?", "Private customer information, personal attacks, and defensive arguments.", "Long promotional copy.", "A short acknowledgement and next step.", "An invitation to contact the business privately.", "Privacy and professionalism matter publicly."),
        q("Can review incentives include discounts?", "No, incentives for posting, changing, or removing reviews are prohibited.", "Ask without compensation tied to the review.", "Yes, if the review is honest.", "Only for five-star customers.", "Google treats incentives as fake or misleading engagement."),
        q("A reported review is found compliant. What may be available?", "A one-time appeal through the Reviews Management Tool.", "A policy-specific escalation with evidence.", "Unlimited appeals.", "Automatic deletion after 30 days.", "Google documents a one-time appeal path."),
        q("What should a roofing review program measure?", "Request rate, completion rate, rating/content themes, response time, service mix, and policy health.", "Review velocity alongside real job volume.", "Only total review count.", "Keyword density in replies.", "A sustainable system measures authenticity and customer learning."),
        w("Design a compliant review-acquisition SOP for a roofing company.", "Include trigger, all-customer fairness, link/QR, language, reminders, owner, no incentives/gating, response SLA, monitoring, and records."),
        w("Respond to an angry reviewer who alleges damage and threatens legal action.", "Acknowledge concern, avoid admissions beyond facts, protect privacy, invite documented offline resolution, remain calm, and involve appropriate legal/insurance guidance.")
      ]
    ),

    module(
      "content-media",
      "7. Photos, videos, posts, description, and customer engagement",
      "Use profile content to reduce uncertainty and demonstrate real operational proof.",
      ["Build a visual proof system", "Publish useful posts", "Review AI-generated profile content"],
      [
        lesson("Photos and videos", "Verified profiles can add authentic media showing the business, people, equipment, location, products, and services.", ["Photos should be clear, well lit, and represent reality.", "Google recommends 720×720 and sets file requirements.", "Videos can be up to 30 seconds, 75 MB, and 720p or higher."]),
        lesson("Content strategy", "For roofers, media should answer: Are they real? Do they serve my job? Can I trust the work and process?", ["Use team, trucks, equipment, inspections, projects, materials, and safe before/after evidence.", "Protect customer privacy and location details.", "Avoid stock imagery as proof."]),
        lesson("Posts", "Profiles can publish updates, offers, and events with text, media, and action buttons.", ["Posts older than six months are archived unless a date range applies.", "Posts are reviewed for policy.", "Phone numbers in post descriptions may cause rejection."]),
        lesson("Descriptions and AI", "Descriptions should explain the business accurately; AI suggestions require human review.", ["Do not include links or promotional pricing in the description.", "Feature availability varies.", "Generated summaries and content are not automatically accurate."])
      ],
      ["Create a 30-image roofing shot list.", "Write four customer-useful posts.", "Audit an AI-suggested description for accuracy and policy."],
      "You can turn profile content into trustworthy evidence rather than filler.",
      [S.photos, S.posts, S.description, S.social],
      [
        q("Which photo is strongest?", "A current, well-lit image of the real crew and equipment on a representative job.", "Authentic operational proof with permission and context.", "A polished stock roof image.", "A competitor’s project photo.", "Google asks media to represent reality."),
        q("When do uploaded photos appear?", "After the profile is verified and the content is processed/approved.", "Verification is a prerequisite for business-added media to show.", "Immediately on every unverified profile.", "Only after purchasing ads.", "Verification affects media visibility."),
        q("What is Google’s recommended photo resolution?", "720 by 720 pixels.", "At least 250×250, with 720×720 recommended.", "100×100.", "4K only.", "Google publishes recommended and minimum dimensions."),
        q("What is the maximum listed video duration?", "30 seconds.", "Short videos up to 30 seconds.", "Five minutes.", "Unlimited.", "GBP video guidelines specify up to 30 seconds."),
        q("What happens to ordinary posts after six months?", "They are archived unless a date range applies.", "Older updates may stop being current profile content.", "They become permanent ranking signals.", "They are converted into reviews.", "Google documents six-month archiving."),
        q("Why might a post be rejected?", "It violates content policy, contains problematic contact text, links, or other disallowed material.", "Review the stated status and policy reason.", "The profile lacks exactly 100 reviews.", "All roofing posts are prohibited.", "Posts move through Live, Pending, or Not approved statuses."),
        q("How should AI-generated descriptions be handled?", "Review and edit for truth, relevance, policy, and unsupported claims.", "Treat the suggestion as a draft.", "Publish automatically because Google wrote it.", "Add links and prices to improve it.", "Google explicitly requires accuracy review."),
        q("What should a photo plan prioritize?", "Customer questions and trust gaps across real services, people, process, and proof.", "A consistent, privacy-aware content system.", "Uploading the same image weekly.", "Image filename keywords only.", "Media should help customers choose the business."),
        w("Create a 90-day GBP media and post plan for a roofing company.", "Include shot categories, permissions, frequency, seasonal relevance, posts, CTAs, owners, policy review, refresh rules, and customer questions."),
        w("Write a compliant business description for a roofing company, then explain what you excluded.", "Use accurate services, area context, history, differentiation, and mission; exclude links, price promotions, stuffing, unsupported superlatives, and irrelevant text.")
      ]
    ),

    module(
      "prominence",
      "8. Website alignment, entities, prominence, and competitive analysis",
      "Connect the profile to the wider web and diagnose why competitors may be more prominent.",
      ["Align profile and website entities", "Analyze competitive assets", "Avoid citation and backlink superstition"],
      [
        lesson("Prominence", "Google describes prominence as how well known a business is, using real-world and web signals.", ["Links, articles, directories, review volume, and review score can contribute.", "Famous landmarks may rank prominently.", "Prominence accumulates; it is not one vendor package."]),
        lesson("Website alignment", "The linked site should corroborate name, services, location, service areas, proof, and contact paths.", ["Create useful service and location information.", "Use relevant internal links and structured data accurately.", "Do not generate thin city pages solely for GBP rank."]),
        lesson("Entity consistency", "Google sources profile and local information from business input, public web content, user contributions, licensed data, and other sources.", ["Consistency reduces ambiguity.", "Minor formatting differences are less important than identity truth.", "Monitor suggested edits and third-party data."]),
        lesson("Competitive analysis", "Compare categories, location context, reviews, website/service depth, links/mentions, media, brand demand, and customer experience.", ["Correlation is not a secret factor.", "Proximity advantages cannot always be copied.", "Choose realistic counter-moves."])
      ],
      ["Build a five-competitor local prominence matrix.", "Audit website-to-profile consistency.", "Identify one accumulated and one fixable competitor advantage."],
      "You can explain competitive gaps without promising to copy an uncopyable proximity or brand advantage.",
      [S.ranking, S.guidelines, S.performance],
      [
        q("What can contribute to prominence?", "Links, articles, directories, reviews, brand recognition, and other evidence of being well known.", "Online and offline reputation signals.", "Service-area size alone.", "Keyword repetition in the name.", "Google lists web information and reviews among prominence factors."),
        q("A competitor has fewer reviews but outranks the client. Conclusion?", "Reviews are one factor; compare distance, relevance, category, website, and broader prominence.", "Do not reduce rank to review count.", "Reviews do not matter.", "The competitor must be cheating.", "Local ranking is multi-factor."),
        q("How should the website support GBP?", "By clearly representing the same business, services, geography, proof, and conversion paths.", "Through useful pages and consistent entity information.", "By hiding the address in white text.", "By creating 500 duplicate city pages.", "The site should improve understanding and customer value."),
        q("What is wrong with a citation-count race?", "Count alone ignores accuracy, quality, relevance, authority, and business impact.", "Use citations to support consistent discovery where appropriate.", "Every directory guarantees rank.", "Only paid directories count.", "Prominence is broader than listing volume."),
        q("Can a competitor’s proximity advantage be copied?", "Not without a legitimate real location; choose other relevance, prominence, and conversion opportunities.", "Acknowledge structural geographic limits.", "Yes, by changing the service area.", "Yes, by using a virtual office.", "Distance is a real constraint."),
        q("Which competitor evidence is most useful?", "Repeated category/search coverage, reviews, site assets, local mentions, and customer actions in the target market.", "A structured comparison across the same queries and locations.", "One screenshot from the office.", "A domain-authority number alone.", "Competitive diagnosis requires consistent context."),
        q("What is entity consistency?", "Clear, corroborated identity across the profile, site, and reliable public sources.", "Reducing ambiguity about the real business.", "Making every address string identical character-for-character at any cost.", "Adding keywords to legal records.", "Identity truth matters more than mechanical sameness."),
        q("A roofer sponsors local charities and earns news coverage. Why may it matter?", "It builds real-world prominence, mentions, links, brand awareness, and trust.", "It can support wider local recognition.", "It guarantees Pack rank.", "Google pays sponsors with ranking points.", "Real prominence is broader than SEO tactics."),
        w("Create a competitive-analysis framework for five roofing GBPs.", "Include query/location context, business type, categories, distance, reviews, profile content, website, links/mentions, brand demand, actions, advantages, uncertainty, and priorities."),
        w("Explain why the client cannot simply copy the top competitor.", "Separate location, accumulated brand/prominence, operational assets, visible tactics, correlation, legal/policy limits, and achievable alternatives.")
      ]
    ),

    module(
      "rank-diagnostics",
      "9. Local-rank grids, query sampling, and diagnostic reasoning",
      "Measure geographically variable visibility without mistaking a rank grid for business performance.",
      ["Design useful rank samples", "Interpret grid patterns", "Connect visibility to causes and outcomes"],
      [
        lesson("Context first", "Every rank observation needs query, date/time, device/method, search point, and business/competitor identity.", ["Results vary by location and context.", "One office search is not market visibility.", "Use a stable sampling method for comparisons."]),
        lesson("Grid patterns", "Center strength with edge weakness often suggests distance; universal weakness may suggest eligibility, relevance, or prominence; irregular pockets may reflect competitor locations or geography.", ["Patterns are hypotheses.", "Verify categories, pins, duplicates, and competitors.", "Do not diagnose from colors alone."]),
        lesson("Metrics", "Useful summaries include average rank, median, top-3 share, top-10 share, not-found share, and competitor coverage.", ["Treat rank beyond the tool limit consistently.", "Compare the same grid over time.", "Avoid averaging branded and non-branded queries together."]),
        lesson("Business connection", "Prioritize grids for valuable services and markets, then compare calls, leads, and jobs.", ["A low-volume query can distract.", "A wider grid may include unserviceable points.", "Ranking gains without qualified demand may not matter."])
      ],
      ["Build three comparable 5×5 rank grids.", "Interpret five hypothetical patterns.", "Write a diagnosis with evidence, uncertainty, and next test."],
      "You can use grids as a diagnostic instrument rather than a colorful sales prop.",
      [S.ranking, S.performance, S.serviceAreas],
      [
        q("What must remain constant in a before/after grid?", "Query, grid points, settings/method, and comparable timing as much as practical.", "The measurement design and rank handling.", "Only the colors.", "Nothing; every grid is comparable.", "Controlled sampling makes trends interpretable."),
        q("Strong center, weak outer ring most directly suggests?", "Distance/proximity pressure, to be checked against competitor locations and relevance.", "A geographic visibility pattern.", "The website is deindexed.", "Add more service areas.", "The pattern is consistent with distance but still needs verification."),
        q("Weak results everywhere after a category change. First diagnosis?", "Check category relevance, profile status, verification, pin, edits, and timing.", "Review the change and account notifications.", "Buy reviews immediately.", "Create a duplicate.", "A material edit can alter eligibility/relevance or trigger review."),
        q("Which grid KPI is clearest for Local Pack coverage?", "Percentage of points ranking in the top three.", "Top-3 share with the raw grid.", "Average rank only.", "The brightest color.", "Top-three share maps to Pack visibility more directly."),
        q("How should not-found points be scored?", "Use a documented ceiling consistently, such as tool limit plus one, and also report not-found share.", "Keep the raw status visible.", "Delete them from the average.", "Score them as rank one.", "Consistent treatment prevents artificially strong averages."),
        q("Should branded and non-branded grids be combined?", "Usually no; they represent different demand and visibility problems.", "Report them separately.", "Yes, to improve the average.", "Brand searches are irrelevant.", "Brand findability and category acquisition answer different questions."),
        q("A competitor dominates one corner of the grid. What next?", "Check its legitimate location, category, prominence, and local context in that area.", "Inspect whether the pocket follows proximity or neighborhood demand.", "Report it as spam immediately.", "Move the client’s pin.", "A localized pocket needs location-aware diagnosis."),
        q("What is the biggest grid-reporting mistake?", "Presenting one scan as definitive causality or guaranteed market share.", "Ignoring query value, serviceability, and measurement context.", "Using a 5×5 grid.", "Showing competitors.", "Rank grids are samples, not business outcomes."),
        w("Interpret a 5×5 grid with ranks 2–5 near the center, 8–15 mid-grid, and 20+ at the edges.", "Describe distance pattern, competitor comparison, category/relevance checks, serviceability, prominence opportunities, limits, and next controlled scan."),
        w("Design a monthly local-rank monitoring protocol.", "Define priority queries, branded split, grid size/spacing, points, device/method, competitors, metrics, not-found handling, annotations, business outcomes, and change rules.")
      ]
    ),

    module(
      "measurement",
      "10. Performance, calls, clicks, queries, and attribution",
      "Turn GBP performance data into business decisions while respecting metric definitions and attribution limits.",
      ["Interpret profile metrics", "Build lead-quality reporting", "Avoid false causality"],
      [
        lesson("Available performance", "Verified profiles may report interactions, searches, views, directions, calls, website clicks, messages, bookings, products, menus, or offers depending on the business.", ["Not every metric appears for every profile.", "Search terms update monthly and can lag.", "Profile views count unique visitors under Google’s rules."]),
        lesson("Metric definitions", "Calls count call-button clicks, not necessarily answered or qualified calls.", ["Website clicks do not prove sessions or leads.", "Directions can include cancellations and spam adjustments.", "Google Ads and organic activity can both appear in performance data."]),
        lesson("Downstream outcomes", "Use call tracking, landing-page analytics, CRM or lead logs, qualification, estimates, booked jobs, and revenue.", ["Preserve the real business number and profile compliance.", "Use UTM tagging where appropriate.", "Reconcile reports rather than assuming one source is complete."]),
        lesson("Decision cadence", "Review trends, queries, actions, lead quality, review/media operations, rank grids, and changes together.", ["Account for seasonality and storms.", "Annotate edits and outages.", "Do not optimize to views alone."])
      ],
      ["Build a weekly GBP scorecard.", "Reconcile 30 call clicks with actual phone outcomes.", "Write a monthly client narrative using performance, grids, and jobs."],
      "You can distinguish visibility, interaction, lead, and customer metrics.",
      [S.performance, S.ranking, S.links],
      [
        q("What does the GBP Calls metric count?", "Clicks on the call button, not confirmed conversations or jobs.", "A profile interaction that needs downstream reconciliation.", "Every answered business call.", "Only qualified leads.", "The official metric is call-button clicks."),
        q("What does a website click prove?", "The profile link was clicked; site session and conversion still require separate measurement.", "A customer attempted to visit the website.", "A booked job.", "An organic-only visitor.", "The click is one funnel step."),
        q("Can performance data include Google Ads activity?", "Yes, Google says views, searches, and actions can include organic results and Google Ads.", "Separate channels with additional tracking where possible.", "No, it is always organic only.", "Only if LSA is active.", "Profile reporting is not a pure organic attribution system."),
        q("How are profile views counted?", "Unique visitors under Google’s daily/device/platform counting rules.", "A person is generally counted once per day under the metric logic.", "Every impression without limits.", "Exactly like Search Console impressions.", "Metric definitions matter when comparing reports."),
        q("Why may searches appear late?", "The searches metric updates near the start of the month and may take several days.", "Monthly reporting has known lag.", "The profile is suspended.", "Search terms are manually entered by the owner.", "Google documents update timing."),
        q("Which KPI best connects GBP to business value?", "Qualified leads and booked jobs traced from profile actions where possible.", "Calls/site actions reconciled with outcomes.", "Profile views.", "Number of posts.", "Downstream outcomes are closer to value."),
        q("What is a good UTM use?", "Tag the profile website link consistently so analytics can identify that click source.", "Document the convention and preserve a valid destination.", "Stuff city keywords into the URL.", "Redirect to an unrelated tracking domain.", "UTMs help attribution without changing business identity."),
        q("Storm season raises calls 80%. What should the report do?", "Separate seasonality, query mix, rank/visibility, capacity, and conversion outcomes.", "Annotate the event and compare appropriate periods.", "Claim optimization caused all growth.", "Ignore the increase.", "External demand and operational constraints must be considered."),
        w("Create a GBP reporting framework from views through revenue.", "Define profile metrics, call/site tracking, query data, rank grids, qualified lead stages, jobs, values, attribution caveats, cadence, and owners."),
        w("Explain why profile views rose while booked jobs fell.", "Generate hypotheses across query mix, geography, customer choice, call/site function, qualification, capacity, sales, tracking, seasonality, and competitors.")
      ]
    ),

    module(
      "recovery",
      "11. Duplicates, suggested edits, restrictions, suspensions, and appeals",
      "Protect profile continuity and respond to problems with evidence rather than panic.",
      ["Resolve duplicate and edit issues", "Prevent suspension", "Prepare disciplined appeals"],
      [
        lesson("Duplicates and ownership", "Resolve the authoritative profile instead of creating replacements.", ["Duplicates can split reviews and confuse display.", "Request ownership through official paths.", "Do not mark a legitimate competitor or client profile closed."]),
        lesson("Suggested and Google updates", "Profile information can change from business edits, public sources, user contributions, and Google systems.", ["Monitor notifications and public display.", "Keep evidence for important fields.", "Avoid simultaneous uncontrolled edits during diagnosis."]),
        lesson("Restrictions and suspension", "Policy violations can restrict content, access, or profile visibility.", ["Correct the underlying issue before appeal.", "Do not create another profile while an appeal is pending.", "Preserve screenshots, profile ID, documents, and timeline."]),
        lesson("Appeal discipline", "Use official appeal tools, select the right decision, and attach concise evidence promptly.", ["Google’s evidence workflow may impose time limits.", "Do not submit altered documents.", "Repeated unsupported appeals can complicate recovery."])
      ],
      ["Build a suspension-prevention checklist.", "Resolve three duplicate scenarios.", "Assemble a mock evidence packet and appeal narrative."],
      "You can protect the business and lead an evidence-based recovery without circumvention.",
      [S.duplicates, S.suspension, S.guidelines],
      [
        q("A duplicate profile exists with old reviews. Best first move?", "Determine the authoritative profile and use official duplicate/ownership resolution.", "Preserve evidence and avoid splitting activity further.", "Create a third profile.", "Report both as permanently closed.", "Duplicates require careful consolidation or ownership resolution."),
        q("The profile name changed without permission. What should you do?", "Check access, notifications, Google updates, public evidence, and correct the field through the profile.", "Document the change and review user access.", "Stuff more keywords into it.", "Delete the profile.", "Find the source and restore accurate identity."),
        q("A profile is suspended. First priority?", "Identify and correct the likely policy or eligibility issue before appealing.", "Capture the notice and current profile evidence.", "Create a replacement profile.", "Submit random documents immediately.", "Recovery begins with compliance diagnosis."),
        q("Should a new profile be created during an appeal?", "No; Google warns against creating another profile while the appeal is pending.", "Preserve the existing case and evidence.", "Yes, to keep ranking.", "Only with a different email.", "Replacement profiles can look like circumvention."),
        q("What belongs in an evidence packet?", "Business registration, licenses, signage/location proof, utility or operational evidence, website, profile ID, and a clear issue-specific narrative.", "Authentic documents matching the business.", "Edited screenshots.", "Competitor complaints.", "Evidence should establish eligibility and accurate representation."),
        q("Why stage profile edits?", "To reduce risk, isolate effects, preserve verification, and understand what changed.", "Especially for name, address, category, and ownership changes.", "Google permits only one edit per year.", "Every edit improves rank.", "Material edits can trigger review and confound diagnosis."),
        q("A legitimate negative review remains after reporting. What now?", "Accept the policy decision or use the documented one-time appeal if evidence supports it, then respond professionally.", "Do not confuse disagreement with violation.", "Report it every day.", "Threaten the reviewer publicly.", "Removal follows policy, not business preference."),
        q("What is the safest anti-suspension strategy?", "Maintain real-world eligibility, truthful fields, secure access, documented evidence, and controlled changes.", "Audit high-risk fields regularly.", "Never edit anything.", "Use multiple backup fake profiles.", "Prevention is continuous compliance."),
        w("Write a suspension-response SOP.", "Include freeze on risky edits, notice capture, profile ID, access audit, guideline comparison, correction, evidence, owner approval, appeal, status log, communication, and no duplicate."),
        w("Diagnose a roofer suspended after changing name, category, address, and website in one day.", "Review real-world name proof, address eligibility/signage, business type, category truth, destination, verification, change history, correction order, evidence, and appeal timing.")
      ]
    ),

    module(
      "roofing-capstone",
      "12. Roofing strategy, consultative optimization, and capstone",
      "Integrate policy, ranking, profile quality, measurement, and client communication for a roofing business.",
      ["Audit a roofing profile", "Prioritize the right first move", "Explain uncertainty confidently"],
      [
        lesson("Roofing realities", "Replacement, repair, emergency, storm, commercial, and material services create different search intent and customer expectations.", ["Categories and services should reflect real operations.", "Storm demand affects hours, capacity, and review experiences.", "Service-area ambition must match crews and response."]),
        lesson("Audit sequence", "Start with eligibility and access, then identity, categories, services/areas, reviews/media, website/prominence, rank patterns, performance, and risks.", ["Fix blockers before cosmetic optimization.", "Use screenshots and evidence.", "End with three priorities, not fifty equal tasks."]),
        lesson("Consultative judgment", "Recommend the smallest action that improves customer value or diagnostic certainty.", ["Do not sell fake locations.", "Do not promise Pack rank.", "Separate client-controlled inputs from Google-controlled outcomes."]),
        lesson("Mastery standard", "A master can build, audit, monitor, protect, measure, and explain a profile—and can say not yet.", ["Use current official sources.", "Complete a capstone with inspectable evidence.", "Seek supervised practice on a real profile."])
      ],
      ["Complete the roofing capstone audit.", "Record a five-minute client walkthrough.", "Defend one recommendation and one deliberate non-action."],
      "You can advise a roofing client without risking the profile or overstating the evidence.",
      [S.guidelines, S.ranking, S.performance, S.suspension],
      [
        q("What should a roofing GBP audit inspect first?", "Eligibility, ownership, verification, business type, and high-risk identity fields.", "Profile safety before growth tactics.", "Post frequency.", "Photo filenames.", "An unsafe or inaccessible profile blocks everything else."),
        q("A roofer wants profiles in six nearby cities. Best response?", "Only create profiles for legitimate separately staffed eligible locations; use one truthful SAB otherwise.", "Explain proximity limits and compliant alternatives.", "Create six hidden-address profiles.", "Rent six mailboxes.", "City ambition does not create location eligibility."),
        q("Which first priority is strongest?", "The highest-confidence issue affecting safety, relevance, customer action, or measurement.", "A sequenced dependency with business impact.", "The easiest field to fill.", "Whatever the agency sells.", "Prioritization should follow evidence and risk."),
        q("A competitor has a closer office and 800 reviews. What can the client do?", "Acknowledge the structural gap, improve relevance, authentic reputation, website/prominence, conversion, and target markets realistically.", "Choose achievable competitive moves.", "Move the map pin without moving.", "Buy 900 reviews.", "The response must respect distance and policy."),
        q("After a hailstorm, the profile gets more calls but response suffers. Recommendation?", "Align hours, capacity, call handling, updates, and service messaging before seeking more demand.", "Protect customer experience and review quality.", "Add more service areas.", "Claim every city is served 24/7.", "Operations and profile promises must align."),
        q("Which client statement is strongest?", "We can improve the profile and local presence, but Google determines rank and proximity remains a real constraint.", "We will measure the search-to-job path.", "We guarantee Local Pack position one.", "Adding services guarantees calls.", "Trust comes from clear control boundaries."),
        q("What should the capstone deliver?", "Evidence, risk assessment, rank diagnosis, performance interpretation, top priorities, operating plan, and client explanation.", "A usable standalone decision product.", "A 100-item checklist with no ranking.", "A sales proposal only.", "Mastery integrates analysis and action."),
        q("When should Oside say “not yet”?", "When eligibility, ownership, evidence, operations, or policy risk makes optimization unsafe.", "When prerequisites must be repaired first.", "Never.", "Only when the profile has no reviews.", "Restraint is part of account stewardship."),
        w("Outline a complete roofing GBP audit.", "Cover eligibility/access, verification, identity, categories/services/areas, hours/links, reviews/media/posts, website/prominence, competitors, grids, performance, tracking, duplicates/edits, risk, priorities, owners, and proof."),
        w("Give a two-minute recommendation to a roofer with a compliant profile but weak visibility outside its immediate area.", "Explain distance honestly, use grid/competitor evidence, recommend realistic relevance/prominence/conversion actions, define priority markets, and avoid fake-location or ranking promises.")
      ]
    )
  ];

  const total = window.GBP_MODULES.reduce((sum, item) => sum + item.questions.length, 0);
  if (window.GBP_MODULES.length !== 12 || total !== 120) {
    console.error(`GBP content error: expected 12 modules and 120 questions; found ${window.GBP_MODULES.length} and ${total}.`);
  }
})();

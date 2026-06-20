(() => {
  const STORAGE_KEY = "osideFounderDiagnostic.v1";
  const domains = window.OSIDE_DOMAINS || [];
  const totalQuestions = domains.reduce((sum, domain) => sum + domain.questions.length, 0);
  const maxScore = totalQuestions * 5;
  const app = document.querySelector("#app");
  const restartButton = document.querySelector("#restart-button");
  const saveStatus = document.querySelector("#save-status");

  const defaultState = {
    started: false,
    currentSection: 0,
    answers: {},
    completedSections: [],
    view: "intro"
  };

  let state = loadState();

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved ? { ...defaultState, ...saved } : { ...defaultState };
    } catch {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    saveStatus.textContent = "Saved locally";
    saveStatus.animate(
      [{ opacity: 0.4 }, { opacity: 1 }],
      { duration: 240, easing: "ease-out" }
    );
  }

  function escapeHTML(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function getAnswer(questionId) {
    return state.answers[questionId] || {};
  }

  function updateAnswer(questionId, patch) {
    state.answers[questionId] = { ...getAnswer(questionId), ...patch };
    saveState();
    updateProgressHeader();
  }

  function answeredCount() {
    return Object.values(state.answers).filter(answer => Number.isFinite(answer.score)).length;
  }

  function confidentCount() {
    return Object.values(state.answers).filter(answer => Number.isFinite(answer.confidence)).length;
  }

  function domainResult(domainItem) {
    const scores = domainItem.questions.map(question => getAnswer(question.id).score);
    const earned = scores.reduce((sum, score) => sum + (Number.isFinite(score) ? score : 0), 0);
    const possible = domainItem.questions.length * 5;
    const percent = possible ? Math.round((earned / possible) * 100) : 0;
    const blindSpots = domainItem.questions.filter(question => {
      const answer = getAnswer(question.id);
      return answer.confidence === 3 && Number.isFinite(answer.score) && answer.score <= 1;
    });
    return { earned, possible, percent, band: masteryBand(percent), blindSpots };
  }

  function masteryBand(percent) {
    if (percent >= 90) return "Mastery / client-ready";
    if (percent >= 75) return "Strong / needs sharpening";
    if (percent >= 60) return "Functional / blind spots likely";
    if (percent >= 40) return "Weak / needs structured practice";
    return "Not ready";
  }

  function bandClass(percent) {
    if (percent >= 75) return "yes";
    if (percent >= 60) return "conditional";
    return "no";
  }

  function overallResult() {
    const earned = Object.values(state.answers)
      .reduce((sum, answer) => sum + (Number.isFinite(answer.score) ? answer.score : 0), 0);
    const percent = Math.round((earned / maxScore) * 100);
    return { earned, possible: maxScore, percent, band: masteryBand(percent) };
  }

  function render() {
    if (!state.started || state.view === "intro") {
      renderIntro();
    } else if (state.view === "section") {
      renderSection();
    } else if (state.view === "summary") {
      renderSectionSummary();
    } else if (state.view === "report") {
      renderReport();
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function renderIntro() {
    const hasProgress = answeredCount() > 0;
    app.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <p class="eyebrow">Founder readiness · Customer #1</p>
          <h1>Can you see the leak, explain it, and recommend the right first fix?</h1>
          <p class="lede">A hard, practical diagnostic for selling and delivering Oside Digital’s first Google Search Ownership Audit. This tests judgment—not vocabulary.</p>
          <div class="button-row">
            <button id="start-button" class="button" type="button">${hasProgress ? "Resume diagnostic" : "Start diagnostic"}</button>
            ${hasProgress ? '<button id="new-attempt-button" class="button button-secondary" type="button">Start over</button>' : ""}
          </div>
          <p class="muted">${hasProgress ? `${answeredCount()} of ${totalQuestions} questions scored. Your work is saved on this device.` : "Set aside 90–120 minutes. Take the first attempt without studying."}</p>
        </div>
        <aside class="hero-panel">
          <p class="eyebrow">Assessment shape</p>
          <div class="stat-grid">
            <div class="stat"><strong>120</strong><span>practical questions</span></div>
            <div class="stat"><strong>20</strong><span>skill domains</span></div>
            <div class="stat"><strong>0–5</strong><span>points each</span></div>
            <div class="stat"><strong>30</strong><span>day roadmap</span></div>
          </div>
          <ul class="principles">
            <li>Four judgment questions and two written cases per domain.</li>
            <li>Confidence scoring detects false confidence.</li>
            <li>Readiness is based on customer-one skills, not mature-agency credentials.</li>
            <li>Everything stays in your browser.</li>
          </ul>
        </aside>
      </section>
      <section class="report-section">
        <p class="eyebrow">What you are testing</p>
        <h2>Useful insight under real founder constraints</h2>
        <div class="report-grid">
          <article class="report-card"><h3>Sell responsibly</h3><p class="muted">Frame a low-risk audit, discover the business problem, and avoid promises you cannot control.</p></article>
          <article class="report-card"><h3>Deliver a decision</h3><p class="muted">Map the SERP, locate the likely leak, and turn evidence into a prioritized action.</p></article>
          <article class="report-card"><h3>Earn the next step</h3><p class="muted">Recommend implementation only when the diagnosis, measurement, and client capacity support it.</p></article>
        </div>
      </section>
    `;

    document.querySelector("#start-button").addEventListener("click", () => {
      state.started = true;
      state.view = state.completedSections.length === domains.length ? "report" : "section";
      saveState();
      render();
    });

    document.querySelector("#new-attempt-button")?.addEventListener("click", resetDiagnostic);
  }

  function progressMarkup() {
    const answered = answeredCount();
    const percent = Math.round((answered / totalQuestions) * 100);
    return `
      <div class="progress-wrap">
        <div class="progress-labels">
          <span>${answered} of ${totalQuestions} scored</span>
          <span>${percent}% complete</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Diagnostic progress" aria-valuemin="0" aria-valuemax="${totalQuestions}" aria-valuenow="${answered}">
          <div id="progress-fill" class="progress-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }

  function updateProgressHeader() {
    const answered = answeredCount();
    const percent = Math.round((answered / totalQuestions) * 100);
    const fill = document.querySelector("#progress-fill");
    const labels = document.querySelector(".progress-labels");
    if (fill) {
      fill.style.width = `${percent}%`;
      fill.parentElement.setAttribute("aria-valuenow", answered);
    }
    if (labels) {
      labels.innerHTML = `<span>${answered} of ${totalQuestions} scored</span><span>${percent}% complete</span>`;
    }
  }

  function renderSection() {
    const domainItem = domains[state.currentSection];
    app.innerHTML = `
      ${progressMarkup()}
      <header class="section-header">
        <div>
          <p class="eyebrow">Domain ${state.currentSection + 1} of ${domains.length}</p>
          <h2>${escapeHTML(domainItem.name)}</h2>
          <p class="section-description">${escapeHTML(domainItem.description)}</p>
        </div>
        <span class="section-count">6 questions · 30 points</span>
      </header>
      <div class="question-list">
        ${domainItem.questions.map((question, index) => renderQuestion(question, index)).join("")}
      </div>
      <p id="validation-message" class="validation" role="alert"></p>
      <div class="section-footer">
        <button id="previous-button" class="button button-secondary" type="button" ${state.currentSection === 0 ? "disabled" : ""}>Previous domain</button>
        <button id="complete-section-button" class="button" type="button">Score this domain</button>
      </div>
    `;

    bindQuestionEvents(domainItem);
    document.querySelector("#previous-button").addEventListener("click", () => {
      state.currentSection -= 1;
      state.view = "section";
      saveState();
      render();
    });
    document.querySelector("#complete-section-button").addEventListener("click", () => completeSection(domainItem));
  }

  function renderQuestion(question, index) {
    const answer = getAnswer(question.id);
    const typeLabel = question.type === "written" ? "Written · self-scored" : question.format;
    return `
      <article class="question-card" data-question-id="${question.id}">
        <div class="question-meta">
          <span>Question ${index + 1} of 6</span>
          <span>${escapeHTML(typeLabel)}</span>
        </div>
        <h3>${escapeHTML(question.prompt)}</h3>
        ${question.type === "choice" ? renderOptions(question, answer) : renderWritten(question, answer)}
        ${renderConfidence(question, answer)}
      </article>
    `;
  }

  function renderOptions(question, answer) {
    return `
      <div class="options">
        ${question.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="${question.id}" value="${optionIndex}" ${answer.optionIndex === optionIndex ? "checked" : ""}>
            <span>${escapeHTML(option.text)}</span>
          </label>
        `).join("")}
      </div>
      <div class="choice-feedback" aria-live="polite">
        ${Number.isFinite(answer.score) ? choiceFeedback(question, answer.score) : ""}
      </div>
    `;
  }

  function choiceFeedback(question, score) {
    const label = score === 5 ? "Best judgment" : score === 3 ? "Acceptable, but incomplete" : score === 1 ? "Weak judgment" : "Dangerous or wrong";
    return `
      <div class="rubric">
        <p><strong>${label} · ${score}/5</strong></p>
        <p>${escapeHTML(question.explanation)}</p>
      </div>
    `;
  }

  function renderWritten(question, answer) {
    const revealed = Boolean(answer.rubricRevealed);
    return `
      <textarea aria-label="Written answer" placeholder="Write your answer before revealing the rubric.">${escapeHTML(answer.text || "")}</textarea>
      <div class="button-row">
        <button class="button button-secondary reveal-rubric" type="button" ${!(answer.text || "").trim() ? "disabled" : ""}>${revealed ? "Rubric revealed" : "Reveal self-score rubric"}</button>
      </div>
      <div class="rubric-area" ${revealed ? "" : "hidden"}>
        <div class="rubric">
          <p><strong>What a strong answer should cover</strong></p>
          <p>${escapeHTML(question.guidance)}</p>
          <div class="rubric-grid">
            <span><strong>5</strong> — Expert / client-ready</span>
            <span><strong>4</strong> — Strong but could sharpen</span>
            <span><strong>3</strong> — Basically correct but incomplete</span>
            <span><strong>2</strong> — Vague or tactical without diagnosis</span>
            <span><strong>1</strong> — Mostly misses the point</span>
            <span><strong>0</strong> — Harmful or misleading</span>
          </div>
        </div>
        <div class="score-field">
          <label for="score-${question.id}">Self-score honestly</label>
          <select id="score-${question.id}" class="written-score">
            <option value="">Select a score…</option>
            ${[5, 4, 3, 2, 1, 0].map(score => `<option value="${score}" ${answer.score === score ? "selected" : ""}>${score} / 5</option>`).join("")}
          </select>
        </div>
      </div>
    `;
  }

  function renderConfidence(question, answer) {
    return `
      <fieldset class="confidence-field">
        <label>How confident were you before seeing feedback?</label>
        <div class="confidence-options">
          ${[[1, "Low"], [2, "Medium"], [3, "High"]].map(([value, label]) => `
            <label><input type="radio" name="confidence-${question.id}" value="${value}" ${answer.confidence === value ? "checked" : ""}> ${label}</label>
          `).join("")}
        </div>
      </fieldset>
    `;
  }

  function bindQuestionEvents(domainItem) {
    domainItem.questions.forEach(question => {
      const card = document.querySelector(`[data-question-id="${question.id}"]`);
      if (question.type === "choice") {
        card.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
          input.addEventListener("change", event => {
            const optionIndex = Number(event.target.value);
            const score = question.options[optionIndex].score;
            updateAnswer(question.id, { optionIndex, score });
            card.querySelector(".choice-feedback").innerHTML = choiceFeedback(question, score);
          });
        });
      } else {
        const textarea = card.querySelector("textarea");
        const revealButton = card.querySelector(".reveal-rubric");
        const rubricArea = card.querySelector(".rubric-area");
        textarea.addEventListener("input", event => {
          updateAnswer(question.id, { text: event.target.value });
          revealButton.disabled = !event.target.value.trim();
        });
        revealButton.addEventListener("click", () => {
          updateAnswer(question.id, { rubricRevealed: true });
          rubricArea.hidden = false;
          revealButton.textContent = "Rubric revealed";
          card.querySelector(".written-score").focus();
        });
        card.querySelector(".written-score")?.addEventListener("change", event => {
          const value = event.target.value;
          updateAnswer(question.id, { score: value === "" ? undefined : Number(value) });
        });
      }

      card.querySelectorAll(`input[name="confidence-${question.id}"]`).forEach(input => {
        input.addEventListener("change", event => updateAnswer(question.id, { confidence: Number(event.target.value) }));
      });
    });
  }

  function completeSection(domainItem) {
    const incomplete = domainItem.questions.filter(question => {
      const answer = getAnswer(question.id);
      const missingScore = !Number.isFinite(answer.score);
      const missingConfidence = !Number.isFinite(answer.confidence);
      const missingText = question.type === "written" && !(answer.text || "").trim();
      return missingScore || missingConfidence || missingText;
    });

    if (incomplete.length) {
      const message = document.querySelector("#validation-message");
      message.textContent = `Complete the answer, score, and confidence rating for ${incomplete.length} remaining question${incomplete.length === 1 ? "" : "s"}.`;
      document.querySelector(`[data-question-id="${incomplete[0].id}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    if (!state.completedSections.includes(domainItem.id)) {
      state.completedSections.push(domainItem.id);
    }
    state.view = "summary";
    saveState();
    render();
  }

  function renderSectionSummary() {
    const domainItem = domains[state.currentSection];
    const result = domainResult(domainItem);
    const isLast = state.currentSection === domains.length - 1;
    app.innerHTML = `
      ${progressMarkup()}
      <section class="section-summary">
        <p class="eyebrow">Domain complete</p>
        <h2>${escapeHTML(domainItem.name)}</h2>
        <div class="score-orb">
          <div><strong>${result.percent}%</strong><span>${result.earned} / ${result.possible}</span></div>
        </div>
        <h3>${result.band}</h3>
        <p class="muted">${summaryMessage(result.percent, result.blindSpots.length)}</p>
        ${result.blindSpots.length ? `<p class="callout"><strong>${result.blindSpots.length} blind spot${result.blindSpots.length === 1 ? "" : "s"} detected:</strong> high confidence paired with a 0–1 score. Review the feedback before the final roadmap.</p>` : ""}
        <div class="button-row" style="justify-content:center">
          <button id="review-section-button" class="button button-secondary" type="button">Review answers</button>
          <button id="next-section-button" class="button" type="button">${isLast ? "See final report" : "Continue to next domain"}</button>
        </div>
      </section>
    `;
    document.querySelector("#review-section-button").addEventListener("click", () => {
      state.view = "section";
      saveState();
      render();
    });
    document.querySelector("#next-section-button").addEventListener("click", () => {
      if (isLast) {
        state.view = "report";
      } else {
        state.currentSection += 1;
        state.view = "section";
      }
      saveState();
      render();
    });
  }

  function summaryMessage(percent, blindSpotCount) {
    if (percent >= 90) return "Client-ready performance. Keep pressure-testing it with real markets and live explanations.";
    if (percent >= 75) return "Strong foundation. Sharpen the misses before you make this a centerpiece of the offer.";
    if (percent >= 60) return blindSpotCount ? "Functional, but false confidence is hiding at least one important gap." : "Functional, with enough misses to justify focused practice.";
    if (percent >= 40) return "This domain needs structured practice before you rely on it with a first customer.";
    return "Treat this as a prerequisite domain. Study, drill, and retest before using it in client work.";
  }

  function readinessResult(domainIds) {
    const results = domainIds.map(id => domainResult(domains.find(item => item.id === id)));
    const average = Math.round(results.reduce((sum, result) => sum + result.percent, 0) / results.length);
    const minimum = Math.min(...results.map(result => result.percent));
    const weakNames = domainIds
      .map(id => domains.find(item => item.id === id))
      .filter(item => domainResult(item).percent < 60)
      .map(item => item.name);

    if (average >= 80 && minimum >= 60) {
      return { status: "Yes", className: "yes", average, reason: "The required skill stack is consistently strong enough for a carefully scoped first-customer engagement." };
    }
    if (average >= 65 && minimum >= 40) {
      return { status: "Conditional", className: "conditional", average, reason: weakNames.length ? `Proceed only with support or tighter scope; strengthen ${weakNames.slice(0, 2).join(" and ")}.` : "The foundation is functional, but use checklists, narrow scope, and review on weaker decisions." };
    }
    return { status: "No", className: "no", average, reason: weakNames.length ? `Build evidence and practice first, especially in ${weakNames.slice(0, 2).join(" and ")}.` : "The prerequisite stack is not yet consistent enough to use safely with customer #1." };
  }

  function reportData() {
    const results = domains.map(item => ({ domain: item, ...domainResult(item) }));
    const sortedHigh = [...results].sort((a, b) => b.percent - a.percent);
    const sortedLow = [...results].sort((a, b) => {
      if (b.blindSpots.length !== a.blindSpots.length) return b.blindSpots.length - a.blindSpots.length;
      return a.percent - b.percent;
    });
    const sell = readinessResult(["serp-pattern", "diagnostic-thinking", "roofing-intent", "prioritization", "founder-explanation", "consultative-sales"]);
    const deliver = readinessResult(["serp-pattern", "diagnostic-thinking", "local-search", "competitive-analysis", "search-ownership", "prioritization", "measurement", "visual-communication"]);
    const recommend = readinessResult(["diagnostic-thinking", "offer-funnel", "prioritization", "paid-search", "landing-pages", "measurement", "business-model", "consultative-sales"]);
    return {
      overall: overallResult(),
      results,
      strengths: sortedHigh.slice(0, 5),
      blindSpots: sortedLow.slice(0, 5),
      weakest: [...results].sort((a, b) => a.percent - b.percent).slice(0, 5),
      weakDomains: results.filter(result => result.percent < 75).sort((a, b) => a.percent - b.percent),
      sell, deliver, recommend
    };
  }

  function renderReport() {
    const data = reportData();
    app.innerHTML = `
      <header class="report-header">
        <p class="eyebrow">Final founder-readiness report</p>
        <div class="report-hero">
          <div class="report-score">
            <strong>${data.overall.percent}%</strong>
            <span>${data.overall.earned} / ${data.overall.possible} points</span>
          </div>
          <div>
            <h1>${data.overall.band}</h1>
            <p class="lede">${overallMessage(data.overall.percent)}</p>
            <div class="button-row">
              <button id="export-button" class="button" type="button">Export Markdown</button>
              <button id="print-button" class="button button-secondary" type="button">Print report</button>
            </div>
          </div>
        </div>
      </header>

      <section class="report-grid">
        ${readinessCard("Ready to sell the audit?", data.sell)}
        ${readinessCard("Ready to deliver the audit?", data.deliver)}
        ${readinessCard("Ready to recommend services?", data.recommend)}
      </section>

      <section class="report-section">
        <p class="eyebrow">Scorecard</p>
        <h2>Domain-by-domain results</h2>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Domain</th><th>Score</th><th>Band</th><th>Blind spots</th></tr></thead>
            <tbody>
              ${data.results.map(result => `
                <tr>
                  <td><strong>${escapeHTML(result.domain.name)}</strong></td>
                  <td>${result.percent}%</td>
                  <td><span class="status-pill status-${bandClass(result.percent)}">${escapeHTML(result.band)}</span></td>
                  <td>${result.blindSpots.length}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="report-section two-column">
        <article class="report-card">
          <p class="eyebrow">Top five</p>
          <h2>Strengths</h2>
          <ol class="rank-list">
            ${data.strengths.map(result => `<li><span>${escapeHTML(result.domain.name)}</span><strong>${result.percent}%</strong></li>`).join("")}
          </ol>
        </article>
        <article class="report-card">
          <p class="eyebrow">Top five</p>
          <h2>Blind spots</h2>
          <ol class="rank-list">
            ${data.blindSpots.map(result => `
              <li>
                <span>${escapeHTML(result.domain.name)}${result.blindSpots.length ? ` <small class="muted">(${result.blindSpots.length} high-confidence miss${result.blindSpots.length === 1 ? "" : "es"})</small>` : ""}</span>
                <strong>${result.percent}%</strong>
              </li>
            `).join("")}
          </ol>
          <p class="muted">High-confidence 0–1 answers rank first; lowest-scoring domains fill any remaining places.</p>
        </article>
      </section>

      <section class="report-section">
        <p class="eyebrow">Your next month</p>
        <h2>Custom 30-day improvement plan</h2>
        <div class="report-card">
          ${buildThirtyDayPlan(data.weakest)}
        </div>
      </section>

      <section class="report-section two-column">
        <article class="report-card">
          <p class="eyebrow">Practice</p>
          <h2>Drills</h2>
          <ul>${uniqueItems(data.weakest.flatMap(item => item.domain.roadmap.drills)).slice(0, 12).map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
        </article>
        <article class="report-card">
          <p class="eyebrow">Study</p>
          <h2>Topics next</h2>
          <ul>${data.weakest.map(item => `<li><strong>${escapeHTML(item.domain.name)}:</strong> ${escapeHTML(item.domain.roadmap.study)}</li>`).join("")}</ul>
        </article>
      </section>

      <section class="report-section">
        <p class="eyebrow">Weak-domain detail</p>
        <h2>Mastery roadmap</h2>
        <div class="domain-roadmap">
          ${data.weakDomains.length ? data.weakDomains.map(result => roadmapCard(result)).join("") : '<p class="empty-note">No domain scored below 75%. Keep practicing against live markets and tighten any high-confidence misses.</p>'}
        </div>
      </section>

      <div class="button-row">
        <button id="return-button" class="button button-secondary" type="button">Review domains</button>
        <button id="restart-report-button" class="button button-danger" type="button">Begin a new attempt</button>
      </div>
    `;

    document.querySelector("#export-button").addEventListener("click", () => exportMarkdown(data));
    document.querySelector("#print-button").addEventListener("click", () => window.print());
    document.querySelector("#return-button").addEventListener("click", () => {
      state.currentSection = 0;
      state.view = "section";
      saveState();
      render();
    });
    document.querySelector("#restart-report-button").addEventListener("click", resetDiagnostic);
  }

  function readinessCard(title, result) {
    return `
      <article class="report-card readiness-${result.className}">
        <p class="eyebrow">${escapeHTML(title)}</p>
        <h2><span class="status-pill status-${result.className}">${result.status}</span></h2>
        <p>${escapeHTML(result.reason)}</p>
        <p class="muted">Prerequisite average: ${result.average}%</p>
      </article>
    `;
  }

  function overallMessage(percent) {
    if (percent >= 90) return "You are ready to use the audit with a first customer while continuing to learn from live delivery.";
    if (percent >= 75) return "You have a strong founder stack. Tighten the lowest domains and keep the first engagement deliberately scoped.";
    if (percent >= 60) return "You have a functional foundation, but the weakest five domains should drive your next month before you broaden the offer.";
    if (percent >= 40) return "Pause the sales push long enough to build a repeatable diagnostic method and stronger proof of judgment.";
    return "Use this result as a study map. Practice with mock markets before putting the audit in front of a paying roofer.";
  }

  function buildThirtyDayPlan(weakest) {
    const [one, two, three, four, five] = weakest;
    return `
      <div class="plan-week">
        <h3>Days 1–7 · Diagnose the weakest pair</h3>
        <p>Focus on <strong>${escapeHTML(one.domain.name)}</strong> and <strong>${escapeHTML(two.domain.name)}</strong>. Study: ${escapeHTML(one.domain.roadmap.study)} Complete at least two drills from each domain.</p>
      </div>
      <div class="plan-week">
        <h3>Days 8–14 · Build the next layer</h3>
        <p>Focus on <strong>${escapeHTML(three.domain.name)}</strong> and <strong>${escapeHTML(four.domain.name)}</strong>. Produce one visible artifact—a map, page critique, measurement plan, or recorded explanation—for each.</p>
      </div>
      <div class="plan-week">
        <h3>Days 15–21 · Integrate the fifth weakness</h3>
        <p>Focus on <strong>${escapeHTML(five.domain.name)}</strong>, then run two timed mock audits that force all five weak domains to work together.</p>
      </div>
      <div class="plan-week">
        <h3>Days 22–30 · Prove readiness</h3>
        <p>Deliver one complete mock audit in under 90 minutes. Support the top three findings with evidence, record a five-minute walkthrough, ask a non-marketer to repeat the diagnosis, and retake these five sections.</p>
      </div>
    `;
  }

  function roadmapCard(result) {
    const roadmap = result.domain.roadmap;
    return `
      <details class="domain-card" ${result.percent < 60 ? "open" : ""}>
        <summary>${escapeHTML(result.domain.name)} · ${result.percent}% · ${escapeHTML(result.band)}</summary>
        <div class="roadmap-grid">
          <div class="roadmap-item"><h4>What the weakness means</h4><p>${escapeHTML(roadmap.meaning)}</p></div>
          <div class="roadmap-item"><h4>Why it matters for customer #1</h4><p>${escapeHTML(roadmap.why)}</p></div>
          <div class="roadmap-item"><h4>What to study</h4><p>${escapeHTML(roadmap.study)}</p></div>
          <div class="roadmap-item"><h4>What to practice</h4><p>${escapeHTML(roadmap.practice)}</p></div>
          <div class="roadmap-item"><h4>Proof of mastery</h4><p>${escapeHTML(roadmap.proof)}</p></div>
          <div class="roadmap-item"><h4>Three drills</h4><ul>${roadmap.drills.map(drill => `<li>${escapeHTML(drill)}</li>`).join("")}</ul></div>
        </div>
      </details>
    `;
  }

  function uniqueItems(items) {
    return [...new Set(items)];
  }

  function markdownReport(data) {
    const line = text => `${text}\n`;
    let md = "";
    md += line("# Oside Digital Founder Skills Diagnostic");
    md += line(`_Exported ${new Date().toLocaleString()}_`);
    md += line("");
    md += line("## Overall result");
    md += line("");
    md += line(`**${data.overall.percent}% — ${data.overall.band}**`);
    md += line("");
    md += line(overallMessage(data.overall.percent));
    md += line("");
    md += line("## Readiness");
    md += line("");
    md += line("| Decision | Result | Prerequisite average | Reason |");
    md += line("|---|---:|---:|---|");
    [
      ["Ready to sell the audit?", data.sell],
      ["Ready to deliver the audit?", data.deliver],
      ["Ready to recommend services?", data.recommend]
    ].forEach(([label, result]) => {
      md += line(`| ${label} | ${result.status} | ${result.average}% | ${result.reason} |`);
    });
    md += line("");
    md += line("## Domain scores");
    md += line("");
    md += line("| Domain | Score | Band | Blind spots |");
    md += line("|---|---:|---|---:|");
    data.results.forEach(result => {
      md += line(`| ${result.domain.name} | ${result.percent}% | ${result.band} | ${result.blindSpots.length} |`);
    });
    md += line("");
    md += line("## Top five strengths");
    md += line("");
    data.strengths.forEach((result, index) => { md += line(`${index + 1}. ${result.domain.name} — ${result.percent}%`); });
    md += line("");
    md += line("## Top five blind spots");
    md += line("");
    data.blindSpots.forEach((result, index) => { md += line(`${index + 1}. ${result.domain.name} — ${result.percent}% (${result.blindSpots.length} high-confidence misses)`); });
    md += line("");
    md += line("## 30-day plan");
    md += line("");
    const [one, two, three, four, five] = data.weakest;
    md += line(`- **Days 1–7:** ${one.domain.name} and ${two.domain.name}. Study and complete two drills from each.`);
    md += line(`- **Days 8–14:** ${three.domain.name} and ${four.domain.name}. Produce one visible practice artifact for each.`);
    md += line(`- **Days 15–21:** ${five.domain.name}. Run two timed mock audits integrating all five weaknesses.`);
    md += line("- **Days 22–30:** Deliver a complete mock audit in under 90 minutes, record a five-minute walkthrough, get teach-back feedback, and retake the weak sections.");
    md += line("");
    md += line("## Drills");
    md += line("");
    uniqueItems(data.weakest.flatMap(item => item.domain.roadmap.drills)).slice(0, 12).forEach(item => { md += line(`- ${item}`); });
    md += line("");
    md += line("## Topics to study next");
    md += line("");
    data.weakest.forEach(item => { md += line(`- **${item.domain.name}:** ${item.domain.roadmap.study}`); });
    md += line("");
    md += line("## Mastery roadmap");
    md += line("");
    data.weakDomains.forEach(result => {
      const r = result.domain.roadmap;
      md += line(`### ${result.domain.name} — ${result.percent}%`);
      md += line("");
      md += line(`- **What it means:** ${r.meaning}`);
      md += line(`- **Why it matters:** ${r.why}`);
      md += line(`- **Study:** ${r.study}`);
      md += line(`- **Practice:** ${r.practice}`);
      md += line(`- **Proof of mastery:** ${r.proof}`);
      r.drills.forEach(drill => { md += line(`  - ${drill}`); });
      md += line("");
    });
    return md;
  }

  function exportMarkdown(data) {
    const blob = new Blob([markdownReport(data)], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `oside-founder-diagnostic-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function resetDiagnostic() {
    if (!window.confirm("Clear all saved answers and begin a new attempt?")) return;
    localStorage.removeItem(STORAGE_KEY);
    state = { ...defaultState };
    render();
  }

  restartButton.addEventListener("click", resetDiagnostic);
  render();
})();

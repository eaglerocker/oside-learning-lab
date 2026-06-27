(() => {
  const KEY = "osideLsaMastery.v1";
  const modules = window.LSA_MODULES || [];
  const app = document.querySelector("#app");
  const saveStatus = document.querySelector("#save-status");
  const totalQuestions = modules.reduce((sum, item) => sum + item.questions.length, 0);
  const maxPoints = totalQuestions * 5;

  const defaultState = {
    view: "dashboard",
    moduleIndex: 0,
    diagnosticIndex: 0,
    answers: {},
    completedLessons: [],
    completedDiagnostic: [],
    completedLabs: [],
    labNotes: {}
  };
  let state = load();

  const labs = [
    {
      id: "launch-readiness",
      title: "Launch-readiness gate",
      description: "Decide whether a roofing advertiser is ready to enter the auction.",
      task: "Create a yes/no evidence checklist for eligibility, documents, services, areas, unit economics, call coverage, lead tracking, capacity, and expectations. State the three conditions that would force a delayed launch.",
      proof: "A reviewer can reach the same go/no-go decision from your evidence."
    },
    {
      id: "account-blueprint",
      title: "Account blueprint",
      description: "Translate business reality into settings.",
      task: "Specify industries, job types, broad search choice, service areas, exclusions, hours, contact modes, budget, bid approach, profile proof, and access owners for a hypothetical roofer.",
      proof: "Every setting has a business reason and an owner."
    },
    {
      id: "economics",
      title: "Lead-economics calculator",
      description: "Calculate a defensible raw-lead ceiling.",
      task: "Use the calculator, then explain the result and add a margin of safety.",
      proof: "You can connect raw CPL to qualification, close rate, and allowable booked-job acquisition cost.",
      calculator: true
    },
    {
      id: "lead-review",
      title: "Lead-quality review",
      description: "Separate platform validity from business desirability.",
      task: "Classify ten real or simulated leads by charge status, service/geo fit, qualification, response, appointment, booking, loss reason, and feedback action.",
      proof: "Your recommendation changes based on patterns, not one irritating lead."
    },
    {
      id: "underdelivery",
      title: "Underdelivery diagnosis",
      description: "Investigate an active account with few leads.",
      task: "Work in order: status and verification → schedule and billing → targeting and demand → bid/budget → auction/profile → contact function → reporting. Record the first confirmed constraint.",
      proof: "You avoid changing spend before locating the broken stage."
    },
    {
      id: "weekly-ops",
      title: "Weekly operating review",
      description: "Run a meeting that produces one evidence-based decision.",
      task: "Build a scorecard for spend, charged/credited leads, intent, lead mode, area, job type, response, qualified rate, appointments, jobs, CAC, and open issues. End with one controlled change.",
      proof: "The meeting connects platform data to job outcomes in under 30 minutes."
    },
    {
      id: "client-walkthrough",
      title: "Five-minute client walkthrough",
      description: "Explain performance without hiding behind the interface.",
      task: "Record: business goal → decisive evidence → lead examples → economics → constraint → next action → limitation. Ask a non-marketer to repeat the diagnosis.",
      proof: "The listener can state what is wrong, why it matters, and what happens next."
    },
    {
      id: "capstone",
      title: "Capstone account audit",
      description: "Integrate the entire operating system.",
      task: "Audit a real redacted or hypothetical roofing account. Produce an evidence pack, top-three priorities, 30-day plan, economics model, risk notes, and client presentation. Defend one decision not to change.",
      proof: "The audit is safe, current, prioritized, and useful without a follow-on sale."
    }
  ];

  function load() {
    try {
      return { ...defaultState, ...JSON.parse(localStorage.getItem(KEY) || "{}") };
    } catch {
      return { ...defaultState };
    }
  }

  function save() {
    localStorage.setItem(KEY, JSON.stringify(state));
    saveStatus.textContent = "Saved locally";
  }

  function esc(value = "") {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setView(view) {
    state.view = view;
    save();
    render();
  }

  function answer(questionId) {
    return state.answers[questionId] || {};
  }

  function patchAnswer(questionId, patch) {
    state.answers[questionId] = { ...answer(questionId), ...patch };
    save();
    updateDiagnosticProgress();
  }

  function masteryBand(percent) {
    if (percent >= 90) return "Mastery / client-ready";
    if (percent >= 75) return "Strong / needs sharpening";
    if (percent >= 60) return "Functional / blind spots likely";
    if (percent >= 40) return "Weak / structured practice required";
    return "Not ready";
  }

  function bandClass(percent) {
    if (percent >= 75) return "yes";
    if (percent >= 60) return "conditional";
    return "no";
  }

  function moduleResult(moduleItem) {
    const earned = moduleItem.questions.reduce((sum, question) => sum + (Number.isFinite(answer(question.id).score) ? answer(question.id).score : 0), 0);
    const possible = moduleItem.questions.length * 5;
    const percent = Math.round((earned / possible) * 100);
    const blindSpots = moduleItem.questions.filter(question => answer(question.id).confidence === 3 && Number.isFinite(answer(question.id).score) && answer(question.id).score <= 1);
    return { earned, possible, percent, band: masteryBand(percent), blindSpots };
  }

  function overall() {
    const earned = Object.values(state.answers).reduce((sum, item) => sum + (Number.isFinite(item.score) ? item.score : 0), 0);
    const percent = Math.round((earned / maxPoints) * 100);
    return { earned, percent, possible: maxPoints, band: masteryBand(percent) };
  }

  function answeredCount() {
    return Object.values(state.answers).filter(item => Number.isFinite(item.score)).length;
  }

  function shuffledOptions(question) {
    const chars = [...question.id].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const rotations = chars % question.options.length;
    return question.options.map((_, index) => question.options[(index + rotations) % question.options.length]);
  }

  function render() {
    document.querySelectorAll(".top-nav button").forEach(button => button.classList.toggle("active", button.dataset.view === state.view));
    if (state.view === "dashboard") renderDashboard();
    if (state.view === "learn") renderLearn();
    if (state.view === "diagnostic") renderDiagnostic();
    if (state.view === "diagnostic-summary") renderDiagnosticSummary();
    if (state.view === "labs") renderLabs();
    if (state.view === "report") renderReport();
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function renderDashboard() {
    const learned = state.completedLessons.length;
    const tested = state.completedDiagnostic.length;
    const doneLabs = state.completedLabs.length;
    const result = overall();
    app.innerHTML = `
      <section class="hero lsa-hero">
        <div class="hero-copy">
          <p class="eyebrow">Oside Digital · Roofing specialization</p>
          <h1>Master Google Local Services Ads as an operating system—not a button to turn on.</h1>
          <p class="lede">Learn the current rules, diagnose real account problems, prove your judgment, and build confidence through fieldwork.</p>
          <div class="button-row">
            <button id="continue-button" class="button" type="button">${learned || answeredCount() ? "Continue mastery path" : "Begin with Module 1"}</button>
            <button id="baseline-button" class="button button-secondary" type="button">Take baseline diagnostic</button>
          </div>
        </div>
        <aside class="hero-panel">
          <p class="eyebrow">Your progress</p>
          <div class="stat-grid">
            <div class="stat"><strong>${learned}/12</strong><span>modules studied</span></div>
            <div class="stat"><strong>${tested}/12</strong><span>domains tested</span></div>
            <div class="stat"><strong>${doneLabs}/8</strong><span>labs completed</span></div>
            <div class="stat"><strong>${answeredCount() ? `${result.percent}%` : "—"}</strong><span>diagnostic score</span></div>
          </div>
          <p class="muted">Source foundation reviewed June 20, 2026. Use the linked Google pages to verify live policy before changing a real account.</p>
        </aside>
      </section>

      <section class="report-section">
        <p class="eyebrow">The path</p>
        <h2>Learn → diagnose → operate → prove</h2>
        <div class="report-grid">
          <article class="report-card"><h3>12 modules</h3><p class="muted">Current platform rules translated into roofing decisions and fieldwork.</p></article>
          <article class="report-card"><h3>120 questions</h3><p class="muted">Difficult scenarios with confidence scoring and written judgment cases.</p></article>
          <article class="report-card"><h3>8 applied labs</h3><p class="muted">Economics, setup, lead review, troubleshooting, operations, and capstone.</p></article>
        </div>
      </section>

      <section class="report-section">
        <p class="eyebrow">Curriculum</p>
        <h2>Your mastery domains</h2>
        <div class="module-grid">
          ${modules.map((moduleItem, index) => moduleTile(moduleItem, index)).join("")}
        </div>
      </section>
    `;
    document.querySelector("#continue-button").addEventListener("click", () => setView("learn"));
    document.querySelector("#baseline-button").addEventListener("click", () => setView("diagnostic"));
    bindModuleTiles();
  }

  function moduleTile(moduleItem, index) {
    const learned = state.completedLessons.includes(moduleItem.id);
    const tested = state.completedDiagnostic.includes(moduleItem.id);
    return `
      <button class="module-tile" type="button" data-module-index="${index}">
        <span class="module-number">${String(index + 1).padStart(2, "0")}</span>
        <strong>${esc(moduleItem.title.replace(/^\d+\.\s*/, ""))}</strong>
        <span>${learned ? "Studied" : "Not studied"} · ${tested ? "Tested" : "Not tested"}</span>
      </button>
    `;
  }

  function bindModuleTiles() {
    document.querySelectorAll("[data-module-index]").forEach(button => {
      button.addEventListener("click", () => {
        state.moduleIndex = Number(button.dataset.moduleIndex);
        setView("learn");
      });
    });
  }

  function renderLearn() {
    const moduleItem = modules[state.moduleIndex];
    const complete = state.completedLessons.includes(moduleItem.id);
    app.innerHTML = `
      <div class="learning-layout">
        <aside class="course-sidebar">
          <p class="eyebrow">Curriculum</p>
          ${modules.map((item, index) => `
            <button class="${index === state.moduleIndex ? "active" : ""}" type="button" data-module-index="${index}">
              <span>${state.completedLessons.includes(item.id) ? "✓" : index + 1}</span>${esc(item.title.replace(/^\d+\.\s*/, ""))}
            </button>
          `).join("")}
        </aside>
        <article class="course-content">
          <p class="eyebrow">Module ${state.moduleIndex + 1} of ${modules.length}</p>
          <h1>${esc(moduleItem.title)}</h1>
          <p class="lede">${esc(moduleItem.purpose)}</p>

          <section class="course-section">
            <h2>Learning outcomes</h2>
            <ul>${moduleItem.objectives.map(item => `<li>${esc(item)}</li>`).join("")}</ul>
          </section>

          ${moduleItem.lessons.map(item => `
            <section class="lesson-card">
              <h2>${esc(item.title)}</h2>
              <p>${esc(item.body)}</p>
              <ul>${item.bullets.map(bullet => `<li>${esc(bullet)}</li>`).join("")}</ul>
            </section>
          `).join("")}

          <section class="course-section two-column">
            <div>
              <p class="eyebrow">Fieldwork</p>
              <h2>Make it operational</h2>
              <ol>${moduleItem.fieldwork.map(item => `<li>${esc(item)}</li>`).join("")}</ol>
            </div>
            <div class="callout">
              <h3>Proof of mastery</h3>
              <p>${esc(moduleItem.proof)}</p>
            </div>
          </section>

          <section class="course-section">
            <p class="eyebrow">Official references</p>
            <div class="source-list">
              ${moduleItem.sources.map(source => `<a href="${source[1]}" target="_blank" rel="noopener">${esc(source[0])} ↗</a>`).join("")}
            </div>
          </section>

          <div class="section-footer">
            <button id="previous-module" class="button button-secondary" type="button" ${state.moduleIndex === 0 ? "disabled" : ""}>Previous module</button>
            <div class="button-row">
              <button id="mark-studied" class="button button-secondary" type="button">${complete ? "✓ Module studied" : "Mark studied"}</button>
              <button id="test-module" class="button" type="button">Test this module</button>
            </div>
          </div>
        </article>
      </div>
    `;
    bindModuleTiles();
    document.querySelector("#previous-module").addEventListener("click", () => {
      state.moduleIndex -= 1;
      save();
      render();
    });
    document.querySelector("#mark-studied").addEventListener("click", () => {
      if (!state.completedLessons.includes(moduleItem.id)) state.completedLessons.push(moduleItem.id);
      save();
      if (state.moduleIndex < modules.length - 1) state.moduleIndex += 1;
      render();
    });
    document.querySelector("#test-module").addEventListener("click", () => {
      state.diagnosticIndex = state.moduleIndex;
      setView("diagnostic");
    });
  }

  function diagnosticProgress() {
    const count = answeredCount();
    const percent = Math.round((count / totalQuestions) * 100);
    return `
      <div class="progress-wrap">
        <div class="progress-labels"><span>${count} of ${totalQuestions} scored</span><span>${percent}% complete</span></div>
        <div class="progress-track" role="progressbar" aria-label="Diagnostic progress" aria-valuemin="0" aria-valuemax="${totalQuestions}" aria-valuenow="${count}">
          <div id="progress-fill" class="progress-fill" style="width:${percent}%"></div>
        </div>
      </div>
    `;
  }

  function updateDiagnosticProgress() {
    const labels = document.querySelector(".progress-labels");
    const fill = document.querySelector("#progress-fill");
    if (!labels || !fill) return;
    const count = answeredCount();
    const percent = Math.round((count / totalQuestions) * 100);
    labels.innerHTML = `<span>${count} of ${totalQuestions} scored</span><span>${percent}% complete</span>`;
    fill.style.width = `${percent}%`;
  }

  function renderDiagnostic() {
    const moduleItem = modules[state.diagnosticIndex];
    app.innerHTML = `
      ${diagnosticProgress()}
      <header class="section-header">
        <div>
          <p class="eyebrow">Diagnostic domain ${state.diagnosticIndex + 1} of ${modules.length}</p>
          <h1>${esc(moduleItem.title)}</h1>
          <p class="section-description">${esc(moduleItem.purpose)}</p>
        </div>
        <span class="section-count">10 questions · 50 points</span>
      </header>
      <div class="question-list">
        ${moduleItem.questions.map((question, index) => questionMarkup(question, index)).join("")}
      </div>
      <p id="validation" class="validation" role="alert"></p>
      <div class="section-footer">
        <button id="previous-test" class="button button-secondary" type="button" ${state.diagnosticIndex === 0 ? "disabled" : ""}>Previous domain</button>
        <button id="score-domain" class="button" type="button">Score this domain</button>
      </div>
    `;
    bindQuestions(moduleItem);
    document.querySelector("#previous-test").addEventListener("click", () => {
      state.diagnosticIndex -= 1;
      save();
      render();
    });
    document.querySelector("#score-domain").addEventListener("click", () => scoreDomain(moduleItem));
  }

  function questionMarkup(question, index) {
    const current = answer(question.id);
    return `
      <article class="question-card" data-question-id="${question.id}">
        <div class="question-meta"><span>Question ${index + 1} of 10</span><span>${question.type === "choice" ? "Scenario judgment" : "Written · self-scored"}</span></div>
        <h3>${esc(question.prompt)}</h3>
        ${question.type === "choice" ? choiceMarkup(question, current) : writtenMarkup(question, current)}
        <fieldset class="confidence-field">
          <label>Confidence before feedback</label>
          <div class="confidence-options">
            ${[[1, "Low"], [2, "Medium"], [3, "High"]].map(([value, label]) => `<label><input type="radio" name="confidence-${question.id}" value="${value}" ${current.confidence === value ? "checked" : ""}> ${label}</label>`).join("")}
          </div>
        </fieldset>
      </article>
    `;
  }

  function choiceMarkup(question, current) {
    const options = shuffledOptions(question);
    return `
      <div class="options">
        ${options.map((item, index) => `
          <label class="option">
            <input type="radio" name="${question.id}" value="${index}" ${current.optionText === item.text ? "checked" : ""}>
            <span>${esc(item.text)}</span>
          </label>
        `).join("")}
      </div>
      <div class="choice-feedback">${Number.isFinite(current.score) ? feedback(question, current.score) : ""}</div>
    `;
  }

  function feedback(question, score) {
    const label = score === 5 ? "Best judgment" : score === 3 ? "Acceptable but incomplete" : score === 1 ? "Weak judgment" : "Dangerous or wrong";
    return `<div class="rubric"><p><strong>${label} · ${score}/5</strong></p><p>${esc(question.explanation)}</p></div>`;
  }

  function writtenMarkup(question, current) {
    return `
      <textarea aria-label="Written answer" placeholder="Answer before revealing the rubric.">${esc(current.text || "")}</textarea>
      <div class="button-row"><button class="button button-secondary reveal-rubric" type="button" ${!(current.text || "").trim() ? "disabled" : ""}>${current.revealed ? "Rubric revealed" : "Reveal rubric"}</button></div>
      <div class="rubric-area" ${current.revealed ? "" : "hidden"}>
        <div class="rubric">
          <p><strong>Scoring guidance</strong></p><p>${esc(question.rubric)}</p>
          <div class="rubric-grid">
            <span><strong>5</strong> — Client-ready</span><span><strong>4</strong> — Strong</span>
            <span><strong>3</strong> — Correct but incomplete</span><span><strong>2</strong> — Vague/tactical</span>
            <span><strong>1</strong> — Mostly misses</span><span><strong>0</strong> — Harmful</span>
          </div>
        </div>
        <div class="score-field">
          <label>Self-score honestly</label>
          <select class="written-score">
            <option value="">Select…</option>
            ${[5,4,3,2,1,0].map(score => `<option value="${score}" ${current.score === score ? "selected" : ""}>${score} / 5</option>`).join("")}
          </select>
        </div>
      </div>
    `;
  }

  function bindQuestions(moduleItem) {
    moduleItem.questions.forEach(question => {
      const card = document.querySelector(`[data-question-id="${question.id}"]`);
      if (question.type === "choice") {
        const options = shuffledOptions(question);
        card.querySelectorAll(`input[name="${question.id}"]`).forEach(input => {
          input.addEventListener("change", event => {
            const selected = options[Number(event.target.value)];
            patchAnswer(question.id, { optionText: selected.text, score: selected.score });
            card.querySelector(".choice-feedback").innerHTML = feedback(question, selected.score);
          });
        });
      } else {
        const textarea = card.querySelector("textarea");
        const reveal = card.querySelector(".reveal-rubric");
        const area = card.querySelector(".rubric-area");
        textarea.addEventListener("input", event => {
          patchAnswer(question.id, { text: event.target.value });
          reveal.disabled = !event.target.value.trim();
        });
        reveal.addEventListener("click", () => {
          patchAnswer(question.id, { revealed: true });
          reveal.textContent = "Rubric revealed";
          area.hidden = false;
        });
        card.querySelector(".written-score")?.addEventListener("change", event => {
          patchAnswer(question.id, { score: event.target.value === "" ? undefined : Number(event.target.value) });
        });
      }
      card.querySelectorAll(`input[name="confidence-${question.id}"]`).forEach(input => {
        input.addEventListener("change", event => patchAnswer(question.id, { confidence: Number(event.target.value) }));
      });
    });
  }

  function scoreDomain(moduleItem) {
    const incomplete = moduleItem.questions.filter(question => {
      const current = answer(question.id);
      return !Number.isFinite(current.score) || !Number.isFinite(current.confidence) || (question.type === "written" && !(current.text || "").trim());
    });
    if (incomplete.length) {
      document.querySelector("#validation").textContent = `Complete the answer, score, and confidence for ${incomplete.length} remaining question${incomplete.length === 1 ? "" : "s"}.`;
      document.querySelector(`[data-question-id="${incomplete[0].id}"]`).scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    if (!state.completedDiagnostic.includes(moduleItem.id)) state.completedDiagnostic.push(moduleItem.id);
    state.view = "diagnostic-summary";
    save();
    render();
  }

  function renderDiagnosticSummary() {
    const moduleItem = modules[state.diagnosticIndex];
    const result = moduleResult(moduleItem);
    const last = state.diagnosticIndex === modules.length - 1;
    app.innerHTML = `
      ${diagnosticProgress()}
      <section class="section-summary">
        <p class="eyebrow">Domain complete</p>
        <h1>${esc(moduleItem.title)}</h1>
        <div class="score-orb"><div><strong>${result.percent}%</strong><span>${result.earned} / ${result.possible}</span></div></div>
        <h3>${esc(result.band)}</h3>
        <p class="muted">${result.blindSpots.length ? `${result.blindSpots.length} high-confidence miss${result.blindSpots.length === 1 ? "" : "es"} detected. Treat these as priority blind spots.` : "No high-confidence 0–1 answers were detected in this domain."}</p>
        <div class="button-row" style="justify-content:center">
          <button id="review-domain" class="button button-secondary" type="button">Review answers</button>
          <button id="continue-domain" class="button" type="button">${last ? "View mastery report" : "Continue to next domain"}</button>
        </div>
      </section>
    `;
    document.querySelector("#review-domain").addEventListener("click", () => setView("diagnostic"));
    document.querySelector("#continue-domain").addEventListener("click", () => {
      if (last) setView("report");
      else {
        state.diagnosticIndex += 1;
        setView("diagnostic");
      }
    });
  }

  function renderLabs() {
    app.innerHTML = `
      <header class="section-header">
        <div><p class="eyebrow">Applied practice</p><h1>Mastery labs</h1><p class="lede">Complete these with real redacted data when possible. Notes save locally.</p></div>
        <span class="section-count">${state.completedLabs.length} of ${labs.length} complete</span>
      </header>
      <div class="lab-grid">
        ${labs.map((lab, index) => labMarkup(lab, index)).join("")}
      </div>
    `;
    labs.forEach(lab => bindLab(lab));
  }

  function labMarkup(lab, index) {
    const done = state.completedLabs.includes(lab.id);
    return `
      <article class="lab-card" data-lab-id="${lab.id}">
        <div class="question-meta"><span>Lab ${index + 1}</span><span>${done ? "Complete" : "In progress"}</span></div>
        <h2>${esc(lab.title)}</h2>
        <p>${esc(lab.description)}</p>
        <div class="lab-task"><strong>Assignment</strong><p>${esc(lab.task)}</p></div>
        ${lab.calculator ? calculatorMarkup() : ""}
        <label class="lab-notes-label">Your evidence, decision, or link to the artifact
          <textarea class="lab-notes" placeholder="Record your work here…">${esc(state.labNotes[lab.id] || "")}</textarea>
        </label>
        <p class="callout"><strong>Proof:</strong> ${esc(lab.proof)}</p>
        <button class="button ${done ? "button-secondary" : ""} complete-lab" type="button">${done ? "✓ Completed" : "Mark lab complete"}</button>
      </article>
    `;
  }

  function calculatorMarkup() {
    return `
      <div class="calculator">
        <label>Allowable acquisition cost per booked job ($)<input class="calc-acq" type="number" min="0" value="1200"></label>
        <label>Raw leads that qualify (%)<input class="calc-qual" type="number" min="0" max="100" value="60"></label>
        <label>Qualified leads that close (%)<input class="calc-close" type="number" min="0" max="100" value="30"></label>
        <div class="calc-result"><span>Maximum raw-lead cost</span><strong>$216.00</strong></div>
      </div>
    `;
  }

  function bindLab(lab) {
    const card = document.querySelector(`[data-lab-id="${lab.id}"]`);
    card.querySelector(".lab-notes").addEventListener("input", event => {
      state.labNotes[lab.id] = event.target.value;
      save();
    });
    card.querySelector(".complete-lab").addEventListener("click", () => {
      const index = state.completedLabs.indexOf(lab.id);
      if (index >= 0) state.completedLabs.splice(index, 1);
      else state.completedLabs.push(lab.id);
      save();
      render();
    });
    if (lab.calculator) {
      const update = () => {
        const acquisition = Number(card.querySelector(".calc-acq").value) || 0;
        const qualified = (Number(card.querySelector(".calc-qual").value) || 0) / 100;
        const close = (Number(card.querySelector(".calc-close").value) || 0) / 100;
        card.querySelector(".calc-result strong").textContent = `$${(acquisition * qualified * close).toFixed(2)}`;
      };
      card.querySelectorAll(".calculator input").forEach(input => input.addEventListener("input", update));
    }
  }

  function readiness(ids) {
    const selected = ids.map(id => moduleResult(modules.find(item => item.id === id)));
    const average = Math.round(selected.reduce((sum, item) => sum + item.percent, 0) / selected.length);
    const min = Math.min(...selected.map(item => item.percent));
    if (average >= 85 && min >= 65) return { status: "Yes", className: "yes", average };
    if (average >= 65 && min >= 40) return { status: "Conditional", className: "conditional", average };
    return { status: "No", className: "no", average };
  }

  function reportData() {
    const results = modules.map(moduleItem => ({ module: moduleItem, ...moduleResult(moduleItem) }));
    const weakest = [...results].sort((a, b) => a.percent - b.percent);
    return {
      overall: overall(),
      results,
      weakest,
      setup: readiness(["fundamentals", "eligibility", "profile-targeting", "policy-risk"]),
      operate: readiness(["auction-ranking", "bidding-budget", "lead-operations", "lead-quality", "profile-quality", "measurement"]),
      advise: readiness(["troubleshooting", "policy-risk", "roofing-consulting", "measurement"])
    };
  }

  function renderReport() {
    const data = reportData();
    app.innerHTML = `
      <header class="report-header">
        <p class="eyebrow">LSA mastery report</p>
        <div class="report-hero">
          <div class="report-score"><strong>${answeredCount() ? `${data.overall.percent}%` : "—"}</strong><span>${answeredCount()} / ${totalQuestions} questions scored</span></div>
          <div>
            <h1>${answeredCount() ? esc(data.overall.band) : "Complete the diagnostic to score mastery"}</h1>
            <p class="lede">${reportMessage(data.overall.percent)}</p>
            <div class="button-row">
              <button id="export-report" class="button" type="button" ${answeredCount() ? "" : "disabled"}>Export Markdown</button>
              <button id="reset-progress" class="button button-secondary" type="button">Reset all progress</button>
            </div>
          </div>
        </div>
      </header>

      <section class="report-grid">
        ${readinessCard("Ready to set up accounts?", data.setup)}
        ${readinessCard("Ready to operate accounts?", data.operate)}
        ${readinessCard("Ready to advise clients?", data.advise)}
      </section>

      <section class="report-section">
        <p class="eyebrow">Scorecard</p><h2>Domain results</h2>
        <div class="table-wrap"><table>
          <thead><tr><th>Domain</th><th>Score</th><th>Band</th><th>Blind spots</th><th>Study</th></tr></thead>
          <tbody>${data.results.map((item, index) => `<tr>
            <td><strong>${esc(item.module.title.replace(/^\d+\.\s*/, ""))}</strong></td>
            <td>${item.percent}%</td>
            <td><span class="status-pill status-${bandClass(item.percent)}">${esc(item.band)}</span></td>
            <td>${item.blindSpots.length}</td>
            <td><button class="table-link" type="button" data-study-index="${index}">Open module</button></td>
          </tr>`).join("")}</tbody>
        </table></div>
      </section>

      <section class="report-section">
        <p class="eyebrow">Personal plan</p><h2>30-day confidence build</h2>
        <div class="report-card">${thirtyDayPlan(data.weakest.slice(0, 4))}</div>
      </section>

      <section class="report-section two-column">
        <article class="report-card">
          <p class="eyebrow">Proof completed</p><h2>Practical readiness</h2>
          <p><strong>${state.completedLessons.length}/12</strong> modules studied</p>
          <p><strong>${state.completedLabs.length}/8</strong> labs completed</p>
          <p><strong>${state.completedDiagnostic.length}/12</strong> diagnostic domains completed</p>
        </article>
        <article class="report-card">
          <p class="eyebrow">Certification gate</p><h2>Mastery requires all three</h2>
          <ul><li>85%+ diagnostic with no domain below 65%.</li><li>All eight labs completed with inspectable artifacts.</li><li>A capstone walkthrough another person can accurately teach back.</li></ul>
        </article>
      </section>
    `;
    document.querySelectorAll("[data-study-index]").forEach(button => {
      button.addEventListener("click", () => {
        state.moduleIndex = Number(button.dataset.studyIndex);
        setView("learn");
      });
    });
    document.querySelector("#export-report").addEventListener("click", () => exportReport(data));
    document.querySelector("#reset-progress").addEventListener("click", reset);
  }

  function readinessCard(title, item) {
    const reason = item.status === "Yes" ? "The prerequisite domains are consistently strong." : item.status === "Conditional" ? "Proceed with narrow scope, checklists, and review." : "Build the weak prerequisites before live responsibility.";
    return `<article class="report-card readiness-${item.className}"><p class="eyebrow">${esc(title)}</p><h2><span class="status-pill status-${item.className}">${item.status}</span></h2><p>${reason}</p><p class="muted">Prerequisite average: ${item.average}%</p></article>`;
  }

  function reportMessage(percent) {
    if (!answeredCount()) return "Your learning and lab progress will remain here while you complete the assessment.";
    if (percent >= 90) return "Your judgment is client-ready. Keep current by reviewing official changes and operating real accounts.";
    if (percent >= 75) return "Your foundation is strong. Use the weakest domains and labs to close the remaining confidence gaps.";
    if (percent >= 60) return "You can reason through many situations, but blind spots still make unsupervised client advice risky.";
    return "Treat this as a learning map. Study, drill, and retest before taking responsibility for spend.";
  }

  function thirtyDayPlan(weakest) {
    const names = weakest.map(item => item.module.title.replace(/^\d+\.\s*/, ""));
    return `
      <div class="plan-week"><h3>Days 1–7 · Foundation repair</h3><p>Study <strong>${esc(names[0])}</strong>. Complete its fieldwork and retake only that domain.</p></div>
      <div class="plan-week"><h3>Days 8–14 · Second constraint</h3><p>Study <strong>${esc(names[1])}</strong>. Complete the matching applied lab with a visible artifact.</p></div>
      <div class="plan-week"><h3>Days 15–21 · Integrate</h3><p>Study <strong>${esc(names[2])}</strong> and <strong>${esc(names[3])}</strong>. Review ten simulated or redacted leads and produce one decision log.</p></div>
      <div class="plan-week"><h3>Days 22–30 · Prove</h3><p>Complete the capstone audit, record the five-minute walkthrough, get teach-back feedback, and retake all weak domains.</p></div>
    `;
  }

  function exportReport(data) {
    let md = `# Oside LSA Mastery Report\n\nExported ${new Date().toLocaleString()}\n\n`;
    md += `## Overall\n\n**${data.overall.percent}% — ${data.overall.band}**\n\n`;
    md += `Modules studied: ${state.completedLessons.length}/12 · Labs: ${state.completedLabs.length}/8 · Domains tested: ${state.completedDiagnostic.length}/12\n\n`;
    md += "## Readiness\n\n| Decision | Result | Average |\n|---|---:|---:|\n";
    md += `| Ready to set up accounts? | ${data.setup.status} | ${data.setup.average}% |\n`;
    md += `| Ready to operate accounts? | ${data.operate.status} | ${data.operate.average}% |\n`;
    md += `| Ready to advise clients? | ${data.advise.status} | ${data.advise.average}% |\n\n`;
    md += "## Domain scores\n\n| Domain | Score | Band | Blind spots |\n|---|---:|---|---:|\n";
    data.results.forEach(item => { md += `| ${item.module.title.replace(/^\d+\.\s*/, "")} | ${item.percent}% | ${item.band} | ${item.blindSpots.length} |\n`; });
    md += "\n## 30-day focus\n\n";
    data.weakest.slice(0, 4).forEach((item, index) => { md += `${index + 1}. ${item.module.title.replace(/^\d+\.\s*/, "")} — ${item.percent}%\n`; });
    md += "\n## Official-source reminder\n\nRecheck current Google Local Services documentation before changing a live account: https://support.google.com/localservices/?hl=en\n";
    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `oside-lsa-mastery-${new Date().toISOString().slice(0, 10)}.md`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  function reset() {
    if (!window.confirm("Clear all LSA learning, lab, and diagnostic progress?")) return;
    localStorage.removeItem(KEY);
    state = { ...defaultState };
    render();
  }

  const homeButton = document.querySelector("#home-button");
  if (homeButton && !homeButton.matches("a[href]")) {
    homeButton.addEventListener("click", () => setView("dashboard"));
  }
  document.querySelectorAll(".top-nav button").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
  render();
})();

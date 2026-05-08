function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function skillScore(workerSkills = [], jobSkills = []) {
  const worker = new Set(workerSkills.map(normalize));
  const required = jobSkills.map(normalize);
  if (!required.length) return 0;
  const matches = required.filter((skill) => worker.has(skill)).length;
  return Math.round((matches / required.length) * 55);
}

function salaryScore(expected = 0, offered = {}) {
  if (!expected || !offered?.max) return 10;
  if (expected <= offered.max && expected >= (offered.min || 0)) return 25;
  if (expected <= offered.max * 1.15) return 16;
  return 5;
}

function experienceScore(workerYears = 0, requiredYears = 0) {
  if (workerYears >= requiredYears) return 15;
  return Math.max(0, 15 - (requiredYears - workerYears) * 4);
}

function ratingScore(rating = 0) {
  return Math.round(Math.min(rating, 5) * 1);
}

export function scoreJobForWorker(job, worker) {
  const profile = worker.workerProfile || {};
  return Math.min(100,
    skillScore(profile.skills, job.requiredSkills) +
    salaryScore(profile.expectedSalary, job.salaryOffered) +
    experienceScore(profile.experienceYears, job.experienceRequired) +
    ratingScore(profile.rating)
  );
}

export function scoreWorkerForJob(worker, job) {
  return scoreJobForWorker(job, worker);
}

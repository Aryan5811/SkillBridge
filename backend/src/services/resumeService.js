const skillDictionary = [
  "electrical", "plumbing", "carpentry", "welding", "painting", "masonry",
  "hvac", "solar", "forklift", "landscaping", "roofing", "tiling"
];

export function parseResumeText(text = "") {
  const lower = text.toLowerCase();
  return {
    skills: skillDictionary.filter((skill) => lower.includes(skill)),
    experienceYears: Number(lower.match(/(\d+)\+?\s+years?/)?.[1] || 0),
    certifications: [...lower.matchAll(/certified\s+([a-z ]+)/g)].map((match) => match[1].trim())
  };
}

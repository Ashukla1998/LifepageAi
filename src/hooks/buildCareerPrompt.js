export function buildCareerPrompt(discoverData) {
  const {
    name,
    stage,
    subjects,
    interests,
    otherSubject,
    otherInterest,
  } = discoverData;

  // Merge "Others" safely
  const finalSubjects = [
    ...subjects,
    ...(otherSubject ? [otherSubject] : []),
  ];

  const finalInterests = [
    ...interests,
    ...(otherInterest ? [otherInterest] : []),
  ];

  return `
You are a professional career guidance counselor.

Your task is to suggest suitable career options based on a person’s current education stage, subjects they enjoy, and interests.

User profile:
- Name: ${name || "Not specified"}
- Current stage: ${stage || "Not specified"}
- Subjects enjoyed: ${
    finalSubjects.length ? finalSubjects.join(", ") : "Not specified"
  }
- Interests: ${
    finalInterests.length ? finalInterests.join(", ") : "Not specified"
  }

Instructions:
- Suggest 5 to 7 realistic career options.
- Careers must be appropriate for the user’s current stage.
- Careers must clearly relate to the listed subjects and interests.
- Include both traditional and modern career paths.
- Keep language simple and student-friendly.
- Avoid generic or unrelated careers.

IMPORTANT:
- Respond ONLY with valid JSON.
- Do NOT use markdown, code blocks, or backticks.
- Do NOT include any explanation text.

Required JSON format:
{
  "careers": [
    {
      "title": "string",
      "description": "string",
      "why_it_fits": "string"
    }
  ]
}
`;
}

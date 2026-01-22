export function calculateCategoryPercentages(questions) {
  return questions.reduce((acc, item) => {
    const category = item.que_category;

    acc[category] = (acc[category] || 0) + Number(item.percentage || 0);

    return acc;
  }, {});
}

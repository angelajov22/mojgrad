export const formatDescriptionParts = (description) => {
  if (!description) {
    return {
      userReport: "",
      aiVision: "",
      userLabel: "Пријава на корисник",
      aiLabel: "AI опис",
    };
  }

  const aiSplit = description.split("AI vision:");

  return {
    userReport: aiSplit[0]?.trim() || "",
    aiVision: aiSplit[1]?.trim() || "",
    userLabel: "Пријава на корисник",
    aiLabel: "AI опис",
  };
};

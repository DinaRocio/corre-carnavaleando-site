export const parseHighlightedText = (text: string) => {
  return text.replace(
    /\*\*(.*?)\*\*/g,
    `<span class="heading-3 highlight ">$1</span>`
  );
};
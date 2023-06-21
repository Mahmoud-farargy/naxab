// text trimmer
export const trimText = (txt, limit) =>
txt
  ? `${
      txt.split("").length > limit
        ? txt.split("").slice(0, limit).join("") + "..."
        : txt
    }`
  : "";
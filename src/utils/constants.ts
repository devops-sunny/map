export const LAYERS_VISIBLE_BY_DEFAULT = new Set([
  "State",
  "District",
  "Taluka",
  "Village",
]);

export const AGENCIES_WITHOUT_ROADS = new Set([
  "BSF",
  "SSB",
  "Assam Rifles",
  "DGMO",
  "SWG",
]);

export const TOR_TYPES = [
  {
    value: "TOR 1",
    label: "TOR 1 (Recommend on state-wise extent of border areas)",
  },
  { value: "TOR 2A", label: "TOR 2A (Existing roads)" },
  { value: "TOR 2B", label: "TOR 2B (Roads under construction)" },
  { value: "TOR 2C", label: "TOR 2C (Roads being planned)" },
  {
    value: "TOR 3 & 4",
    label:
      "TOR 3 & 4 (Recommend on state-wise future requirements of JK-SEHAT, with specific objectives)",
  },
];

export const BACKEND_API_URL = `http://localhost:4012`;

export const SEARCH_INPUT_REGEX = /^[\w\s.,\-\/]{0,}$/;

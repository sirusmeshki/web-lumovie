import IC_Actors from "/src/assets/icon/IC_Actors";
import IC_Directors from "/src/assets/icon/IC_Directors";
import IC_Movie from "/src/assets/icon/IC_Movie";
import IC_Profile from "/src/assets/icon/IC_Profile";
import IC_Series from "/src/assets/icon/IC_Series";

const ACTOR_COUNTRIES = [
  { value: "", label: "All", icon: <IC_Actors /> },
  { value: "US", label: "USA", flag: "US" },
  { value: "GB", label: "UK", flag: "GB" },
  { value: "FR", label: "France", flag: "FR" },
  { value: "DE", label: "Germany", flag: "DE" },
  { value: "JP", label: "Japan", flag: "JP" },
  { value: "KR", label: "Korea", flag: "KR" },
  { value: "IR", label: "Iran", flag: "IR" },
  { value: "CN", label: "China", flag: "CN" },
  { value: "IT", label: "Italy", flag: "IT" },
];

const DIRECTOR_COUNTRIES = [
  { value: "", label: "All", icon: <IC_Directors /> },
  { value: "US", label: "USA", flag: "US" },
  { value: "FR", label: "France", flag: "FR" },
  { value: "GB", label: "UK", flag: "GB" },
  { value: "JP", label: "Japan", flag: "JP" },
  { value: "KR", label: "Korea", flag: "KR" },
  { value: "IR", label: "Iran", flag: "IR" },
  { value: "IT", label: "Italy", flag: "IT" },
  { value: "DE", label: "Germany", flag: "DE" },
  { value: "IN", label: "India", flag: "IN" },
];

export const ACTOR_FILTER_GROUPS = [
  {
    key: "gender",
    label: "Gender",
    options: [
      { value: "", label: "All", icon: <IC_Actors /> },
      { value: "2", label: "Men", icon: <IC_Profile /> },
      { value: "1", label: "Women", icon: <IC_Profile /> },
    ],
  },
  {
    key: "sort",
    label: "Sort",
    options: [
      { value: "popularity", label: "Popular", icon: <IC_Actors /> },
      { value: "name", label: "A–Z", icon: <IC_Profile /> },
    ],
  },
  {
    key: "country",
    label: "Country",
    options: ACTOR_COUNTRIES,
  },
];

export const DIRECTOR_FILTER_GROUPS = [
  {
    key: "medium",
    label: "Medium",
    options: [
      { value: "movie", label: "Film", icon: <IC_Movie /> },
      { value: "tv", label: "Series", icon: <IC_Series /> },
    ],
  },
  {
    key: "sort",
    label: "Sort",
    options: [
      { value: "popularity", label: "Popular", icon: <IC_Directors /> },
      { value: "name", label: "A–Z", icon: <IC_Profile /> },
    ],
  },
  {
    key: "country",
    label: "Country",
    options: DIRECTOR_COUNTRIES,
  },
];

export const DEFAULT_ACTOR_FILTERS = {
  gender: "",
  sort: "popularity",
  country: "",
};

export const DEFAULT_DIRECTOR_FILTERS = {
  medium: "movie",
  sort: "popularity",
  country: "",
};

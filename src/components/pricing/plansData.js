export const plans = [
  {
    type: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$15",
    billingKey: "perfectForStarting",
    isPopular: false,
    buttonTextKey: "buttonText",
    features: [
      { textKey: "track10", type: "check" },
      { textKey: "basicCategories", type: "check" },
      { textKey: "monthlyReports", type: "check" },
      { textKey: "mobileApp", type: "check" },
    ],
  },

  {
    type: "Pro",
    monthlyPrice: "$9.99",
    yearlyPrice: "$79",
    billingKey: "billingMonthly",
    isPopular: true,
    buttonTextKey: "buttonText",
    features: [
      { textKey: "unlimitedTransactions", type: "check" },
      { textKey: "advancedAnalytics", type: "check" },
      { textKey: "customCategories", type: "check" },
      { textKey: "budgetGoals", type: "check" },
      { textKey: "exportCSV", type: "check" },
      { textKey: "prioritySupport", type: "check" },
    ],
  },

  {
    type: "Business",
    monthlyPrice: "$19.99",
    yearlyPrice: "$79",
    billingKey: "billingMonthly",
    isPopular: false,
    buttonTextKey: "buttonText",
    features: [
      { textKey: "everythingInPro", type: "check" },
      { textKey: "teamCollab", type: "check" },
      { textKey: "multiCurrency", type: "check" },
      { textKey: "apiAccess", type: "check" },
      { textKey: "security", type: "check" },
      { textKey: "accountManager", type: "check" },
      { textKey: "support247", type: "check" },
    ],
  },
];

import Ember from 'ember';

const {computed, Mixin} = Ember;

export default Mixin.create({
  getOptions(str) {
    return this.get(str).map((a) => {
      return {id: a, name: a};
    });
  },

  businessSales: [
    "below 250k",
    "250k - 500k",
    "500k - 1.0m",
    "1.0m - 1.5m",
    "above 1.5m"
  ],
  guarantorRoles: [
    "Owner",
    "Officer",
    "IT Manager",
    "Other"
  ],
  locales: {
    us: {
      currency: 'USD',
      locale: 'en',
      flagSrc: '/assets/flags/United-States.png',
      states: [
        { id: "AL", name: "Alabama" },
        { id: "AK", name: "Alaska" },
        { id: "AZ", name: "Arizona" },
        { id: "AR", name: "Arkansas" },
        { id: "CA", name: "California" },
        { id: "CO", name: "Colorado" },
        { id: "CT", name: "Connecticut" },
        { id: "DE", name: "Delaware" },
        { id: "DC", name: "District Of Columbia" },
        { id: "FL", name: "Florida" },
        { id: "GA", name: "Georgia" },
        { id: "HI", name: "Hawaii" },
        { id: "ID", name: "Idaho" },
        { id: "IL", name: "Illinois" },
        { id: "IN", name: "Indiana" },
        { id: "IA", name: "Iowa" },
        { id: "KS", name: "Kansas" },
        { id: "KY", name: "Kentucky" },
        { id: "LA", name: "Louisiana" },
        { id: "ME", name: "Maine" },
        { id: "MD", name: "Maryland" },
        { id: "MA", name: "Massachusetts" },
        { id: "MI", name: "Michigan" },
        { id: "MN", name: "Minnesota" },
        { id: "MS", name: "Mississippi" },
        { id: "MO", name: "Missouri" },
        { id: "MT", name: "Montana" },
        { id: "NE", name: "Nebraska" },
        { id: "NV", name: "Nevada" },
        { id: "NH", name: "New Hampshire" },
        { id: "NJ", name: "New Jersey" },
        { id: "NM", name: "New Mexico" },
        { id: "NY", name: "New York" },
        { id: "NC", name: "North Carolina" },
        { id: "ND", name: "North Dakota" },
        { id: "OH", name: "Ohio" },
        { id: "OK", name: "Oklahoma" },
        { id: "OR", name: "Oregon" },
        { id: "PA", name: "Pennsylvania" },
        { id: "RI", name: "Rhode Island" },
        { id: "SC", name: "South Carolina" },
        { id: "SD", name: "South Dakota" },
        { id: "TN", name: "Tennessee" },
        { id: "TX", name: "Texas" },
        { id: "UT", name: "Utah" },
        { id: "VT", name: "Vermont" },
        { id: "VA", name: "Virginia" },
        { id: "WA", name: "Washington" },
        { id: "WV", name: "West Virginia" },
        { id: "WI", name: "Wisconsin" },
        { id: "WY", name: "Wyoming" }
      ]
    },
    ca: {
      currency: 'CAD',
      locale: 'en-ca',
      flagSrc: '/assets/flags/Canada.png',
      states: [
        { id: "AB", name: "Alberta" },
        { id: "BC", name: "British Columbia" },
        { id: "MB", name: "Manitoba" },
        { id: "NB", name: "New Brunswick" },
        { id: "NL", name: "Newfoundland and Labrador" },
        { id: "NS", name: "Nova Scotia" },
        { id: "NT", name: "Northwest Territories" },
        { id: "NU", name: "Nunavut" },
        { id: "ON", name: "Ontario" },
        { id: "PE", name: "Prince Edward Island" },
        { id: "QC", name: "Québec" },
        { id: "SK", name: "Saskatchewan" },
        { id: "YT", name: "Yukon" }
      ]
    },
    uk: {
      currency: 'GBP',
      locale: 'en-gb',
      flagSrc: '/assets/flags/United-Kingdom.png',
      states: null //left null to indicate don't ask question
    }
  },
  purposeOfFundsList: [
    'Business Remodel',
    'Business Expansion',
    'Inventory Financing',
    'Marketing Services',
    'Additional Equipment/Technology',
    'Working Capital'
  ],
  structures: [
    "Corporation",
    "S Corporation",
    "Limited Corporation",
    "Limited Liability Corporation",
    "Partnership",
    "Limited Liability Partnership",
    "Sole Proprietorship",
    "Not-for-Profit",
    "Political Campaign",
    "Government Entity",
    "Educational Institution"
  ],
  structuresExemptFromGuarantors: [
    "Political Campaign",
    "Government Entity",
    "Educational Institution"
  ],
  suffixes: [
    "Sr",
    "Jr",
    "II",
    "III",
    "IV"
  ],
  bankruptcyOptions: [
    {label: "yes", value: 'true'},
    {label: "no", value: 'false'}
  ],
  businessSalesOptions: computed('businessSales', function () {
    return this.getOptions('businessSales');
  }),
  guarantorRolesOptions: computed("guarantorRoles", function () {
    return this.getOptions("guarantorRoles");
  }),
  localesCaStatesOptions: computed('locales.ca.states', function () {
    return this.get('locales.ca.states');
  }),
  localesUsStatesOptions: computed('locales.us.states', function () {
    return this.get('locales.us.states');
  }),
  suffixesOptions: computed('suffixes', function () {
    return this.getOptions('suffixes');
  }),
  structuresOptions: computed('structures', function () {
    return this.getOptions('structures');
  }),
  structuresExemptFromGuarantorsOptions: computed('structuresExemptFromGuarantors', function () {
    return this.getOptions('structuresExemptFromGuarantors');
  }),
  purposeOfFundsOptions: computed('purposeOfFundsList', function () {
    return this.getOptions('purposeOfFundsList');
  })
});

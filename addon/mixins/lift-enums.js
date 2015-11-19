import Ember from 'ember';

export default Ember.Mixin.create({
  getOptions(str) {
    return this.get(str).map((a) => { return { id: a, name: a }; });
  },
  suffixes: 
    [
      "Sr",
      "Jr" ,
      "II",
      "III",
      "IV"
    ],
  suffixesOptions: Ember.computed('suffixes', function() {
    return this.getOptions('suffixes');
  }),
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
  structuresOptions: Ember.computed('structures', function() {
    return this.getOptions('structures');
  }),
  structuresExemptFromGuarantors: [
    "Political Campaign",
    "Government Entity",
    "Educational Institution"
  ],
  structuresExemptFromGuarantorsOptions: Ember.computed('structuresExemptFromGuarantors', function() {
    return this.getOptions('structuresExemptFromGuarantors');
  }),
  purposeOfFundsList: [
    'Business Remodel',
    'Business Expansion',
    'Inventory Financing',
    'Marketing Services',
    'Additional Equipment/Technology',
    'Working Capital'
  ],
  purposeOfFundsOptions: Ember.computed('purposeOfFundsList', function() {
    return this.getOptions('purposeOfFundsList');
  }),
  businessSales : [
    "below 250k",
    "250k - 500k",
    "500k - 1.0m",
    "1.0m - 1.5m",
    "above 1.5m"
  ],
  businessSalesOptions: Ember.computed('businessSales', function() {
    return this.getOptions('businessSales');
  }),
  bankruptcyOptions: [
    { label : "yes" , value : 'true'  },
    { label : "no"  , value : 'false' }
  ],
  localesUsStatesOptions: Ember.computed('locales.us.states', function() {
    return this.getOptions('locales.us.states');
  }),
  localesCaStatesOptions: Ember.computed('locales.ca.states', function() {
    return this.getOptions('locales.ca.states');
  }),
  locales: {
    us: {
      currency : 'USD',
      locale : 'en',
      flagSrc: '/assets/flags/United-States.png',
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District Of Columbia",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
          ]
    },
    ca: {
      currency : 'CAD',
      locale : 'en-ca',
      flagSrc: '/assets/flags/Canada.png',
      states: [
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland",
        "Northwest Territories",
        "Nova Scotia",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon"
      ]
    },
    uk: {
      currency : 'GBP',
      locale : 'en-gb',
      flagSrc: '/assets/flags/United-Kingdom.png',
      states: null //left null to indicate don't ask question
    }
  },
});


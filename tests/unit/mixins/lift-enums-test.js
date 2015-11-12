import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import liftEnums from 'lift-enums/mixins/lift-enums';

var subject;

moduleFor('mixin:lift-enums', {
  beforeEach() {
    var objWithMixin = Ember.Object.extend(liftEnums);
    subject = objWithMixin.create();
  }
}); 

const structures = [
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
];

const structuresExemptFromGuarantors = [
    "Political Campaign",
    "Government Entity",
    "Educational Institution"
  ];
  
const purposeOfFundsList = [
    'Business Remodel',
    'Business Expansion',
    'Inventory Financing',
    'Marketing Services',
    'Additional Equipment/Technology',
    'Working Capital'
  ];

const businessSales = [
    "below 250k",
    "250k - 500k",
    "500k - 1.0m",
    "1.0m - 1.5m",
    "above 1.5m"
  ];
  
const bankruptcyOptions = [
    { label : "yes" , value : 'true'  },
    { label : "no"  , value : 'false' }
  ];
  
const locales = {
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
};


test('it mixes in the enums', function(assert) {
  assert.deepEqual(subject.get("structures"), structures);
  assert.deepEqual(subject.get("structuresExemptFromGuarantors"), structuresExemptFromGuarantors);
  assert.deepEqual(subject.get("purposeOfFundsList"), purposeOfFundsList);
  assert.deepEqual(subject.get("businessSales"), businessSales);
  assert.deepEqual(subject.get("bankruptcyOptions"), bankruptcyOptions);
  assert.deepEqual(subject.get("locales.us.states"), locales.us.states);
  assert.deepEqual(subject.get("locales.ca.states"), locales.ca.states);
  assert.deepEqual(subject.get("locales.uk.currency"), locales.uk.currency);
});

const structuresOptions = [
  {
    "id": "Corporation",
    "name": "Corporation",
  },
  {
    "id": "S Corporation",
    "name": "S Corporation",
  },
  {
    "id": "Limited Corporation",
    "name": "Limited Corporation",
  },
  {
    "id": "Limited Liability Corporation",
    "name": "Limited Liability Corporation",
  },
  {
    "id": "Partnership",
    "name": "Partnership",
  },
  {
    "id": "Limited Liability Partnership",
    "name": "Limited Liability Partnership",
  },
  {
    "id": "Sole Proprietorship",
    "name": "Sole Proprietorship",
  },
  {
    "id": "Not-for-Profit",
    "name": "Not-for-Profit",
  },
  {
    "id": "Political Campaign",
    "name": "Political Campaign",
  },
  {
    "id": "Government Entity",
    "name": "Government Entity",
  },
  {
    "id": "Educational Institution",
    "name": "Educational Institution",
  }
];

const structuresExemptFromGuarantorsOptions = [
  {
    "id": "Political Campaign",
    "name": "Political Campaign",
  },
  {
    "id": "Government Entity",
    "name": "Government Entity",
  },
  {
    "id": "Educational Institution",
    "name": "Educational Institution",
  }
];

const purposeOfFundsOptions = [
  {
    "id": "Business Remodel",
    "name": "Business Remodel",
  },
  {
    "id": "Business Expansion",
    "name": "Business Expansion",
  },
  {
    "id": "Inventory Financing",
    "name": "Inventory Financing",
  },
  {
    "id": "Marketing Services",
    "name": "Marketing Services",
  },
  {
    "id": "Additional Equipment/Technology",
    "name": "Additional Equipment/Technology",
  },
  {
    "id": "Working Capital",
    "name": "Working Capital",
  }
];

const businessSalesOptions = [
  {
    "id": "below 250k",
    "name": "below 250k",
  },
  {
    "id": "250k - 500k",
    "name": "250k - 500k",
  },
  {
    "id": "500k - 1.0m",
    "name": "500k - 1.0m",
  },
  {
    "id": "1.0m - 1.5m",
    "name": "1.0m - 1.5m",
  },
  {
    "id": "above 1.5m",
    "name": "above 1.5m",
  }
];


const expectedUsStatesOptions = [
  {
    "id": "Alabama",
    "name": "Alabama",
  },
  {
    "id": "Alaska",
    "name": "Alaska",
  },
  {
    "id": "Arizona",
    "name": "Arizona",
  },
  {
    "id": "Arkansas",
    "name": "Arkansas",
  },
  {
    "id": "California",
    "name": "California",
  },
  {
    "id": "Colorado",
    "name": "Colorado",
  },
  {
    "id": "Connecticut",
    "name": "Connecticut",
  },
  {
    "id": "Delaware",
    "name": "Delaware",
  },
  {
    "id": "District Of Columbia",
    "name": "District Of Columbia",
  },
  {
    "id": "Florida",
    "name": "Florida",
  },
  {
    "id": "Georgia",
    "name": "Georgia",
  },
  {
    "id": "Hawaii",
    "name": "Hawaii",
  },
  {
    "id": "Idaho",
    "name": "Idaho",
  },
  {
    "id": "Illinois",
    "name": "Illinois",
  },
  {
    "id": "Indiana",
    "name": "Indiana",
  },
  {
    "id": "Iowa",
    "name": "Iowa",
  },
  {
    "id": "Kansas",
    "name": "Kansas",
  },
  {
    "id": "Kentucky",
    "name": "Kentucky",
  },
  {
    "id": "Louisiana",
    "name": "Louisiana",
  },
  {
    "id": "Maine",
    "name": "Maine",
  },
  {
    "id": "Maryland",
    "name": "Maryland",
  },
  {
    "id": "Massachusetts",
    "name": "Massachusetts",
  },
  {
    "id": "Michigan",
    "name": "Michigan",
  },
  {
    "id": "Minnesota",
    "name": "Minnesota",
  },
  {
    "id": "Mississippi",
    "name": "Mississippi",
  },
  {
    "id": "Missouri",
    "name": "Missouri",
  },
  {
    "id": "Montana",
    "name": "Montana",
  },
  {
    "id": "Nebraska",
    "name": "Nebraska",
  },
  {
    "id": "Nevada",
    "name": "Nevada",
  },
  {
    "id": "New Hampshire",
    "name": "New Hampshire",
  },
  {
    "id": "New Jersey",
    "name": "New Jersey",
  },
  {
    "id": "New Mexico",
    "name": "New Mexico",
  },
  {
    "id": "New York",
    "name": "New York",
  },
  {
    "id": "North Carolina",
    "name": "North Carolina",
  },
  {
    "id": "North Dakota",
    "name": "North Dakota",
  },
  {
    "id": "Ohio",
    "name": "Ohio",
  },
  {
    "id": "Oklahoma",
    "name": "Oklahoma",
  },
  {
    "id": "Oregon",
    "name": "Oregon",
  },
  {
    "id": "Pennsylvania",
    "name": "Pennsylvania",
  },
  {
    "id": "Rhode Island",
    "name": "Rhode Island",
  },
  {
    "id": "South Carolina",
    "name": "South Carolina",
  },
  {
    "id": "South Dakota",
    "name": "South Dakota",
  },
  {
    "id": "Tennessee",
    "name": "Tennessee",
  },
  {
    "id": "Texas",
    "name": "Texas",
  },
  {
    "id": "Utah",
    "name": "Utah",
  },
  {
    "id": "Vermont",
    "name": "Vermont",
  },
  {
    "id": "Virginia",
    "name": "Virginia",
  },
  {
    "id": "Washington",
    "name": "Washington",
  },
  {
    "id": "West Virginia",
    "name": "West Virginia",
  },
  {
    "id": "Wisconsin",
    "name": "Wisconsin",
  },
  {
    "id": "Wyoming",
    "name": "Wyoming",
  }
];

const expectedCaStatesOptions = [
  {
    "id": "Alberta",
    "name": "Alberta",
  },
  {
    "id": "British Columbia",
    "name": "British Columbia",
  },
  {
    "id": "Manitoba",
    "name": "Manitoba",
  },
  {
    "id": "New Brunswick",
    "name": "New Brunswick",
  },
  {
    "id": "Newfoundland",
    "name": "Newfoundland",
  },
  {
    "id": "Northwest Territories",
    "name": "Northwest Territories",
  },
  {
    "id": "Nova Scotia",
    "name": "Nova Scotia",
  },
  {
    "id": "Ontario",
    "name": "Ontario",
  },
  {
    "id": "Prince Edward Island",
    "name": "Prince Edward Island",
  },
  {
    "id": "Quebec",
    "name": "Quebec",
  },
  {
    "id": "Saskatchewan",
    "name": "Saskatchewan",
  },
  {
    "id": "Yukon",
    "name": "Yukon",
  }
];

test('#toOptions turns arrays into arrays of hashes', function(assert) {
  assert.deepEqual(subject.get("structuresOptions"), structuresOptions);
  assert.deepEqual(subject.get("purposeOfFundsOptions"), purposeOfFundsOptions);
  assert.deepEqual(subject.get("businessSalesOptions"), businessSalesOptions);
  assert.deepEqual(subject.get("localesUsStatesOptions"), expectedUsStatesOptions);
  assert.deepEqual(subject.get("localesCaStatesOptions"), expectedCaStatesOptions);
  assert.deepEqual(subject.get("structuresExemptFromGuarantorsOptions"), structuresExemptFromGuarantorsOptions);
});

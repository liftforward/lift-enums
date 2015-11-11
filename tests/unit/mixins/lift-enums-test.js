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
  
const purposeOfFunds = [
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
  assert.deepEqual(subject.get("purposeOfFunds"), purposeOfFunds);
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

test('#toHashes turns arrays into arrays of hashes', function(assert) {
  assert.deepEqual(subject.get("structuresOptions"), structuresOptions);
  assert.deepEqual(subject.get("structuresExemptFromGuarantosOptions"), structuresExemptFromGuarantorsOptions);
  assert.deepEqual(subject.get("purposeOfFundsOptions"), purposeOfFundsOptions);
  assert.deepEqual(subject.get("businessSalesOptions"), businessSalesOptions);
});

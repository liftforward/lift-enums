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

const EXP = {
  structures : 
    [
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
  structuresExemptFromGuarantors : 
    [
      "Political Campaign",
      "Government Entity",
      "Educational Institution"
    ],
  purposeOfFundsList : 
    [
      'Business Remodel',
      'Business Expansion',
      'Inventory Financing',
      'Marketing Services',
      'Additional Equipment/Technology',
      'Working Capital'
    ],
  businessSales : 
    [
      "below 250k",
      "250k - 500k",
      "500k - 1.0m",
      "1.0m - 1.5m",
      "above 1.5m"
    ],
};
  
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
  assert.deepEqual(subject.get("structures"), EXP.structures);
  assert.deepEqual(subject.get("structuresExemptFromGuarantors"), EXP.structuresExemptFromGuarantors);
  assert.deepEqual(subject.get("purposeOfFundsList"), EXP.purposeOfFundsList);
  assert.deepEqual(subject.get("businessSales"), EXP.businessSales);
  assert.deepEqual(subject.get("bankruptcyOptions"), bankruptcyOptions);
  assert.deepEqual(subject.get("locales.us.states"), locales.us.states);
  assert.deepEqual(subject.get("locales.ca.states"), locales.ca.states);
  assert.deepEqual(subject.get("locales.uk.currency"), locales.uk.currency);
});


const enumLists = [
  { list: "structures", options: "structuresOptions" },
  { list: "purposeOfFundsList", options: "purposeOfFundsOptions" },
  { list: "businessSales", options: "businessSalesOptions" },
  { list: "structuresExemptFromGuarantors", options: "structuresExemptFromGuarantorsOptions" },

];

enumLists.forEach(function({ list, options }) {
  test(`#toOptions turns array of ${list} into array of ${options}.`, function(assert) {
    checkArrayItemInOptions(subject.get(options), EXP[list], assert);
  });

});

const localeStates = [
  { list: locales.us.states, options: "localesUsStatesOptions" },
  { list: locales.ca.states, options: "localesCaStatesOptions" },
];


localeStates.forEach(function({ list, options }) {
  test(`#toOptions turns array of states into array of ${options}.`, function(assert) {
    checkArrayItemInOptions(subject.get(options), list, assert);
  });

});

function checkArrayItemInOptionsItem({id, name}, arrayItem) {
  return id === arrayItem && name === arrayItem;
}

function checkArrayItemInOptions(options, array, assert) {
  for(var i = 0; i<array.length;i++) {
    assert.ok(checkArrayItemInOptionsItem(options[i], array[i]));
  }
}

export const FILTER_OPTIONS_RESPONSE = {
  fields: [
    {
      field: 'generalEducation',
      text: 'General Education Requirements',
      options: [
        {
          value: 'ACP',
          text: 'Advanced Composition'
        },
        {
          value: 'CS',
          text: 'Cultural Studies'
        },
        {
          value: 'HUM',
          text: 'Humanities & the Arts'
        },
        {
          value: 'NAT',
          text: 'Natural Science & Technology'
        },
        {
          value: 'QR',
          text: 'Quantitative Reasoning'
        },
        {
          value: 'SBS',
          text: 'Social & Behavioral Science'
        }
      ]
    },
    {
      field: 'creditHours',
      text: 'Credit Hours',
      options: [
        {
          value: 1,
          text: '1 Credit Hour'
        },
        {
          value: 2,
          text: '2 Credit Hours'
        },
        {
          value: 3,
          text: '3 Credit Hours'
        },
        {
          value: 4,
          text: '4 Credit Hours'
        },
        {
          value: 5,
          text: '5 Credit Hours'
        }
      ]
    },
    {
      field: 'term',
      text: 'Term',
      options: [
        {
          value: '2019-FALL',
          text: 'Fall 2019'
        },
        {
          value: '2020-WINTER',
          text: 'Winter 2020'
        },
        {
          value: '2020-SPRING',
          text: 'Spring 2020'
        }
      ]
    }
  ]
};

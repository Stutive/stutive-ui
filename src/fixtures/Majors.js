export const CS = {
  title: 'Computer Science, BS',
  requirements: [
    {
      type: 'AND',
      title: 'Orientation and Professional Development',
      display: 'SECTION',
      requirements: ['CS 100', 'CS 210', 'ENG 100']
    },
    {
      type: 'AND',
      title: 'Foundation Mathematics and Science',
      display: 'SECTION',
      requirements: [
        'MATH 221',
        'MATH 231',
        'MATH 241',
        'MATH 415',
        'PHYS 211',
        'PHYS 212',
        {
          type: 'CREDIT',
          number: 3,
          title: 'Departmentally approved list of Science Electives',
          display: 'TABLE',
          requirements: [
            'AE 202',
            'ANTH 249',
            'ASTR 210',
            'ASTR 350',
            'ATMS 100',
            'ATMS 120',
            'ATMS 140',
            'ATMS 201',
            'BIOE 205',
            'BIOE 206',
            'CEE 201',
            'CEE 202',
            'CHEM 102',
            'CHEM 103',
            'CPCS 112',
            'CPSC 265',
            'CPSC 270',
            'DANC 345',
            'FSHN 101',
            'FSHN 120',
            'GEOL 107',
            'GEOL 111',
            'GEOL 117',
            'GEOL 118',
            'GEOL 143',
            'GEOL 208',
            'IB 103',
            'IB 104',
            'IB 150',
            'KIN 150',
            'MCB 150',
            'MCB 244',
            'NPRE 247',
            'NRES 100',
            'NRES 102',
            'PSYC 204',
            'PSYC 224',
            'PSYC 248',
            'SHS 240',
            'SHS 280'
          ]
        }
      ]
    },
    {
      type: 'AND',
      title: 'Computer Science Technical Core',
      display: 'SECTION',
      requirements: [
        'CS 125',
        'CS 126',
        'CS 173',
        'CS 225',
        'CS 233',
        'CS 241',
        'CS 361',
        'CS 357',
        'CS 374',
        'CS 421'
      ]
    },
    {
      type: 'AND',
      title: 'Technical Electives',
      display: 'SECTION',
      requirements: [
        {
          type: 'OR',
          title: 'Team Project Requirement',
          display: 'TABLE',
          requirements: [
            'CS 427',
            'CS 428',
            'CS 429',
            'CS 445',
            'CS 465',
            'CS 467',
            'CS 493',
            'CS 494',
            'CS 497',
            'CS 498'
          ]
        },
        {
          type: 'OR',
          title: 'Focus Area',
          display: 'SECTION',
          requirements: [
            {
              type: 'SELECT',
              number: 3,
              title: 'Software Foundations',
              display: 'TABLE',
              requirements: [
                'CS 422',
                'CS 426',
                'CS 427',
                'CS 428',
                'CS 429',
                'CS 476',
                'CS 477',
                'CS 492',
                'CS 498',
                'CS 522',
                'CS 524',
                'CS 426',
                'CS 527',
                'CS 528',
                'CS 576',
                'CS 598'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              title: 'Algorithms and Models of Computation',
              display: 'TABLE',
              requirements: [
                'CS 413',
                'CS 473',
                'CS 475',
                'CS 476',
                'CS 477',
                'CS 481',
                'CS 482',
                'CS 498',
                'CS 571',
                'CS 572',
                'CS 573',
                'CS 574',
                'CS 575',
                'CS 576',
                'CS 579',
                'CS 583',
                'CS 584',
                'CS 598'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              title: 'Intelligence and Big Data',
              display: 'TABLE',
              requirements: [
                'CS 410',
                'CS 411',
                'CS 412',
                'CS 412',
                'CS 440',
                'CS 445',
                'ECE 470',
                'CS 446',
                'CS 447',
                'CS 466',
                'CS 467',
                'CS 498',
                'CS 510',
                'CS 511',
                'CS 512',
                'CS 543',
                'CS 544',
                'CS 546',
                'CS 548',
                'CS 576',
                'CS 598'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              title: 'Human and Social Impact',
              display: 'TABLE',
              requirements: [
                'CS 460',
                'CS 461',
                'CS 463',
                'CS 465',
                'CS 467',
                'CS 468',
                'CS 498',
                'CS 563',
                'CS 565'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              title: 'Media',
              display: 'TABLE',
              requirements: [
                'CS 414',
                'CS 418',
                'CS 419',
                'CS 445',
                'CS 465',
                'CS 467',
                'CS 468',
                'CS 498',
                'CS 519',
                'CS 565',
                'CS 598'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              display: 'TABLE',
              title: 'Scientific, Parallel, and High Performance Computing',
              requirements: [
                'CS 419',
                'CS 450',
                'CS 457',
                'CS 466',
                'CS 482',
                'CS 483',
                'CS 484',
                'CS 498',
                'CS 519',
                'CS 554',
                'CS 555',
                'CS 556',
                'CS 558'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              display: 'TABLE',
              title: 'Distributed Systems, Networking, and Security',
              requirements: [
                'CS 423',
                'CS 424',
                'CS 425',
                'CS 431',
                'CS 436',
                'CS 438',
                'CS 439',
                'CS 460',
                'CS 461',
                'CS 463',
                'CS 484',
                'CS 498',
                'CS 523',
                'CS 524',
                'CS 525',
                'CS 538',
                'CS 563'
              ]
            },
            {
              type: 'SELECT',
              number: 3,
              display: 'TABLE',
              title: 'Machines',
              requirements: [
                'CS 423',
                'CS 424',
                'CS 426',
                'CS 431',
                'CS 433',
                'CS 484',
                'CS 523',
                'CS 526',
                'CS 533',
                'CS 536',
                'CS 541',
                'CS 584',
                'CS 598'
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'CREDIT',
      number: 6,
      title: 'Computer Science Advanced Electives',
      requirements: ['XX 4--']
    }
  ]
};

export const MCB = {
  title: 'Molecular & Cellular Biology, BSLAS',
  requirements: [
    {
      type: 'AND',
      requirements: [
        {
          type: 'OR',
          requirements: ['MATH 220', 'MATH 221']
        },
        {
          type: 'OR',
          requirements: ['MATH 231', 'STAT 212']
        },
        {
          type: 'OR',
          requirements: [
            {
              type: 'AND',
              requirements: ['CHEM 102', 'CHEM 103', 'CHEM 104', 'CHEM 105']
            },
            {
              type: 'AND',
              requirements: ['CHEM 202', 'CHEM 203', 'CHEM 204', 'CHEM 205']
            }
          ]
        },
        'CHEM 232',
        'CHEM 233',
        {
          type: 'OR',
          requirements: [
            {
              type: 'AND',
              requirements: ['PHYS 101', 'PHYS 102']
            },
            {
              type: 'AND',
              requirements: ['PHYS 211', 'PHYS 212', 'PHYS 213', 'PHYS 214']
            }
          ]
        },
        'IB 150',
        'MCB 150',
        'MCB 250',
        'MCB 251',
        'MCB 252',
        'MCB 253',
        'MCB 354',
        {
          type: 'SELECT',
          number: 4,
          requirements: ['MCB 3--', 'MCB 4--']
        }
      ]
    }
  ]
};

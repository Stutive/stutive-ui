export const CS = {
  title: 'Computer Science, BS',
  requirements: [
    {
      type: 'AND',
      title: 'Orientation and Professional Development',
      description:
        'These courses introduce the opportunities and resources your college, department, and curriculum can offer you as you work to achieve your career goals. They also provide the skills to work effectively and successfully in the engineering profession.',
      display: 'SECTION',
      requirements: ['CS 100', 'CS 210', 'ENG 100']
    },
    {
      type: 'AND',
      title: 'Foundation Mathematics and Science',
      description:
        'These courses stress the basic mathematical and scientific principles upon which the engineering discipline is based.',
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
      description:
        'These courses stress fundamental concepts and basic laboratory techniques that comprise the common intellectual understanding of computer science.',
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
      description:
        'These courses stress the rigorous analysis and design principles practiced in major subdisciplines of computer science. Students select eight courses, at least six of which must be advanced CS courses.  Three courses must be selected from one area of CS and at least one course should satisfy the team project requirement.',
      display: 'SECTION',
      requirements: [
        {
          type: 'OR',
          title: 'Team Project Requirement',
          description:
            'Technical electives to be chosen from departmentally approved list below. One of the six CS courses must satisfy the team project requirement using any of the following courses below, taken at the University of Illinois Urbana-Champaign (study abroad or transfer equivalents of these courses may not satisfy the Team Project requirement):',
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
          description:
            'Three of the CS courses must be chosen from a single focus area, from among the areas below:',
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
      display: 'SECTION',
      title: 'Computer Science Advanced Electives',
      description:
        "Students must take at least two courses comprising at least 6 hours of 400-level coursework in ANY area offered at the University (including independent study - CS 397 may also be used to count towards these two additional advanced courses). These might be CS courses but don't have to be. Courses must be taken for a letter grade (CS 491 and other seminar courses do not count). It is expected that students will select these additional advanced courses in a way that best augments their program of study. Consultation with faculty mentor is highly encouraged.",
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

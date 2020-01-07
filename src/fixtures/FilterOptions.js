export const FILTER_OPTIONS_RESPONSE = {
  fields: [
    {
      field: 'subject',
      text: 'Subject',
      placeholder: 'Select a Subject',
      searchable: true,
      options: [
        { value: 'AAS', text: 'Asian American Studies' },
        { value: 'ABE', text: 'Agricultural and Biological Engineering' },
        { value: 'ACCY', text: 'Accountancy' },
        { value: 'ACE', text: 'Agricultural and Consumer Economics' },
        {
          value: 'ACES',
          text: 'Agricultural, Consumer and Environmental Sciences'
        },
        { value: 'ADV', text: 'Advertising' },
        { value: 'AE', text: 'Aerospace Engineering' },
        { value: 'AFAS', text: 'Air Force Aerospace Studies' },
        { value: 'AFRO', text: 'African American Studies' },
        { value: 'AFST', text: 'African Studies' },
        { value: 'AGCM', text: 'Agricultural Communications' },
        { value: 'AGED', text: 'Agricultural Education' },
        { value: 'AHS', text: 'Applied Health Sciences Courses' },
        { value: 'AIS', text: 'American Indian Studies' },
        {
          value: 'ALEC',
          text: 'Agricultural Leadership, Education, and Communications Program'
        },
        { value: 'ANSC', text: 'Animal Sciences' },
        { value: 'ANTH', text: 'Anthropology' },
        { value: 'ARAB', text: 'Arabic' },
        { value: 'ARCH', text: 'Architecture' },
        { value: 'ART', text: 'Art' },
        { value: 'ARTD', text: 'Art--Design' },
        { value: 'ARTE', text: 'Art--Education' },
        { value: 'ARTF', text: 'Art--Foundation' },
        { value: 'ARTH', text: 'Art--History' },
        { value: 'ARTS', text: 'Art--Studio' },
        { value: 'ASRM', text: 'Actuarial Science and Risk Management' },
        { value: 'ASST', text: 'Asian Studies' },
        { value: 'ASTR', text: 'Astronomy' },
        { value: 'ATMS', text: 'Atmospheric Sciences' },
        { value: 'BADM', text: 'Business Administration' },
        { value: 'BASQ', text: 'Basque' },
        { value: 'BCOG', text: 'Brain and Cognitive Science' },
        { value: 'BCS', text: 'Bosnian-Croatian-Serbian' },
        { value: 'BIOC', text: 'Biochemistry' },
        { value: 'BIOE', text: 'Bioengineering' },
        { value: 'BIOL', text: 'Biology' },
        { value: 'BIOP', text: 'Biophysics' },
        { value: 'BSE', text: 'Biomedical Sciences and Engineering' },
        { value: 'BTW', text: 'Business and Technical Writing' },
        { value: 'BUS', text: 'Business' },
        { value: 'CAS', text: 'Center for Advanced Study' },
        { value: 'CB', text: 'Comparative Biosciences' },
        { value: 'CDB', text: 'Cell and Developmental Biology' },
        { value: 'CEE', text: 'Civil and Environmental Engineering' },
        { value: 'CHBE', text: 'Chemical and Biomolecular Engineering' },
        { value: 'CHEM', text: 'Chemistry' },
        { value: 'CHIN', text: 'Chinese' },
        { value: 'CHLH', text: 'Community Health' },
        { value: 'CHP', text: 'Campus Honors Program Courses' },
        { value: 'CI', text: 'Curriculum and Instruction' },
        { value: 'CIC', text: 'Committee on Inst Cooperation' },
        { value: 'CLCV', text: 'Classical Civilization' },
        { value: 'CLE', text: 'Clinical Sciences and Engineering' },
        { value: 'CMN', text: 'Communication' },
        { value: 'CPSC', text: 'Crop Sciences' },
        { value: 'CS', text: 'Computer Science' },
        { value: 'CSE', text: 'Computational Science and Engineering' },
        { value: 'CW', text: 'Creative Writing' },
        { value: 'CWL', text: 'Comparative and World Literature' },
        { value: 'CZCH', text: 'Czech' },
        { value: 'DANC', text: 'Dance' },
        { value: 'EALC', text: 'East Asian Language and Culture' },
        { value: 'ECE', text: 'Electrical and Computer Engineering' },
        { value: 'ECON', text: 'Economics' },
        { value: 'EDPR', text: 'Educational Practice' },
        { value: 'EDUC', text: 'Education' },
        { value: 'EIL', text: 'English as an International Language' },
        { value: 'ENG', text: 'Engineering' },
        { value: 'ENGH', text: 'Engineering Honors' },
        { value: 'ENGL', text: 'English' },
        { value: 'ENSU', text: 'Environmental Sustainability' },
        { value: 'ENT', text: 'Entomology' },
        { value: 'ENVS', text: 'Environmental Studies' },
        { value: 'EOL', text: 'Educational Organization and Leadership' },
        {
          value: 'EPOL',
          text: 'Education Policy, Organization and Leadership'
        },
        { value: 'EPS', text: 'Educational Policy Studies' },
        { value: 'EPSY', text: 'Educational Psychology' },
        { value: 'ESE', text: 'Earth, Society, and Environment' },
        { value: 'ESL', text: 'English as a Second Language' },
        { value: 'EURO', text: 'European Union Studies' },
        { value: 'FAA', text: 'Fine and Applied Arts' },
        { value: 'FIN', text: 'Finance' },
        { value: 'FLTE', text: 'Foreign Language Teacher Education' },
        { value: 'FR', text: 'French' },
        { value: 'FSHN', text: 'Food Science and Human Nutrition' },
        { value: 'GC', text: 'Graduate College' },
        { value: 'GCL', text: 'Grand Challenge Learning' },
        { value: 'GEOG', text: 'Geography' },
        { value: 'GEOL', text: 'Geology' },
        { value: 'GER', text: 'German' },
        { value: 'GLBL', text: 'Global Studies' },
        { value: 'GMC', text: 'Germanic' },
        { value: 'GRK', text: 'Greek' },
        { value: 'GRKM', text: 'Modern Greek' },
        { value: 'GS', text: 'General Studies' },
        { value: 'GWS', text: "Gender and Women's Studies" },
        { value: 'HDFS', text: 'Human Development and Family Studies' },
        { value: 'HEBR', text: 'Hebrew, Modern and Classical' },
        { value: 'HIST', text: 'History' },
        { value: 'HNDI', text: 'Hindi' },
        { value: 'HORT', text: 'Horticulture' },
        { value: 'HRD', text: 'Human Resource Development' },
        { value: 'HT', text: 'Health Technology' },
        { value: 'HUM', text: 'Humanities Courses' },
        { value: 'IB', text: 'Integrative Biology' },
        { value: 'IE', text: 'Industrial Engineering' },
        { value: 'IHLT', text: 'Interdisciplinary Health Sciences' },
        { value: 'INFO', text: 'Informatics' },
        { value: 'IS', text: 'Information Sciences' },
        { value: 'ITAL', text: 'Italian' },
        { value: 'JAPN', text: 'Japanese' },
        { value: 'JOUR', text: 'Journalism' },
        { value: 'JS', text: 'Jewish Studies' },
        { value: 'KIN', text: 'Kinesiology' },
        { value: 'KOR', text: 'Korean' },
        { value: 'LA', text: 'Landscape Architecture' },
        { value: 'LAS', text: 'Liberal Arts and Sciences' },
        { value: 'LAST', text: 'Latin American and Caribbean Studies' },
        { value: 'LAT', text: 'Latin' },
        { value: 'LAW', text: 'Law' },
        { value: 'LEAD', text: 'Organizational and Community Leadership' },
        { value: 'LER', text: 'Labor and Employment Relations' },
        { value: 'LING', text: 'Linguistics' },
        { value: 'LLS', text: 'Latina/Latino Studies' },
        { value: 'MACS', text: 'Media and Cinema Studies' },
        { value: 'MATH', text: 'Mathematics' },
        { value: 'MBA', text: 'Regular MBA Program Administration' },
        { value: 'MCB', text: 'Molecular and Cell Biology' },
        { value: 'MDIA', text: 'Media' },
        { value: 'MDVL', text: 'Medieval Studies' },
        { value: 'ME', text: 'Mechanical Engineering' },
        { value: 'MFST', text: 'Metropolitan Food and Environmental Systems' },
        { value: 'MICR', text: 'Microbiology' },
        { value: 'MILS', text: 'Military Science' },
        { value: 'MIP', text: 'Molecular and Integrative Physiology' },
        { value: 'MSE', text: 'Materials Science and Engineering' },
        { value: 'MUS', text: 'Music' },
        { value: 'MUSE', text: 'Museum Studies' },
        { value: 'NEUR', text: 'Neuroscience' },
        {
          value: 'NPRE',
          text: 'Nuclear, Plasma, and Radiological Engineering'
        },
        { value: 'NRES', text: 'Natural Resources and Environmental Sciences' },
        { value: 'NS', text: 'Naval Science' },
        { value: 'NUTR', text: 'Nutritional Sciences' },
        { value: 'PATH', text: 'Pathobiology' },
        { value: 'PBIO', text: 'Plant Biology' },
        { value: 'PERS', text: 'Persian' },
        { value: 'PHIL', text: 'Philosophy' },
        { value: 'PHYS', text: 'Physics' },
        { value: 'PLPA', text: 'Plant Pathology' },
        { value: 'POL', text: 'Polish' },
        { value: 'PORT', text: 'Portuguese' },
        { value: 'PS', text: 'Political Science' },
        { value: 'PSM', text: "Professional Science Master's Program" },
        { value: 'PSYC', text: 'Psychology' },
        { value: 'REES', text: 'Russian, East European and Eurasian Studies' },
        { value: 'REHB', text: 'Rehabilitation Counseling' },
        { value: 'REL', text: 'Religion' },
        { value: 'RHET', text: 'Rhetoric and Composition' },
        { value: 'RMLG', text: 'Romance Linguistics' },
        { value: 'RST', text: 'Recreation, Sport, and Tourism' },
        { value: 'RUSS', text: 'Russian' },
        { value: 'SAME', text: 'South Asian and Middle Eastern Studies' },
        { value: 'SBC', text: 'Strategic Brand Communication' },
        { value: 'SCAN', text: 'Scandinavian' },
        { value: 'SE', text: 'Systems Engineering and Design' },
        { value: 'SHS', text: 'Speech and Hearing Science' },
        { value: 'SLAV', text: 'Slavic' },
        { value: 'SLS', text: 'Second Language Studies' },
        { value: 'SOC', text: 'Sociology' },
        { value: 'SOCW', text: 'Social Work' },
        { value: 'SPAN', text: 'Spanish' },
        { value: 'SPED', text: 'Special Education' },
        { value: 'STAT', text: 'Statistics' },
        { value: 'SWAH', text: 'Swahili' },
        { value: 'TAM', text: 'Theoretical and Applied Mechanics' },
        { value: 'TE', text: 'Technology Entrepreneurship' },
        { value: 'THEA', text: 'Theatre' },
        { value: 'TMGT', text: 'Technology and Management Courses' },
        { value: 'TRST', text: 'Translation Studies' },
        { value: 'TSM', text: 'Technical Systems Management' },
        { value: 'TURK', text: 'Turkish' },
        { value: 'UKR', text: 'Ukrainian' },
        { value: 'UP', text: 'Urban and Regional Planning' },
        { value: 'VCM', text: 'Veterinary Clinical Medicine' },
        { value: 'VM', text: 'Veterinary Medicine Courses' },
        {
          value: 'WGGP',
          text: 'Women and Gender in Global Perspectives Program'
        },
        { value: 'WLOF', text: 'Wolof' },
        { value: 'WRIT', text: 'Writing Studies' },
        { value: 'YDSH', text: 'Yiddish' }
      ]
    },
    {
      field: 'genEds',
      text: 'General Education Requirements',
      placeholder: 'Select a Gen Ed Requirement',
      options: [
        {
          value: 'CS1US',
          text: 'Cultural Studies - US Minority Cultures'
        },
        {
          value: 'SBS1SS',
          text: 'Social and Behavioral Sciences - Social Sciences'
        },
        {
          value: 'HUM1HP',
          text:
            'Humanities & the Arts - Historical and Philosophical Perspectives'
        },
        {
          value: 'HUM1LA',
          text: 'Humanities & the Arts - Literature and the Arts'
        },
        {
          value: 'CS1NW',
          text: 'Cultural Studies - Non-Western Culture(s)'
        },
        {
          value: 'ACP1CLL',
          text: 'Advanced Composition'
        },
        {
          value: 'QR1QR1',
          text: 'Quantitative Reasoning I'
        },
        {
          value: 'NAT1LS',
          text: 'Natural Science and Technology - Life Sciences'
        },
        {
          value: 'CS1WCC',
          text: 'Cultural Studies - Western/Comparative Culture(s)'
        },
        {
          value: 'SBS1BSC',
          text: 'Social and Behavioral Sciences - Behavioral Sciences'
        },
        {
          value: 'NAT1PS',
          text: 'Natural Science and Technology - Physical Sciences'
        },
        {
          value: 'QR1QR2',
          text: 'Quantitative Reasoning II'
        },
        {
          value: 'COMP11FC1',
          text: 'Composition I'
        }
      ],
      multi: true
    },
    {
      field: 'hours',
      text: 'Credit Hours',
      placeholder: 'Select a Credit Hour',
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
      ],
      multi: true
    }
  ]
};

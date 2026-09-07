export interface FiveWhysStep {
  level: number;
  question: string;
  answer: string;
}

export interface RCAItem {
  id: string;
  category: 'APOLOGETICS' | 'SCIENCE & FAITH' | 'CULTURE & SOCIETY' | 'FAITH & DOCTRINE';
  title: string;
  claim: string;
  rootCause: string;
  author: {
    name: string;
    avatar: string;
    role?: string;
  };
  publishedAt: string;
  tags: string[];
  image: string;
  fiveWhys: FiveWhysStep[];
  evidenceSources: {
    title: string;
    authorOrSource: string;
    url?: string;
  }[];
  rcaResponse: string;
  scriptureReferences: string[];
  relatedId?: string;
}

export interface IncidentTimelineItem {
  date: string;
  event: string;
}

export interface PersecutionIncident {
  id: string;
  title: string;
  country: string;
  location: string;
  publishedAt: string;
  status: 'Ongoing' | 'Resolved';
  severity: 'High' | 'Medium' | 'Low';
  perpetrators: string;
  victims: string;
  description: string;
  timeline: IncidentTimelineItem[];
  sources: string[];
  rcaAnalysis: string;
  prayerPoints: string[];
  prayerCount: number;
  image: string;
  relatedRcaId?: string;
}

export interface ChurchListing {
  id: string;
  name: string;
  denomination: string;
  location: string;
  address: string;
  serviceTimes: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  faithDeclaration: string[];
  tags: string[];
  image: string;
}

export const RCA_DATA: RCAItem[] = [
  {
    id: 'rca-1',
    category: 'APOLOGETICS',
    title: 'Is the Resurrection of Jesus Historically Reliable?',
    claim: 'The claim: the resurrection is a myth. The root cause lies in the lack of historical understanding and selective skepticism.',
    rootCause: 'Selective skepticism and naturalistic bias that discounts early eyewitness testimony.',
    author: {
      name: 'RCA Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Apr 12, 2025',
    tags: ['Bible', 'History', 'Evidence'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      {
        level: 1,
        question: 'Why is the resurrection questioned?',
        answer: 'Because it seems impossible and lacks modern empirical observation standards.'
      },
      {
        level: 2,
        question: 'Why does it seem improbable?',
        answer: 'Because it challenges naturalistic worldview and human material expectations.'
      },
      {
        level: 3,
        question: 'Why does it challenge naturalism?',
        answer: 'Because it involves a supernatural intervention directly in space-time history.'
      },
      {
        level: 4,
        question: 'Why is naturalism preferred?',
        answer: 'Because it feels more autonomous and avoids moral accountability to divine authority.'
      },
      {
        level: 5,
        question: 'Why is it preferred over historical evidence?',
        answer: 'Because of a presuppositional bias against miracles, despite multiple independent early eyewitness accounts.'
      }
    ],
    evidenceSources: [
      { title: 'The resurrection accounts in early Christian records', authorOrSource: 'Gospels & Paul' },
      { title: 'Historical reliability of the Gospels', authorOrSource: 'William Lane Craig' },
      { title: 'The Resurrection of the Son of God', authorOrSource: 'N.T. Wright' }
    ],
    rcaResponse: 'The resurrection is not a myth, but a historically credible event supported by multiple independent lines of evidence, including eyewitness testimony, the empty tomb acknowledged by enemies, and the sudden emergence of the early Christian church in Jerusalem.',
    scriptureReferences: ['1 Corinthians 15:3-8', 'Luke 24:1-12', 'Acts 1:1-11'],
    relatedId: 'rca-10'
  },
  {
    id: 'rca-2',
    category: 'SCIENCE & FAITH',
    title: 'Does Science Disprove God?',
    claim: 'The claim: science and faith are incompatible. The rest cause is a false dichotomy and misunderstanding of what science can and cannot address.',
    rootCause: 'Confusing the mechanism of how physical laws operate with the agency of who created and sustains them.',
    author: {
      name: 'Dr. James Whitfield',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Apr 8, 2025',
    tags: ['Science', 'Theology', 'Worldview'],
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why is science viewed in conflict with God?', answer: 'People believe science explains everything through material cause and effect alone.' },
      { level: 2, question: 'Why do they believe material causes are sufficient?', answer: 'Because of scientism—the belief that only empirical science produces true knowledge.' },
      { level: 3, question: 'Why is scientism flawed?', answer: 'Scientism cannot validate itself through empirical science (it is a philosophical claim).' },
      { level: 4, question: 'Why do people still embrace scientism?', answer: 'To maintain an illusion of neutrality and autonomous human understanding.' },
      { level: 5, question: 'What is the root cause?', answer: 'Confusing mechanism with agency; science explores how the creation functions, but God is the Creator.' }
    ],
    evidenceSources: [
      { title: 'God’s Undertaker: Has Science Buried God?', authorOrSource: 'John C. Lennox' },
      { title: 'The Fine-Tuning of the Universe', authorOrSource: 'Robin Collins' }
    ],
    rcaResponse: 'Modern science arose historically out of a Christian worldview that the universe is orderly and rational because God is a rational Creator. Science reveals the mechanisms of creation, which point toward an intelligent Designer.',
    scriptureReferences: ['Psalm 19:1-2', 'Romans 1:20', 'Colossians 1:16-17'],
    relatedId: 'rca-7'
  },
  {
    id: 'rca-3',
    category: 'CULTURE & SOCIETY',
    title: 'The Gender Ideology Agenda',
    claim: 'The claim: gender is purely a social construct. The root cause is a rejection of God\'s design and an overreliance on human autonomy.',
    rootCause: 'Expressive individualism elevating internal self-definition above biological reality and divine design.',
    author: {
      name: 'RCA Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Apr 4, 2025',
    tags: ['Culture', 'Ethics', 'Biblical Truth'],
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why is biological sex separated from gender?', answer: 'Society asserts that psychological identity overrides objective bodily reality.' },
      { level: 2, question: 'Why does psychology override biology?', answer: 'Expressive individualism posits that authentic humanity is discovered solely within subjective desires.' },
      { level: 3, question: 'Why has expressive individualism dominated?', answer: 'Because cultural elites dismantled traditional and theological frameworks for identity.' },
      { level: 4, question: 'Why were theological frameworks dismantled?', answer: 'To eliminate external authority and accountability to the Creator.' },
      { level: 5, question: 'What is the root cause?', answer: 'The rebellion of the creature attempting to redefine reality in place of the sovereign Creator.' }
    ],
    evidenceSources: [
      { title: 'The Rise and Triumph of the Modern Self', authorOrSource: 'Carl R. Trueman' },
      { title: 'Love Thy Body: Answering Hard Questions about Life and Sexuality', authorOrSource: 'Nancy Pearcey' }
    ],
    rcaResponse: 'God created humanity in His own image as male and female (Genesis 1:27). True human flourishing occurs when body and identity are harmonized under God’s redemptive and loving purpose.',
    scriptureReferences: ['Genesis 1:27', 'Matthew 19:4-6', '1 Corinthians 6:19-20'],
    relatedId: 'rca-9'
  },
  {
    id: 'rca-4',
    category: 'FAITH & DOCTRINE',
    title: 'What Happens After Death?',
    claim: 'The claim: consciousness ends at death. The root cause is a materialistic worldview and lack of biblical hope.',
    rootCause: 'Materialism assuming the brain produces soul, ignoring transcendent spiritual reality and Christ’s victory over death.',
    author: {
      name: 'Dr. Sarah Collins',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Mar 28, 2025',
    tags: ['Eschatology', 'Resurrection', 'Hope'],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why do secularists believe death is extinction?', answer: 'They reduce the human mind and soul to chemical reactions.' },
      { level: 2, question: 'Why is the soul reduced to physical matter?', answer: 'Because naturalism forbids non-physical entities from consideration.' },
      { level: 3, question: 'Why does this view bring despair?', answer: 'Because without eternal accountability and hope, life loses objective purpose.' },
      { level: 4, question: 'What did Christ accomplish regarding death?', answer: 'He broke the power of death through bodily resurrection.' },
      { level: 5, question: 'What is the root cause?', answer: 'Unbelief in the Creator who holds the keys to life, judgment, and eternity.' }
    ],
    evidenceSources: [
      { title: 'Surprised by Hope', authorOrSource: 'N.T. Wright' },
      { title: 'Beyond Death: Exploring the Evidence for Immortality', authorOrSource: 'Gary Habermas' }
    ],
    rcaResponse: 'Biblical Christianity teaches that physical death is not the end. Those in Christ await a glorious bodily resurrection, while all humanity will give an account before the righteous Judge.',
    scriptureReferences: ['John 11:25-26', '2 Corinthians 5:8', 'Hebrews 9:27', 'Revelation 21:1-4'],
    relatedId: 'rca-1'
  },
  {
    id: 'rca-5',
    category: 'APOLOGETICS',
    title: 'Is the Bible Reliable?',
    claim: 'The claim: the Bible is full of contradictions. The root cause is a misunderstanding of inspiration, genre and context.',
    rootCause: 'Superficial readings and modern chronological snobbery that ignore ancient historical genres and hermeneutics.',
    author: {
      name: 'RCA Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Mar 20, 2025',
    tags: ['Inspiration', 'Textual Criticism', 'History'],
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why do skeptics allege biblical contradictions?', answer: 'Apparent differences between parallel Gospel passages or historical numbers.' },
      { level: 2, question: 'Why do these differences exist?', answer: 'Ancient authors wrote with complementary perspectives and distinct thematic emphases.' },
      { level: 3, question: 'Do these differences undermine historical reliability?', answer: 'No, independent witness variation is a recognized hallmark of authentic historical testimony.' },
      { level: 4, question: 'How well preserved are the manuscripts?', answer: 'With over 5,800 Greek manuscripts, the New Testament has unparalleled textual preservation.' },
      { level: 5, question: 'What is the root cause of skepticism?', answer: 'A desire to reject biblical moral authority disguised as academic criticism.' }
    ],
    evidenceSources: [
      { title: 'Can We Trust the Gospels?', authorOrSource: 'Peter J. Williams' },
      { title: 'The Historical Reliability of the New Testament', authorOrSource: 'Craig L. Blomberg' }
    ],
    rcaResponse: 'Scripture is God-breathed, preserved with remarkable manuscript accuracy, and thoroughly vindicated by archaeology and historical inquiry.',
    scriptureReferences: ['2 Timothy 3:16-17', '2 Peter 1:20-21', 'Psalm 119:160'],
    relatedId: 'rca-10'
  },
  {
    id: 'rca-6',
    category: 'CULTURE & SOCIETY',
    title: 'The Problem of Evil',
    claim: 'The claim: an all-powerful, loving God would not allow suffering. The root cause is a limited understanding of God\'s sovereignty and redemptive purpose.',
    rootCause: 'Judging God by finite human timelines while ignoring the cosmic reality of human rebellion and the Cross.',
    author: {
      name: 'Dr. Michael Reeves',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Mar 15, 2025',
    tags: ['Theodicy', 'Suffering', 'Faith'],
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why does evil cause intellectual struggle?', answer: 'It is painful to reconcile tragic evil with an omnipotent and benevolent God.' },
      { level: 2, question: 'Can evil exist in an atheistic universe?', answer: 'Without God, objective moral evil cannot exist; it would only be matter in motion.' },
      { level: 3, question: 'Why does God allow suffering to continue?', answer: 'To allow space for repentance, cultivate virtue, and bring about a greater eternal redemption.' },
      { level: 4, question: 'How did God enter human suffering?', answer: 'Through Jesus Christ, who suffered the ultimate evil on the cross on our behalf.' },
      { level: 5, question: 'What is the ultimate root cause?', answer: 'Human rebellion introduced sin into creation; God in His sovereignty will ultimately destroy all evil forever.' }
    ],
    evidenceSources: [
      { title: 'Walking with God through Pain and Suffering', authorOrSource: 'Timothy Keller' },
      { title: 'The Problem of Pain', authorOrSource: 'C.S. Lewis' }
    ],
    rcaResponse: 'Far from proving God’s absence, evil points to an objective moral standard. Christianity is the only worldview where God personally enters human suffering to conquer it.',
    scriptureReferences: ['Romans 8:18-28', 'Genesis 50:20', 'Revelation 21:4'],
    relatedId: 'rca-4'
  },
  {
    id: 'rca-7',
    category: 'SCIENCE & FAITH',
    title: 'Origins and Evolution',
    claim: 'The claim: undirected evolutionary processes fully explain the origin and complexity of life.',
    rootCause: 'Methodological naturalism elevated to metaphysical dogma.',
    author: {
      name: 'Dr. James Whitfield',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Mar 11, 2025',
    tags: ['Cosmology', 'Biology', 'Creation'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why is biological complexity attributed to chance?', answer: 'Because macroevolution is assumed as the default naturalistic mechanism.' },
      { level: 2, question: 'Can undirected processes generate digital DNA information?', answer: 'Information in nature is universally observed to originate from an intelligent mind.' },
      { level: 3, question: 'What does fine-tuning in cosmology demonstrate?', answer: 'Constants of physics are calibrated to astonishing precision for life.' },
      { level: 4, question: 'Why resist the design inference?', answer: 'To avoid acknowledging a transcendent Lawgiver.' },
      { level: 5, question: 'What is the root cause?', answer: 'Suppression of the clear witness of creation in favor of self-derived autonomy.' }
    ],
    evidenceSources: [
      { title: 'Signature in the Cell', authorOrSource: 'Stephen C. Meyer' },
      { title: 'Darwin’s Black Box', authorOrSource: 'Michael Behe' }
    ],
    rcaResponse: 'The digital code embedded in DNA and the precision of physical laws bear the unmistakable hallmark of an intelligent Mind.',
    scriptureReferences: ['Genesis 1:1', 'Psalm 139:13-14', 'Hebrews 11:3'],
    relatedId: 'rca-2'
  },
  {
    id: 'rca-8',
    category: 'FAITH & DOCTRINE',
    title: 'The Trinity: Myth or Reality?',
    claim: 'The claim: the Trinity is a polytheistic pagan doctrine invented centuries after the apostles.',
    rootCause: 'Rationalistic reductionism failing to grasp biblical relational monotheism.',
    author: {
      name: 'RCA Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Mar 2, 2025',
    tags: ['Theology', 'Trinity', 'Scripture'],
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why is the Trinity claimed to be invented at Nicaea?', answer: 'Critics confuse the formal definition of orthodox language with the origin of the belief.' },
      { level: 2, question: 'Was Christ worshipped as God by earliest believers?', answer: 'Yes, 1st-century hymns and apostolic letters explicitly ascribe divine honors and titles to Jesus.' },
      { level: 3, question: 'How can God be one yet three persons?', answer: 'One divine essence (what God is) subsisting in three distinct persons (who God is).' },
      { level: 4, question: 'Why is this doctrine essential to the Gospel?', answer: 'Only a truly divine Savior could bear infinite wrath and achieve eternal reconciliation.' },
      { level: 5, question: 'What is the root cause of rejection?', answer: 'Attempting to fit the infinite majesty of God into finite human cognitive boxes.' }
    ],
    evidenceSources: [
      { title: 'The Forgotten Trinity', authorOrSource: 'James R. White' },
      { title: 'Delighting in the Trinity', authorOrSource: 'Michael Reeves' }
    ],
    rcaResponse: 'The Trinity is the core heartbeat of the Christian faith, revealed throughout both Testaments and necessary for understanding God\'s eternal love.',
    scriptureReferences: ['Matthew 28:19', '2 Corinthians 13:14', 'John 1:1-3', 'Deuteronomy 6:4'],
    relatedId: 'rca-5'
  },
  {
    id: 'rca-9',
    category: 'CULTURE & SOCIETY',
    title: 'Christianity and Freedom',
    claim: 'The claim: Christianity has historically been oppressive and hostile to human freedom.',
    rootCause: 'Revisionist historical narratives ignoring the Christian foundations of universal dignity and human rights.',
    author: {
      name: 'Dr. Sarah Collins',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Feb 26, 2025',
    tags: ['Human Rights', 'Freedom', 'History'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why is Christianity accused of being anti-freedom?', answer: 'Secular history highlights historical misuses of religious power while ignoring its transformative fruits.' },
      { level: 2, question: 'Where did universal human rights originate?', answer: 'From the Imago Dei (image of God), declaring every human soul sacred.' },
      { level: 3, question: 'Who spearheaded the abolition of slavery and modern hospitals?', answer: 'Christian reformers like William Wilberforce and monastic communities driven by Christ\'s love.' },
      { level: 4, question: 'What happened when secular totalitarian regimes took power in the 20th century?', answer: 'Over 100 million people were slaughtered under state-enforced atheism.' },
      { level: 5, question: 'What is the root cause?', answer: 'Human rebellion redefining liberty as lawlessness rather than freedom to live in truth.' }
    ],
    evidenceSources: [
      { title: 'Dominion: How the Christian Revolution Remade the World', authorOrSource: 'Tom Holland' },
      { title: 'Under the Influence', authorOrSource: 'Alvin J. Schmidt' }
    ],
    rcaResponse: 'History proves that wherever biblical Christianity has taken root, literacy, hospital care, women’s rights, and universal human dignities have flourished.',
    scriptureReferences: ['Galatians 5:1', '2 Corinthians 3:17', 'James 1:25'],
    relatedId: 'rca-3'
  },
  {
    id: 'rca-10',
    category: 'APOLOGETICS',
    title: 'The Reliability of the New Testament',
    claim: 'The claim: New Testament manuscripts were secretly corrupted and altered over centuries.',
    rootCause: 'Ignorance of textual criticism and overwhelming manuscript transmission evidence.',
    author: {
      name: 'RCA Team',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    },
    publishedAt: 'Mar 5, 2025',
    tags: ['Manuscripts', 'History', 'Canon'],
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&auto=format&fit=crop&q=80',
    fiveWhys: [
      { level: 1, question: 'Why do skeptics claim texts were altered?', answer: 'They compare copies with minor spelling variations to allege systemic corruption.' },
      { level: 2, question: 'Do variant readings alter any Christian doctrine?', answer: 'No, over 99% of variants are spelling or word order; zero cardinal doctrines are affected.' },
      { level: 3, question: 'How close are the earliest manuscripts to the originals?', answer: 'Within decades, whereas classical Greco-Roman texts have gaps of 500 to 1,000 years.' },
      { level: 4, question: 'What do early church father citations show?', answer: 'Virtually the entire New Testament could be reconstructed from early patristic quotes alone.' },
      { level: 5, question: 'What is the root cause?', answer: 'An attempt to dismiss divine revelation without examining the historical facts.' }
    ],
    evidenceSources: [
      { title: 'Revisiting the Corruption of the New Testament', authorOrSource: 'Daniel B. Wallace' },
      { title: 'The Text of the New Testament', authorOrSource: 'Bruce M. Metzger' }
    ],
    rcaResponse: 'The New Testament is by far the most documented and rigorously preserved document of the ancient world.',
    scriptureReferences: ['1 Peter 1:24-25', 'Isaiah 40:8', 'Matthew 24:35'],
    relatedId: 'rca-1'
  }
];

export const INCIDENT_DATA: PersecutionIncident[] = [
  {
    id: 'inc-1',
    title: 'Pastor Arrested for Unlawful Gathering',
    country: 'China',
    location: 'Chengdu, Sichuan, China',
    publishedAt: 'Jan 14, 2025',
    status: 'Ongoing',
    severity: 'High',
    perpetrators: 'Local police & Religious Affairs Bureau',
    victims: 'Pastor Li and 12 church members',
    description: 'Authorities raided a house church during an evening prayer meeting, arrested the pastor and several leaders, and confiscated Bibles and materials.',
    timeline: [
      { date: 'Jan 14, 2025', event: 'Raid and arrests at evening prayer service in Chengdu' },
      { date: 'Jan 15, 2025', event: 'Detained at local municipal station without formal charges' },
      { date: 'Jan 16, 2025', event: 'Family members denied access to legal counsel' }
    ],
    sources: [
      'Morning Star News — China Church Raids',
      'HRW — Religious Freedom in China Report'
    ],
    rcaAnalysis: 'This incident reflects the Chinese regime\'s ongoing effort to control unregistered religious expression and suppress house churches as part of a broader pattern of state control that violates basic international human rights standards.',
    prayerPoints: [
      'Pray for Pastor Li\'s physical strength and boldness while in detention.',
      'Pray for the congregation to remain steadfast and united in fellowship.',
      'Pray for the authorities involved to encounter the transformative love of Christ.'
    ],
    prayerCount: 142,
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&auto=format&fit=crop&q=80',
    relatedRcaId: 'rca-9'
  },
  {
    id: 'inc-2',
    title: 'Christian Students Attacked',
    country: 'Nigeria',
    location: 'Plateau State, Nigeria',
    publishedAt: 'Dec 28, 2024',
    status: 'Resolved',
    severity: 'Medium',
    perpetrators: 'Local armed youth groups',
    victims: 'Campus Christian Fellowship students',
    description: 'A group of university students was attacked on campus during an evening fellowship. Local community leaders and security intervened to restore safety.',
    timeline: [
      { date: 'Dec 28, 2024', event: 'Disruption of campus Christian gathering' },
      { date: 'Dec 29, 2024', event: 'Injured students treated at university clinic' },
      { date: 'Jan 02, 2025', event: 'Campus administration increases security patrols' }
    ],
    sources: ['Open Doors World Watch Monitor', 'Christian Solidarity Worldwide'],
    rcaAnalysis: 'Extremist pressure against Christian youth in central Nigeria stems from ideological radicalization and land disputes exacerbated by ethnic tensions.',
    prayerPoints: [
      'Praise God for the protection of students\' lives.',
      'Pray for healing for injured students and peace across campus communities.'
    ],
    prayerCount: 89,
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80',
    relatedRcaId: 'rca-6'
  },
  {
    id: 'inc-3',
    title: 'Church Demolished',
    country: 'Pakistan',
    location: 'Punjab, Pakistan',
    publishedAt: 'Dec 12, 2024',
    status: 'Ongoing',
    severity: 'High',
    perpetrators: 'Local municipal enforcement with extremist backing',
    victims: 'St. Thomas Presbyterian Community (350 believers)',
    description: 'A historic church building was demolished by municipal authorities citing zoning irregularities despite pending high court stay orders.',
    timeline: [
      { date: 'Dec 12, 2024', event: 'Heavy machinery arrived under heavy police escort' },
      { date: 'Dec 13, 2024', event: 'Congregation assembled for outdoor worship in protest' },
      { date: 'Dec 20, 2024', event: 'Legal challenge filed in Provincial High Court' }
    ],
    sources: ['Barnabas Aid', 'International Christian Concern'],
    rcaAnalysis: 'Discriminatory land and zoning regulations are frequently weaponized against religious minorities in South Asia to dispossess vulnerable communities.',
    prayerPoints: [
      'Pray for legal restitution and land rights for the displaced congregation.',
      'Pray for provision of temporary worship spaces for families.'
    ],
    prayerCount: 215,
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop&q=80',
    relatedRcaId: 'rca-9'
  },
  {
    id: 'inc-4',
    title: 'Faith-Based Worker Harassed',
    country: 'India',
    location: 'Uttar Pradesh, India',
    publishedAt: 'Nov 30, 2024',
    status: 'Resolved',
    severity: 'Low',
    perpetrators: 'Local vigilante group',
    victims: 'Community aid worker and 2 volunteers',
    description: 'A Christian aid worker was harassed and falsely accused of illegal conversion while distributing winter blankets and food relief to rural families.',
    timeline: [
      { date: 'Nov 30, 2024', event: 'Aid distribution interrupted by vigilante mob' },
      { date: 'Dec 01, 2024', event: 'Police questioned volunteers and verified charity permits' },
      { date: 'Dec 02, 2024', event: 'All volunteers cleared of accusations and released' }
    ],
    sources: ['Evangelical Fellowship of India (EFI)', 'AsiaNews'],
    rcaAnalysis: 'Anti-conversion laws are routinely abused by local vigilante networks to impede Christian humanitarian and charitable work among marginalized groups.',
    prayerPoints: [
      'Pray for the safety and perseverance of rural Christian charity workers.',
      'Pray for the gospel to soften the hearts of local village leaders.'
    ],
    prayerCount: 104,
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&auto=format&fit=crop&q=80',
    relatedRcaId: 'rca-9'
  }
];

export const CHURCH_DATA: ChurchListing[] = [
  {
    id: 'church-1',
    name: 'Grace Community Church',
    denomination: 'Non-Denominational',
    location: 'California, USA',
    address: '120 Grace Ave, San Jose, CA 95112',
    serviceTimes: 'Sunday: 9am / 11am / 6pm | Wednesday: 7pm',
    phone: '(408) 555-0123',
    email: 'info@gracecommunity.org',
    website: 'https://gracecommunity.org',
    description: 'Grace Community Church is a non-denominational church committed to expository preaching, biblical truth, and making disciples of all nations.',
    faithDeclaration: [
      'We believe in the authority and inerrancy of the Bible as God’s inspired Word.',
      'We believe in the deity and bodily resurrection of Jesus Christ.',
      'We believe in salvation by grace alone through faith alone in Christ alone.'
    ],
    tags: ['Bible Teaching', 'Community', 'Missions'],
    image: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'church-2',
    name: 'Faith Baptist Church',
    denomination: 'Baptist',
    location: 'Texas, USA',
    address: '400 Faith Blvd, Dallas, TX 75201',
    serviceTimes: 'Sunday: 10am / 5pm | Wednesday: 6:30pm',
    phone: '(214) 555-0189',
    email: 'contact@faithbaptist.org',
    website: 'https://faithbaptist.org',
    description: 'Grounded in historical Baptist orthodoxy with a passionate heart for urban outreach, family discipleship, and sound doctrinal instruction.',
    faithDeclaration: [
      'We affirm historical Baptist confessions of faith and the sovereignty of God.',
      'We practice believer\'s baptism and promote active global evangelism.'
    ],
    tags: ['Family', 'Discipleship', 'Outreach'],
    image: 'https://images.unsplash.com/photo-1519817650390-64a93db51149?w=800&auto=format&fit=crop&q=80'
  },
  {
    id: 'church-3',
    name: 'River of Life Church',
    denomination: 'Pentecostal',
    location: 'Nairobi, Kenya',
    address: 'Kilimani Road, Nairobi, Kenya',
    serviceTimes: 'Sunday: 8:30am / 11:00am / 5:00pm',
    phone: '+254 20 555 0100',
    email: 'info@riveroflifenairobi.org',
    website: 'https://riveroflifenairobi.org',
    description: 'A vibrant, Christ-centered community devoted to prayer, community transformation, and gospel proclamation across East Africa.',
    faithDeclaration: [
      'We believe in the Holy Spirit\'s empowering presence in the life of the church.',
      'We are called to minister to both spiritual and tangible needs in our city.'
    ],
    tags: ['Worship', 'Healing', 'Evangelism'],
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&auto=format&fit=crop&q=80'
  }
];

import { RCAEntry } from '@/types/rca';

export const MOCK_RCA_ENTRIES: RCAEntry[] = [
  {
    id: 'rca-1',
    date: '2026-03-20',
    author: 'RCA Research Team',
    topic: 'Vedas & Modern Physics',
    tag: 'hinduism',
    claim: 'The Vedas contain all modern scientific discoveries, including quantum mechanics, relativity, and atomic theory thousands of years before the West.',
    root_issue: 'Epistemic Anachronism & Nationalistic Concordism',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why is this claim made in modern discourse?',
        insight: 'To defend ancient cultural heritage against Western technological and scientific dominance.'
      },
      {
        level: 2,
        question: 'Why is modern science used as the validation standard?',
        insight: 'Because scientific materialism and empiricism have become the universal cultural gold standard of authority.'
      },
      {
        level: 3,
        question: 'Why are poetic/philosophical verses mapped to physics concepts?',
        insight: 'Metaphorical and mystical terms (like Akasha or Anu) are retroactively mapped to modern mathematical physics without empirical methodology.'
      },
      {
        level: 4,
        question: 'Why does this fail logically and historically?',
        insight: 'True scientific discovery requires predictive mathematical models and falsifiable experiments, not retrospective semantic reframing.'
      },
      {
        level: 5,
        question: 'What is the root theological and worldview reality?',
        insight: 'Human pride seeks self-justification through antiquity rather than submitting to transcendent divine revelation in Christ.'
      }
    ],
    source_type: 'x',
    source_url: 'https://x.com/apologetics_sample/status/1789201948',
    response: 'While ancient Vedic texts contain rich philosophical inquiries and early natural philosophy, conflating speculative poetic ontology with empirical mathematical physics commits a category mistake. Science operates on falsifiable experimentation and predictive mathematics. The Christian worldview uniquely birthed modern experimental science by affirming a rational, orderly universe created by a rational Lawgiver (the Logos).',
    biblical_response: 'Colossians 2:8 — "See to it that no one takes you captive through hollow and deceptive philosophy, which depends on human tradition and the elemental spiritual forces of this world rather than on Christ."',
    references: [
      { title: 'The Presuppositional Roots of Modern Science (J.P. Moreland)', url: 'https://example.com/roots-of-science' },
      { title: 'Historical Inquiry into Ancient Indian Natural Philosophy', url: 'https://example.com/vedic-science-critique' }
    ],
    created_at: '2026-03-20T10:00:00Z'
  },
  {
    id: 'rca-2',
    date: '2026-03-22',
    author: 'Dr. A. Kurien',
    topic: 'Objective Moral Values',
    tag: 'atheism',
    claim: 'Morality is merely an evolutionary social construct for survival. You do not need God to be good or to define justice.',
    root_issue: 'Ontological Grounding Deficit (The Is-Ought Problem)',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why do skeptics argue morality is evolutionary?',
        insight: 'To explain cooperative social behaviors without appealing to a transcendent Lawgiver.'
      },
      {
        level: 2,
        question: 'Why does evolutionary biology fall short of moral obligation?',
        insight: 'Evolution describes what *is* (survival behaviors), but can never prescribe what *ought* to be (objective duty).'
      },
      {
        level: 3,
        question: 'Why is consensus or survival insufficient for defining evil?',
        insight: 'If survival determines rightness, predatory domination could be justified whenever it aids species survival.'
      },
      {
        level: 4,
        question: 'Why is human value arbitrarily assumed in secular humanism?',
        insight: 'Materialism treats humans as accidental biological matter, stripping inherent intrinsic sanctity.'
      },
      {
        level: 5,
        question: 'What is the root presuppositional truth?',
        insight: 'Objective moral duties require a morally perfect, transcendent personal standard — God whose nature is the supreme good.'
      }
    ],
    source_type: 'article',
    source_url: 'https://medium.com/secular-critique/morality-without-god-sample',
    response: 'Atheists can certainly live morally upright lives (epistemology), but materialism lacks the ontological grounding for why anything is objectively good or evil (ontology). Without the Imago Dei (image of God), human rights are reduced to subjective human preferences.',
    biblical_response: 'Romans 2:15 — "They show that the requirements of the law are written on their hearts, their consciences also bearing witness, and their thoughts sometimes accusing them and at other times even defending them."',
    references: [
      { title: 'The Moral Argument for God (William Lane Craig)', url: 'https://example.com/moral-argument' },
      { title: 'C.S. Lewis on Mere Christianity: Book I (Law of Human Nature)', url: 'https://example.com/mere-christianity' }
    ],
    created_at: '2026-03-22T14:30:00Z'
  },
  {
    id: 'rca-3',
    date: '2026-03-24',
    author: 'RCA Research Team',
    topic: 'Religious Pluralism & Truth',
    tag: 'cultural',
    claim: 'All religions are merely different paths climbing up the same mountain to the same ultimate reality.',
    root_issue: 'Violating the Law of Non-Contradiction',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why is the mountain analogy widely accepted in India?',
        insight: 'It promotes social harmony and avoids addressing irreconcilable doctrinal disagreements.'
      },
      {
        level: 2,
        question: 'Why does the mountain analogy assume epistemological superiority?',
        insight: 'The person telling the story claims to see the whole mountain from above, claiming exclusive truth while denying it to others.'
      },
      {
        level: 3,
        question: 'Why are the core religious claims mutually exclusive?',
        insight: 'Is God personal (Christianity) or impersonal (Advaita)? Did Jesus die on the cross (Christianity) or not (Islam)? Both cannot be true simultaneously.'
      },
      {
        level: 4,
        question: 'Why is the Gospel fundamentally different from all human paths?',
        insight: 'Every religion teaches man climbing up to God by works; Christianity alone teaches God climbing down to rescue helpless sinners by grace.'
      },
      {
        level: 5,
        question: 'What is the ultimate root issue?',
        insight: 'Relativism is an intellectual avoidance of the historic person and exclusive resurrection of Jesus Christ.'
      }
    ],
    source_type: 'facebook',
    source_url: 'https://facebook.com/cultural_dialogue/sample_post',
    response: 'Pluralism patronizes all religions by stripping them of their defining claims. The law of non-contradiction dictates that contrary propositions cannot both be true in the same sense at the same time. Jesus Christ is not a pathway among many; He is God incarnate.',
    biblical_response: 'John 14:6 — "Jesus answered, \'I am the way and the truth and the life. No one comes to the Father except through me.\'"',
    references: [
      { title: 'Jesus Among Other Gods (Ravi Zacharias)', url: 'https://example.com/jesus-among-gods' },
      { title: 'Is Jesus the Only Way? Logical Breakdown', url: 'https://example.com/exclusive-claims' }
    ],
    created_at: '2026-03-24T09:15:00Z'
  },
  {
    id: 'rca-4',
    date: '2026-03-26',
    author: 'RCA Field Analyst',
    topic: 'Karma vs. Grace',
    tag: 'hinduism',
    claim: 'Suffering and poverty in this life are the direct, deserved retribution for sins committed in previous reincarnations (Karma).',
    root_issue: 'Mechanistic Retributive Fatalism vs. Redemptive Grace',
    root_cause_5whys: [
      {
        level: 1,
        question: 'Why does Karma attribute suffering to past lives?',
        insight: 'To provide a neat mechanical explanation for unequal birth, disabilities, and injustice in the world.'
      },
      {
        level: 2,
        question: 'Why is this explanation ethically problematic?',
        insight: 'It blames the victim, legitimizes social stratification (caste), and discourages compassion as interfering with another\'s karma.'
      },
      {
        level: 3,
        question: 'Why is there no memory or justice in punishing someone who cannot remember the crime?',
        insight: 'Punishing an individual without moral memory fails the definition of rehabilitative or fair justice.'
      },
      {
        level: 4,
        question: 'How does the Biblical view of suffering differ?',
        insight: 'Suffering is the result of a fallen world, not individual past-life debts, and God enters our suffering to redeem it.'
      },
      {
        level: 5,
        question: 'What is the root resolution?',
        insight: 'In Christ, the debt of sin is paid completely at the Cross, freeing believers from fatalistic cycles into unconditional adoption.'
      }
    ],
    source_type: 'discussion',
    source_url: 'https://youtube.com/watch?v=sample_debate_karma',
    response: 'The doctrine of Karma traps humanity in a cosmic loop of self-atonement with no forgiveness. In contrast, Jesus answered the disciples regarding the blind man: "Neither this man nor his parents sinned, but this happened so that the works of God might be displayed in him."',
    biblical_response: 'John 9:3 — "Jesus answered, \'It was not that this man sinned, or his parents, but that the works of God might be displayed in him.\'"',
    references: [
      { title: 'Karma, Reincarnation, and the Resurrection (Vishal Mangalwadi)', url: 'https://example.com/karma-vs-cross' }
    ],
    created_at: '2026-03-26T16:45:00Z'
  }
];

export const getRCAEntries = (): RCAEntry[] => {
  return MOCK_RCA_ENTRIES;
};

export const getRCAEntryById = (id: string): RCAEntry | undefined => {
  return MOCK_RCA_ENTRIES.find(entry => entry.id === id);
};

export const getRelatedRCAEntries = (currentId: string, limit = 2): RCAEntry[] => {
  return MOCK_RCA_ENTRIES.filter(e => e.id !== currentId).slice(0, limit);
};

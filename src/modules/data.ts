interface Data {
  id: string
  name: string
  time: {
    arrival?: string
    departure?: string
  }
  w3w?: string
  img?: string
  description?: string
  reading?: {
    title: string
    cite: string
    text: string
  }
}

const bodies = {
  welcome: {
    description:
      "This is our initial gathering point. We plan to meet here at 9:00 as we're departing at 9:30.",
  },
  'church-1': {
    reading: {
      title: 'Jesus in the Garden of Gethsemane',
      cite: 'Lk 22:39-46',
      text: `Then going out he went, as was his custom, to the Mount of Olives, and the disciples followed him.
When he arrived at the place he said to them, "Pray that you may not undergo the test."
After withdrawing about a stone's throw from them and kneeling, he prayed,
saying, "Father, if you are willing, take this cup away from me; still, not my will but yours be done."
(And to strengthen him an angel from heaven appeared to him.
He was in such agony and he prayed so fervently that his sweat became like drops of blood falling on the ground.)
When he rose from prayer and returned to his disciples, he found them sleeping from grief.
He said to them, "Why are you sleeping? Get up and pray that you may not undergo the test."`,
    },
  },
  'church-2': {
    reading: {
      title: 'Jesus before Annas',
      cite: 'Jn 18:19-23',
      text: `The high priest questioned Jesus about his disciples and about his doctrine.
Jesus answered him, "I have spoken publicly to the world. I have always taught in a synagogue or in the temple area where all the Jews gather, and in secret I have said nothing.
Why ask me? Ask those who heard me what I said to them. They know what I said."
When he had said this, one of the temple guards standing there struck Jesus and said, "Is this the way you answer the high priest?"
Jesus answered him, "If I have spoken wrongly, testify to the wrong; but if I have spoken rightly, why do you strike me?"`,
    },
  },
  'church-3': {
    reading: {
      title: 'Jesus before Caiaphas',
      cite: 'Mt 26:63-66',
      text: `But Jesus was silent. Then the high priest said to him, "I order you to tell us under oath before the living God whether you are the Messiah, the Son of God."
Jesus said to him in reply, "You have said so. But I tell you: From now on you will see 'the Son of Man seated at the right hand of the Power' and 'coming on the clouds of heaven.'"
Then the high priest tore his robes and said, "He has blasphemed! What further need have we of witnesses? You have now heard the blasphemy;
what is your opinion?" They said in reply, "He deserves to die!"`,
    },
  },
  'church-4': {
    reading: {
      title: 'Jesus before Pilate',
      cite: 'Jn 18:35-37',
      text: `Pilate answered, "I am not a Jew, am I? Your own nation and the chief priests handed you over to me. What have you done?"
Jesus answered, "My kingdom does not belong to this world. If my kingdom did belong to this world, my attendants (would) be fighting to keep me from being handed over to the Jews. But as it is, my kingdom is not here."
So Pilate said to him, "Then you are a king?" Jesus answered, "You say I am a king. For this I was born and for this I came into the world, to testify to the truth. Everyone who belongs to the truth listens to my voice."`,
    },
  },
  'church-5': {
    reading: {
      title: 'Jesus before Herod',
      cite: 'Lk 23:8-9; 11',
      text: `Herod was very glad to see Jesus; he had been wanting to see him for a long time, for he had heard about him and had been hoping to see him perform some sign.
He questioned him at length, but he gave him no answer.
(Even) Herod and his soldiers treated him contemptuously and mocked him, and after clothing him in resplendent garb, he sent him back to Pilate.`,
    },
  },
  'church-6': {
    reading: {
      title: 'Jesus before Pilate again',
      cite: 'Mt 27:22-26',
      text: `Pilate said to them, "Then what shall I do with Jesus called Messiah?" They all said, "Let him be crucified!"
But he said, "Why? What evil has he done?" They only shouted the louder, "Let him be crucified!"
When Pilate saw that he was not succeeding at all, but that a riot was breaking out instead, he took water and washed his hands in the sight of the crowd, saying, "I am innocent of this man's blood. Look to it yourselves."
And the whole people said in reply, "His blood be upon us and upon our children."
Then he released Barabbas to them, but after he had Jesus scourged, he handed him over to be crucified.`,
    },
  },
  'church-7': {
    reading: {
      title: "Jesus's crucifixion and death",
      cite: 'Mt 27:27-31',
      text: `Then the soldiers of the governor took Jesus inside the praetorium and gathered the whole cohort around him.
They stripped off his clothes and threw a scarlet military cloak about him.
Weaving a crown out of thorns, they placed it on his head, and a reed in his right hand. And kneeling before him, they mocked him, saying, "Hail, King of the Jews!"
They spat upon him and took the reed and kept striking him on the head.
And when they had mocked him, they stripped him of the cloak, dressed him in his own clothes, and led him off to crucify him.`,
    },
  },
  'lunch-stop': {
    description: 'We are taking a wee break to have some lunch as we are walking a long way.',
  },
}

const dataByYear: Record<number, Data[]> = {
  2025: [
    {
      id: 'welcome',
      name: 'EJC Sacred Heart',
      time: {
        arrival: '9:00',
        departure: '9:30',
      },
      w3w: 'vent.game.action',
      description: bodies.welcome.description,
    },
    {
      id: 'church-1',
      name: "Old St. Paul's Episcopal Church",
      time: {
        arrival: '10:10',
        departure: '10:30',
      },
      w3w: 'finishing.resist.behind',
      reading: bodies['church-1'].reading,
    },
    {
      id: 'church-2',
      name: "St. Marys's RC Cathedral",
      time: {
        arrival: '10:45',
        departure: '11:05',
      },
      w3w: 'tiny.ranch.bond',
      reading: bodies['church-2'].reading,
    },
    {
      id: 'church-3',
      name: 'Canongate Kirk',
      time: {
        arrival: '11:20',
        departure: '11:40',
      },
      w3w: 'dame.zest.lived',
      reading: bodies['church-3'].reading,
    },
    {
      id: 'church-4',
      name: "St Patrick's, Coogate",
      time: {
        arrival: '11:50',
        departure: '12:10',
      },
      w3w: 'placed.result.filed',
      reading: bodies['church-4'].reading,
    },
    {
      id: 'church-5',
      name: "St. Albert's Chaplaincy",
      time: {
        arrival: '12:30',
        departure: '12:50',
      },
      w3w: 'palace.lied.trees',
      reading: bodies['church-5'].reading,
    },
    {
      id: 'lunch-stop',
      name: 'Lunch Stop at the Meadows',
      time: {
        departure: '13:10',
      },
      description: bodies['lunch-stop'].description,
    },
    {
      id: 'church-6',
      name: "St. Columba's Newington",
      time: {
        arrival: '13:30',
        departure: '13:50',
      },
      w3w: 'dollar.rope.vine',
      reading: bodies['church-6'].reading,
    },
    {
      id: 'church-7',
      name: 'EJC Sacred Heart',
      time: {
        arrival: '14:30',
      },
      w3w: 'vent.game.action',
      reading: bodies['church-7'].reading,
    },
  ],
  2026: [
    {
      id: 'welcome',
      name: 'EJC Sacred Heart',
      time: {
        arrival: '9:30',
        departure: '10:05',
      },
      w3w: 'vent.game.action',
      description: bodies.welcome.description,
    },
    {
      id: 'church-1',
      name: 'St Michael and All Saints Episcopal Church',
      time: {
        arrival: '10:10',
        departure: '10:30',
      },
      w3w: 'cable.take.dwell',
      reading: bodies['church-1'].reading,
    },
    {
      id: 'church-2',
      name: "St Patrick's, Coogate",
      time: {
        arrival: '11:55',
        departure: '11:15',
      },
      w3w: 'placed.result.filed',
      reading: bodies['church-2'].reading,
    },
    {
      id: 'church-3',
      name: "St. Albert's Chaplaincy",
      time: {
        arrival: '11:35',
        departure: '11:55',
      },
      w3w: 'palace.lied.trees',
      reading: bodies['church-3'].reading,
    },
    {
      id: 'church-4',
      name: "Old St. Paul's Episcopal Church",
      time: {
        arrival: '12:15',
        departure: '12:40',
      },
      w3w: 'finishing.resist.behind',
      reading: bodies['church-4'].reading,
    },
    {
      id: 'church-5',
      name: "St. Marys's RC Cathedral",
      time: {
        arrival: '12:45',
        departure: '13:00',
      },
      w3w: 'churn.worked.margin',
      reading: bodies['church-5'].reading,
    },
    {
      id: 'lunch-stop',
      name: 'Lunch Stop at the Cathedral Steps',
      time: {
        arrival: '13:00',
        departure: '13:20',
      },
      description: bodies['lunch-stop'].description,
    },
    {
      id: 'church-6',
      name: "St. Columba's By The Castle Episcopal Church",
      time: {
        arrival: '13:45',
        departure: '14:05',
      },
      w3w: 'accent.awards.calms',
      reading: bodies['church-6'].reading,
    },
    {
      id: 'church-7',
      name: 'EJC Sacred Heart',
      time: {
        arrival: '14:15',
      },
      w3w: 'vent.game.action',
      reading: bodies['church-7'].reading,
    },
  ],
}

export type { Data }
export { bodies, dataByYear }

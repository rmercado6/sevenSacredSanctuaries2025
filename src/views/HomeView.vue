<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { toast } from 'vue-sonner'

import { ClockArrowDown, ClockArrowUp, Copy, Map } from 'lucide-vue-next'

interface Data {
  id: string
  name: string
  time: {
    arrival?: string
    departure?: string
  },
  w3w?: string
  img?: string
  description?: string
  reading?: {
    title: string
    cite: string
    text: string
  }
}

const data: Data[] = [
  {
    id: 'welcome',
    name: 'EJC Sacred Heart',
    time: {
      departure: '9:30'
    },
    w3w: 'vent.game.action',
    description: 'This is our initial gathering point. We plan to meet here at 9:30 as we\'re departing at 9:45.',
  },
  {
    id: 'church-1',
    name: 'Old St. Paul\'s Episcopal Church',
    time: {
      arrival: '10:10',
      departure: '10:30'
    },
    w3w: 'finishing.resist.behind',
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
He said to them, "Why are you sleeping? Get up and pray that you may not undergo the test."`
    }
  },
  {
    id: 'church-2',
    name: 'St. Marys\'s RC Cathedral',
    time: {
      arrival: '10:45',
      departure: '11:05'
    },
    w3w: 'tiny.ranch.bond',
    reading: {
      title: 'Jesus before Annas',
      cite: 'Jn 18:19-23',
      text: `The high priest questioned Jesus about his disciples and about his doctrine.
Jesus answered him, "I have spoken publicly to the world. I have always taught in a synagogue or in the temple area where all the Jews gather, and in secret I have said nothing.
Why ask me? Ask those who heard me what I said to them. They know what I said."
When he had said this, one of the temple guards standing there struck Jesus and said, "Is this the way you answer the high priest?"
Jesus answered him, "If I have spoken wrongly, testify to the wrong; but if I have spoken rightly, why do you strike me?"`
    }
  },
  {
    id: 'church-3',
    name: 'Canongate Kirk',
    time: {
      arrival: '11:20',
      departure: '11:40'
    },
    w3w: 'dame.zest.lived',
    reading: {
      title: 'Jesus before Caiaphas',
      cite: 'Mt 26:63-66',
      text: `But Jesus was silent. Then the high priest said to him, "I order you to tell us under oath before the living God whether you are the Messiah, the Son of God."
Jesus said to him in reply, "You have said so. But I tell you: From now on you will see 'the Son of Man seated at the right hand of the Power' and 'coming on the clouds of heaven.'"
Then the high priest tore his robes and said, "He has blasphemed! What further need have we of witnesses? You have now heard the blasphemy;
what is your opinion?" They said in reply, "He deserves to die!"`
    }
  },
  {
    id: 'church-4',
    name: 'St Patrick\'s, Coogate',
    time: {
      arrival: '11:50',
      departure: '12:10'
    },
    w3w: 'placed.result.filed',
    reading: {
      title: 'Jesus before Pilate',
      cite: 'Jn 18:35-37',
      text: `Pilate answered, "I am not a Jew, am I? Your own nation and the chief priests handed you over to me. What have you done?"
Jesus answered, "My kingdom does not belong to this world. If my kingdom did belong to this world, my attendants (would) be fighting to keep me from being handed over to the Jews. But as it is, my kingdom is not here."
So Pilate said to him, "Then you are a king?" Jesus answered, "You say I am a king. For this I was born and for this I came into the world, to testify to the truth. Everyone who belongs to the truth listens to my voice."`
    }
  },
  {
    id: 'church-5',
    name: 'St. Albert\'s Chapliancy',
    time: {
      arrival: '12:30',
      departure: '12:50'
    },
    w3w: 'palace.lied.trees',
    reading: {
      title: 'Jesus before Herod',
      cite: 'Lk 23:8-9; 11',
      text: `Herod was very glad to see Jesus; he had been wanting to see him for a long time, for he had heard about him and had been hoping to see him perform some sign.
He questioned him at length, but he gave him no answer.
(Even) Herod and his soldiers treated him contemptuously and mocked him, and after clothing him in resplendent garb, he sent him back to Pilate.`
    }
  },
  {
    id: 'lunch-stop',
    name: 'Lunch Stop at the Meadows',
    time: {
      departure: '13:10'
    },
    description: 'We are taking a wee break to have some lunch as we are walking a long way.'
  },
  {
    id: 'church-6',
    name: 'St. Columba\'s Newington',
    time: {
      arrival: '13:30',
      departure: '13:50'
    },
    w3w: 'dollar.rope.vine',
    reading: {
      title: 'Jesus before Pilate again',
      cite: 'Mt 27:22-26',
      text: `Pilate said to them, "Then what shall I do with Jesus called Messiah?" They all said, "Let him be crucified!"
But he said, "Why? What evil has he done?" They only shouted the louder, "Let him be crucified!"
When Pilate saw that he was not succeeding at all, but that a riot was breaking out instead, he took water and washed his hands in the sight of the crowd, saying, "I am innocent of this man's blood. Look to it yourselves."
And the whole people said in reply, "His blood be upon us and upon our children."
Then he released Barabbas to them, but after he had Jesus scourged, he handed him over to be crucified.`
    }
  },
  {
    id: 'church-7',
    name: 'EJC Sacred Heart',
    time: {
      arrival: '14:30',
    },
    w3w: 'vent.game.action',
    reading: {
      title: 'Jesus’s crucifixion and death',
      cite: 'Mt 27:27-31',
      text: `Then the soldiers of the governor took Jesus inside the praetorium and gathered the whole cohort around him.
They stripped off his clothes and threw a scarlet military cloak about him.
Weaving a crown out of thorns, they placed it on his head, and a reed in his right hand. And kneeling before him, they mocked him, saying, "Hail, King of the Jews!"
They spat upon him and took the reed and kept striking him on the head.
And when they had mocked him, they stripped him of the cloak, dressed him in his own clothes, and led him off to crucify him.`
    }
  }
]

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}

</script>

<template>
  <main class="p-5 md:p-3 flex flex-col max-w-5xl w-full">
    <div class="flex">
      <h1 class="font-serif font-semibold text-2xl text-primary-600">Seven Sacred Sanctuaries Pilgrimage</h1>
    </div>
    <div class="flex flex-col text-sm my-3 text-justify">
      <p class="text-justify">
        Welcome to the pilgrimage of the Seven Churches.
        Through this pilgrimage we will walk through the city visiting seven different churches
        while reading and meditating on Jesus' way to the cross.
        This time of reflection invites us to pause, pray, and unite our hearts with His
        suffering and love.
      </p>
        <br/>
      <p class="text-justify">
        Here we provide the schedule of the pilgrimage as well as the readings we will do on each of
        stops. Also a
        <a target="_blank" href="https://what3words.com"><span class="font-mono">What 3 Words?</span></a>
        identifier is provided so that you can easily find the stops on the map.
      </p>
        <br/>
      <p class="text-justify">
        Please feel free to join or leave the pilgrimage at any of the stops as you see
        fit better for your schedule.
      </p>
        <br/>
      <p class="text-justify">
        The pilgrimage will end at the Church of the Sacred Heart.
        The Solemn Liturgy of the Lord's Passion will be celebrated there at 3:00 PM.
        We hope you can join us for that too.
      </p>
      <div class="flex gap-3 items-center justify-center px-4 mt-6">
        <img src="/pilgrimsOfHope.jpeg" alt="Pilgrims of Hope" class="max-w-1/3"/>
        <img src="/magisFutures.jpeg" alt="Magis Futures" class="max-w-2/3" />
      </div>
      <Accordion type="multiple" class="w-full mt-10" collapsible>
        <AccordionItem
          v-for="item in data"
          :key="item.id"
          :value="item.id"
          class="border-b-neutral-100"
        >
          <AccordionTrigger>
            <h2 class="font-serif font-bold">{{ item.name }}</h2>
          </AccordionTrigger>
          <AccordionContent class="flex flex-col">
            <div class="flex gap-3">
              <div class="font-mono text-xs font-light">
                <span
                  class="flex items-center"
                  v-if="item.time.arrival"
                >
                  <ClockArrowDown class="w-3 h-3 mr-2"/> {{ item.time.arrival }}
                </span>
                <span
                  class="flex items-center"
                  v-if="item.time.departure"
                >
                  <ClockArrowUp class="w-3 h-3 mr-2"/> {{ item.time.departure }}
                </span>
              </div>
              <div
                v-if="item.w3w"
                class="flex flex-col items-end flex-grow gap-0.5 text-xs font-mono"
              >
                <div class="flex items-center">
                  <Map class="w-3.5 h-3.5 mr-3"/>
                  <span>What 3 Words?</span>
                </div>
                <div class="flex gap-2">
                  <div class="flex px-3 py-1.5 bg-neutral-100 gap-1.5 rounded-md">
                    <a
                      :href="'https://w3w.co/' + item.w3w"
                      target="_blank"
                      class="text-primary-600"
                    >
                      ///{{ item.w3w }}
                    </a>
                    <div
                      class="flex justify-center items-center"
                      @click="() => {
                        copyToClipboard('///' + item.w3w)
                        toast('Copied to clipboard!', {
                          description: item.w3w
                        })
                      }"
                    >
                      <Copy class="w-3 h-3 text-neutral-400"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              v-if="item.description"
              class="px-1 pt-3"
            >
              {{ item.description }}
            </span>
            <div
              v-if="item.reading"
              class="mt-3 p-2 bg-neutral-200 font-serif flex flex-col"
            >
              <b class="font-italic">{{ item.reading.title }}</b>
              <b>{{ item.reading.cite }}</b>
              <span>{{ item.reading.text }}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div class="flex justify-center items-center font-serif text-neutral-500 m-2 pt-4 border-neutral-200 border-t">
        AD MAJOREM DEI GLORIAM
      </div>
    </div>
  </main>
</template>

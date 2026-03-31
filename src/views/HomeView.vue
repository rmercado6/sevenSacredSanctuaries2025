<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { toast } from 'vue-sonner'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

import { ClockArrowDown, ClockArrowUp, Copy, Map } from 'lucide-vue-next'

import { dataByYear } from '@modules/data'

interface HomeRouteParams {
  year?: number
}

const route = useRoute()
const params = route.params as HomeRouteParams

const selectedYear = ref<number>(
  Object.keys(dataByYear).includes(params.year?.toString() ?? '') ? (params.year ?? 2026) : 2026,
)

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
}
</script>

<template>
  <main class="p-5 md:p-3 flex flex-col max-w-5xl w-full">
    <div class="flex">
      <h1 class="font-serif font-semibold text-2xl text-primary-600">
        Seven Sacred Sanctuaries Pilgrimage
      </h1>
    </div>
    <div class="flex flex-col text-sm my-3 text-justify gap-2">
      <p class="text-justify">
        Welcome to the pilgrimage of the Seven Churches. Through this pilgrimage we will walk
        through the city visiting seven different churches while reading and meditating on Jesus'
        way to the cross. This time of reflection invites us to pause, pray, and unite our hearts
        with His suffering and love.
      </p>
      <br />
      <p class="text-justify">
        Here we provide the schedule of the pilgrimage as well as the readings we will do on each of
        stops. Also a
        <a target="_blank" href="https://what3words.com"
          ><span class="font-mono">What 3 Words?</span></a
        >
        identifier is provided so that you can easily find the stops on the map.
      </p>
      <br />
      <p class="text-justify">
        Please feel free to join or leave the pilgrimage at any of the stops as you see fit better
        for your schedule.
      </p>
      <br />
      <p class="text-justify">
        The pilgrimage will end at the Church of the Sacred Heart. The Solemn Liturgy of the Lord's
        Passion will be celebrated there at 3:00 PM. We hope you can join us for that too.
      </p>
      <div class="flex gap-3 items-center justify-center px-4 mt-6">
        <img
          v-if="params.year === 2025"
          src="/pilgrimsOfHope.jpeg"
          alt="Pilgrims of Hope"
          class="max-w-1/3"
        />
        <img src="/magisFutures.jpeg" alt="Magis Futures" class="max-w-2/3" />
      </div>
      <Accordion type="multiple" class="w-full mt-10" collapsible>
        <div class="text-center p-5">
          <span class="font-bold">{{ selectedYear }}</span>
        </div>
        <AccordionItem
          v-for="item in dataByYear[selectedYear]"
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
                <span class="flex items-center" v-if="item.time.arrival">
                  <ClockArrowDown class="w-3 h-3 mr-2" /> {{ item.time.arrival }}
                </span>
                <span class="flex items-center" v-if="item.time.departure">
                  <ClockArrowUp class="w-3 h-3 mr-2" /> {{ item.time.departure }}
                </span>
              </div>
              <div
                v-if="item.w3w"
                class="flex flex-col items-end flex-grow gap-0.5 text-xs font-mono"
              >
                <div class="flex items-center">
                  <Map class="w-3.5 h-3.5 mr-3" />
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
                      @click="
                        () => {
                          copyToClipboard('///' + item.w3w)
                          toast('Copied to clipboard!', {
                            description: item.w3w,
                          })
                        }
                      "
                    >
                      <Copy class="w-3 h-3 text-neutral-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span v-if="item.description" class="px-1 pt-3">
              {{ item.description }}
            </span>
            <div v-if="item.reading" class="mt-3 p-2 bg-neutral-200 font-serif flex flex-col">
              <b class="font-italic">{{ item.reading.title }}</b>
              <b>{{ item.reading.cite }}</b>
              <span>{{ item.reading.text }}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div class="text-end text-xs mt-5">
        <span class="font-semibold">History</span>
        <div v-for="year in Object.keys(dataByYear)">
          <a v-if="year !== selectedYear" :href="'/' + year" class="text-primary-600">
            {{ year }}
          </a>
          <span v-else>
            {{ year }}
          </span>
        </div>
      </div>
      <div
        class="flex justify-center items-center font-serif text-neutral-500 m-2 pt-4 border-neutral-200 border-t"
      >
        AD MAJOREM DEI GLORIAM
      </div>
    </div>
  </main>
</template>

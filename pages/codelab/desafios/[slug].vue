<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="challenge" class="md:flex h-screen">
    <section class="md:w-2/5 h-full overflow-auto">
      <UiHero>
        <div class="text-center md:text-start py-6">
          <h1 class="text-balance text-xl lg:text-4xl text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ challenge.name }}
          </h1>
          <h4 class="text-balance text-sm lg:text-lg text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ challenge.description }}
          </h4>
        </div>
      </UiHero>
      <div class="container mx-auto px-2 md:px-auto">
        <article
          class="prose lg:prose-lg max-w-full dark:prose-invert md:my-8"
          v-html="markdown.render(String(challenge.content))"
        />
      </div>
    </section>
    <section class="bg-zinc-50 dark:bg-zinc-900 md:w-3/5 flex flex-col">
      <header class="flex items-center justify-between p-2">
        <NuxtLink to="/codelab/desafios/">
          <DuiAction>
            <i class="mdi mdi-arrow-left" />
            Volver
          </DuiAction>
        </NuxtLink>
        <div class="grow" />
        <DuiButton color="secondary" @click="compileCode">
          <i class="mdi mdi-clipboard-text" />
          <i class="mdi mdi-play" />
          Ejecutar
        </DuiButton>
      </header>
      <ClientOnly v-if="challenge.scaffold.length > 0" fallback-tag="div" fallback="Cargando editor...">
        <MonacoEditor v-model="code" language="typescript" class="h-full" />
      </ClientOnly>
      <footer class="h-full">
        <pre>{{ consoleResults }}</pre>
      </footer>
    </section>
  </div>
</template>
<script setup lang="ts">
import MarkdownIt from "markdown-it";
import ts from "typescript";
import { DuiAction, DuiButton } from "@dronico/droni-kit";

definePageMeta({
  layout: 'blank'
})

const markdown = new MarkdownIt();
const route = useRoute();
const challenge = useFetch<Challenge>(`/api/appi/codevs/challenges/${route.params.slug}`).data;
const tests = useFetch<Test[]>(`/api/appi/codevs/challenges/${route.params.slug}/tests`).data;

useSeoMeta({
  title: () => challenge.value?.name,
  ogTitle: () => challenge.value?.name,
  description: () => challenge.value?.description,
  ogDescription: () => challenge.value?.description,
  ogType: "article",
  ogImage:
    "https://dronico.nyc3.digitaloceanspaces.com/4ebaccf5-b863-4f12-aa49-9bbe0e1844e2/db7d4d54-7354-4421-9682-d1b75b1f1413/74529-dronico-card.png.png",
  twitterCard: "summary_large_image",
  ogUrl: () => `https://droni.co/codelab/desafios/${challenge.value?.slug}`,
});

const consoleResults = ref<TestResult[]>([]);
const consoleTime = ref(0);

const code = ref(challenge.value?.scaffold || '');


const compileCode = async () => {
  consoleResults.value = [];
  const codigo = ts.transpileModule(code.value, { compilerOptions: { module: ts.ModuleKind.CommonJS }});
  const inicio = performance.now();
  if(challenge.value === undefined || tests.value === undefined) {
    return;
  }
  for (const test of tests.value || []) {
    let breakProccess = false;
    const codigoTest = `
      ${codigo.outputText}
      return {
        test: '${challenge.value?.funcName}(${test.input})',
        esperado: ${test.output},
        obtenido: ${challenge.value?.funcName}(${test.input}),
        check: (() => {
          const a = ${challenge.value?.funcName}(${test.input});
          const b = ${test.output};
          if(a === b) { return true; }
          if(typeof a !== typeof b) { return false; }
          if(Array.isArray(a) && Array.isArray(b)) {
            if(a.length !== b.length) { return false; }
            for(let i = 0; i < a.length; i++) {
              if(a[i] !== b[i]) { return false; }
            }
            return true;
          }
          return false;
        })()
      }
    `;
    try {
      // Usando Function, para mas seguridad.
      const funcionEjecutable = new Function(codigoTest);
      
      const resultado = await funcionEjecutable();
      if(resultado !== undefined){
        consoleResults.value.push(resultado);
        breakProccess = !resultado.check;
      }
    } catch (error) {
      consoleResults.value.push({test: '', esperado: '', obtenido: String(error), check: false});
      breakProccess = true;
    }
    if(breakProccess) {
      break;
    }
  }
  const fin = performance.now();
  consoleTime.value = fin - inicio;
}
</script>

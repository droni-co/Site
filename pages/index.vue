<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start flex-col md:flex-row flex md:pt-14">
        <div class="-mt-20 md:-mt-0 py-12 md:py:20 lg:w-1/2">
          <h2 class="text-gray-400
            text-2xl
            md:text-4xl">
            {{ $t('header.title') }}
          </h2>
          <h1 class="text-balance
            font-extrabold 
            text-gray-800
            drop-shadow-lg
            dark:text-gray-50
            text-3xl
            md:text-6xl">
            {{ $t('header.subtitle') }}
          </h1>
          <p class="text-xl mt-3">
            {{ $t('header.description') }} 
          </p>
        </div>
        <div class="lg:w-1/2 order-first md:order-1 pt-10 md:pt-0">
          <img src="~/assets/img/home/heroKosante.webp" class="aspect-[4/3]" alt="Kosante | Last project" />
        </div>
      </div>
    </UiHero>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod expedita dolores autem ducimus recusandae modi laborum molestias accusamus fugiat dolorem assumenda doloribus adipisci iste, reiciendis consectetur nisi omnis natus.</p>
    <h1>Home</h1>
  </div>
</template>
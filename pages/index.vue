<template>
  <div>
    <UiHero>
      <div class="text-center md:text-start xl:flex pt-14">
        <div class="py-20 w-1/2">
          <h2 class="lg:text-4xl text-gray-400">
            {{ $t('header.title') }}
          </h2>
          <h1 class="text-balance lg:text-6xl  font-extrabold text-gray-800 drop-shadow-lg dark:text-gray-50">
            {{ $t('header.subtitle') }}
          </h1>
        </div>
        <div class="w-1/2">
          <img src="~/assets/img/home/heroKosante.webp" class="aspect-[4/3]" alt="Kosante | Last project" />
        </div>
      </div>
    </UiHero>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod expedita dolores autem ducimus recusandae modi laborum molestias accusamus fugiat dolorem assumenda doloribus adipisci iste, reiciendis consectetur nisi omnis natus.</p>
    <h1>Home</h1>
  </div>
</template>
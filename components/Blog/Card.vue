<template>
  <article class="bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700
    hover:scale-105 transition-transform">
    <a href="#">
      <img
        class="rounded-t aspect-video object-cover"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-gray-100 hover:text-gray-900 dark:hover:text-gray-300">
          Noteworthy technology acquisitions 2021
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-600 dark:text-gray-300">
        <small class="text-gray-500 dark:text-gray-400 block">
          By John Doe | {{ Date().toString() }}
        </small>
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </div>
  </article>
</template>
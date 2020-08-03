<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-6 text-ui-primary">
          <Logo :width="80" />
        </div>
        <h1 class="text-4xl text-center lg:text-5xl">
          A serverless platform for webhooks
        </h1>
        <p class="text-xl font-medium text-center text-gray-600 max-w-3xl">
          Cloudhooks makes working with webhooks as simple as possible, so you can focus on writing event-driven code instead of managing a server.
        </p>
        <div class="flex flex-row my-6">
          <a href="https://apps.shopify.com/serverless-extensions/" class="bg-indigo-700 inline-flex px-6 py-4 shadow-lg rounded-lg items-center hover:bg-indigo-600 transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="36" height="36" viewBox="0 0 24 24">
              <path d="M14.49 20.937l5.381-1.166c0 0-1.941-13.138-1.957-13.225-.016-.086-.086-.144-.158-.144s-1.439-.101-1.439-.101-.949-.949-1.064-1.05c-.027-.029-.057-.043-.086-.058L14.49 20.937zM14.936 5.165c-.016 0-.043.014-.057.014-.016 0-.217.059-.533.158-.318-.919-.879-1.768-1.871-1.768-.029 0-.057 0-.086 0-.289-.361-.633-.519-.936-.519-2.316 0-3.426 2.892-3.77 4.359C6.791 7.684 6.145 7.885 6.07 7.914 5.566 8.072 5.553 8.086 5.496 8.562 5.439 8.906 4.129 19.051 4.129 19.051l10.117 1.899L14.936 5.165zM12.301 5.869c0 .03 0 .073 0 .102-.559.173-1.178.36-1.783.547.346-1.323.992-1.972 1.553-2.217C12.217 4.676 12.301 5.179 12.301 5.869zM11.381 3.669c.1 0 .201.028.303.102-.732.344-1.539 1.222-1.871 2.978C9.324 6.906 8.848 7.05 8.402 7.181 8.791 5.842 9.727 3.669 11.381 3.669zM11.783 11.481c0 0-.604-.315-1.322-.315-1.08 0-1.123.676-1.123.849 0 .921 2.418 1.28 2.418 3.453 0 1.712-1.08 2.806-2.547 2.806-1.756 0-2.648-1.094-2.648-1.094l.475-1.554c0 0 .922.792 1.697.792.506 0 .721-.402.721-.69 0-1.209-1.986-1.268-1.986-3.252 0-1.669 1.195-3.295 3.627-3.295.936 0 1.395.272 1.395.272L11.783 11.481zM12.705 4.2c.518.06.85.648 1.064 1.311-.258.087-.547.173-.863.273 0-.058 0-.116 0-.187C12.906 5.036 12.834 4.575 12.705 4.2z"/>
            </svg>
            <span class="ml-4 pr-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-400 mb-1">GET IT ON</span>
              <span class="title-font font-medium text-white">Shopify</span>
            </span>
          </a> 
          <a href="/docs" class="bg-ui-background border-2 border-ui-border inline-flex px-6 py-4 shadow-sm rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-ui-sidebar transition-all duration-200 ease-out transform hover:shadow-lg hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#5a67d8" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19,2H6C4.794,2,3,2.799,3,5v3v6v3v2c0,2.201,1.794,3,3,3h15v-2H6.012C5.55,19.988,5,19.806,5,19 c0-0.101,0.009-0.191,0.024-0.273C5.136,18.151,5.608,18.01,6.012,18H21V4C21,2.896,20.104,2,19,2z M19,11l-2-1l-2,1V4h4V11z"/>
            </svg>
            <span class="ml-4 pr-4 flex items-start flex-col leading-none">
              <span class="text-xs text-gray-600 mb-1">READ THE</span>
              <span class="title-font font-medium">Docs</span>
            </span>
          </a>
        </div>

      </div>

      <g-image src="~/assets/cloudhooks_shopify.png" class="w-full mx-auto max-w-2xl"/>

      <div class="pt-8 mx-auto mt-8 border-t-2 md:mt-16 md:pt-16 border-top border-ui-border max-w-xl"></div>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#718096" class="block w-5 h-5 text-gray-600 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="text-lg text-center">
            It's become my go-to for any custom integration. Much easier than having to set up your own endpoint or serverless functions.
          </p>
          <p class="font-bold tracking-wide uppercase text-ui-primary">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </p>
          <p class="text-gray-600 text-sm mt-1">
            Sprayer Depot
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#718096" class="block w-5 h-5 text-gray-600 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="text-lg text-center">
            This app is a lifesaver. We have been migrating several post purchase events from Amazon Lambda to cloudhooks.
          </p>
          <p class="font-bold tracking-wide uppercase text-ui-primary">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </p>
          <p class="text-gray-600 text-sm mt-1">
            Veestro
          </p>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#718096" class="block w-5 h-5 text-gray-600 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="text-lg text-center">
            This app was really useful for adding some after order automation for a client without requiring our own server etc.
          </p>
          <p class="font-bold tracking-wide uppercase text-ui-primary">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </p>
          <p class="text-gray-600 text-sm mt-1">
            The TWA Shop
          </p>
        </div>
      </div>

      

    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo';
import { ArrowRightCircleIcon, ZapIcon, CodeIcon, MoonIcon, SearchIcon } from 'vue-feather-icons';

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon
  },

  metaInfo() {
    const title = 'cloudhooks';
    const description = 'A serverless platform for webhooks on Shopify';

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ]
    }
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

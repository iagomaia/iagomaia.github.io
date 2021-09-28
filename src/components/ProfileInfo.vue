<script setup>
import Icon from "./Icon.vue";
import Card from "./Card.vue";
</script>

<template>
  <card
    class="
      min-h-[128px]
      max-h-[256px]
      mt-[46px]
      w-full
      py-3
      pl-5
      md:grid-cols-1
      lg:grid-cols-2
    "
  >
    <div class="flex justify-start">
      <img
        src="../assets/profile_square.jpg"
        class="
          rounded-full
          border-[#FF9635] border-width-[2px]
          w-[110px]
          h-[110px]
          my-auto
        "
      />
      <div class="pl-5 my-auto">
        <h1 class="text-size-[42px] font-bold">Iago Maia</h1>
        <div class="flex mt-5">
          <a
            href="https://github.com/iagomaia"
            target="_blank"
            rel="noopener noreferrer"
            class="profile-link"
          >
            <Icon name="feather:github" size="32" />
          </a>
          <a
            href="https://www.linkedin.com/in/iago-maia-0760bb133/"
            target="_blank"
            rel="noopener noreferrer"
            class="profile-link"
          >
            <Icon class="mx-5" name="feather:linkedin" size="32" />
          </a>
          <a href="mailto:iago.maiasilva@gmail.com" class="profile-link">
            <Icon name="feather:mail" size="32" />
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="w-full h-[32px] my-1 flex">
        <Icon
          class="text-[#FF9635] mr-2 my-auto"
          name="feather:award"
          size="24"
        />
        <span
          class="
            ml-2
            mr-4
            my-auto
            text-[#DBDBDB]
            font-light
            text-size-[14px] text-left
          "
          >Engenharia de Computação - IFTM</span
        >
      </div>
      <div class="w-full h-[32px] my-1 flex">
        <Icon
          class="text-[#FF9635] mr-2 my-auto"
          name="feather:briefcase"
          size="24"
        />
        <span
          class="
            ml-2
            mr-4
            my-auto
            text-[#DBDBDB]
            font-light
            text-size-[14px] text-left
          "
          >Arquiteto de Soluções na Grão Direto</span
        >
      </div>
      <div class="w-full h-[32px] my-1 flex">
        <Icon
          class="text-[#FF9635] mr-2 my-auto"
          name="feather:target"
          size="24"
        />
        <span
          class="
            ml-2
            mr-4
            my-auto
            text-[#DBDBDB]
            font-light
            text-size-[14px] text-left
          "
          >Arquiteto de Sistemas, SRE ou DevOps</span
        >
      </div>
    </div>
  </card>
</template>

<style scoped lang="postcss">
div {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.profile-link {
  @apply text-[#FF9635] hover:(text-[#42B51A] scale-110) transition-all ease-in-out duration-500 transform cursor-pointer;
}
</style>

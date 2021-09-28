<script>
import Icon from "./Icon.vue";
export default {
  components: { Icon },
};
</script>

<template>
  <div
    class="
      h-[128px]
      mt-[46px]
      w-full
      bg-[#3A3A3A]
      rounded-[12px]
      border-l-[12px] border-[#42B51A]
      py-3
      pl-5
      flex
    "
  >
    <img
      src="../assets/profile_square.jpg"
      class="rounded-full max-h-full border-[#FF9635] border-width-[2px]"
    />
    <div class="flex flex-col pl-5">
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
</template>
<style scoped>
div {
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.profile-link {
  @apply text-[#FF9635] hover:(text-[#42B51A] scale-110) transition-all ease-in-out duration-500 transform cursor-pointer;
}
</style>

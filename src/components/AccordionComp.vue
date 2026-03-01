<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleIsOpen = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <div class="accordion">
    <div class="accordion-header">
      <div class="accordion-title">Title</div>
      <button @click="toggleIsOpen">
        <i :class="isOpen ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'"></i>
      </button>
    </div>
    <transition name="accordion-content">
      <div class="accordion-content" v-if="isOpen">
        Hello dude Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque quos,
        consequuntur laboriosam, voluptatibus voluptas rem dolorum molestiae ad perspiciatis
        voluptatum atque minus neque illum excepturi est libero quaerat illo minima nam nostrum
        dolores? Magni expedita deserunt quaerat inventore doloremque ad mollitia illo quae iure ea
        explicabo blanditiis odit soluta tempore, rem error asperiores. Sapiente error, laudantium
        quaerat optio explicabo temporibus cumque nesciunt eligendi vitae nam praesentium molestias
        laborum quae ea, accusantium illo veniam vero ipsum incidunt commodi! Animi facere culpa
        temporibus esse eaque aperiam quidem distinctio id unde molestias. Atque natus, asperiores
        aspernatur maiores eius ducimus, at ullam sint, esse distinctio neque commodi delectus ea
        corrupti deleniti blanditiis soluta placeat! Hic recusandae necessitatibus ipsum, quos odit
        exercitationem fugiat natus non dolores atque aliquam alias sunt ad dignissimos ipsa
        repellendus dolorum quis libero eos dicta sint, numquam qui vero provident! Eaque rem nobis
        tempora perferendis! Esse, aliquid sapiente placeat libero qui nostrum labore unde iure aut
        veritatis. Animi hic officiis quibusdam, corrupti laborum distinctio veniam porro fuga ab
        atque est quia? Autem enim dolor doloribus similique id ab in. Accusamus enim officia,
        dolorem culpa asperiores cum ullam rerum autem adipisci veritatis veniam aut quae, eligendi
        distinctio iure voluptates saepe error.
      </div>
    </transition>
  </div>
</template>
<style scoped>
.accordion {
  width: 100%;
  max-width: 400px; /* optional */
  height: auto;
  background-color: aqua;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.accordion-header button {
  background: none;
  border: none;
}

.accordion-content {
  transition: 0.3s;
}

i {
  transition: 0.3s;
  cursor: pointer;
}

/* vue built in transition works with v-if */
.accordion-content-enter-active,
.accordion-content-leave-active {
  transition: all 0.3s ease;
}

.accordion-content-enter-from,
.accordion-content-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
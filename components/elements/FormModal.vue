<template>
  <div v-if="toggle" class="modal-overlay" @click.self="$emit('close')">
    <div class="form-modal-content">
      <div class="head">
        <h1>{{ title }}</h1>
        <button @click="handleBackdropClick">
          <Icon name="close-circle"/>
        </button>
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Boolean,
      default: false,
      required: true,
    },
    item: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      required: true
    }
  },
  created() {
    window.addEventListener('keydown', this.handleEscapeKey)
  },
  updated() {
    if (this.toggle) {
      document.querySelector('body').classList.add('modal-active')
    } else {
      document.querySelector('body').classList.remove('modal-active')
    }
  },
  beforeDestroy() {
    document.querySelector('body').classList.remove('modal-active')
    window.removeEventListener('keydown', this.handleEscapeKey)
  },
  methods: {
    handleEscapeKey(e) {
      if (this.toggle && e.key === 'Escape') {
        this.$emit('close')
      }
    },
    handleBackdropClick() {
      this.$emit('close')
    },
  },
}
</script>

<style></style>

<template>
  <div class="sidebar">
    <div class="sidebar-inner">
      <div class="logo">
        <NuxtLink :to="'/'">
          <img src="/images/pickvisa-logo.svg" alt="" />
        </NuxtLink>
      </div>
      <nav>
        <ul class="menu">
          <li v-for="menu in navItems" :key="menu.title">
            <NuxtLink :to="menu.route" :exact="menu.route === '/'">
              <Icon :name="menu.icon" />
              {{ menu.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
        <div class="logout">
          <span @click="handleLogout">
            <Icon :name="'logout-1'" />
            Log out
          </span>
        </div>
      <div class="sidebar-profile">
        <NuxtLink to="/profile">
          <div class="profile-info">
            <div class="profile-avatar">
              <img src="/images/tequila-avatar.png" alt="" />
            </div>
            <div class="profile-name">
              <strong>Orxan</strong>
              <span>Consultant</span>
            </div>
          </div>
        </NuxtLink>
      </div>
     
    </div>
  </div>
</template>

<script>
import { MenuMixin } from '~/mixins/menu-data'

export default {
  mixins: [MenuMixin],
  data() {
    return {
      darkmode: false,
      notificationsActive: false,
      notifications: [
        {
          id: 0,
          avatar: '/images/pickvisa-logo.svg',
          username: 'Aysel Huseynova',
          action: 'assigned new task to you',
          timestamp: '4:10 pm',
        },
        {
          id: 1,
          avatar: '/images/pickvisa-logo.svg',
          username: 'Aysel Huseynova',
          action: 'message you',
          timestamp: '4:10 pm',
        },
        {
          id: 2,
          avatar: '/images/pickvisa-logo.svg',
          username: 'Aysel Huseynova',
          action: 'completed task',
          timestamp: '4:10 pm',
        },
        {
          id: 3,
          avatar: '/images/pickvisa-logo.svg',
          username: 'Aysel Huseynova',
          action: 'completed task',
          timestamp: '4:10 pm',
        },
        {
          id: 4,
          avatar: '/images/pickvisa-logo.svg',
          username: 'Aysel Huseynova',
          action: 'completed task',
          timestamp: '4:10 pm',
        },
      ],
    }
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('TOGGLE_SIDEBAR')
    },
    closeNotyTooltip() {
      this.$refs.notificationTooltip.$emit('close')
      this.$router.push('/notifications')
    },
    async handleLogout() {
      await this.$auth.logout()
    },
    //     handleDocClick(event) {
    //     if(this.notificationsActive === false) {
    //       return
    //     }

    //     let clickedActionBtn = event.target.classList.contains('icon-notification');
    //     let clickedActionBlock = event.target.parentNode.classList.contains('notifications');
    //     let clickedActionModal = event.target.parentNode.classList.contains('notification-modal');

    //     if(!clickedActionBtn && !clickedActionBlock && !clickedActionModal) {
    //       this.notificationsActive = false;
    //     }
    //   }
  },
  //     mounted() {
  //     document.addEventListener('click', this.handleDocClick);
  //   },
  //   beforeDestroy() {
  //     document.removeEventListener('click', this.handleDocClick);
  //   },
}
</script>

<style></style>

<template lang="pug">
  .fv-contact-card
    v-card.mx-auto(
      max-width="350"
      outlined=''
      tile=''
      min-height="180"
    )
      v-list-item(three-line="")
        v-list-item-content
          .overline.mb-4 {{ contact.function }}
          v-list-item-title.headline.mb-1 {{ contact.title }} {{ contact.first_name }} {{ contact.name }}
          v-list-item-subtitle  {{ contact.address }} {{ contact.zip }} {{ contact.city }}
        v-list-item-avatar(size="80" color="grey")
          img(
            v-if="contact.avatar"
            :src="contact.avatar"
            alt="`${contact.title} ${contact.first_name} ${ contact.name}`"
          )
      v-card-text
        .contact-links(
          v-for="lien in ['pro_email', 'perso_email', 'phone']" :key="lien"
        )
          .communication(:class="lien") :{{ contact[lien] }}
      v-card-actions
</template>

<script>
export default {
  name: 'FvContactCard',
  props: {
    contact: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contact-card {
  background-color: inherit;
}
// .communication {
//   content: "";
//   display: block;
//   background: url("icon.jpg") no-repeat;
//   width: 20px;
//   height: 20px;
//   float: left;
//   margin: 0 6px 0 0;
// }
.phone:before {
  content: 'Telephone';
}
.pro_email:before {
  content: 'pro';
}
.perso_email:before {
  content: 'perso';
}
.address.icon {
  color: #000;
  position: absolute;
  margin-left: 4px;
  margin-top: 2px;
  width: 12px;
  height: 12px;
  border: solid 1px currentColor;
  border-radius: 7px 7px 7px 0;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

.address.icon:before {
  content: '';
  position: absolute;
  left: 3px;
  top: 3px;
  width: 4px;
  height: 4px;
  border: solid 1px currentColor;
  border-radius: 3px;
}
</style>

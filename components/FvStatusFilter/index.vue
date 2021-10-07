<template lang="pug">
.fv-status-filter
  div.box
    div.titleContainer
      p.title.verticalCenter Status
    div.filterContainer
      v-menu(
        offset-y
        :close-on-content-click="false"
      )
        template(v-slot:activator="{on, attrs }")
          div.box.flex-sb.flex-ai-c(v-bind="attrs", v-on="on")
            div.text coucou
            div v
        v-list
          v-checkbox(label='choix 1')
          v-checkbox(label='choix 2')
          v-checkbox(label='choix 3')
</template>

<script>
export default {
  name: 'FvStatusFilter'
}
</script>

<style scoped>
.box {
  display: flex;
  height: 100%;
}
.flex-sb {
  justify-content: space-between;
}
.flex-ai-c {
  align-items: center;
}
.verticalCenter {
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.title {
  text-transform: uppercase;
  opacity: 0.5;
  padding: 5px 20px 5px 20px;
}
.titleContainer {
  border: solid #dddee2;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.filterContainer {
  padding: 5px 20px 5px 20px;
  border: solid #dddee2;
  border-left: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.text {
  padding-right: 100px;
}
::v-deep .v-messages {
  display: none;
}
</style>

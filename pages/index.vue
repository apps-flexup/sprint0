<template lang="pug">
  v-layout(column='' justify-center='' align-center='')
    v-flex(xs12='' sm8='' md6='')
      v-card
        v-card-title.headline
          | {{ $t('title.index') }}
        v-card-text
          p {{ $t('title.text.index') }}.
        v-card-actions
          v-btn(color='primary' nuxt='' to='/contracts')
            | {{ $t('menus.contracts') }}
          v-spacer
            v-btn(color='primary' nuxt='' to='/contracts/new')
              | {{ $t('menus.contractnew') }}
</template>

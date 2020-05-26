<template lang="pug">
  v-layout(column='' justify-center='' align-center='')
    v-flex(xs12='' sm8='' md6='')
      v-card
        v-card-title.headline
          | {{ $t(&apos;title.index&apos;) }}
        v-card-text
          p {{ $t(&apos;text.title&apos;) }}.
        v-card-actions
          v-btn(color='primary' nuxt='' to='/contracts')
            | {{ $t(&apos;menu.contracts&apos;) }}
          v-spacer
            v-btn(color='primary' nuxt='' to='/contracts/new')
              | {{ $t(&apos;menu.contracts&apos;) }}
</template>

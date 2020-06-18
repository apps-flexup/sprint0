<template lang="pug">
  v-layout(column='' justify-center='' align-center='')
    v-flex(xs12='' sm8='' md6='')
      v-card.mt-5
        v-card-title.headline
          | Simulation
        v-card-actions
          v-btn(color='primary' nuxt='' to='/simulations')
            | simulations
          v-btn(color='primary' nuxt='' to='/simulations/employes')
            | employes
          v-btn(color='primary' nuxt='' to='/simulations/charges')
            | charges
          v-btn(color='primary' nuxt='' to='/simulations/produits')
            | produits
      v-card.mt-5
        v-card-title.headline
          | Achat
        v-card-actions
          v-btn(color='primary' nuxt='' to='/achats')
            | {{ $t('menus.achats') }}
          v-spacer
          v-btn(color='primary' nuxt='' to='/achats/new')
            | {{ $t('menus.achatnew') }}
      v-card.mt-5
        v-card-title.headline
          | Orders
        v-card-actions
          v-btn(color='primary' nuxt='' to='/orders')
            | {{ $t('menus.orders') }}
          v-spacer
          v-btn(color='primary' nuxt='' to='/orders/new')
            | {{ $t('menus.ordernew') }}
      v-card.mt-5
        v-card-title.headline
          | {{ $t('title.index') }}
        v-card-actions
          v-btn(color='primary' nuxt='' to='/contracts')
            | {{ $t('menus.contracts') }}
          v-spacer
          v-btn(color='primary' nuxt='' to='/contracts/new')
            | {{ $t('menus.contractnew') }}
      v-card.mt-5
        v-card-title.headline
          | {{ $t('pages.contacts') }}
        v-card-actions
          v-btn(color='primary' nuxt='' to='/contacts')
            | {{ $t('menus.contacts') }}
          v-spacer
          v-btn(color='primary' nuxt='' to='/contacts/new')
            | {{ $t('menus.contactNew') }}
</template>

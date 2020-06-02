<template functional lang="pug">
  .fv-etapes
    h3 {{ `Étape ${props.etape.id}` }}
    h2 {{ "$t(`${props.etape.name}`)" }}
</template>

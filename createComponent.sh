camelComponentName=''
snakeComponentName=''

function convertCamelToSnakeCase()
{
    camelName=$1
    echo ${camelName} | sed 's/\([^[:blank:]]\)\([[:upper:]]\)/\1-\2/g' | tr '[:upper:]' '[:lower:]'
}

function createComponentDirectory()
{
    if [ -d "${dir}" ]
        then
            echo "Error: Component ${camelComponentName} already exists"
            exit -1
    fi
    mkdir ${dir}
}

function createReadme()
{
    readmeFile='README.md'
    cd ${dir}
    touch ${readmeFile}
    cat <<EOT >> ${readmeFile}
# ${camelComponentName}

## Builder @id
## Doc
EOT
    cd -
}

function createIndexSpecTs()
{
    indexSpecFile='index.spec.ts'
    cd ${dir}
    touch ${indexSpecFile}
    cd -
}

function createIndexTs()
{
    indexFile='index.ts'
    cd ${dir}
    touch ${indexFile}
    cd -
}

function createIndexVue()
{
    indexVueFile='index.vue'
    cd ${dir}
    touch ${indexVueFile}
    cat <<EOT >> ${indexVueFile}
<template lang="pug">
  .${snakeComponentName}
    p {{ \$options.name }}
</template>

<script>
export default {
  name: '${camelComponentName}',
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.\$options.name)
  }
}
</script>
<style scoped>
.${snakeComponentName} {
  background-color: inherit;
}
</style>
EOT
    cd -
}

if [ -z "$1" ]
    then
        echo "Usage: $0 <componentName>"
        exit -1
fi

camelComponentName=$1
snakeComponentName=$(convertCamelToSnakeCase ${camelComponentName})

# Create component directory
dir="./components/${camelComponentName}"

createComponentDirectory
createReadme
createIndexSpecTs
createIndexTs
createIndexVue

import inflection from 'inflection'
import nunjucks from 'nunjucks'
import * as fs from 'node:fs'
import * as process from 'node:process'
import path from 'node:path'
import { fileURLToPath } from 'url'
import { last } from 'lodash-es'
// import { ENTRYPOINT } from './config'

// eslint-disable-next-line no-undef
process.chdir(path.dirname(fileURLToPath(import.meta.url)))

import SwaggerClient from 'swagger-client'
const def = await SwaggerClient.resolve({
  url: 'http://revashop.revanus.com/api/docs.json'
})

const nun = nunjucks
  .configure('templates', { autoescape: false })
  .addFilter('camelize', (key) => inflection.camelize(key.replace(/[-.]/g, '_')))
  .addFilter('dump', (...key) => console.log(key))
  .addFilter('extractSchemaNameFromRef', (key) => last(key.split('/')))
  .addFilter('firstValueFromObject', (obj) => Object.values(obj)?.[0])
  .addFilter('startsWith', (str, searchStr) => str.startsWith(searchStr))
const apiNameList = []
const componentNameList = []
for (let key in def.spec.paths) {
  const apiCallGroup = def.spec.paths[key]
  ;['get', 'post', 'put', 'patch'].forEach((method) => {
    const spec = apiCallGroup[method]
    if (!spec) return
    const apiName = inflection.camelize(spec.operationId ?? '')
    apiNameList.push(apiName)
    fs.writeFileSync(
      '../src/openapi/operations/' + apiName + '.ts',
      nun.render('apiCall.ts.njk', {
        path: key,
        name: apiName,
        spec: spec,
        method: method.toUpperCase()
      })
    )
  })
}
fs.writeFileSync(
  '../src/openapi/operations/index.ts',
  nun.render('apiCallIndex.ts.njk', { apiNameList })
)

for (let key in def.spec.components.schemas) {
  const component = def.spec.components.schemas[key]
  const componentName = inflection.camelize(key.replace(/[-.]/g, '_'))
  componentNameList.push(componentName)
  fs.writeFileSync(
    '../src/openapi/components/' + componentName + '.ts',
    nun.render('component.ts.njk', {
      path: key,
      name: componentName,
      spec: component
    })
  )
}
fs.writeFileSync(
  '../src/openapi/components/index.ts',
  nun.render('componentIndex.ts.njk', { componentNameList })
)

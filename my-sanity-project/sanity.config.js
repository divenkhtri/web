import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'My Sanity Project',

  projectId: 'fgkwdaus',
  dataset: 'production',

  plugins: [deskTool(), vercelDeployTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

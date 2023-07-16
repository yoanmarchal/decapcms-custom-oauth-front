export default defineAppConfig({
  alpine: {
    title: '',
    description: '',
    image: {
      src: '/social-card-preview.png',
      alt: '',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo.svg', // path of the logo
        pathDark: '/logo-dark.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: '' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: false, // possible value are : true | false
        repository: '' // our github repository
      },
      navigation: false, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: '' // string that will be displayed in the footer (leave empty or delete to disable)
    },
  }
})

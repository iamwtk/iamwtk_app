import { get } from 'axios'

import Layout from '../components/Layout'
import Head from '../components/Head'
import Work from '../components/Work'


const work = ({ workData = [], error = null }) => (
  <>
  <Head title={'work | iamwtk - full-stack JavaScript developer'}/>
  <Layout>
    <Work workData={workData} error={error}/>    
  </Layout>
  </>
)

work.getInitialProps = async () => {
  try {
    const response = await get('http://www.mocky.io/v2/5c01b6fe3500006d00ad0a7b')
    if (response && response.data)
      return {
        workData: response.data.work
      }
    return {}
      } catch (error) {
    return { error }
  }  
}

export default work

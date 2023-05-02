import Head from 'next/head'

const index = () => {
  return (
    <>
    <Head>
      {/* <title>About Codevolution</title> */}
      <meta name='description' content='Free tutorials on web development' />
    </Head>
    <h1 className=' text-center text-[blue]'>Hello</h1>
    </>
  )
}

export default index

index.getLayout = page => (
  <>
    {page}
  </>
)
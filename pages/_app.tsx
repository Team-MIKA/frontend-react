import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../components/layouts/theme'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from "next/app";

type website = {

}


function Website ({Component, router, pageProps} : AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
              {/* How next js renders our pages */}
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
  )
}

export default Website

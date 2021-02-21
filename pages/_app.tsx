import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { wrapper } from '../redux';
import '../styles/globals.css'

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  )
}
export default wrapper.withRedux(WrappedApp)

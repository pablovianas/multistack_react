import React from "react";
import Document, {
    Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps
} from "next/document";
import {ServerStyleSheets} from '@material-ui/styles'

export default class MyDocument extends Document{

    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps>{
        const sheets = new ServerStyleSheets(),
            originalRenderPage = context.renderPage
        
        context.renderPage = () => originalRenderPage({
            enhanceApp: (App) => {
                return (props) => {
                    return sheets.collect(<App {...props} />)
                }
            }
        })

        const initialProps =  await Document.getInitialProps(context)
            
        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement()
            ]
        }
    }

    render(): JSX.Element {
        return(
            <Html lang="pt-BR">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sora:wght@300;400;500&display=swap" rel="stylesheet"></link>
                    <link rel="stylesheet" href="/fonts/tw-icons/css/treinaweb-icons.css" />
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}


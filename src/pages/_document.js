import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="keywords" content="icode, icode竞赛，icode比赛，icode国际青少年编程竞赛,icode编程" />
                    <meta name="description" content="icode, icode竞赛，icode比赛，icode国际青少年编程竞赛,icode编程" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
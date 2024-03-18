import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "Tianyi Gu";
    const description = "Student. Researcher. Design.";
    const keywords = "tianyi, gu, computer science, andover";
    const author = "Tianyi Gu";
    // const twitter = "@handle here";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Tianyi Gu" />
            <meta property="og:url" content="bookworm.design" /> {/* This is where you put the domain */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Tianyi's personal website"/>
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            {/* <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} /> */}
            {children}
        </Head>
    )
}
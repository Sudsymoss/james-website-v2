export default function Head({params}) {
    return (
      <>
        <title>P: {params.id}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="BOOO 👻" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, max-snippet:0, noarchive, notranslate, noimageindex, unavailable_after: 2024-01-01"></meta>
      </>
    );
  }
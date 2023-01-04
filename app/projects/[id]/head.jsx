export default function Head({params}) {
    return (
      <>
        <title>P: {params.id}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="James Mowat, Javascript devloper" />
        <link rel="icon" href="/favicon.ico" />
      </>
    );
  }
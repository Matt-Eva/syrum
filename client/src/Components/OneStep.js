

const OneStep = ( { step } ) => {
    const { instructions, number, product } = step

    return (
        <>
            <h1>Step Number: {number}</h1>
            <h2>Instructions: {instructions}</h2>
            <h2>Product: {product.name}</h2>
        </>
    )
}

export default OneStep
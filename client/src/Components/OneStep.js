

const OneStep = ( { step } ) => {
    const { instructions, number, product_id } = step

    return (
        <>
            <h1>Step Number: {number}</h1>
            <h2>Instructions: {instructions}</h2>
            <h2>Product: {product_id}</h2>
        </>
    )
}

export default OneStep
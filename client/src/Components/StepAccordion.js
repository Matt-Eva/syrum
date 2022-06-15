const StepAccordion = ( { step } ) => {

    const { number, instructions, product } = step

    return (
        <div>
            {number}
            {instructions}
            {product.name}
        </div>
    )
}

export default StepAccordion
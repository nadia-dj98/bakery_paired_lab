const RecipeList = ({cakes}) => {
    
    // const cakes =  [{
    //             cakeName: "Lemon Drizzle",
    //             ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
    //             rating: 5
    //         },
    //         {
    //             cakeName: "Tea Loaf",
    //             ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
    //             rating: 3
    //         }]

    return (
        <>
            <section>
                {
                    cakes.map((cake, index) => {
                        return(
                            <div key={index}>
                                <h3>{cake.cakeName}</h3>
                                <ul>
                                    {cake.ingredients.map((ingredient, index) => {
                                        return(
                                            <li key={index}>{ingredient}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </section>
            <section>
                <h4>Average cake rating: </h4>
                <p>{(cakes.reduce((total, cake) => total + cake.rating, 0) / cakes.length)}</p>
            </section>
        </>
    )

}

export default RecipeList;
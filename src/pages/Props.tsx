import {Child, Child2, Child3, Child4, Child5} from "../components/Children";
import {useState} from "react";
import {Product} from "../types/Product";

function Props() {
    const [product, setProduct] = useState({
        name: 'Risotto aux Poireaux',
        description: 'Avec du parmesan',
        price: 16
    });

    const product2 = {
        name: 'Risotto aux Crevettes',
        description: 'Avec du parmesan',
        price: 18
    }

    const all_products: Product[] = [
        {name: 'Welsh', description: 'description', price: 13},
        {name: 'Bagel Saumon', description: 'description', price: 13},
        {name: 'Falafels', description: 'description', price: 13},
        {name: 'Toasts & Houmous', description: 'description', price: 13},
    ];

     const [panier, setPanier] = useState<Product[]>([]);

     function addToBasket(produit: Product) {
         setPanier([...panier, produit]);
     }


    return (
        <main>
            <h1>Les Props</h1>

            <section>
                <h2>Children</h2>

                {/* Mauvaise syntaxe */}
                {Child('Patate')}

                <Child2 name='Choucroute'/>
                <Child3 name='Cassoulet'
                        description='RPZ le Sud Ouest !'
                        price={13}
                />
                <Child3 name='Paella'
                        description='RPZ Espa~na !'
                        price={13}
                        sale={10}
                />
                <Child3 name={product.name} description={product.description} price={product.price}/>
                <Child3 {...product2}/>
                {Child3({...product2}) /* Moche */}

                <Child4 {...product2}/>

                <h2>Liste : </h2>
                <p>Vous avez {panier.length} produit(s) dans votre panier.</p>
                {all_products.map((prod, index) =>
                    <Child5
                        product={prod}
                        index={index}
                        key={prod.name}
                        action={addToBasket}
                        btn_text='Add to Basket'
                    />
                )}

            </section>

        </main>
    )
}
export default Props;

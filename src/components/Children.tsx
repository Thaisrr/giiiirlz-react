import {Product} from "../types/Product";
import {MouseEventHandler} from "react";

export function Child(name: string) {
// Exemple à ne pas utiliser
    return (
        <div>
            <h3>{name}</h3>
        </div>
    )
}


export function Child2(props : {name: string}) {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}

type Child3Props = {name: string, description: string, price: number, sale?: number};
export function Child3({name, description, price, sale} : Child3Props) {
    //const {name, description} = props;
   // const name = props.name;
   // const description = props.description;
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            {sale? (
                <p><s>{price}€</s>  {sale}€</p>
            ): <p>{price}€</p>
            }

        </div>
    )
}

export function Child4({name, description, sale, price}: Product) {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            {sale? (
                <p><s>{price}€</s>  {sale}€</p>
            ): <p>{price}€</p>
            }
        </div>
    )
}

type Props5 = {
    product: Product,
    index: number,
    //action: Function,
    action: (product: Product) => void,
    btn_text: string
}

export function Child5({product, index, btn_text, action}: Props5) {
    const {name, description, sale, price} = product;
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            {sale? (
                <p><s>{price}€</s>  {sale}€</p>
            ): <p>{price}€</p>
            }
            <button onClick={() => action(product)}>{btn_text}</button>
        </div>
    )
}


export function MyButton({children, click}: {children: string, click: MouseEventHandler}) {
    return (
        <button onClick={click}>
            <span>{children}</span>
        </button>
    )
}

export function Grid({children}: {children: JSX.Element[]}) {
    return (
        <div className='grid'>
            {children}
        </div>
    )
}

export function Dialog({children}: {children: JSX.Element | JSX.Element[]}) {
    return (
        <dialog>
            {children}
        </dialog>
    )
}


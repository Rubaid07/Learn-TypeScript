type product = {
    id: number;
    name: string;
    price: string;
    stock: number;
    color?: string;
}

type productSummary = Pick<product, 'id' | 'name' | 'price'>;

type ProductWithoutStock = Omit<product, 'stock' | 'color'>;

type ProductWithColor = Required<product>;

const product: ProductWithColor = {
    id: 222,
    name: "Laptop",
    price: "1500",
    stock: 50,
    color: "Silver"
};

type OptoinalProduct = Partial<product>;

type ReadonlyProduct = Readonly<product>; 

const emptyObj: Record<string, unknown>={}
const product1 = {
    id: 222,
    name: "Desktop",
    price: "1500"
};
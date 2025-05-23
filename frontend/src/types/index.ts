export type ProductStatus = 'IN_STOCK' | 'OUT_OF_STOCK' | 'DELETED';
export type CommandStatus = 'IN_STOCK' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED';

export interface Client {
    id: number;
    firstName: string;
    secondName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    address: string;
    phoneNumber: string;
    commands?: Command[];
}

export interface Product {
    id: number;
    nameOfProduct: string;
    priceOfProduct: number;
    descriptionOfProduct: string;
    quantity: number;
    imageUrl?: string;
    status: ProductStatus;
}

export interface Cart {
    id: number;
    clientId: number;
    items: CartItem[];
    totalItems: number;
    totalAmount: number;
}

export interface CartItem {
    id: number;
    productId: number;
    productName: string;
    productPrice: number;
    quantity: number;
    totalPrice: number;
}

export interface Command {
    id: number;
    clientId: number;
    dateCreation: Date;
    status: CommandStatus;
    items: CommandItem[];
    totalAmount: number;
    totalItems: number;
}

export interface CommandItem {
    id: number;
    productId: number;
    productName: string;
    productPrice: number;
    quantity: number;
    totalPrice: number;
} 
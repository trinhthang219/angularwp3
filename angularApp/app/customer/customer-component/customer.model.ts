export class product {
    'ProductID': number;
    'ProductName': string;
    'SupplierID': number;
    'CategoryID': number;
    'QuantityPerUnit': number;
    'UnitPrice': number;
    'UnitsInStock': number;
    'UnitsOnOrder': number;
    'ReorderLevel': number;
    'Discontinued': number;
    'Category': {
        'CategoryID': number;
        'CategoryName': string;
        'Description': string
    }

};

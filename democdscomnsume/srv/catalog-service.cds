using { northwinds as external } from './external/northwinds';

service CatalogService {

    @readonly
    entity Products as projection on external.Products {
        key ID, Name, Description, ReleaseDate, DiscontinuedDate, Rating, Price
    };

    entity emp as projection on external.Employee{
        Name,PersonDetail,Salary
    };

}

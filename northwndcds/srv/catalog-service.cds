using { northwind as external } from './external/northwind';

service CatalogService {
  @readonly
  entity Product as projection on external.Products {
    key ID,
    Name,
    Description,
    ReleaseDate,
    DiscontinuedDate,
    Rating,
    Price
  };

  @readonly
  entity emp as projection on external.Employee{
    EmployeeID,HireDate,Name,Salary
  };
}

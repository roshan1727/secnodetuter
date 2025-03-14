using { businesspartner as external } from './external/businesspartner';

service CatalogService {
    @readonly
    @cds.persistence.exists 
    entity Address as projection on external.A_AddressEmailAddress {
        AddressID, EmailAddress, Person, OrdinalNumber
    };

    entity Businesspartner as projection on external.A_BusinessPartner {
        BirthDate, BusinessPartnerBirthDateStatus
    };
}

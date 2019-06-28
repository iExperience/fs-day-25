import {get, HttpErrors} from '@loopback/rest';

import {RestClient} from 'typed-rest-client/RestClient';

class Property {
    id: number;
    name: string;
}

class AdvancedProperty {
    id: number;
    name: string;
    description: string;
}

export class AdvancedPropertyController {
  @get('/advanced-properties')
  async getProperties(): Promise<Array<AdvancedProperty>> {

    const restClient = new RestClient("qwerty", "http://localhost:3001");

    const response = await restClient.get<Array<Property>>("/properties");

    if (response.statusCode !== 200) {
        throw new HttpErrors.BadRequest();
    }

    let advancedProperties: Array<AdvancedProperty> = [];
    const properties = response.result || [];

    properties.forEach(property => {
        advancedProperties.push({
            id: property.id,
            name: property.name,
            description: "New description"
        });
    });

    return advancedProperties;
  }
}
